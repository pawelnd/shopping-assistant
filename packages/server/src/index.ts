import express from 'express';
import cron from 'node-cron';

const app = express();

const PORT = process.env.PORT || 8080;
let instanceExistenceTime = 0;
app.get('/api', function(req, res) {
  res.send(`Hello World i'm here ${instanceExistenceTime} minutes`);
});

app.use(express.static(`${__dirname}/../../client/build/`));

app.listen(PORT);
console.log(`app started on port ${PORT}`);

cron.schedule('* * * * *', function() {
  instanceExistenceTime += 1;
});
