const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rott
app.get('/', (req, res) => {
    res.render('index');
});

// Rota sugestao
app.get('/sugestao', (req, res) => {
    const { nome, ingredientes } = req.query;
    res.render('agradecimento', { nome, ingredientes });
});

// contato
app.get('/contato', (req, res) => {
    res.render('contato');
});

// POST contato
app.post('/contato', (req, res) => {
    const dados = req.body;
    res.render('contato-recebido', { dados });
});

// "API" simulada
app.get('/api/lanches', (req, res) => {
    const lanches = [
        {
            id: 1,
            nome: "DevBurger Clássico",
            ingredientes: "Pão brioche, Carne 150g, Queijo cheddar, Alface americana, Tomate fresco, Molho especial"
        },
        {
            id: 2,
            nome: "Burger de Bacon",
            ingredientes: "Pão australiano, Carne 180g, Queijo prato, Bacon crocante, Cebola caramelizada, Molho barbecue"
        },
        {
            id: 3,
            nome: "Commit Veggie",
            ingredientes: "Pão integral, Burger de grão de bico, Queijo vegano, Rúcula, Tomate seco, Maionese de ervas"
        }
    ];
    res.json(lanches);
});

// Rota 404
app.use((req, res) => {
    res.status(404).render('404');
});

// Start
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
