// Buttons Collection Wrappers
const textStyleBntsWrapper = document.createElement('div'),
      textPositionBtnsWrapper = document.createElement('div')


// Buttons Collection Wrappers Styles
textStyleBntsWrapper.className = 'buttons-collection-wrappers-styles ml-2'
textPositionBtnsWrapper.className = 'buttons-collection-wrappers-styles ml-2'


// Text Style Buttons
const boldStyleBtn = document.createElement('input'),
      italicStyleBtn = document.createElement('input'),
      underlineStyleBtn = document.createElement('input')


// Text Position buttons
const textAlignLeftBtn = document.createElement('input'),
      textAlignCenterBtn = document.createElement('input'),
      textAlignRightBtn = document.createElement('input')


// Other Buttons
const addHryvniaSymbolBtn = document.createElement('input')

//Oter Buttons Styles
addHryvniaSymbolBtn.type = 'button'
addHryvniaSymbolBtn.id = 'addHrivnaSymbolBtn'
addHryvniaSymbolBtn.value = '₴'
addHryvniaSymbolBtn.classList.add('buttons-style-styles')


// Buttons styles
// Text Style Buttons
boldStyleBtn.type = 'button'
boldStyleBtn.id = 'boldStyleBtn'
boldStyleBtn.value = 'B'
boldStyleBtn.classList.add('buttons-style-styles')

italicStyleBtn.type = 'button'
italicStyleBtn.id = 'italicStyleBtn'
italicStyleBtn.value = 'I'
italicStyleBtn.classList.add('buttons-style-styles')

underlineStyleBtn.type = 'button'
underlineStyleBtn.id = 'underlineStyleBtn'
underlineStyleBtn.value = 'U'
underlineStyleBtn.style.fontStyle = 'underline'
underlineStyleBtn.classList.add('buttons-style-styles')


// Buttons hierarhy
// textEditorPanel.
textStylePanel.appendChild(textStyleBntsWrapper)
textStyleBntsWrapper.appendChild(boldStyleBtn)
textStyleBntsWrapper.appendChild(italicStyleBtn)
textStyleBntsWrapper.appendChild(underlineStyleBtn)
textStyleBntsWrapper.appendChild(addHryvniaSymbolBtn)
