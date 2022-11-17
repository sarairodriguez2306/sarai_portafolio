var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++ ) {
    inputs[i].addEventListener('keyup', function (){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    } );
}
const btnEnviar = document.getElementById('btn_enviar');
const validacion = (e) => {
    e.preventDefault();
    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementsbyId('apellidos');
    const correo = document.getElementsbyId('correo');
}