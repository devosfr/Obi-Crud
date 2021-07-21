const app = require('./src/api');

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Meu Servidor está rodando na porta: ', port);
});


