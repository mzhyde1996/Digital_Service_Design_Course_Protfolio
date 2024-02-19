//footer year update code

document.getElementById('currentYear').innerText = new Date().getFullYear();

//modal
const fields = document.getElementsByClassName('field');
const modals = document.getElementsByClassName('modal');
const modalText = document.getElementById('modalText');

for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener('click', function () {
        openModal(i);
    });
}

function openModal(index) {
    const text = fields[index].getAttribute('data-text');
    modalText.innerHTML = `<p>${text}</p>`;
    modals[index].style.display = 'block';

    // Close the modal when clicking outside the modal content
    modals[index].addEventListener('click', function(event) {
        if (event.target === modals[index]) {
            closeModal(index);
        }});
    
}

function closeModal(index) {
    document.getElementById('modal').style.display = 'none';
}

//mouseover
document.addEventListener('DOMContentLoaded', function () {
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('mouseover', function () {
      const overlay = this.querySelector('.overlay');
      overlay.style.opacity = '1';

      const image = this.querySelector('img');
      image.style.transform = 'scale(1.1)';
  });

  item.addEventListener('mouseout', function () {
      const overlay = this.querySelector('.overlay');
      overlay.style.opacity = '0';

      const image = this.querySelector('img');
      image.style.transform = 'scale(1)';
  });
});
});