/*jshint esversion: 9 */

// por Jorge Sánchez
document.addEventListener('DOMContentLoaded', () => app());

function app() {
    // Ejercicio 2 - La vida de un gato //
    let kitty = document.getElementById('kitty');
    let kitty2 = document.getElementById('kitty2');
    let kitty3 = document.getElementById('kitty3');
    let kitty4 = document.getElementById('kitty4');
    fotos();

    async function fotos() {
        // fotos random de gatos
        await fetch('https://aws.random.cat/meow')
            .then(res => res.json())
            .then(cat => {
                kitty.src = cat.file;
            })
            .catch('error');
        await fetch('https://aws.random.cat/meow')
            .then(res => res.json())
            .then(cat => {
                kitty2.src = cat.file;
            })
            .catch('error');
        await fetch('https://aws.random.cat/meow')
            .then(res => res.json())
            .then(cat => {
                kitty3.src = cat.file;
            })
            .catch('error');
        await fetch('https://aws.random.cat/meow')
            .then(res => res.json())
            .then(cat => {
                kitty4.src = cat.file;
            })
            .catch('error');
    }

}