document.getElementById('boton-descargar').addEventListener('click', function() {
    var url = './YerlinRojas200-.pdf';

    var link = document.createElement('a');
    link.href = url;

    link.download = './YerlinRojas200-.pdf';

    link.click();
})