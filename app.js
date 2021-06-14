const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/inicio.html'));
});

app.get('/conocenos', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/conocenos.html'));
});

app.get('/aspirantes', (req, res) => {

});

app.get('/alumnos', (req, res) => {

})

app.get('/profesores', (req, res) => {

});

app.listen(3000, () => console.log('Servidor en el puerto 3000'));