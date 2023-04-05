const SUstatus = document.querySelector('#signup-status')

const notBlank = (userName, email, password, password2) => {
  return userName !== "" && email !== "" && password !== "" && password2 !== ""
}
const validUN = (UN) => {
  return /^[a-zA-Z0-9]{4,}$/.test(UN);
};

const validEM = (EM) => {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(EM);
};

const validPW = (PW) => {
  return /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,64})/.test(PW);
};

const alreadyExists = async (email) => {
  const userData = await User.findOne({ where: {email: email }})
  if(userData){
    return false
  } else{
    return true
  }
}
const signUp = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#userName").value.trim().toLowerCase();
  const email = document.querySelector("#suEmail").value.trim();
  const password = document.querySelector("#suPassword").value.trim();
  const password2 = document.querySelector("#suPassword2").value.trim();

  switch (false) {
    case notBlank(userName, email, password, password2):
      SUstatus.textContent = "No input fields may be empty"
      break;
    case password === password2:
      console.log("Passwords Don't match");
      SUstatus.textContent = "Passwords Don't match"
      break;
    case validPW(password):
      console.log("Invalid Password");
      SUstatus.textContent = 'Invalid Password'
      break;
    case validEM(email):
      console.log("Invalid Email Address");
      SUstatus.textContent = 'Invalid Email Address'
      break;
    case validUN(userName):
      console.log("Username must be at least 4 characters long and alphanumeric");
      SUstatus.textContent = 'Username must be at least 4 characters long and alphanumeric'
      break;
    default:
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ userName, email, password }),
        headers: { "Content-Type": "application/json" },
      })
      console.log(response) 
        if(response.ok){
        document.location.replace('/')
      } else{
        const inUse = alreadyExists(email)
        if(inUse === true){
          SUstatus.textContent = 'Something went wrong while signing up'
        } else{
          SUstatus.textContent = 'Email already in use'
        }
      }
  }
};
document.querySelector(".signup-form").addEventListener("submit", signUp);
