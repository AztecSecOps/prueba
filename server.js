import express from 'express';
import path from 'path';
import cors from 'cors';

// Configurar Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde 'public'
app.use(express.static('public'));

// Ruta principal - sirve el frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Ruta de salud para verificar que el servidor funciona
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Servidor estático funcionando',
        timestamp: new Date().toISOString(),
        routes: [
            '/ - Frontend JSONPlaceholder',
            '/api/health - Estado del servidor',
            '/api/test - Ruta de prueba',
            '/api/users - Proxy a JSONPlaceholder (usuarios)',
            '/api/posts - Proxy a JSONPlaceholder (posts)',
            '/api/comments - Proxy a JSONPlaceholder (comentarios)'
        ]
    });
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: 'API del servidor funcionando',
        data: {
            server: 'Express Static Server',
            version: '1.0.0',
            features: ['Static files', 'CORS enabled', 'JSONPlaceholder proxy']
        }
    });
});

// PROXY ROUTES - Para evitar problemas de CORS en el frontend

// Proxy para usuarios
app.get('/api/users', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Proxy para posts
app.get('/api/posts', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching posts' });
    }
});

// Proxy para comentarios
app.get('/api/comments', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching comments' });
    }
});

// Proxy para comentarios de un post específico
app.get('/api/posts/:id/comments', async (req, res) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching post comments' });
    }
});

// Proxy para posts de un usuario
app.get('/api/users/:id/posts', async (req, res) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}/posts`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user posts' });
    }
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    if (req.accepts('html')) {
        res.status(404).send('<h1>404 - Página no encontrada</h1><p>Regresa a <a href="/">la página principal</a></p>');
    } else if (req.accepts('json')) {
        res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
        res.status(404).type('txt').send('404 - Ruta no encontrada');
    }
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error('Error del servidor:', err);
    res.status(500).json({ 
        error: 'Error interno del servidor',
        message: err.message 
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor Express corriendo en: http://localhost:${PORT}`);
    console.log(`📁 Sirviendo frontend desde: ${path.join(process.cwd(), 'public')}`);
    console.log(`🌐 Frontend disponible en: http://localhost:${PORT}`);
    console.log(`🔧 Rutas de API:`);
    console.log(`   GET /api/health      - Estado del servidor`);
    console.log(`   GET /api/users       - Usuarios (proxy a JSONPlaceholder)`);
    console.log(`   GET /api/posts       - Posts (proxy a JSONPlaceholder)`);
    console.log(`   GET /api/comments    - Comentarios (proxy a JSONPlaceholder)`);
    console.log(`📌 Nota: El frontend hace peticiones directamente a JSONPlaceholder`);
    console.log(`   pero también puede usar las rutas proxy para evitar CORS.`);
});