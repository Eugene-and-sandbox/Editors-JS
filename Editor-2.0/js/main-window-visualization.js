const textShowingBlock = document.querySelector('#textShowingBlock'),
      textEditorBlock = document.querySelector('#textEditorBlock'),
      textStylePanel = document.querySelector('#textStylePanel'),
      textEditorPanel = document.querySelector('#textEditorPanel')

const showTextEditorPanelBtn = document.createElement('input'),
      saveTextChangesBtn = document.createElement('input')

showTextEditorPanelBtn.type = 'button'
showTextEditorPanelBtn.id = 'showTextEditorPanelBtn'
showTextEditorPanelBtn.value = '</>'
textStylePanel.appendChild(showTextEditorPanelBtn)

saveTextChangesBtn.type = 'image'
saveTextChangesBtn.id = 'saveTextChangesBtn'
saveTextChangesBtn.src = 'https://cdn1.iconfinder.com/data/icons/computer-hardware-and-accessories-glyph-style/320/disket-512.png'
saveTextChangesBtn.style.width = '2.5rem'
textEditorPanel.appendChild(saveTextChangesBtn)


function ShowTextBlock() {
  textShowingBlock.style.display = 'block'
  textStylePanel.style.display = 'block'
  textEditorBlock.style.display = 'none'
  textEditorPanel.style.display = 'none'

  textEditorBlock.innerText = textShowingBlock.innerHTML
}
ShowTextBlock()


function ShowEditorBlock() {
  textShowingBlock.style.display = 'none'
  textStylePanel.style.display = 'none'
  textEditorBlock.style.display = 'block'
  textEditorPanel.style.display = 'block'

  saveTextChangesFunction()
}


showTextEditorPanelBtn.addEventListener('click', ShowEditorBlock)


function saveTextChangesFunction() {
  textShowingBlock.innerHTML = textEditorBlock.innerText
}


saveTextChangesBtn.addEventListener('click', ShowTextBlock)
