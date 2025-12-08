PROYECTO ACADÉMICO: SERVIDOR ESTÁTICO DATAFAKE

Sistema de Gestión y Visualización de Datos mediante Arquitectura Cliente-Servidor Local
📋 INFORMACIÓN IDENTIFICATIVA DEL PROYECTO
Identificación Principal
Campo	Información
Nombre del Proyecto	Servidor Estático DataFake
Código de Proyecto	SEDF-2025-001
Tipo de Proyecto	Académico/Educativo
Categoría	Desarrollo Web Full-Stack
Versión	1.0.0 (Release Académico)
Estado	Completado ✅
Información Académica
Campo	Detalle
Institución Educativa	[Nombre de la Institución]
Facultad/Escuela	[Nombre de la Facultad]
Carrera/Programa	[Nombre de la Carrera]
Materia	Desarrollo Rápido de Aplicaciones
Código de Materia	[Código de Referencia]
Semestre/Año	[Semestre] / 2025
Modalidad	Presencial/Virtual/Híbrida
Responsables del Proyecto
Rol	Nombre	Responsabilidades
Estudiante Desarrollador	Jose Julian Vera Hernandez	Desarrollo completo, implementación, testing, documentación
Profesor Supervisor	Jose Alejandro Flores Hernandez	Supervisión académica, revisión técnica, evaluación final
Asesor Técnico	[Nombre si aplica]	Asesoría en aspectos técnicos específicos
Datos Cronológicos
Evento	Fecha	Duración
Inicio del Desarrollo	[Fecha de Inicio]	-
Fecha de Entrega	08/12/2025	-
Período de Desarrollo	[X] semanas	[X] horas totales
Horas de Desarrollo Estimadas	40-60 horas	Dedicación académica
🎯 DECLARACIÓN DE OBJETIVOS
2.1 Objetivo General

Desarrollar una aplicación web completa que implemente un servidor estático local capaz de consumir, procesar y visualizar datos de una API pública externa, demostrando competencia en el desarrollo full-stack utilizando tecnologías web modernas dentro del contexto de desarrollo rápido de aplicaciones.
2.2 Objetivos Específicos
Objetivos Técnicos

    Implementar un servidor web local utilizando Node.js y Express.js que sirva archivos estáticos y actúe como proxy para APIs externas

    Diseñar una arquitectura cliente-servidor que separe claramente las responsabilidades entre frontend y backend

    Consumir datos de una API REST pública (JSONPlaceholder) utilizando Fetch API tanto en cliente como servidor

    Desarrollar una interfaz de usuario responsiva utilizando W3.CSS para presentación de datos

    Implementar manejo robusto de errores y estados de carga para mejorar la experiencia de usuario

    Documentar exhaustivamente el proceso de desarrollo, decisiones técnicas y uso del sistema

Objetivos Académicos

    Demostrar comprensión de los principios de desarrollo web full-stack

    Aplicar metodologías de desarrollo rápido de aplicaciones

    Mostrar competencia en el uso de herramientas y tecnologías web modernas

    Desarrollar habilidades de documentación técnica y presentación de proyectos

    Evaluar críticamente decisiones de diseño y arquitectura

Objetivos Funcionales

    Permitir visualización de tres tipos de datos: usuarios, posts y comentarios

    Proporcionar interactividad mediante botones específicos para cada tipo de datos

    Mostrar datos organizados en tablas con información relevante y formateada

    Ofrecer feedback visual durante operaciones asíncronas (carga, éxito, error)

    Funcionar completamente offline una vez iniciado el servidor (excepto datos iniciales)

🔍 CONTEXTO TÉCNICO Y JUSTIFICACIÓN
3.1 Problemática Identificada

En el ámbito del desarrollo web educativo, los estudiantes frecuentemente enfrentan dificultades para:

    Comprender la comunicación entre cliente y servidor

    Configurar entornos de desarrollo local

    Consumir APIs externas evitando problemas de CORS

    Implementar interfaces responsivas con retroalimentación adecuada

    Documentar proyectos técnicos de manera completa

