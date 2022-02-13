const boldTextBtn = document.querySelector('#boldTextBtn'),
      italicTextBtn = document.querySelector('#italicTextBtn'),
      underlineTextBtn = document.querySelector('#underlineTextBtn'),
      strikethroughTextBtn = document.querySelector('#strikethroughTextBtn'),
      textLeftBtn = document.querySelector('#textLeftBtn'),
      textCenterBtn = document.querySelector('#textCenterBtn'),
      textRightBtn = document.querySelector('#textRightBtn')


function boldTextFunction() {
  textShowingBlock.style.fontWeight = 'bold';
}


function italicTextFunction() {
  textShowingBlock.style.fontStyle = 'italic';
}


function underlineTextFunction() {
  textShowingBlock.style.textDecoration = 'underline';
}


function strikethroughTextFunction() {
  textShowingBlock.style.textDecoration = 'line-through';
}


function textLefFunction() {
  textShowingBlock.style.textAlign = 'left';
  textShowingBlock.style.transition = '.5s';
}


function textCenterFunction() {
  textShowingBlock.style.textAlign = 'center';
  textShowingBlock.style.transition = '.5s';
}


function textRightFunction() {
  textShowingBlock.style.textAlign = 'right';
  textShowingBlock.style.transition = '.5s';
}


boldTextBtn.addEventListener('click', boldTextFunction)
italicTextBtn.addEventListener('click', italicTextFunction)
underlineTextBtn.addEventListener('click', underlineTextFunction)
strikethroughTextBtn.addEventListener('click', strikethroughTextFunction)
textLeftBtn.addEventListener('click', textLefFunction)
textCenterBtn.addEventListener('click', textCenterFunction)
textRightBtn.addEventListener('click', textRightFunction)
