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

    Fetch API (para comunicación con internet)

    W3.CSS (framework de diseño)

¿Qué es este proyecto?

Este proyecto es una aplicación web completa que funciona en tu propia computadora. Es como un pequeño sitio web personal que puedes abrir en tu navegador, pero en lugar de estar en internet, corre directamente en tu máquina.

La aplicación demuestra cómo crear un servidor web local que obtiene datos de internet y los muestra de manera organizada en una interfaz web simple y atractiva.
La idea principal es simple:

    Tienes un programa servidor que se ejecuta en tu computadora

    Tienes una página web que ves en el navegador

    La página web pide datos a internet (a un servicio llamado JSONPlaceholder)

    Los datos se muestran en tablas organizadas y bonitas

¿Por qué se llama "DataFake"?

Porque usa datos "falsos" o de prueba. No son datos reales de personas, sino información de ejemplo que sirve para practicar y aprender. Estos datos vienen de JSONPlaceholder, una API pública que proporciona datos de prueba para desarrolladores.
¿Qué hace exactamente el proyecto?

Cuando abres la aplicación, ves una página con tres botones grandes y coloridos. Cada botón tiene una función específica:
Botón 1: "Usuarios" (Color verde)

    Muestra una lista de 10 personas de ejemplo

    Para cada persona muestra información detallada:

        Nombre completo

        Nombre de usuario

        Dirección de email

        Ciudad donde vive

        Compañía donde trabaja

    Los datos están organizados en una tabla con columnas claras

Botón 2: "Posts" (Color azul)

    Muestra publicaciones o artículos de ejemplo

    Hay 100 posts disponibles, pero la aplicación muestra solo los primeros 15 para no saturar la pantalla

    Para cada post se muestra:

        Título del post

        ID del usuario que lo escribió

        Un pequeño fragmento del contenido

    Al final de la tabla hay un mensaje indicando cuántos posts hay en total

Botón 3: "Comentarios" (Color morado)

    Muestra comentarios que personas hacen en los posts

    Hay 500 comentarios disponibles, pero se muestran solo los primeros 12

    Para cada comentario se muestra:

        Nombre de quien comenta

        Su dirección de email

        ID del post al que pertenece el comentario

        Un fragmento del comentario

¿Cómo funciona por dentro?

El proyecto está dividido en dos partes principales que trabajan juntas:
Parte 1: El Servidor (Backend)

Este es el programa que corre en tu computadora. Se llama server.js y hace tres cosas importantes:

1. Sirve los archivos de la página web
Cuando abres el navegador y vas a http://localhost:3000, el servidor envía los archivos HTML, CSS y JavaScript que forman la página web.

2. Actúa como intermediario
El servidor se comunica con internet por ti. Cuando tu página web quiere datos, no los pide directamente a JSONPlaceholder, sino que se los pide al servidor, y el servidor se los pide a JSONPlaceholder.

3. Obtiene y procesa datos
El servidor sabe cómo hablar con JSONPlaceholder, obtiene los datos en formato crudo, y los prepara para que tu página web los pueda entender y mostrar fácilmente.
Parte 2: La Página Web (Frontend)

Esta es la parte que ves en el navegador. Está en el archivo index.html y hace tres cosas:

1. Muestra la interfaz de usuario
Presenta los botones, títulos, mensajes y áreas donde aparecerán los datos. Todo está diseñado para ser fácil de usar y entender.

2. Maneja la interacción del usuario
Cuando haces clic en un botón, el JavaScript detecta ese clic y ejecuta la función correspondiente. Por ejemplo, si haces clic en "Usuarios", ejecuta la función cargarUsuarios().

3. Muestra los datos obtenidos
Cuando llegan los datos del servidor, el JavaScript los toma y crea tablas HTML dinámicamente. Luego inserta esas tablas en la página para que tú las puedas ver.
¿Por qué necesita un servidor intermedio?

Esta es una parte técnica importante que vale la pena entender:
El problema de seguridad

Los navegadores web tienen reglas de seguridad muy estrictas. Una de estas reglas se llama CORS (Cross-Origin Resource Sharing), que en español significa "Compartición de Recursos entre Orígenes Cruzados".

