var video = document.querySelectorAll('iframe')

video.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active');
}))