3.2 Justificación Técnica

Este proyecto aborda estas problemáticas mediante:

    Arquitectura proxy que soluciona problemas de CORS en desarrollo local

    Separación clara entre frontend y backend para facilitar comprensión

    Tecnologías modernas pero accesibles para estudiantes

    Documentación exhaustiva que sirve como referencia educativa

    Código comentado que explica decisiones técnicas

3.3 Relevancia Académica

El proyecto es relevante porque:

    Cubre múltiples competencias del programa de desarrollo rápido de aplicaciones

    Utiliza tecnologías demandadas en el mercado laboral actual

    Sirve como portfolio para el estudiante desarrollador

    Puede ser extendido para proyectos más complejos

    Demuestra ciclo completo de desarrollo de software

3.4 Innovación y Valor Añadido

Aunque el concepto es educativo, el proyecto incluye:

    Uso dual de Fetch API (tanto en cliente como servidor)

    Implementación de W3.CSS como alternativa a frameworks CSS complejos

    Arquitectura escalable que permite fácil extensión

    Enfoque en experiencia de usuario mediante estados de carga/error

    Documentación profesional que excede expectativas académicas

🏗️ ARQUITECTURA DEL SISTEMA
4.1 Diagrama de Arquitectura General
text

┌─────────────────────────────────────────────────────────────────────┐
│                          Ecosistema del Proyecto                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐    HTTP/HTTPS    ┌─────────────────────────┐  │
│  │   USUARIO       │◄────────────────►│   NAVEGADOR WEB         │  │
│  │   Final         │   Interacción    │   (Cliente)             │  │
│  └─────────────────┘      UI          │   • HTML5/W3.CSS        │  │
│                                        │   • JavaScript ES6+     │  │
│                                        │   • Fetch API           │  │
│                                        └──────────┬──────────────┘  │
│                                                   │                 │
│                                        HTTP Request/Response        │
│                                                   │                 │
│                                        ┌──────────▼──────────────┐  │
│                                        │   SERVIDOR EXPRESS      │  │
│                                        │   (Backend Local)       │  │
│                                        │   • Node.js Runtime     │  │
│                                        │   • Express.js Framework│  │
│                                        │   • CORS Middleware     │  │
│                                        │   • Static File Serving │  │
│                                        └──────────┬──────────────┘  │
│                                                   │                 │
│                                        HTTP Proxy Request           │
│                                                   │                 │
│                                        ┌──────────▼──────────────┐  │
│                                        │   API EXTERNA           │  │
│                                        │   JSONPlaceholder       │  │
│                                        │   • REST API Pública    │  │
│                                        │   • Datos de Prueba     │  │
│                                        │   • Sin autenticación   │  │
│                                        └─────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

4.2 Componentes Principales del Sistema
4.2.1 Cliente (Frontend)

    Responsabilidad: Interfaz de usuario y experiencia interactiva

    Tecnologías: HTML5, W3.CSS, JavaScript Vanilla, Fetch API

    Localización: Archivos estáticos en carpeta /public/

    Comunicación: HTTP requests al servidor local

4.2.2 Servidor (Backend)

    Responsabilidad: Servir archivos estáticos y actuar como proxy

    Tecnologías: Node.js, Express.js, CORS middleware

    Localización: server.js en raíz del proyecto

    Comunicación: HTTP con cliente y API externa

4.2.3 API Externa

    Responsabilidad: Proveer datos de prueba para la aplicación

    Servicio: JSONPlaceholder (jsonplaceholder.typicode.com)

    Tipo: API REST pública sin autenticación

    Datos: Usuarios, posts, comentarios, álbumes, fotos, todos

4.3 Patrones de Diseño Implementados
4.3.1 Patrón Cliente-Servidor

    Aplicación: Separación completa entre frontend y backend

    Ventajas: Escalabilidad, mantenibilidad, separación de responsabilidades

    Implementación:

        Cliente: Navegador web con JavaScript

        Servidor: Aplicación Node.js/Express

