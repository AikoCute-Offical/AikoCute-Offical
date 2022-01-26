
document.querySelector('.toggle-theme').onclick = e => {
    // handle dark theme
    if(document.querySelector('.theme').classList[1] === 'dark-mode') {
        document.querySelector('.theme').classList.remove('dark-mode')
    } else {
        document.querySelector('.theme').classList.add('dark-mode')
    }
    
    // handle dark toggle
    if(e.target.classList[1] === 'on-dark') {
        e.target.classList.remove('on-dark')
    } else {
        e.target.classList.add('on-dark')
    }
}