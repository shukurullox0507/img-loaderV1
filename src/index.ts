const box = document.querySelector<HTMLElement>('.box');
const loaders = document.querySelectorAll('.spinner');
const updateBtn = document.querySelector('.update-picture')

const images = [
    'https://picsum.photos/3000/3100',
    'https://picsum.photos/3000/3200',
    'https://picsum.photos/3100/3100',
    'https://picsum.photos/3200/3100'
];

images.forEach((src, idx) => {
    const img = new Image();
    img.src = src;
    img.addEventListener('load', () => {
        box?.appendChild(img);



        loaders[idx].classList.add('vanish');

    });

    loaders.forEach(loader => {
        loader.classList.remove('vanish');
    });
});
updateBtn!.addEventListener('click', () => {
    location.reload();
    console.log("im clicked");
})


