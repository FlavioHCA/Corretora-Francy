var i = window.document.getElementById('introducao')
var d = window.document.getElementById('dados')
var inf = window.document.getElementById('info')

var h = window.document.getElementById('Home')
var c = window.document.getElementById('Contato')
var s = window.document.getElementById('Sobre')


function home() {
    i.style.display = 'flex'
    d.style.display = 'none'
    inf.style.display = 'none'
}

function contato() {
    i.style.display = 'none'
    d.style.display = 'flex'
    inf.style.display = 'none'
}

function sobre() {
    i.style.display = 'none'
    d.style.display = 'none'
    inf.style.display = 'flex'
}