4.3.2 Patrón Proxy

    Aplicación: Servidor local actúa como intermediario para API externa

    Ventajas: Evita problemas CORS, permite caching, añade lógica de negocio

    Implementación: Endpoints /api/* que redirigen a JSONPlaceholder

4.3.3 Patrón Módulo

    Aplicación: Organización del código en archivos separados por responsabilidad

    Ventajas: Reusabilidad, testabilidad, mantenibilidad

    Implementación:

        server.js para lógica de servidor

        index.html para interfaz de usuario

        Separación clara de preocupaciones

4.3.4 Patrón Async/Await

    Aplicación: Manejo de operaciones asíncronas en JavaScript

    Ventajas: Código más legible, mejor manejo de errores

    Implementación: Uso extensivo de async/await con Fetch API

4.4 Flujos de Datos Detallados
4.4.1 Flujo de Carga Inicial
text

Secuencia:
1. Usuario ejecuta: node server.js
2. Servidor Express inicia en puerto 3000
3. Usuario abre navegador en http://localhost:3000
4. Navegador envía GET request a servidor
5. Express sirve index.html desde /public/
6. Navegador carga HTML, detecta dependencias CSS/JS
7. Navegador descarga W3.CSS desde CDN
8. Navegador descarga Font Awesome desde CDN
9. Navegador ejecuta JavaScript local
10. Interfaz se renderiza completamente

4.4.2 Flujo de Solicitud de Datos
text

Secuencia (ejemplo: Cargar Usuarios):
1. Usuario hace clic en "Cargar Usuarios"
2. Event listener ejecuta función cargarUsuarios()
3. Función muestra estado "cargando" en UI
4. Fetch API envía GET request a /api/users
5. Servidor recibe request en endpoint /api/users
6. Handler async ejecuta fetch a JSONPlaceholder
7. JSONPlaceholder responde con datos JSON
8. Servidor procesa respuesta, aplica transformaciones si es necesario
9. Servidor envía respuesta al cliente
10. Cliente recibe datos, oculta estado "cargando"
11. Cliente procesa datos, genera tabla HTML
12. Cliente inserta tabla en DOM
13. Cliente muestra estado "éxito" en UI

4.4.3 Flujo de Manejo de Errores
text

Secuencia (ejemplo: Error de red):
1. Usuario solicita datos
2. Fetch API intenta conexión
3. Error de red ocurre (timeout, no conexión)
4. Promise se rechaza con error
5. Catch block captura la excepción
6. UI muestra mensaje de error específico
7. Estado "cargando" se reemplaza por estado "error"
8. Opciones de reintento se presentan al usuario

🛠️ TECNOLOGÍAS Y HERRAMIENTAS
5.1 Stack Tecnológico Completo
5.1.1 Runtime y Entorno
Tecnología	Versión	Propósito	Alternativas Consideradas
Node.js	18.x o superior	Entorno de ejecución JavaScript server-side	Deno, Bun
npm	8.x o superior	Gestor de paquetes y dependencias	yarn, pnpm
5.1.2 Backend (Servidor)
Tecnología	Versión	Propósito	Justificación de Elección
Express.js	4.18.x	Framework web minimalista para Node.js	Minimalista, amplia adopción, documentación extensa
CORS	2.8.x	Middleware para Cross-Origin Resource Sharing	Necesario para desarrollo local, configuración simple
Fetch API	Native (Node 18+)	Cliente HTTP para solicitudes a API externa	Nativo en Node 18+, sin dependencias adicionales
5.1.3 Frontend (Cliente)
Tecnología	Versión	Propósito	Justificación de Elección
HTML5	Estándar	Estructura semántica de la página	Estándar web, accesibilidad, SEO
W3.CSS	4.15	Framework CSS responsivo y moderno	Ligero, responsivo, sin dependencias JavaScript
JavaScript	ES6+	Lógica de aplicación y manipulación DOM	Estándar, amplio soporte, async/await
Fetch API	Estándar	Comunicación asíncrona con servidor	Moderno, basado en promesas, nativo en navegadores
Font Awesome	6.4.0	Iconografía moderna y consistente	Amplia variedad, fácil implementación, CDN disponible
5.1.4 APIs y Servicios Externos
Servicio	Tipo	Propósito	Características
JSONPlaceholder	API REST pública	Fuente de datos de prueba para desarrollo	Gratuita, sin autenticación, datos realistas
W3Schools CDN	Content Delivery Network	Distribución de W3.CSS	Alta disponibilidad, baja latencia
Font Awesome CDN	Content Delivery Network	Distribución de iconos	Global, versionado, permanente
5.2 Herramientas de Desarrollo
5.2.1 Editores de Código

    Visual Studio Code (recomendado)

        Extensiones sugeridas:

            ESLint

            Prettier

            Live Server

            Node.js Extension Pack

    Sublime Text (alternativa)

    Atom (alternativa)

5.2.2 Herramientas de Línea de Comandos

    Terminal integrada de VS Code

    Git Bash (Windows)

    PowerShell (Windows)

    Terminal (macOS/Linux)

5.2.3 Navegadores para Testing

    Google Chrome (90+)

        Herramientas de desarrollo

        Network tab para debugging

        Console para JavaScript

    Mozilla Firefox (alternativa)

    Microsoft Edge (alternativa)

5.2.4 Herramientas de Control de Versiones

    Git (sistema de control de versiones)

    GitHub/GitLab (repositorios remotos opcionales)

5.3 Configuración del Entorno de Desarrollo
5.3.1 Requisitos Mínimos del Sistema
yaml

Hardware:
  Procesador: Intel i3 o equivalente (1.8 GHz+)
  Memoria RAM: 4 GB mínimo (8 GB recomendado)
  Almacenamiento: 5 GB espacio libre
  Conexión a Internet: Para descarga inicial de dependencias

Software:
  Sistema Operativo: Windows 10+, macOS 10.14+, Ubuntu 18.04+
  Node.js: Versión 18.0.0 o superior
  Navegador Web: Chrome 90+, Firefox 88+, Safari 14+
  Editor de Código: VS Code o equivalente

5.3.2 Verificación de Instalaciones
bash

# Verificar Node.js instalado correctamente
node --version
# Output esperado: v18.x.x o superior

# Verificar npm instalado correctamente
npm --version
# Output esperado: 8.x.x o superior

# Verificar git (opcional pero recomendado)
git --version
# Output: git version 2.x.x

5.3.3 Configuración Recomendada de VS Code
json

// settings.json para VS Code
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.autoSave": "afterDelay",
  "emmet.includeLanguages": {
    "javascript": "html"
  },
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
}

📁 ESTRUCTURA DEL PROYECTO
6.1 Estructura de Directorios Detallada
text

servidor-estatico-datafake/
│
├── 📄 server.js                    # Punto de entrada del servidor
├── 📄 package.json                 # Configuración del proyecto y dependencias
├── 📄 package-lock.json            # Lockfile de dependencias (generado automáticamente)
├── 📄 README.md                    # Este documento
├── 📄 .gitignore                   # Archivos a ignorar por Git (opcional)
│
├── 📁 public/                      # Archivos servidos estáticamente
│   ├── 📄 index.html               # Aplicación web principal
│   └── 🎨 style.css                # Estilos CSS personalizados (mínimos)
│
└── 📁 node_modules/                # Dependencias instaladas (NO se incluye en entrega)
    ├── 📁 express/                 # Framework web
    ├── 📁 cors/                    # Middleware CORS
    └── ... (otras dependencias)

6.2 Análisis de Cada Archivo
6.2.1 server.js - Servidor Principal
javascript

/**
 * SERVIDOR PRINCIPAL - server.js
 * 
 * Este archivo contiene la lógica completa del servidor backend.
 * Implementa un servidor Express que:
 * 1. Sirve archivos estáticos desde /public
 * 2. Actúa como proxy para JSONPlaceholder API
 * 3. Maneja errores y logging
 * 4. Configura CORS para desarrollo local
 * 
 * @author Jose Julian Vera Hernandez
 * @version 1.0.0
 * @date 08/12/2025
 */

