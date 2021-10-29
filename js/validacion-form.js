const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
const form = document.getElementById('form')
const parrafo = document.getElementById('parrafo')

form.addEventListener('submit', event =>{
    event.preventDefault()
    let alert = ""
    let entrada = false
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = ""
    if(nombre.value.length == ""){
        alert += `Ingrese un nombre <br>`
        entrada = true        
    }
    if(!emailRegex.test(email.value)){
        alert += `Ingrese un mail valido <br>`
        entrada = true
    }
    if(telefono.value.length == ""){
        alert += `Ingrese un telefono <br>`
        entrada = true
    }
    if(entrada){
        parrafo.innerHTML = alert;
    }else{
        parrafo.innerHTML = 'Enviado, bienvenido a bordo.'
    }
})
