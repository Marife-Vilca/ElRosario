let imageModal;

document.addEventListener('DOMContentLoaded', () => {
  imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
});

function openModal(url) {
  document.getElementById('modalImage').src = url;
  imageModal.show();
}

function toggleProgress(id) {
  const elem = document.getElementById(id);
  if (elem) {
    elem.classList.toggle('active');
  }
}