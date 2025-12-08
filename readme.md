PROYECTO ACADÉMICO: SERVIDOR ESTÁTICO DATAFAKE
Información Básica del Proyecto

Nombre del Proyecto: Servidor Estático DataFake
Estudiante: Jose Julian Vera Hernandez
Profesor: Jose Alejandro Flores Hernandez
Materia: Desarrollo Rápido de Aplicaciones
Fecha de Entrega: 08/12/2025

Tecnologías Utilizadas:

    Node.js (para el servidor)

    Express.js (framework web)

    JavaScript (lenguaje de programación)

    HTML5 (estructura de la página web)

    CSS3 (estilos visuales)

    Fetch API (para comunicación con internet)

¿Qué es este proyecto?

Este proyecto es una aplicación web completa que funciona en tu propia computadora. Es como un pequeño sitio web personal que puedes abrir en tu navegador, pero en lugar de estar en internet, corre directamente en tu máquina.
La idea principal es simple:

    Tienes un programa servidor que se ejecuta en tu computadora

    Tienes una página web que ves en el navegador

    La página web pide datos a internet (a un servicio llamado JSONPlaceholder)

    Los datos se muestran en tablas organizadas y bonitas

¿Por qué se llama "DataFake"?

Porque usa datos "falsos" o de prueba. No son datos reales de personas, sino información de ejemplo que sirve para practicar y aprender.
¿Qué hace exactamente el proyecto?

Cuando abres la aplicación, ves una página con tres botones grandes. Cada botón hace algo diferente:
Botón 1: "Usuarios"

    Muestra una lista de personas de ejemplo

    Para cada persona muestra: nombre, email, ciudad donde vive, y compañía donde trabaja

    Son 10 usuarios en total

Botón 2: "Posts"

    Muestra publicaciones o artículos de ejemplo

    Para cada post muestra: título, quién lo escribió, y un pequeño fragmento del contenido

    Son 100 posts, pero muestra solo los primeros 15 para no saturar la pantalla

Botón 3: "Comentarios"

    Muestra comentarios que personas hacen en los posts

    Para cada comentario muestra: nombre de quien comenta, su email, y un fragmento del comentario

    Son 500 comentarios, pero muestra solo los primeros 12

¿Cómo funciona por dentro?

El proyecto está dividido en dos partes principales:
Parte 1: El Servidor (Backend)

Este es el programa que corre en tu computadora. Se llama server.js y hace tres cosas importantes:

    Sirve los archivos de la página web (el HTML, CSS y JavaScript)

    Actúa como intermediario entre tu navegador y internet

    Obtiene datos de un sitio web llamado JSONPlaceholder

El código del servidor es bastante simple:
javascript

// Esto crea el servidor web
const app = express();

// Esto dice al servidor: "sirve los archivos de la carpeta 'public'"
app.use(express.static('public'));

// Esto crea una "ruta" para obtener usuarios
app.get('/api/users', async (req, res) => {
    // Aquí el servidor pide datos a internet
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    // Y aquí los envía a tu navegador
    res.json(data);
});

Parte 2: La Página Web (Frontend)

Esta es la parte que ves en el navegador. Está en el archivo index.html y hace tres cosas:

    Muestra los botones para que hagas clic

    Pide datos al servidor cuando haces clic en un botón

    Muestra los datos en tablas bonitas

Cuando haces clic en "Usuarios", esto es lo que pasa:
javascript

async function cargarUsuarios() {
    // 1. Muestra un mensaje "Cargando..."
    mostrarMensaje('Cargando usuarios...', 'cargando');
    
    // 2. Pide datos al servidor
    const respuesta = await fetch('/api/users');
    const usuarios = await respuesta.json();
    
    // 3. Crea una tabla con los datos
    let html = '<table>';
    usuarios.forEach(usuario => {
        html += `<tr>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
        </tr>`;
    });
    html += '</table>';
    
    // 4. Muestra la tabla en la página
    document.getElementById('contenido').innerHTML = html;
}

¿Por qué necesita un servidor intermedio?

Esta es una parte técnica importante. Imagina que quieres pedir datos de un sitio web, pero ese sitio web tiene reglas de seguridad. Una de esas reglas se llama CORS (Cross-Origin Resource Sharing).
Instalación Paso a Paso
Paso 1: Prepara tu computadora

