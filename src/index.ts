import { config } from 'dotenv';
import app from './app';

const { PORT } = process.env;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
