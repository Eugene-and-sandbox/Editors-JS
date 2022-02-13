const fontFamilyGroup = document.querySelector('#fontFamilyGroup'),
      fontSizeGroup = document.querySelector('#fontSizeGroup'),
      fontFamilyItemsGroup = [
  'Arial', 'Geirgia', 'Impact', 'Tahoma',
  'Times New Roman', 'Verdana'
],
      fontSizeItemsGroup = [
        '12px', '14px', '16px', '18px',
        '20px', '22px', '25px', '30px'
      ]


// Font Family Items Dropdown
function fontFamilyViewerFunction(fontFamily) {
  const fontFamilyItemBtn = document.createElement('a')

  fontFamilyItemBtn.classList.add('dropdown-item')
  fontFamilyItemBtn.innerText = fontFamily
  switch(fontFamily){
    case('Arial'):
      fontFamilyItemBtn.style.fontFamily = 'Arial'
      break
    case('Geirgia'):
      fontFamilyItemBtn.style.fontFamily = 'Geirgia'
      break
    case('Impact'):
      fontFamilyItemBtn.style.fontFamily = 'Impact'
      break
    case('Tahoma'):
      fontFamilyItemBtn.style.fontFamily = 'Tahoma'
      break
    case('Times New Roman'):
      fontFamilyItemBtn.style.fontFamily = 'Times New Roman'
      break
    case('Verdana'):
      fontFamilyItemBtn.style.fontFamily = 'Verdana'
      break
  }
  fontFamilyItemBtn.setAttribute('fontFamilyAttributeValue', fontFamily)


  return fontFamilyItemBtn
}

fontFamilyItemsGroup.forEach(fontFamily => {
  fontFamilyGroup.appendChild(fontFamilyViewerFunction(fontFamily))
})


// Font Size Items Dropdown
function fontSizeItemsViewrFunction(fontSize) {
  const fontSizeItemBtn = document.createElement('a')

  fontSizeItemBtn.classList.add('dropdown-item')
  fontSizeItemBtn.innerText = fontSize
  switch(fontSize){
    case('12px'):
      fontSizeItemBtn.style.fontSize = '12px'
      break
    case('14px'):
      fontSizeItemBtn.style.fontSize = '14px'
      break
    case('16px'):
      fontSizeItemBtn.style.fontSize = '16px'
      break
    case('18px'):
      fontSizeItemBtn.style.fontSize = '18px'
      break
    case('20px'):
      fontSizeItemBtn.style.fontSize = '20px'
      break
    case('22px'):
      fontSizeItemBtn.style.fontSize = '22px'
      break
    case('25px'):
      fontSizeItemBtn.style.fontSize = '25px'
      break
    case('30px'):
      fontSizeItemBtn.style.fontSize = '30px'
      break
  }
  fontSizeItemBtn.setAttribute('fontFamilyAttributeValue', fontSize)


  return fontSizeItemBtn
}

fontSizeItemsGroup.forEach(fontSize => {
  fontSizeGroup.appendChild(fontSizeItemsViewrFunction(fontSize))
})
