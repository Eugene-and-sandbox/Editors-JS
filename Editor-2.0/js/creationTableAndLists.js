// Create table
const tableCreationForm = document.querySelector('#tableCreationForm'),
      olCreationForm = document.querySelector('#olCreationForm'),
      ulCreationForm = document.querySelector('#ulCreationForm')


const resetTableCreationFormBtn = document.querySelector('#resetTableCreationFormBtn'),
      creteTableBtn = document.querySelector('#creteTableBtn'),
      closeTableModal = document.querySelector('#closeTableModal')


function createTableFunction() {
  closeTableModal.classList.add('close')
  closeTableModal.dataset.dismiss = 'modal'
  textShowingBlock.style.display = 'block'
  textStylePanel.style.display = 'block'
  textEditorBlock.style.display = 'none'
  textEditorPanel.style.display = 'none'
}


creteTableBtn.addEventListener('click', createTableFunction)


// Create Ol
const resetOlCreationFormBtn = document.querySelector('#resetOlCreationFormBtn'),
      creteOlBtn = document.querySelector('#creteOlBtn')


const listLiCount = document.querySelector('#listLiCount').value,
      modalContent = document.querySelector('.modal-content'),
      closeModalOl = document.querySelector('#closeModalOl')

const olWrapper = document.createElement('ol'),
      liItem = document.createElement('li')


function onClickByTypeOfMark(event) {
  textShowingBlock.appendChild(olWrapper)
  liItem.innerText = 'Lorem, example text for list'
  liItem.style.listStyleType = event.target.value
  for(let i = 0; i < listLiCount.length; i++) {
    console.log(olWrapper.appendChild(liItem))
  }
}


function listOlCreatingFunction() {
  const styleTypeOfMarksListDropdown = document.querySelector('#styleTypeOfMarksListDropdown')

  closeModalOl.classList.add('close')
  closeModalOl.dataset.dismiss = 'modal'
  textShowingBlock.style.display = 'block'
  textStylePanel.style.display = 'block'
  textEditorBlock.style.display = 'none'
  textEditorPanel.style.display = 'none'

  styleTypeOfMarksListDropdown.addEventListener('change', onClickByOlTypeOfMark)
}

creteOlBtn.addEventListener('click', listOlCreatingFunction)


// Create Ul
const resetUlCreationFormBtn = document.querySelector('#resetOlCreationFormBtn'),
      createUlBtn = document.querySelector('#createUlBtn'),
      closeModalUl = document.querySelector('#closeModalUl')

const ulWrapper = document.createElement('ul'),
      ulLiItem = document.createElement('li')

function onClickByUlTypeOfMark(event) {

}

function listUlCreatingFunction(event) {
  const styleTypeOfUlMarksListDropdown = document.querySelector('#styleTypeOfUlMarksListDropdown')

  closeModalUl.classList.add('close')
  closeModalUl.dataset.dismiss = 'modal'
  textShowingBlock.style.display = 'block'
  textStylePanel.style.display = 'block'
  textEditorBlock.style.display = 'none'
  textEditorPanel.style.display = 'none'

  textShowingBlock.appendChild(ulWrapper)
  for(let i = 0; i < document.querySelector('#countOfLiItems').value.length; i++) {
    ulLiItem.innerText = 'Lorem, example text for list'
    ulLiItem.style.listStyleType = event.target.value
  }
  ulWrapper.appendChild(ulLiItem)

  styleTypeOfUlMarksListDropdown.addEventListener('change', onClickByUlTypeOfMark)
}

createUlBtn.addEventListener('click', listUlCreatingFunction)


function listUlCreatingResetFunction() {

}

resetUlCreationFormBtn.addEventListener('click', listUlCreatingResetFunction)
