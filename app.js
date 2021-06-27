const express = require('express');
const path = require('path');


const app = express();


// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/inicio.html'));
});

app.get('/conocenos', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/conocenos.html'));
});

app.get('/historia', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/historia.html'));
});

app.get('/objetivos', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/objetivos.html'));
});

app.get('/mision-vision', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/misionvision.html'));
})

app.get('/aspirantes', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/aspirantes.html'));
});

app.get('/alumnos', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/alumnos.html'));
})

app.get('/profesores', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/profesores.html'));
});

app.get('/informes', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/informes.html'));
});

app.get('/preguntas', (req, res) => {
    res.render(path.join(__dirname, '/views/preguntas.html'));
});

app.listen(3000, () => console.log('Servidor en el puerto 3000'));