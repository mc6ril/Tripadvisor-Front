document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const form = document.querySelector('.fa-user-circle');
    const closeForm = document.querySelector('.croix');
    const burger = document.querySelector('.burger');
    const contactForm = document.querySelector('#contactForm');
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header_left');

    //Afficher et cacher le modal
    form.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    });

    closeForm.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    });

    burger.addEventListener('click', () => {
        header.classList.toggle('hidden');
        menu.classList.toggle('visible');
    });

    //Envoie des données du formulaire en backend
    contactForm.addEventListener('submit', async (e) => {
        const p = document.createElement('p');

        e.preventDefault();

        const data = {
            firstname: document.querySelector('#firstname').value,
            lastname: document.querySelector('#lastname').value,
            email: document.querySelector('#email').value,
            description: document.querySelector('#description').value,
        };

        const response = await axios.post(
            'https://tripadvisor-cyril-back.herokuapp.com/form',
            data,
        );
        if (response.status === 200) {
            contactForm.append(p);
            p.innerText = 'Mail envoyé';
            p.style.color = 'green';
            contactForm.reset();
        } else {
            contactForm.append(p);
            p.innerText = 'Mail non envoyé';
            p.style.color = 'red';
            contactForm.reset();
        }
    });
});
