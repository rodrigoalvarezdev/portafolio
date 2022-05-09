document.addEventListener('click', e =>{
    if(e.target.classList.contains('gallery-item')){
        const src = e.target.getAttribute('src');
        const title = e.target.dataset.name;
        const desc = e.target.dataset.desc;
        const link = e.target.dataset.link;
        document.querySelector('.modal-link').href = link;
        document.querySelector('.modal-footer').textContent = desc;
        document.querySelector('.modal-title').textContent = title;
        document.querySelector('.modal-img').src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})