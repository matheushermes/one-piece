window.onload = () => {
    const zoroTheme = document.querySelector('body');
    zoroTheme.classList.add('zoro-theme')
}

const btnPlay = document.querySelector('.btn-music-zoro');
btnPlay.addEventListener('click', () => {
    const audio = document.querySelector('audio')
    audio.play()
});