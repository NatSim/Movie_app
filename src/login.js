
//Login Section
//USER Database required for submition* i.e GET request



 //Authentication login requirements

 const username      = document.getElementById("username");
 const password      = document.getElementById("password");
 const form          = document.getElementById("form");
 const errorElement  = document.getElementById("error");


 form.addEventListener("submit", (e) => {
     let messages = []
     if (username.value === "" || username.value === null) {
       messages.push("Name is required") 
 } 
    if (password.value === "" ) {
        messages.push("Password is required")
    }

     if (messages.length > 0) {
     e.preventDefault()
     errorElement.innerHTML = messages.join(',')
}
 })







