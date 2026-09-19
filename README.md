# Rick and Morty Explorer

Aplicación web desarrollada con React y TypeScript que consume la API pública de Rick and Morty. Permite descubrir personajes, buscarlos, consultar su información detallada, guardarlos como favoritos y reintentar la petición cuando ocurre un error.

## Funcionalidades

- Listado de al menos 20 personajes con información básica.
- Estados de carga, error, sin resultados y éxito.
- Búsqueda controlada con un retardo de 400 ms.
- Vista detallada de cada personaje.
- Selección de favoritos con contador.
- Persistencia de favoritos mediante `localStorage`.
- Reintento de la petición sin recargar la página.

## Tecnologías

- React
- TypeScript
- Vite
- CSS
- Fetch API
- Rick and Morty API

## Requisitos previos

Para ejecutar el proyecto se necesita:

- Node.js instalado.
- npm, incluido con Node.js.
- Git para clonar el repositorio.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/ljaramillocanas/EL1_RYCKANDMORTYEXPLORER_ANONYMOUS.git
```

Entra en la carpeta del proyecto:

```bash
cd EL1_RYCKANDMORTYEXPLORER_ANONYMOUS
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre en el navegador la dirección que muestre la terminal. Normalmente será:

```text
http://localhost:5173
```

## Validaciones

Comprueba que el proyecto compile correctamente:

```bash
npm run build
```

Ejecuta la revisión de estilo y calidad:

```bash
npm run lint
```

Para revisar localmente la versión compilada:

```bash
npm run preview
```

## Estructura principal

```text
src/
|-- components/  Componentes visuales de listado, búsqueda, detalle, favoritos y error
|-- types/       Interfaces y tipos de TypeScript
|-- App.tsx      Estado principal y coordinación de funcionalidades
|-- app.css      Estilos generales de la aplicación
`-- main.tsx     Punto de entrada de React
```

## API utilizada

El proyecto consume la API pública de Rick and Morty:

https://rickandmortyapi.com/api/character

No se necesita una clave de API ni configurar variables de entorno.

## Flujo de trabajo

Cada requisito funcional se desarrolla en una rama `feature/rfXX-descripcion` y se integra mediante un Pull Request hacia `develop`. La versión completa y revisada se fusiona desde `develop` hacia `main` mediante un Pull Request final.

## Integrantes

- Santiago Arenas - [@arenasantiago](https://github.com/arenasantiago)
- Julián Agredo - [@JulianKZz](https://github.com/JulianKZz)
- Luis Fernando Jaramillo - [@ljaramillocanas](https://github.com/ljaramillocanas)

## Documentación del trabajo

- `Bitacora.md`: registro diario del trabajo, dificultades, soluciones y commits.
- `DECLARACION-IA.md`: registro del uso de herramientas de inteligencia artificial.
- `.github/pull_request_template.md`: ubicación requerida para la plantilla de los Pull Requests; debe agregarse antes de la entrega.
