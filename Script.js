var el_down = document.getElementById("Texte");

function GenereNombre() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$!?';

    for (let i = 1; i <= 12; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char)
    }

    return pass;
}

function Lancement() {
    el_down.innerHTML = GenereNombre();
}