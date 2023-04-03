function iniciarSesion() {
    // Obtener los valores del usuario y la contraseña
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    
    // Comprobar si los valores son correctos
    if (usuario === "prueba" && contrasena === "1234") {
      // Mostrar un mensaje de alerta
   alert("Has iniciado sesión.");
      
      // Redirigir a la página deseada
      window.location.href = "index.html";
    } else {
      // Mostrar un mensaje de error
      alert("Usuario o contraseña incorrectos.");
    }
}