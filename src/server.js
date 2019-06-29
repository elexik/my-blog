import express from 'express';
//import bodyParser from 'body-parser';

const app = express();

//app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello!'));
//app.get('hello/:name', (req, res) => req.send(`Hello ${req.params.name}!`

app.post('/hello', (req, res) => res.send('Hello!'));
//app.listen(8000, () => console.log('Listening on port 8000'));
 