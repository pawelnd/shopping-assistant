import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;
app.get('/api', function(req, res) {
  res.send('Hello World');
});

app.use(express.static(`${__dirname}/../../client/build/`));

app.listen(PORT);
console.log(`app started on port ${PORT}`);
