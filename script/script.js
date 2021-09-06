let switchMode = document.getElementById('switch')

switchMode.onclick = function () {
    let but = document.getElementById('switch')
    let theme = document.getElementById('style')
    if(theme.getAttribute('href') == 'css/light.css'){
        theme.href = 'css/dark.css'
        but.innerText = 'Перейти на светлую сторону'
    } else {
        theme.href = 'css/light.css'
        but.innerText = 'Перейти на тёмную сторону'
    }
}