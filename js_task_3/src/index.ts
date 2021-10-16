import express from 'express';
import cors from 'cors';

import router from './routes/notes.route';

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
