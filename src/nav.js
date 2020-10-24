
export const navigation = () => {
    //div with an id of top-navbar
    const navbar = document.querySelector("#top-navbar")

    const movie = document.createElement("a")
    movie.textContent = "Movie"
   movie.href = "#movie"
   
    const signin = document.createElement("a")
    signin.textContent = "signIn"
   signin.href = "#signin"
   
    const contact= document.createElement("a")
    contact.textContent = "Contact us"
   contact.href = "#contact"
   
    const login= document.createElement("a")
    login.textContent = "login"
    login.href = "#login"

    let appendItems = [movie, signin, contact,login]
    appendItems.forEach(items => {
        navbar.appendChild(items)
    });
    console.log(navbar) 
}

//signin
export const signIn = () => {
   navigation()
   let parent = document.getElementById("root")
   let signInForm = document.createElement("form")
   let signInInput = document.createElement("input")
   parent.appendChild(signInForm).appendChild(signInInput)
console.log(parent)
}
signIn()

