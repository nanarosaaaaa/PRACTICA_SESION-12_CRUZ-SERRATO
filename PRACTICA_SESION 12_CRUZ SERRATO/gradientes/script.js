/*colores para elegir*/
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradientBox = document.getElementById('gradient-box');

function actualizarGradiente() {
  gradientBox.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}
color1.addEventListener('input', actualizarGradiente);
color2.addEventListener('input', actualizarGradiente);
