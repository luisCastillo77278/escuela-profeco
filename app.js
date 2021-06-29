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
    res.sendFile(path.join(__dirname, '/views/preguntas.html'));
});

// ofertas educativas
app.get('/basica', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/fbasica.html'));
});

app.get('/prepedeuticotrabajo', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/fptrabajo.html'));
});

app.get('/actparaescolar', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/actparaescolar.html'));
});

app.get('/areaingreso', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/areaingreso.html'));
});

app.get('/fisica', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/fisica.html'));
})

app.get('/biologia', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/biologia.html'));
});


app.get('/sociales', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/sociales.html'));
});


app.get('/humanidades', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/humanidades.html'));
});

app.listen(3000, () => console.log('Servidor en el puerto 3000'));