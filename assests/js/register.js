const inputUser = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const inputConfirmPassword = document.querySelector("#log-confirmar-senha")
const btnRegister = document.querySelector("#SignInBtn")

const cadastroUsuario = () => {
    let user = inputUser.value
    let password = inputPassword.value 
    let ConfirmPassword = inputConfirmPassword.value


     if(user.trim() != "" && password == ConfirmPassword) {
        localStorage.setItem("user", user)
        localStorage.setItem("password", password)
        window.location.href = "../../index.html"
        alert("Usuario cadastrado com sucesso")
        return;
     }
     alert("Confirmação da senha incorreta !")
        
}


btnRegister.addEventListener("click", cadastroUsuario)