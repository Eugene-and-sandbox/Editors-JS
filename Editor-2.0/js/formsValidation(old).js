let userName = document.querySelector('#userName'),
      userPassword = document.querySelector('#userPassword')

let userNameReg = /^/;

const loginBtn = document.querySelector('#loginBtn').onclick = function(e) {
  e.preventDefault();
  const emailHelp = document.querySelector("#emailHelp"),
        emailError = document.querySelector("#emailHelp")

  if(!reg.test(userName.value)) {
    console.log('not cool!')
    userName.style.border = '.1rem solid red'
    emailHelp.style.display = 'none'
    emailError.style.display = 'block'
    emailError.style.color = 'red'

  } else console.log('cool!')
}
