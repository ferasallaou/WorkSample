import mongoose from 'mongoose';
import app from './index';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3111;

app.listen(PORT, async () => {
    await bootstrap();
});

async function bootstrap() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(`[server]: Server is running at http://localhost:${PORT}`);
    } catch (e) {
        throw new Error(e);
    }
}
