export default function(div) {
  const element = document.querySelector(div)
  const resizers = document.querySelectorAll(div + ' .resizer')
  const minimumSize = 30
  let originalWidth = 0
  let originalHeight = 0
  let originalX = 0
  let originalY = 0
  let originalMouseX = 0
  let originalMouseY = 0
  for (let i = 0; i < resizers.length; i++) {
    const currentResizer = resizers[i]

    currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault()
      originalWidth = parseFloat(
        getComputedStyle(element, null)
          .getPropertyValue('width')
          .replace('px', '')
      )
      originalHeight = parseFloat(
        getComputedStyle(element, null)
          .getPropertyValue('height')
          .replace('px', '')
      )
      originalX = element.getBoundingClientRect().left
      originalY = element.getBoundingClientRect().top
      originalMouseX = e.pageX
      originalMouseY = e.pageY
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })

    currentResizer.addEventListener('touchstart', function(e) {
      e.preventDefault()
      originalWidth = parseFloat(
        getComputedStyle(element, null)
          .getPropertyValue('width')
          .replace('px', '')
      )
      originalHeight = parseFloat(
        getComputedStyle(element, null)
          .getPropertyValue('height')
          .replace('px', '')
      )
      originalX = element.getBoundingClientRect().left
      originalY = element.getBoundingClientRect().top
      originalMouseX = e.pageX
      originalMouseY = e.pageY
      window.addEventListener('touchmove', resize)
      window.addEventListener('touchend', stopResize)
    })

    const resize = (e) => {
      // リサイズここから---------------------------------------------------------------------------
      const bodyWidth = document.body.clientWidth
      const leftSideDivWidth = document.querySelector('#left-side-div').clientWidth
      const rightSideDivWidth = document.querySelector('#right-side-div').clientWidth
      if (currentResizer.classList.contains('top')) {
        const height = originalHeight - (e.pageY - originalMouseY)
        if (height > minimumSize) {
          element.style.height = height + 'px'
          // element.style.top = originalY + (e.pageY - originalMouseY) + 'px'
        }
      } else if (currentResizer.classList.contains('left')) {
        const width = originalWidth + (-e.pageX + originalMouseX)
        if (width <= bodyWidth - leftSideDivWidth) {
          if (width > minimumSize) {
            element.style.width = width + 'px'
          }
        }
      } else if (currentResizer.classList.contains('right')) {
        const width = originalWidth + (e.pageX - originalMouseX)
        if (width <= bodyWidth - rightSideDivWidth) {
          if (width > minimumSize) {
            element.style.width = width + 'px'
          }
        }
      } else if (currentResizer.classList.contains('bottom-right')) {
        const width = originalWidth + (e.pageX - originalMouseX)
        const height = originalHeight + (e.pageY - originalMouseY)
        if (width > minimumSize) {
          element.style.width = width + 'px'
        }
        if (height > minimumSize) {
          element.style.height = height + 'px'
        }
      } else if (currentResizer.classList.contains('bottom-left')) {
        const height = originalHeight + (e.pageY - originalMouseY)
        const width = originalWidth - (e.pageX - originalMouseX)
        if (height > minimumSize) {
          element.style.height = height + 'px'
        }
        if (width > minimumSize) {
          element.style.width = width + 'px'
          element.style.left = originalX + (e.pageX - originalMouseX) + 'px'
        }
      } else if (currentResizer.classList.contains('top-right')) {
        const width = originalWidth + (e.pageX - originalMouseX)
        const height = originalHeight - (e.pageY - originalMouseY)
        if (width > minimumSize) {
          element.style.width = width + 'px'
        }
        if (height > minimumSize) {
          element.style.height = height + 'px'
          element.style.top = originalY + (e.pageY - originalMouseY) + 'px'
        }
      } else {
        const width = originalWidth - (e.pageX - originalMouseX)
        const height = originalHeight - (e.pageY - originalMouseY)
        if (width > minimumSize) {
          element.style.width = width + 'px'
          element.style.left = originalX + (e.pageX - originalMouseX) + 'px'
        }
        if (height > minimumSize) {
          element.style.height = height + 'px'
          element.style.top = originalY + (e.pageY - originalMouseY) + 'px'
        }
      }
      // リサイズここまで--------------------------------------------------------------------------
      // ここから連動して他のDIVをリサイズする---------------------------------------------------
      const bodyHeight = document.body.clientHeight
      const headerHeight = document.querySelector('#header-menu').clientHeight
      const footerHeight = document.querySelector('#footer').clientHeight
      const resizersLeft = document.querySelector('.resizers .resizer.left')
      const resizersRight = document.querySelector('.resizers .resizer.right')
      const treeDivs = document.querySelectorAll('.tree-div')
      const vTreeLefts = document.querySelectorAll('#left-side-div' + ' .v-tree')
      const vTreeRights = document.querySelectorAll('#right-side-div' + ' .v-tree')
      // const contents = document.querySelector('#contents')
      // 左右サイドのツリーの高さ設定---------------------------------------------------------
      treeDivs.forEach((value) => {
        if (value.style) value.style.height = bodyHeight - footerHeight - 150 + 'px'
      })
      // if (!ie) {
      //   treeDivs.forEach((value) => {
      //     if (value.style)
      //       value.style.height = bodyHeight - footerHeight - 120 + 'px'
      //   })
      // } else {
      //   // IE11対策。上はモダンブラウザだと問題ないがIE11だとこける。
      //   treeDivs[0].style.height = bodyHeight - footerHeight - 120 + 'px'
      //   treeDivs[1].style.height = bodyHeight - footerHeight - 120 + 'px'
      // }
      resizersLeft.style.height = bodyHeight - footerHeight - headerHeight + 'px'
      resizersRight.style.height = bodyHeight - footerHeight - headerHeight + 'px'
      // contents.style.height = bodyHeight - footerHeight - headerHeight + 'px'
      // フッターの高さ設定
      document.querySelector('#footer-inner-left').style.height = footerHeight - 40 + 'px'
      document.querySelector('#footer-inner-right').style.height = footerHeight - 40 + 'px'
      // 幅設定。左右サイドのリサイズ---------------------------------------------------------
      vTreeLefts[0].style.width = leftSideDivWidth - 30 + 'px'
      vTreeRights[0].style.width = rightSideDivWidth - 30 + 'px'
      // contents.style.left = leftSideDivWidth + 'px'
      // if (this.rightSideDivShow) {
      //   contents.style.width =
      //     bodyWidth - leftSideDivWidth - rightSideDivWidth + 'px'
      // } else {
      //   contents.style.width = bodyWidth - leftSideDivWidth + 'px'
      // }
      // グラフの幅、高さ設定-----------------------------------------------------------------
      // const statType = this.$store.state.base.statType
      // if (statType === 'time') {
      //   document.querySelector('#left-time').style.width =
      //     bodyWidth - leftSideDivWidth - 20 + 'px'
      //   document.querySelector('#left-time').style.height =
      //     bodyHeight - footerHeight - 120 + 'px'
      // }
      // if (statType === 'timePref') {
      //   document.querySelector('#left-timePref').style.width =
      //     bodyWidth - leftSideDivWidth - 20 + 'px'
      //   document.querySelector('#left-timePref').style.height =
      //     bodyHeight - footerHeight - 90 + 'px'
      // }
      // if (statType === 'timeCity') {
      //   document.querySelector('#left-timeCity').style.width =
      //     bodyWidth - leftSideDivWidth - 20 + 'px'
      //   document.querySelector('#left-timeCity').style.height =
      //     bodyHeight - footerHeight - 90 + 'px'
      // }
      // if (statType === 'scatterPref') {
      //   document.querySelector('#left-scatterPref').style.width =
      //     bodyWidth - leftSideDivWidth - rightSideDivWidth - 20 + 'px'
      //   document.querySelector('#left-scatterPref').style.height =
      //     bodyHeight - footerHeight - 200 + 'px'
      // }
      // if (statType === 'scatterMiyazaki') {
      //   document.querySelector('#left-scatterMiyazaki').style.width =
      //     bodyWidth - leftSideDivWidth - rightSideDivWidth - 20 + 'px'
      //   document.querySelector('#left-scatterMiyazaki').style.height =
      //     bodyHeight - footerHeight - 200 + 'px'
      // }
    }
    const stopResize = () => {
      window.removeEventListener('mousemove', resize)
    }
  }
}
