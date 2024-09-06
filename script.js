const selectElement = document.querySelector('.nieve');
selectElement.addEventListener('change', (event) => {
const resultado = document.querySelector('.resultado');
resultado.textContent = `Ya que te gusta ${event.target.value} se agregara a nuestra coleccion!`;
});