# frontJS
🧩 SPA Artesanal con JavaScript Puro (Sin Frameworks)
Este proyecto es una Single Page Application (SPA) construida completamente sin frameworks (React, Vue, Angular, Svelte…), usando solo:
HTML estático, CSS básico, JavaScript nativo (ES Modules), Fetch API para consumir una API REST con JWT
Un router manual basado en history.pushState
Componentes hechos “a mano” como funciones JS.
La intención NO es competir con ningún framework ni hacer una arquitectura final para producción.
El objetivo principal es entender desde cero lo que realmente hace un framework por nosotros.

🎯 Objetivo del Proyecto
Este repositorio sirve como ejercicio educativo para comprender:
Cómo crear componentes dinámicos sin React/Vue.
Cómo generar HTML dinámico con JS puro.
Cómo manejar rutas de manera manual en un SPA.
Cómo gestionar estado (login, token, usuario) sin librerías.
Cómo manipular el DOM sin virtual DOM.
Lo extremadamente repetitivo que es todo esto sin un framework. 😅
En otras palabras:
➡️ Mostrar la base, el “motor”, antes de usar herramientas modernas.

🧠 ¿Qué se aprende aquí?
Por qué actualizar el DOM a mano se vuelve difícil al crecer la app.
Por qué frameworks implementan componentes, reactividad, routing, gestión de estado, etc.
Cómo una SPA empieza a necesitar módulos, estructuras, componentes, eventos personalizados…
Y cómo sin darte cuenta terminas rehaciendo mini-versiones de cosas que ya están resueltas en React/Vue/Angular.

⚠️ Conclusión Importante
Este proyecto demuestra que:
Hacer una SPA artesanal es totalmente posible… pero se vuelve engorrosa, repetitiva e insostenible a medida que crece.
Para una app pequeña como esta (home, login, users), ya aparecen problemas típicos:
Mucho código repetido
Gestionar el DOM manualmente
Eventos difíciles de mantener
Lógica distribuida y fragmentada
Falta de reactividad
Necesidad de crear un pseudo-router
Componentes que se regeneran y pierden eventos
Esto es justamente lo que los frameworks modernos resuelven desde el día 1.

🧪 Tecnologías usadas
JavaScript ES Modules, HTML + CSS, Fetch API, API REST con JWT, Eventos personalizados
Manipulación directa del DOM
history.pushState para navegación SPA

🗂️ Estructura Breve
app.js → Core de la SPA, router manual y manejo de eventos
components/ → “Componentes” hechos a mano (home.js, login.js, users.js)
events/ → Eventos de UI (ej: loginEvents.js)
/public → CSS, imágenes, assets

📝 Propósito Final
Este proyecto no busca ser perfecto, sino didáctico.
Si estás aprendiendo cómo funcionan realmente las SPA por dentro, este repo es un buen punto de partida para:

✔ ver cómo comunicarte con un backend
✔ gestionar tokens
✔ renderizar contenido dinámico
✔ manejar navegación sin recargar la página
✔ entender por qué existen los frameworks

Cuando este tipo de código empieza a volverse difícil de mantener…
señal de que estás listo para dar el salto a React, Vue o Angular.

🔌 Backend Requerido (API REST con JWT)
Esta SPA artesanal consume una API REST que maneja:
Registro y autenticación de usuarios
Generación y validación de tokens JWT
Listado de usuarios
Protección de rutas mediante autorización
Respuestas JSON estándar para consumo vía fetch
El backend está construido en Node.js + Express + MySQL, y es completamente open source para practicar o modificar.

👉 Repositorio del backend:
https://github.com/lesaygit/ndjsUserToken
git clone https://github.com/lesaygit/ndjsUserToken.git


👤 Autor
Yasel González Ortiz
Ingeniero en Programación
Graduado en la Universidad de Matanzas “Camilo Cienfuegos”
Año de graduación: 2013