const modal = document.getElementById('modal');
const modalBtn = document.getElementById('open_modal_btn');
const modalBtnDesk = document.getElementById('open_modal_btn-desk');
const closeBtn = document.getElementById('close_modal_btn');
const cancelBtn = document.getElementById('cancel_modal_btn');
const form = document.getElementById('form__add-product');
const modalOverlay = document.getElementById('modal-overlay');

modalBtn.addEventListener('click', () => {
    openModal();
})

modalBtnDesk.addEventListener('click', () => {
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
    modalOverlay.style.display = 'flex';
}

export const closeModal = () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
}