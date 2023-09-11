//variables y constantes
let memoria = "";
const pantalla = document.querySelector("#pantalla")
const btns = document.querySelectorAll(".num");
const sumarMemoria = document.getElementById("sumarMemoria");
const restarMemoria = document.getElementById("restarMemoria");
const guardarMemoria = document.getElementById("guardarMemoria");
const borrarMemoria = document.getElementById("borrarMemoria");
const borrarPantalla = document.getElementById("borrarPantalla");
const mostrarResultado = document.getElementById("mostrarResultado");

//funciones
const resultado = () => {
    if (pantalla.value !== ""){
        let operacion = ""
        operacion += pantalla.value;
        let resultado = eval(operacion);
        pantalla.value = resultado;
    };
};

const limpiarPantalla = () => {
    pantalla.value = "";
};

const agregarMemoria = () => {
    if (pantalla.value !== ""){
        memoria = pantalla.value;
    }
};

const limpiarMemoria = () => {
    memoria = "";
};

const masMemoria = () => {
    pantalla.value += `+${memoria}`;
};

const menosMemoria = () => {
    pantalla.value -= `+${memoria}`
};

//proceso
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let val = btn.value;
        pantalla.value += val;
    })
});
mostrarResultado.addEventListener("click", resultado);
borrarPantalla.addEventListener("click", limpiarPantalla);
guardarMemoria.addEventListener("click", agregarMemoria);
borrarMemoria.addEventListener("click", limpiarMemoria);
sumarMemoria.addEventListener("click", masMemoria);
restarMemoria.addEventListener("click", menosMemoria);

//seguridad para el eval()
setInterval(() => {
    if (!pantalla.getAttribute("readonly"))
    pantalla.setAttribute("readonly", "")
}, 500)