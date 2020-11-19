import express from 'express';
import path from 'path';

const app = express();

app.get('/api', function(req, res) {
  res.send('Hello World');
});

app.use(express.static(`${__dirname}/../../client/build/`));

app.listen(process.env.PORT || 8080);
console.log(`app started on port ${process.env.PORT || 8080}`);
