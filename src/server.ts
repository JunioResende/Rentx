import express from 'express';

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log('🚀 Ignite-Rentx Server its started on port 3333!...');
});
