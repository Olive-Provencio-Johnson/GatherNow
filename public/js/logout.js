const signOut = async() => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })

    if(response.ok){
        document.location.replace('/login')
    } else{
        alert('Log Out Unsuccessful')
    }
}

document.querySelector('#logout').addEventListener('click', signOut)