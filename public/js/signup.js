const signUpFormHandeler = async(event)=>{
    event.preventDefault();

    const firstName = document.querySelector('#signup-firstName').value.trim()
    const lastName = document.querySelector('#signup-lastName').value.trim()
    const city = document.querySelector('#signup-city').value.trim()
    const email = document.querySelector('#signup-email').value.trim()
    const password = document.querySelector('#signup-password').value.trim()

    const response = await fetch('/api/users/signup',{
        method: 'POST',
        body:JSON.stringify({
            firstName,
            lastName,
            city,
            email,
            password
        }), 
        headers:{'Content-Type':'application/json'}
    })
    if (response.ok){
        document.location.replace('/')
    } else {
        alert('failed to login')
    }

    document.querySelector('.signupbtn')
    .addEventListener('submit',signUpFormHandeler)
    
}