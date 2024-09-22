const fs = require('fs');
const path = require('path');

// Cambiar la ruta para leer el archivo correcto (input.txt)
const inputPath = path.join(__dirname, '../input.txt');

// Leer el archivo prueba.txt
fs.readFile(inputPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Convertir el contenido a mayúsculas
    const upperCaseData = data.toUpperCase();

    // Escribir el nuevo contenido en output.txt
    fs.writeFile('output.txt', upperCaseData, (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
            return;
        }

        console.log('El archivo output.txt ha sido creado con éxito.');
    });
});
