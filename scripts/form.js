import { tiposError, mensajesError } from "./customErrors.js";
import { closeModal } from "./modal.js";
import { onAddProduct } from "./index.js";

const form = document.getElementById('form__add-product');
const inputsForm = form.querySelectorAll('[required]');
const submitBtn = document.getElementById('add_product_btn');

// Generar un ID aleatorio numérico
const generateRandomId = () => {
    return Math.floor(Math.random() * 1000).toString(); 
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const product = Object.fromEntries(formData.entries());
    product.id = generateRandomId();
    onAddProduct(product);
    form.reset();
    verificarFormulario();
    closeModal();
})

inputsForm.forEach(input => {
    input.addEventListener('blur', () => {
        verificarInput(input)
        verificarFormulario();
    })
    input.addEventListener('invalid', e => e.preventDefault())
})

const verificarInput = (input) => {
    let mensaje = '';
    input.setCustomValidity('');

    tiposError.forEach(tipo => {

        if (input.validity[tipo]) {
            mensaje = mensajesError[input.name][tipo];
        }
    })

    // Validación personalizada para el input con name="name"
    if (input.name === 'name' && input.value.length > 0 && input.value.length < 5) {
        mensaje = mensajesError.name.tooShort;
        input.setCustomValidity(mensaje);
    }

    // Validación personalizada para el input con name="price"
    if (input.name === 'price' && input.value < 0) {
        mensaje = mensajesError.price.customError;
        input.setCustomValidity(mensaje);
    }

    // Validación personalizada para el input con name="image_url"
    if (input.name === 'image_url' && !input.value.includes('https://')) {
        mensaje = mensajesError.image.customError;
        input.setCustomValidity(mensaje);
    }

    const mensajeError = input.parentNode.querySelector('.mensaje-error');
    const validarInputCheck = input.checkValidity();

    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        mensajeError.textContent = '';
    }
}

// Función para verificar la validez de todos los inputs
const verificarFormulario = () => {
    const allValid = Array.from(inputsForm).every(input => input.checkValidity());
    if (allValid) {
        submitBtn.removeAttribute('disabled');
        submitBtn.classList.remove('btn_disabled');
    } else {
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.classList.add('btn_disabled');
    }
}