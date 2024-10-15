# Red Light, Green Light una prueba técnica para BBVA Tech

## Introducción

Introduce un nombre de usuario válido (solo carácteres alfanumericos sin espacios) y presiona el botón de "Start" para comenzar a jugar. El juego consiste en avanzar mediante los botones de paso a la derecha (Step Right) y paso a la izquierda (Step Left), pero solo puede hacerlo cuando el semáforo está en verde. Si el semáforo se pone en rojo, el jugador debe detenerse. Si el jugador se mueve cuando el semáforo está en rojo, perderá todos sus puntos, del mismo modo si el semaforo esta en verde y da dos pasos o más con el mismo pie (mismo botón) se le descuenta un punto por cada error cometido.

## Carácteristicas

- El juego cuenta con modo Light y Dark que responde a la configuración de tu sistema operativo.
- El juego cuenta con un sistema de semaforo basado en las letras Red Light, Green Light, cuando estas letras se "encienden" el jugador puede moverse o detenerse, además cuentan con una bonita animación de espiral.
- El jugador también experimentará una vibración del dispositivo cuando se mueva cuando el semáforo está en rojo.
- El juego es una WPA (Aplicación Web Progresiva) por lo que puedes instalarlo en tu dispositivo y jugarlo sin conexión a internet.

## Tecnologías utilizadas

Para la realización de este proyecto se utilizaron las siguientes tecnologías:

- HTML
- CSS (SASS) Siguiendo la metodología BEM.
- JavaScript con TypeScript
- React
- React Router
- React Hooks (Se han utilizado los hooks como servicios para la gestión de la lógica de negocio y seguir un enfoque de programación funcional mas "React")
- Vite (Bundler)
- Jest y Testing Library (Unit Testing)
- ESLint y Prettier (Linting y formateo de código)

## Instalación

Para instalar el proyecto, se debe clonar el repositorio y luego instalar las dependencias con el siguiente comando:

```bash
npm install
```

## Ejecución en local

Para ejecutar el proyecto en local, se debe ejecutar el siguiente comando:

```bash
npm run dev
```

## Ejecución de pruebas

Para ejecutar las pruebas unitarias, se debe ejecutar el siguiente comando:

```bash
npm run test
```

## Demo

Para ver una demo del proyecto, se puede acceder al siguiente enlace: [Demo](https://red-light-green-light-jesus-mur.vercel.app/)