Antes de empezar, necesitas tener instalado Node.js. Node.js es como un "motor" que permite ejecutar programas de JavaScript fuera del navegador.

Cómo verificar si ya lo tienes:

    Abre la terminal o símbolo del sistema

    Escribe: node --version

    Si ves un número como "v18.12.0", ¡perfecto! Si ves un error, necesitas instalarlo.

Para instalar Node.js:

    Ve a nodejs.org

    Descarga la versión "LTS" (Long Term Support)

    Instálala como cualquier programa normal

Paso 2: Descarga el proyecto

Tienes dos opciones:

Opción A: Si tienes los archivos ya descargados

    Solo asegúrate de que todos los archivos estén en una misma carpeta

Opción B: Si necesitas crear los archivos

    Crea una nueva carpeta llamada servidor-datafake

    Dentro crea otra carpeta llamada public

    Copia los códigos que te daré más adelante en los archivos correctos

Paso 3: Instala las dependencias

Las "dependencias" son herramientas adicionales que necesita el proyecto. En este caso necesitamos:

    Express: Para crear el servidor web

    CORS: Para permitir la comunicación entre el navegador y el servidor

Cómo instalarlas:

    Abre la terminal en la carpeta del proyecto

    Escribe: npm install

    Espera a que termine (puede tomar unos minutos)

Verás que se crea una nueva carpeta llamada node_modules. Esta carpeta contiene todas las herramientas instaladas.
Paso 4: Ejecuta el servidor

En la misma terminal, escribe:
bash

node server.js

Deberías ver un mensaje como:
text

Servidor iniciado en: http://localhost:3000

Paso 5: Abre la aplicación

    Abre tu navegador web (Chrome, Firefox, Edge, etc.)

    En la barra de direcciones, escribe: http://localhost:3000

    ¡Listo! Ya deberías ver la aplicación

Archivos del Proyecto Explicados

El proyecto tiene solo unos pocos archivos, cada uno con un propósito específico:
1. package.json - La "receta" del proyecto

Este archivo le dice a Node.js qué necesita el proyecto para funcionar. Es como una lista de ingredientes:
json

{
  "name": "servidor-estatico-datafake",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  }
}

Explicación:

    name: El nombre del proyecto

    version: La versión (1.0.0 significa primera versión completa)

    main: El archivo principal que se ejecuta

    scripts: Comandos que podemos usar (como npm start)

    dependencies: Las herramientas que necesita el proyecto

2. server.js - El cerebro del proyecto

Este es el archivo más importante. Contiene todo el código del servidor.

Partes importantes del código:
javascript

// Importar las herramientas necesarias
import express from 'express';
import cors from 'cors';

// Crear la aplicación web
const app = express();

// Usar CORS (permite que el navegador se comunique con el servidor)
app.use(cors());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

¿Qué hace cada parte?

    import express from 'express': Trae la herramienta Express que nos permite crear un servidor web

    import cors from 'cors': Trae la herramienta CORS que soluciona problemas de comunicación

    const app = express(): Crea una nueva aplicación web

    app.use(cors()): Aplica la solución CORS a toda la aplicación

    app.use(express.static('public')): Dice "todos los archivos en la carpeta 'public' se pueden acceder desde el navegador"

Las rutas del servidor:

El servidor tiene tres "rutas" o direcciones especiales:
javascript

// Cuando alguien visita /api/users
app.get('/api/users', async (req, res) => {
    // 1. Ir a internet y pedir usuarios
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // 2. Convertir la respuesta a formato JSON
    const data = await response.json();
    
    // 3. Enviar los datos al navegador
    res.json(data);
});

Las otras dos rutas (/api/posts y /api/comments) funcionan exactamente igual, solo cambia la dirección de internet a la que van.
3. public/index.html - Lo que ves en el navegador

Este archivo contiene toda la página web. Es bastante largo porque incluye:

    La estructura HTML (títulos, botones, tablas)

    Los estilos CSS (colores, tamaños, diseños)

    El código JavaScript (la lógica de los botones)

Partes interesantes:

Los botones:
html

<button onclick="cargarUsuarios()">
    <i class="fas fa-users"></i> Cargar Usuarios
</button>

Cuando haces clic en este botón, llama a la función cargarUsuarios() que está definida en el JavaScript.

