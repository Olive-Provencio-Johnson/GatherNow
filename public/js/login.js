logInStatus = document.querySelector('#login-status')

const Submission = async (event) => {
    event.preventDefault()

    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()

    if (email && password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type' : 'application/json'}
        })

        if(response.ok){
            document.location.replace('/')
        }else {
            logInStatus.textContent = 'Invalid Credentials'
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', Submission)

document.querySelector('.SUToggle').addEventListener("click", ()=> {
    document.querySelector('.signUpContainer').classList.remove('d-none')
    document.querySelector('.logInContainer').classList.add('d-none')
    logInStatus.textContent = ''
  })