const modal = document.getElementById('modal');
const modalBtn = document.getElementById('open_modal_btn');
const closeBtn = document.getElementById('close_modal_btn');
const cancelBtn = document.getElementById('cancel_modal_btn');
const form = document.getElementById('form__add-product');

modalBtn.addEventListener('click', () => {
    openModal();
})

closeBtn.addEventListener('click', () => {
    closeModal();
    form.reset();
})

cancelBtn.addEventListener('click', () => {
    closeModal();
    form.reset();
})

export const openModal = () => {
    modal.style.display = 'flex';
}

export const closeModal = () => {
    modal.style.display = 'none';
}