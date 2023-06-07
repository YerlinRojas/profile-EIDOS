document.getElementById('boton-descargar').addEventListener('click', function() {
    // URL del documento que deseas descargar
    var url = './YerlinRojas200-.pdf';

    // Crea un enlace temporal
    var link = document.createElement('a');
    link.href = url;

    // Establece el nombre del archivo
    link.download = './YerlinRojas200-.pdf';

    // Simula un clic en el enlace para descargar el archivo
    link.click();
})