const fs = require('fs');
const path = require('path');

// Rutas de los archivos PDF que deseas convertir
const archivo1 = path.join(__dirname, 'YerlinRojasCV_EN_200.pdf');
const archivo2 = path.join(__dirname, 'EN_CP_YerlinRojas200.pdf');

// Función para leer y codificar el archivo en Base64
function encodeToBase64(file) {
  const data = fs.readFileSync(file);
  return data.toString('base64');
}

// Obtener los datos codificados en Base64 para cada archivo
const base64Data1 = encodeToBase64(archivo1);
const base64Data2 = encodeToBase64(archivo2);

// Mostrar los datos codificados en Base64 para cada archivo
/* console.log("Base64_encoded_data_1:", base64Data1); */
console.log("Base64_encoded_data_2:", base64Data2); 