Esta regla dice básicamente: "Una página web de un sitio (por ejemplo, localhost) no puede pedir datos a otro sitio (por ejemplo, jsonplaceholder.typicode.com) a menos que ese otro sitio lo permita explícitamente."
Por qué existe esta regla

Esta regla existe por seguridad. Imagina que visitas un sitio web malicioso. Sin esta regla, ese sitio podría intentar acceder a tus datos en otros sitios (como tu banco, tu email, etc.). CORS evita este tipo de ataques.
Nuestra solución

Nuestro servidor actúa como intermediario autorizado:

    Tu navegador (en localhost:3000) SÍ puede hablar con tu servidor (también en localhost:3000) porque están en el mismo origen

    Tu servidor SÍ puede hablar con JSONPlaceholder porque no está sujeto a las reglas CORS de los navegadores

    Así obtenemos los datos sin violar las reglas de seguridad

Es como si tuvieras un amigo que puede entrar a un edificio restringido. Tú no puedes entrar, pero le pides a tu amigo que entre, traiga lo que necesitas, y te lo dé fuera del edificio.
Instalación Paso a Paso
Prepara tu computadora

Antes de empezar, necesitas tener instalado Node.js. Node.js es como un "motor" que permite ejecutar programas de JavaScript fuera del navegador.

    La estructura debería verse así:
    text

tu-carpeta/
├── server.js
├── package.json
└── public/
    ├── index.html

Instala las dependencias

Las "dependencias" son herramientas adicionales que necesita el proyecto para funcionar. En nuestro caso necesitamos dos:

    Express: Esta es la herramienta que nos permite crear el servidor web fácilmente

    CORS: Esta herramienta soluciona los problemas de comunicación entre el navegador y el servidor

Cómo instalarlas:

    Abre la terminal o símbolo del sistema

    Navega hasta la carpeta de tu proyecto:
    text

cd ruta/a/tu/carpeta/servidor-datafake

Escribe el siguiente comando:

npm install

Qué pasa cuando ejecutas npm install:

    npm (Node Package Manager) lee el archivo package.json

    Ve que necesitamos Express y CORS

    Descarga estas herramientas de internet

    Las guarda en una nueva carpeta llamada node_modules

    Crea un archivo llamado package-lock.json que registra exactamente qué versiones se instalaron

Ejecuta el servidor

Una vez instaladas las dependencias, estás listo para iniciar el servidor:

    Asegúrate de que todavía estás en la carpeta del proyecto en la terminal

    Escribe el siguiente comando:

node server.js

Deberías ver un mensaje como este:

Servidor iniciado en: http://localhost:3000

Qué significa esto:

    localhost significa "esta computadora"

    3000 es el "puerto" donde el servidor está escuchando

    Juntos, localhost:3000 es la dirección donde puedes encontrar tu aplicación

Abre la aplicación

    Abre tu navegador web favorito (Chrome, Firefox, Edge, Safari, etc.)

    En la barra de direcciones (donde normalmente escribes "google.com"), escribe:

http://localhost:3000

    Presiona Enter

¡Listo! Ahora deberías ver la aplicación funcionando. Verás el título "Servidor Estático DataFake" y tres botones de colores.

Nota importante: No cierres la terminal donde ejecutaste node server.js. Si la cierras, el servidor se detendrá y la aplicación dejará de funcionar. Puedes minimizarla, pero no cerrarla.
Archivos del Proyecto Explicados

El proyecto tiene solo unos pocos archivos, pero cada uno tiene un propósito específico y importante:
1. package.json - La "receta" del proyecto

Este archivo es como la receta de cocina del proyecto. Le dice a Node.js exactamente qué ingredientes necesita y cómo prepararlos.

Contenido típico de package.json:
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

Explicación de cada parte:

    name: El nombre del proyecto. Puede ser cualquier nombre que quieras, pero sin espacios.

    version: La versión del proyecto. "1.0.0" significa que es la primera versión completa.

    main: El archivo principal que se ejecuta cuando inicias el proyecto. En nuestro caso es server.js.

    scripts: Comandos que puedes ejecutar fácilmente. Por ejemplo, en lugar de escribir node server.js, podrías escribir npm start.

    dependencies: La lista de herramientas que necesita el proyecto. Cada herramienta tiene un nombre y una versión.