// ==================== IMPORTACIONES ====================
// ES6 Modules syntax (Node.js soporta módulos ES6 desde v13)
import express from 'express';
import cors from 'cors';

// ==================== CONFIGURACIÓN ====================
// Crear instancia de aplicación Express
const app = express();

// Configurar puerto (3000 por defecto, pero puede ser sobrescrito por variable de entorno)
const PORT = process.env.PORT || 3000;

// ==================== MIDDLEWARE ====================
// Configurar CORS (Cross-Origin Resource Sharing)
// Permite que el frontend se comunique con el backend sin restricciones de origen
app.use(cors());

// Middleware para parsear JSON en solicitudes
// Convierte automáticamente cuerpos JSON a objetos JavaScript
app.use(express.json());

// Middleware para servir archivos estáticos
// Cualquier archivo en la carpeta /public será accesible directamente
app.use(express.static('public'));

// ==================== RUTAS DE API (PROXY) ====================
/**
 * GET /api/users
 * Proxy para obtener usuarios de JSONPlaceholder
 * 
 * @async
 * @route GET /api/users
 * @returns {Array} Lista de usuarios en formato JSON
 */
app.get('/api/users', async (req, res) => {
    try {
        // Realizar solicitud a API externa usando Fetch API nativo de Node.js
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Convertir respuesta a JSON
        const data = await response.json();
        
        // Enviar datos al cliente
        res.json(data);
    } catch (error) {
        // Manejo de errores: registrar y enviar respuesta de error
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ 
            error: 'Error al obtener usuarios',
            message: error.message 
        });
    }
});

