document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const form = document.querySelector('.fa-user-circle');
    const closeForm = document.querySelector('#contactForm');
    const contactForm = document.querySelector('#contactForm');

    //Afficher et cacher le modal
    form.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    });

    closeForm.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    });

    //Envoie des données du formulaire en backend
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            firstname: document.querySelector('#firstname').nodeValue,
            lastname: document.querySelector('#lastname').nodeValue,
            email: document.querySelector('#email').nodeValue,
            description: document.querySelector('#description').nodeValue,
        };

        const response = await axios.post('?', data);
        console.log(response);
    });
});
