import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(join(__dirname, 'public')));

// Rutas API
app.get('/api/users', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.get('/api/posts', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.get('/api/comments', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

// Si no encuentra la ruta, servir index.html
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor en: http://localhost:${PORT}`);
});