/**
 * GET /api/posts
 * Proxy para obtener posts de JSONPlaceholder
 * 
 * @async
 * @route GET /api/posts
 * @returns {Array} Lista de posts en formato JSON
 */
app.get('/api/posts', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener posts:', error);
        res.status(500).json({ 
            error: 'Error al obtener posts',
            message: error.message 
        });
    }
});

/**
 * GET /api/comments
 * Proxy para obtener comentarios de JSONPlaceholder
 * 
 * @async
 * @route GET /api/comments
 * @returns {Array} Lista de comentarios en formato JSON
 */
app.get('/api/comments', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener comentarios:', error);
        res.status(500).json({ 
            error: 'Error al obtener comentarios',
            message: error.message 
        });
    }
});

// ==================== RUTAS DE APLICACIÓN ====================
/**
 * GET /
 * Ruta principal que sirve la aplicación web
 * 
 * @route GET /
 * @returns {File} Archivo index.html
 */
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

/**
 * GET *
 * Ruta comodín para Single Page Applications
 * Redirige todas las rutas no definidas a index.html
 * 
 * @route GET *
 * @returns {File} Archivo index.html
 */
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// ==================== MANEJO DE ERRORES ====================
// Middleware para rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        path: req.path,
        method: req.method
    });
});

// Middleware para errores del servidor (500)
app.use((err, req, res, next) => {
    console.error('Error interno del servidor:', err.stack);
    res.status(500).json({ 
        error: 'Error interno del servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Contacte al administrador'
    });
});

// ==================== INICIALIZACIÓN ====================
/**
 * Iniciar servidor HTTP
 * 
 * @listens PORT
 */
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado exitosamente`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`📁 Archivos estáticos: ./public/`);
    console.log(`🔌 Endpoints API:`);
    console.log(`   • http://localhost:${PORT}/api/users`);
    console.log(`   • http://localhost:${PORT}/api/posts`);
    console.log(`   • http://localhost:${PORT}/api/comments`);
    console.log(`⏰ Hora de inicio: ${new Date().toLocaleString()}`);
    console.log(`💡 Presione Ctrl+C para detener el servidor`);
});