2. server.js - El cerebro del proyecto

Este es el archivo más importante. Contiene todo el código que hace funcionar el servidor.

Las partes principales del server.js:

Importar herramientas:
Al inicio del archivo, importamos las herramientas que necesitamos. Es como decir "voy a usar estas herramientas en mi proyecto".

Crear la aplicación:
Creamos una nueva aplicación Express. Piensa en esto como crear una nueva "casa" para nuestro servidor web.

Configurar middleware:
El "middleware" son funciones que se ejecutan automáticamente cuando llega una petición. Configuramos tres:

    CORS: Permite que el navegador se comunique con el servidor

    JSON parser: Convierte datos JSON a objetos JavaScript

    Static files: Hace que los archivos en la carpeta public sean accesibles

Definir rutas:
Las "rutas" son como direcciones dentro de nuestro servidor. Tenemos tres rutas principales:

    /api/users - Para obtener usuarios

    /api/posts - Para obtener posts

    /api/comments - Para obtener comentarios

Cada ruta hace básicamente lo mismo:

    Recibe una petición del navegador

    Va a internet a buscar datos de JSONPlaceholder

    Espera a que lleguen los datos

    Los envía de vuelta al navegador

Manejar errores:
También tenemos código para manejar errores. Por ejemplo, si alguien trata de acceder a una ruta que no existe, el servidor responde con un mensaje de error claro.

Iniciar el servidor:
Finalmente, le decimos al servidor que empiece a escuchar en el puerto 3000. Una vez hecho esto, el servidor está "despierto" y listo para atender peticiones.
3. public/index.html - Lo que ves en el navegador

Este archivo contiene toda la página web que ves cuando abres la aplicación.

Estructura básica de index.html:

La cabecera (head):
Aquí van todas las configuraciones y enlaces a recursos externos:

    El título que aparece en la pestaña del navegador

    Los enlaces a W3.CSS (para estilos) y Font Awesome (para iconos)

    La configuración para que la página se vea bien en móviles

El cuerpo (body):
Aquí va todo el contenido visible:

    El encabezado con el título

    Los tres botones principales

    El área de mensajes (donde aparece "Cargando...")

    El área de contenido (donde aparecen las tablas)

    El pie de página

El script:
Al final del archivo hay un gran bloque de código JavaScript. Este código es el que hace que los botones funcionen. Contiene tres funciones principales:

    cargarUsuarios() - Se ejecuta al hacer clic en el botón Usuarios

    cargarPosts() - Se ejecuta al hacer clic en el botón Posts

    cargarComentarios() - Se ejecuta al hacer clic en el botón Comentarios

Cada función hace lo mismo básicamente:

    Muestra un mensaje "Cargando..."

    Pide datos al servidor

    Espera la respuesta

    Crea una tabla con los datos

    Muestra la tabla en la página

    Muestra un mensaje de éxito o error

4. public/style.css - Los toques finales de diseño

Aunque usamos W3.CSS para la mayoría de los estilos, este archivo contiene algunos estilos personalizados para hacer que la aplicación se vea aún mejor.

Contenido típico de style.css:

Estilos para la tarjeta principal:
Hace que la tarjeta que contiene toda la aplicación tenga bordes redondeados y una sombra suave.

Mejoras para las tablas:
Ajusta el espaciado dentro de las tablas para que se vean más compactas y profesionales.

Responsividad:
Asegura que la aplicación se vea bien en teléfonos móviles. Por ejemplo, en pantallas pequeñas, los botones se apilan verticalmente en lugar de estar uno al lado del otro.

Animaciones:
Agrega animaciones sutiles, como un efecto de "fade in" cuando aparecen los datos.
Cómo usar la aplicación
Primer uso:

    Abre la terminal en la carpeta del proyecto

    Escribe: node server.js

    Abre tu navegador en http://localhost:3000

    Verás la página con tres botones coloridos

Para probar cada función:

Ver usuarios:

    Haz clic en el botón verde que dice "Usuarios"

    Inmediatamente verás un mensaje azul que dice "Cargando usuarios..."

    Después de 1-2 segundos, el mensaje azul desaparece y aparece una tabla

    La tabla tiene 10 filas (una por cada usuario) y 5 columnas:

        ID (un número verde)

        Nombre (nombre completo y nombre de usuario)

        Email (dirección de correo electrónico)

        Ciudad (ciudad donde vive)

        Compañía (empresa donde trabaja)

