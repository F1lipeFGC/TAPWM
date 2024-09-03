function soltar() {
    const img = document.getElementById('window-image');
    img.src = "janela-aberta.png";
    const text = document.getElementById('texto');
    text.innerHTML = "A janela está aberta!"; 
}
function janelaClose() {
    const img = document.getElementById('window-image');
    img.src = "janela-fechada.jpg";
    const text = document.getElementById('texto');
    text.innerHTML = "A janela está fechada!";
}
function janelaOpen() { 
    const img = document.getElementById('window-image');
    img.src = "janela-aberta.png";
    const text = document.getElementById('texto');
    text.innerHTML = "A janela está aberta!";
}
function janelaBroken() {
    const img = document.getElementById('window-image');
    img.src = "janela-quebrada.jpg";
    const text = document.getElementById('texto');
    text.innerHTML = "A janela está quebrada!";
}