6.2.2 package.json - Configuración del Proyecto
json

{
  "name": "servidor-estatico-datafake",
  "version": "1.0.0",
  "description": "Servidor web estático para visualización de datos de prueba usando JSONPlaceholder API",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js",
    "test": "echo \"No hay tests configurados\" && exit 0",
    "setup": "npm install",
    "clean": "rm -rf node_modules"
  },
  "keywords": [
    "express",
    "server",
    "static",
    "api",
    "jsonplaceholder",
    "w3css",
    "fetch-api",
    "academic-project"
  ],
  "author": "Jose Julian Vera Hernandez <jose.julian@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/josejulian/servidor-estatico-datafake.git"
  },
  "bugs": {
    "url": "https://github.com/josejulian/servidor-estatico-datafake/issues"
  },
  "homepage": "https://github.com/josejulian/servidor-estatico-datafake#readme",
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {},
  "private": true
}
6.2.3 public/index.html - Interfaz Principal
html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Aplicación web para visualizar datos de prueba de JSONPlaceholder API">
    <meta name="keywords" content="API, JSON, Fetch, Express, Node.js, W3.CSS">
    <meta name="author" content="Jose Julian Vera Hernandez">
    
    <title>Servidor Estático DataFake</title>
    
    <!-- W3.CSS Framework -->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Estilos personalizados mínimos -->
    <link rel="stylesheet" href="style.css">
    
    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📊</text></svg>">
