/* Mostrar formularios */
document.getElementById("mostrar-registro").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("inicio").style.display = "none";
    document.getElementById("registro").style.display = "block";

    /* Limpiar formulario de inicio */
    limpiarFormulario("form-login", ["error-login-usuario", "error-login-password"]);
});

document.getElementById("mostrar-login").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("registro").style.display = "none";
    document.getElementById("inicio").style.display = "block";

    /* Limpiar fomulario de registro */
    limpiarFormulario("form-registro", ["error-reg-usuario", "error-reg-password", "error-reg-email"]);
})

/* Registro */
document.getElementById("form-registro").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("reg-usuario").value.trim();
    const pass = document.getElementById("reg-password").value.trim();
    const email = document.getElementById("reg-email").value.trim();

    const errorUsuario = document.getElementById("error-reg-usuario");
    const errorPass = document.getElementById("error-reg-password");
    const errorEmail = document.getElementById("error-reg-email");
    const mensajeExito = document.getElementById("mensaje-exito");

    errorUsuario.textContent = "";
    errorPass.textContent = "";
    errorEmail.textContent = "";
    mensajeExito.textContent = "";

    let valido = true;

    if(!nombre){
        errorUsuario.textContent = "Ingrese un nombre de usuario";
        valido = false;
    }

    if(!pass){
        errorPass.textContent = "Ingrese una contraseña";
        valido = false;
    }

    if(!email){
        errorEmail.textContent = "Ingrese un correo";
        valido = false;
    }

    if(getCookie(nombre) !== null){
        errorUsuario.textContent = "Ese usuario ya existe";
        valido = false;
    }

    if(!valido) return;

    const valor = `${pass},${email}`;
    setCookie(nombre, valor, 7);

    limpiarFormulario("form-registro", ["error-reg-usuario", "error-reg-password", "error-reg-email"]);
    mensajeExito.textContent = "Cuenta creada con éxito. Ya puedes iniciar sesión.";
});

/* Inicio de sesión */
document.getElementById("form-login").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("login-usuario").value.trim();
    const pass = document.getElementById("login-password").value.trim();

    const errorUsuario = document.getElementById("error-login-usuario");
    const errorPass = document.getElementById("error-login-password");

    errorUsuario.textContent = "";
    errorPass.textContent = "";

    if(!nombre){
        errorUsuario.textContent = "Ingresa un nombre de usuario";
        return;
    }

    if(!pass){
        errorPass.textContent = "Ingresa una contraseña";
        return;
    }

    const datos = getCookie(nombre);
    if(datos === null){
        errorUsuario.textContent = "Usuario no encontrado";
        return;
    }
    
    const partes = datos.split(",");
    const passGuardada = partes[0];

    if(pass !== passGuardada){
        errorPass.textContent = "Contraseña incorrecta";
        return;
    }

    setCookie("actual", nombre, 7);
    window.location.href = "enmaquetado.html";
});

/* Funciones de cookies */
function setCookie(nombre, valor, dias){
    let date = new Date();
    date.setTime(date.getTime() + (dias*24*60*60*1000));
    document.cookie = `${nombre}=${valor}; expires=${date.toGMTString()}`;
}

function getCookie(nombre){
    let cookies = document.cookie.split(";");
    for(let i=0; i<cookies.length; i++){
        let c = cookies[i].trim();
        if(c.indexOf(nombre + "=") === 0)
            return c.substring(nombre.length + 1);
    }
    return null;
}

/* Funcion para limpiar formularios */
function limpiarFormulario(idFormulario, listaErrores){
    let formulario = document.getElementById(idFormulario);

    if(formulario){
        let entradas = formulario.getElementsByTagName("input");

        for(let i=0; i<entradas.length; i++){
            entradas[i].value = "";
        }

        for(let j=0; j<listaErrores.length; j++){
            let span = document.getElementById(listaErrores[j]);
            if(span){
                span.textContent = "";
            }
        }
    }
}