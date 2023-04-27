var foto = document.querySelectorAll('.picture-container img')

foto.forEach(image => {
    image.onclick = () =>{
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src =  image.getAttribute('src');
    }
})

document.querySelector('.popup span').onclick = () =>{
    document.querySelector('.popup').style.display = 'none';
}