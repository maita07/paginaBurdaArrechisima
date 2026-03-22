

function abrirModal() {
    document.getElementById('modal-quiz').classList.remove('tw-hidden');
    document.getElementById('modal-overlay').classList.remove('tw-hidden');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    document.getElementById('modal-quiz').classList.add('tw-hidden');
    document.getElementById('modal-overlay').classList.add('tw-hidden');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
});



function moverCarrusel(direccion) {
    const carrusel = document.getElementById('carrusel-tutoriales');
    const caja = carrusel.querySelector('div');
    const anchoCaja = caja.getBoundingClientRect().width + 16;
    carrusel.scrollBy({ left: anchoCaja * direccion, behavior: 'smooth' });
}

function verPrediccion() {
    document.getElementById('modal-screen-form').classList.add('tw-hidden');
    document.getElementById('modal-screen-prediccion').classList.remove('tw-hidden');
}

function volverFormulario() {
    document.getElementById('modal-screen-prediccion').classList.add('tw-hidden');
    document.getElementById('modal-screen-form').classList.remove('tw-hidden');
}
