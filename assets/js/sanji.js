window.onload = () => {
    const zoroTheme = document.querySelector('body');
    zoroTheme.classList.add('sanji-theme')
}

const btnPlay = document.querySelector('.btn-music-sanji');
btnPlay.addEventListener('click', () => {
    const audio = document.querySelector('audio')
    audio.play()
});