El área de contenido:
html

<div id="contenido">
    <!-- Aquí aparecerán los datos cuando hagas clic -->
</div>

Esta es una "caja vacía" que se llenará con tablas cuando hagas clic en los botones.
4. public/style.css - El diseño visual

Aunque usamos W3.CSS (un framework de estilos), tenemos un poco de CSS personalizado:
css

/* Hace que las tarjetas tengan bordes redondeados */
.main-card {
    border-radius: 10px;
}

/* Hace que las tablas sean más compactas */
.w3-table-all td {
    padding: 10px 8px;
}

Cómo usar la aplicación
Primer uso:

    Abre la terminal en la carpeta del proyecto

    Escribe: node server.js

    Abre tu navegador en http://localhost:3000

    Verás la página con tres botones

Para probar cada función:

Ver usuarios:

    Haz clic en el botón verde "Usuarios"

    Verás un mensaje "Cargando usuarios..."

    Después de un segundo, verás una tabla con 10 personas

    Cada persona tiene: ID, Nombre, Email, Ciudad, Compañía

Ver posts:

    Haz clic en el botón azul "Posts"

    Verás una tabla con publicaciones

    Cada publicación tiene: ID, Título, ID del usuario, y un fragmento del contenido

    Solo se muestran las primeras 15 publicaciones de 100

Ver comentarios:

    Haz clic en el botón morado "Comentarios"

    Verás una tabla con comentarios

    Cada comentario tiene: ID, Nombre, Email, ID del post, y un fragmento del comentario

    Solo se muestran los primeros 12 comentarios de 500

Mensajes que verás:

    💙 Azul: "Cargando..." - Significa que está obteniendo datos de internet

    💚 Verde: "X datos cargados exitosamente" - Significa que todo salió bien

    ❤️ Rojo: "Error al cargar datos" - Significa que algo salió mal (quizás no tienes internet)
    ¿Qué aprendemos con este proyecto?
Habilidades técnicas:

    Configurar un servidor web local con Node.js y Express

    Crear páginas web interactivas con HTML, CSS y JavaScript

    Comunicar frontend y backend usando Fetch API

    Consumir APIs externas y mostrar los datos

    Manejar errores y estados de carga

    Organizar proyectos en archivos y carpetas

Conceptos importantes:

    Arquitectura cliente-servidor: Cómo se comunican el navegador (cliente) y el servidor

    Peticiones HTTP: Cómo se piden datos a través de internet

    Formato JSON: Cómo se estructuran los datos en la web moderna

    Programación asíncrona: Cómo manejar operaciones que toman tiempo (como pedir datos de internet)

    Manejo de dependencias: Cómo usar herramientas de otras personas en nuestro proyecto

Código Completo (para referencia)
server.js completo:
javascript

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Obtener usuarios
app.get('/api/users', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

// Obtener posts
app.get('/api/posts', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener posts' });
    }
});

// Obtener comentarios
app.get('/api/comments', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener comentarios' });
    }
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor en: http://localhost:${PORT}`);
});

package.json completo:
json

{
  "name": "servidor-estatico-datafake",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  },
  "scripts": {
    "start": "node server.js"
  }
}

HTML básico (parte principal):
html

<!DOCTYPE html>
<html>
<head>
    <title>Servidor DataFake</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
    <div class="w3-container">
        <h1>Servidor Estático DataFake</h1>
        <button class="w3-button w3-green" onclick="cargarUsuarios()">Usuarios</button>
        <button class="w3-button w3-blue" onclick="cargarPosts()">Posts</button>
        <button class="w3-button w3-purple" onclick="cargarComentarios()">Comentarios</button>
        
        <div id="mensaje"></div>
        <div id="contenido"></div>
    </div>
    
    <script>
        // El código JavaScript va aquí
    </script>
</body>
</html>

Resumen Final

Este proyecto "Servidor Estático DataFake" es una aplicación web educativa que demuestra:

    Cómo crear un servidor web desde cero usando Node.js y Express

    Cómo construir una interfaz web interactiva con HTML, CSS y JavaScript

    Cómo comunicar frontend y backend usando Fetch API

    Cómo consumir datos de internet de una API pública

    Cómo manejar estados y errores para buena experiencia de usuario


