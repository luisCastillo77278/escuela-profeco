const express = require('express');
const path = require('path');


const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/views/inicio.ejs'));
});

app.get('/conocenos', (req, res) => {
    res.render(path.join(__dirname, '/views/conocenos.ejs'));
});

app.get('/historia', (req, res) => {
    res.render(path.join(__dirname, '/views/historia.ejs'));
});

app.get('/objetivos', (req, res) => {
    res.render(path.join(__dirname, '/views/objetivos.ejs'));
});

app.get('/mision-vision', (req, res) => {
    res.render(path.join(__dirname, '/views/misionvision.ejs'));
})

app.get('/aspirantes', (req, res) => {

});

app.get('/alumnos', (req, res) => {

})

app.get('/profesores', (req, res) => {

});


app.listen(3000, () => console.log('Servidor en el puerto 3000'));