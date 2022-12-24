const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    let progress = document.getElementById('progress');
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.addEventListener('progress', event => progress.value = event.loaded / event.total);
    xhr.send(formData);
    event.preventDefault();
});