import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello worlddd!');
});

app.listen(5000);

