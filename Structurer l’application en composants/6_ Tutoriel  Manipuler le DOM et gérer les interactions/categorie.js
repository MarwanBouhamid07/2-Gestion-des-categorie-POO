document.addEventListener('DOMContentLoaded', () => {


    const btnShowForm = document.querySelector('#btn-show-form');
    const sectionForm = document.querySelector('#section-form');
    const btnCancelForm = document.querySelector('#btn-cancel-form');
    const formCategorie = document.querySelector('#form-categorie');

    btnShowForm.addEventListener('click', () => {
        btnShowForm.hidden = true;
        sectionForm.hidden = false;
    });

    btnCancelForm.addEventListener('click', () => {
        sectionForm.hidden = true;
        btnShowForm.hidden = false;
        formCategorie.reset();
    });


    const catNom = document.querySelector('#cat-nom');
    const catCouleur = document.querySelector('#cat-couleur');
    const tableBody = document.querySelector('#table-categories-body');

    formCategorie.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const nom = catNom.value;
        const couleur = catCouleur.value;

        const ligne = `<tr>
            <td>${nom}</td>
            <td>${couleur}</td>
        </tr>`;

        tableBody.insertAdjacentHTML('beforeend', ligne);

        formCategorie.reset();
        sectionForm.hidden = true;
        btnShowForm.hidden = false;
    });

});