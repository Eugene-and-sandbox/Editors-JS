const boldTextBtn = document.querySelector('#boldTextBtn').onclick = function() {
  textShowingBlock.classList.toggle('text-bold')
},
      italicTextBtn = document.querySelector('#italicTextBtn').onclick = function() {
        textShowingBlock.classList.toggle('text-italic')
      },
      underlineTextBtn = document.querySelector('#underlineTextBtn').onclick = function() {
        textShowingBlock.classList.toggle('text-underline')
      },
      strikethroughTextBtn = document.querySelector('#strikethroughTextBtn').onclick = function() {
        textShowingBlock.classList.toggle('text-strikethrought')
      },
      textLeftBtn = document.querySelector('#textLeftBtn').onclick = function() {
        textShowingBlock.style.textAlign = 'left';
        textShowingBlock.style.transition = '.5s';
      },
      textCenterBtn = document.querySelector('#textCenterBtn').onclick = function() {
        textShowingBlock.style.textAlign = 'center';
        textShowingBlock.style.transition = '.5s';
      },
      textRightBtn = document.querySelector('#textRightBtn').onclick = function() {
        textShowingBlock.style.textAlign = 'right';
        textShowingBlock.style.transition = '.5s';
      }


function onfontSizeItemClick(event) {
  textShowingBlock.style.fontSize = event.target.value
}


function onfontFamilyItemClick(event) {
  textShowingBlock.style.fontFamily = event.target.value
}