</head>
<body class="w3-light-grey">

    <!-- Contenedor Principal -->
    <div class="w3-container w3-margin-top">
        
        <!-- Tarjeta Principal -->
        <div class="w3-card-4 w3-white main-card">
            
            <!-- Encabezado -->
            <header class="w3-container w3-blue w3-padding-16">
                <h1><i class="fas fa-database"></i> Servidor Estático DataFake</h1>
                <p class="w3-medium">Visualización de datos de prueba desde JSONPlaceholder API</p>
            </header>
            
            <!-- Cuerpo -->
            <div class="w3-container w3-padding-16">
                
                <!-- Panel Informativo -->
                <div class="w3-panel w3-blue w3-leftbar w3-border-blue w3-padding">
                    <h3><i class="fas fa-info-circle"></i> Instrucciones</h3>
                    <p>Esta aplicación obtiene datos en tiempo real desde <a href="https://jsonplaceholder.typicode.com" target="_blank" class="w3-text-light-grey w3-hover-text-white">JSONPlaceholder</a>, una API REST pública para desarrollo y pruebas. Selecciona el tipo de datos que deseas visualizar:</p>
                </div>
                
                <!-- Controles -->
                <div class="w3-bar w3-margin-bottom">
                    <button class="w3-button w3-green w3-bar-item w3-margin-right w3-round-large" onclick="cargarUsuarios()">
                        <i class="fas fa-users"></i> Usuarios
                    </button>
                    <button class="w3-button w3-blue w3-bar-item w3-margin-right w3-round-large" onclick="cargarPosts()">
                        <i class="fas fa-file-alt"></i> Posts
                    </button>
                    <button class="w3-button w3-purple w3-bar-item w3-round-large" onclick="cargarComentarios()">
                        <i class="fas fa-comments"></i> Comentarios
                    </button>
                </div>
                
                <!-- Área de Mensajes -->
                <div id="mensaje" class="w3-margin-top"></div>
                
                <!-- Contenido Dinámico -->
                <div id="contenido" class="w3-margin-top">
                    <div class="w3-panel w3-light-blue w3-leftbar w3-border-blue">
                        <h4><i class="fas fa-hand-point-up"></i> Listo para comenzar</h4>
                        <p>Haz clic en cualquiera de los botones de arriba para cargar datos. Los resultados se mostrarán en esta área.</p>
                    </div>
                </div>
                
            </div>
            
            <!-- Pie de Página -->
            <footer class="w3-container w3-light-grey w3-padding-16">
                <div class="w3-row">
                    <div class="w3-half">
                        <p class="w3-small">
                            <i class="fas fa-code"></i> <strong>Tecnologías:</strong> Node.js, Express, Fetch API, W3.CSS
                        </p>
                    </div>
                    <div class="w3-half w3-right-align">
                        <p class="w3-small">
                            <i class="fas fa-user-graduate"></i> <strong>Estudiante:</strong> Jose Julian Vera Hernandez
                        </p>
                        <p class="w3-small">
                            <i class="fas fa-chalkboard-teacher"></i> <strong>Materia:</strong> Desarrollo Rápido de Aplicaciones
                        </p>
                    </div>
                </div>
            </footer>
            
        </div>
        
    </div>

    <!-- Script de la Aplicación -->
    <script>
        /**
         * LÓGICA DE LA APLICACIÓN CLIENTE
         * 
         * Este script maneja toda la interactividad del frontend.
         * Utiliza Fetch API para comunicarse con el servidor local.
         */
        
        // ==================== FUNCIONES DE UTILIDAD ====================
        
        /**
         * Muestra un mensaje en la interfaz
         * @param {string} texto - Texto del mensaje
         * @param {string} tipo - Tipo: 'cargando', 'exito', 'error'
         */
        function mostrarMensaje(texto, tipo) {
            const mensajeDiv = document.getElementById('mensaje');
            let clase = 'w3-panel ';
            let icono = 'fa-info-circle';
            
            switch(tipo) {
                case 'cargando':
                    clase += 'w3-blue w3-leftbar w3-border-blue';
                    icono = 'fa-spinner fa-spin';
                    break;
                case 'error':
                    clase += 'w3-red w3-leftbar w3-border-red';
                    icono = 'fa-exclamation-triangle';
                    break;
                case 'exito':
                    clase += 'w3-green w3-leftbar w3-border-green';
                    icono = 'fa-check-circle';
                    break;
            }
            
            mensajeDiv.innerHTML = `
                <div class="${clase}">
                    <p><i class="fas ${icono}"></i> ${texto}</p>
                </div>
            `;
        }
        
        /**
         * Formatea un número con separadores de miles
         * @param {number} numero - Número a formatear
         * @returns {string} Número formateado
         */
        function formatearNumero(numero) {
            return numero.toLocaleString('es-ES');
        }
        
        // ==================== FUNCIONES PRINCIPALES ====================
        
        /**
         * Carga y muestra los usuarios
         */
        async function cargarUsuarios() {
            try {
                mostrarMensaje('Cargando usuarios...', 'cargando');
                
                const respuesta = await fetch('/api/users');
                
                if (!respuesta.ok) {
                    throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
                }
                
                const usuarios = await respuesta.json();
                
                let html = `
                    <div class="w3-card w3-white w3-margin-top">
                        <header class="w3-container w3-green">
                            <h3><i class="fas fa-users"></i> Usuarios (${formatearNumero(usuarios.length)})</h3>
                        </header>
                        <div class="w3-container w3-responsive">
                            <table class="w3-table-all w3-hoverable">
                                <tr class="w3-green">
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Ciudad</th>
                                    <th>Compañía</th>
                                </tr>
                `;
                
                usuarios.forEach(usuario => {
                    html += `
                        <tr>
                            <td><span class="w3-badge w3-green">${usuario.id}</span></td>
                            <td><strong>${usuario.name}</strong><br>
                                <small class="w3-text-grey">@${usuario.username}</small>
                            </td>
                            <td>${usuario.email}</td>
                            <td>${usuario.address.city}</td>
                            <td>${usuario.company.name}</td>
                        </tr>
                    `;
                });
                
                html += `</table></div></div>`;
                document.getElementById('contenido').innerHTML = html;
                mostrarMensaje(`${usuarios.length} usuarios cargados exitosamente`, 'exito');
                
            } catch (error) {
                mostrarMensaje(`Error al cargar usuarios: ${error.message}`, 'error');
                console.error('Error:', error);
            }
        }
        
        /**
         * Carga y muestra los posts
         */
        async function cargarPosts() {
            try {
                mostrarMensaje('Cargando posts...', 'cargando');
                
                const respuesta = await fetch('/api/posts');
                
                if (!respuesta.ok) {
                    throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
                }
                
                const posts = await respuesta.json();
                
                let html = `
                    <div class="w3-card w3-white w3-margin-top">
                        <header class="w3-container w3-blue">
                            <h3><i class="fas fa-file-alt"></i> Posts (${formatearNumero(posts.length)})</h3>
                        </header>
                        <div class="w3-container w3-responsive">
                            <table class="w3-table-all w3-hoverable">
                                <tr class="w3-blue">
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th>Usuario ID</th>
                                    <th>Contenido</th>
                                </tr>
                `;
                
                posts.slice(0, 15).forEach(post => {
                    html += `
                        <tr>
                            <td><span class="w3-badge w3-blue">${post.id}</span></td>
                            <td><strong>${post.title}</strong></td>
                            <td>${post.userId}</td>
                            <td><small>${post.body.substring(0, 50)}...</small></td>
                        </tr>
                    `;
                });
                
                html += `</table></div>`;
                
                if (posts.length > 15) {
                    html += `
                        <div class="w3-container w3-light-grey w3-padding">
                            <p class="w3-small"><i class="fas fa-info-circle"></i> Mostrando 15 de ${formatearNumero(posts.length)} posts</p>
                        </div>
                    `;
                }
                
                html += `</div>`;
                document.getElementById('contenido').innerHTML = html;
                mostrarMensaje(`${posts.length} posts cargados exitosamente`, 'exito');
                
            } catch (error) {
                mostrarMensaje(`Error al cargar posts: ${error.message}`, 'error');
                console.error('Error:', error);
            }
        }
        
        /**
         * Carga y muestra los comentarios
         */
        async function cargarComentarios() {
            try {
                mostrarMensaje('Cargando comentarios...', 'cargando');
                
                const respuesta = await fetch('/api/comments');
                
                if (!respuesta.ok) {
                    throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
                }
                
                const comentarios = await respuesta.json();
                
                let html = `
                    <div class="w3-card w3-white w3-margin-top">
                        <header class="w3-container w3-purple">
                            <h3><i class="fas fa-comments"></i> Comentarios (${formatearNumero(comentarios.length)})</h3>
                        </header>
                        <div class="w3-container w3-responsive">
                            <table class="w3-table-all w3-hoverable">
                                <tr class="w3-purple">
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Post ID</th>
                                    <th>Comentario</th>
                                </tr>
                `;
                
                comentarios.slice(0, 12).forEach(comentario => {
                    html += `
                        <tr>
                            <td><span class="w3-badge w3-purple">${comentario.id}</span></td>
                            <td>${comentario.name}</td>
                            <td>${comentario.email}</td>
                            <td>${comentario.postId}</td>
                            <td><small>${comentario.body.substring(0, 40)}...</small></td>
                        </tr>
                    `;
                });
                
                html += `</table></div>`;
                
                if (comentarios.length > 12) {
                    html += `
                        <div class="w3-container w3-light-grey w3-padding">
                            <p class="w3-small"><i class="fas fa-info-circle"></i> Mostrando 12 de ${formatearNumero(comentarios.length)} comentarios</p>
                        </div>
                    `;
                }
                
                html += `</div>`;
                document.getElementById('contenido').innerHTML = html;
                mostrarMensaje(`${comentarios.length} comentarios cargados exitosamente`, 'exito');
                
            } catch (error) {
                mostrarMensaje(`Error al cargar comentarios: ${error.message}`, 'error');
                console.error('Error:', error);
            }
        }
        
        // Inicialización
        window.addEventListener('load', () => {
            console.log('Aplicación cargada y lista');
        });
    </script>
</body>
</html>