Ver posts:

    Haz clic en el botón azul que dice "Posts"

    Verás el mensaje "Cargando posts..."

    Aparece una tabla con publicaciones

    La tabla tiene hasta 15 filas (de 100 disponibles) y 4 columnas:

        ID (un número azul)

        Título (título del post)

        Usuario ID (quién escribió el post)

        Contenido (un fragmento del texto)

    Debajo de la tabla hay un mensaje que dice "Mostrando 15 de 100 posts"

Ver comentarios:

    Haz clic en el botón morado que dice "Comentarios"

    Verás el mensaje "Cargando comentarios..."

    Aparece una tabla con comentarios

    La tabla tiene hasta 12 filas (de 500 disponibles) y 5 columnas:

        ID (un número morado)

        Nombre (quién hizo el comentario)

        Email (correo del comentarista)

        Post ID (a qué post pertenece)

        Comentario (un fragmento del comentario)

    Debajo de la tabla hay un mensaje que dice "Mostrando 12 de 500 comentarios"

Mensajes que verás durante el uso:

    💙 Mensaje azul: Aparece cuando estás esperando datos. Dice "Cargando..." con un ícono que gira. Significa que la aplicación está trabajando para obtener los datos de internet.

    💚 Mensaje verde: Aparece cuando todo sale bien. Dice algo como "10 usuarios cargados exitosamente" con un ícono de check. Significa que los datos llegaron correctamente y se mostraron.

    ❤️ Mensaje rojo: Aparece cuando algo sale mal. Dice algo como "Error al cargar usuarios: No se pudo conectar". Significa que hubo un problema, usualmente de conexión a internet.
    
Conceptos Técnicos Importantes (Explicados Simple)
1. ¿Qué es un servidor web?

Un servidor web es un programa que "sirve" páginas web. Piensa en él como un mesero en un restaurante:

    Tú (el cliente) pides algo (abres una página web)

    El mesero (servidor) toma tu pedido

    Va a la cocina (procesa la petición)

    Te trae lo que pediste (envía la página web)

En nuestro caso, el "restaurante" es tu propia computadora.
2. ¿Qué es Node.js?

Node.js es un "motor" que permite ejecutar código JavaScript fuera del navegador. Normalmente, JavaScript solo corre en navegadores (como Chrome o Firefox). Node.js permite que JavaScript también corra en servidores.

Es como si un actor que solo trabajaba en teatro (navegador) ahora pudiera también trabajar en cine (servidor).
3. ¿Qué es Express.js?

Express.js es una "herramienta" para Node.js que hace más fácil crear servidores web. Sin Express, crear un servidor web sería mucho más complicado (como construir una casa sin herramientas eléctricas).

Express nos da funciones pre-hechas para:

    Manejar rutas (como /api/users)

    Servir archivos estáticos

    Procesar datos que vienen del navegador

    Enviar respuestas al navegador

4. ¿Qué es Fetch API?

Fetch API es la forma moderna de pedir datos en JavaScript. Antes se usaba algo llamado XMLHttpRequest que era más complicado.

Fetch funciona con "promesas", que son como decir:
"Te prometo que voy a traer estos datos. Mientras tanto, puedes hacer otras cosas. Cuando los tenga, te aviso."

Esto es importante porque pedir datos de internet puede tomar tiempo (segundos), y no queremos que toda la aplicación se "congele" mientras espera.
5. ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato para datos. Es una manera de escribir información que tanto las computadoras como los humanos pueden entender.

Resumen Final

Este proyecto "Servidor Estático DataFake" es más que solo código funcionando. Es una demostración práctica de múltiples conceptos importantes en el desarrollo web moderno.
Lo que el proyecto demuestra:

    Capacidad técnica: Cómo crear una aplicación web completa desde cero

    Comprensión arquitectónica: Entendimiento de la relación cliente-servidor

    Habilidades de programación: Uso de JavaScript moderno, manejo asíncrono, APIs

    Atención al usuario: Diseño de interfaces usables con buen feedback

    Profesionalismo: Organización, documentación, manejo de errores
