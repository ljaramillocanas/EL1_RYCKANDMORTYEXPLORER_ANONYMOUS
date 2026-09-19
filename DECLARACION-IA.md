# Declaración de uso de inteligencia artificial

Este documento registra el uso de herramientas de inteligencia artificial durante el desarrollo del proyecto.

| Fecha | Integrante | Herramienta | Consulta realizada | Uso de la respuesta |
|---|---|---|---|---|
| 2026-09-16 | Julian Agredo | ChatGPT/Codex | Comprensión del enunciado, los requisitos técnicos y la estructura esperada del proyecto. | Se utilizó la explicación para contextualizar el proyecto, diferenciar los requisitos funcionales y planear la implementación de RF-03 y RF-04. |
| 2026-09-17 | Julian Agredo | ChatGPT/Codex | Explicación de props, interfaces, estado e input controlado en React con TypeScript. | Se utilizó la tutoría para comprender la comunicación entre `App` y `SearchBar`. El componente se escribió y probó de manera incremental en el entorno local. |
| 2026-09-17 | Santiago Arenas | ChatGPT/Codex | Revisión de los requisitos del taller y análisis de la estrategia de ramas, issues, commits y Pull Requests. | Se utilizó la respuesta para comprender el flujo requerido con `main`, `develop` y ramas `feature/rfXX-descripción`, además de identificar incumplimientos existentes en el repositorio. |
| 2026-09-17 | Santiago Arenas | ChatGPT/Codex | Redacción de las seis issues correspondientes a RF-01 hasta RF-06. | Se utilizaron las descripciones y listas de criterios como base para crear y asignar las issues en GitHub. |
| 2026-09-18 | Julian Agredo | ChatGPT/Codex | Explicación del retardo de búsqueda con `useEffect`, `setTimeout` y `clearTimeout`. | Se aplicó la explicación para separar `searchText` de `debouncedSearchText` e implementar el retardo manual de 400 ms exigido en RF-03. |
| 2026-09-18 | Julian Agredo | ChatGPT/Codex | Revisión de errores de sintaxis, ESLint y comportamiento del filtro de personajes. | Se corrigió la ubicación de `filteredCharacters`, se añadió el mensaje sin coincidencias y se probaron búsquedas existentes, inexistentes y con diferentes combinaciones de mayúsculas y minúsculas. |
| 2026-09-18 | Julian Agredo | ChatGPT/Codex | Orientación para organizar los commits, actualizar la bitácora y preparar el Pull Request de RF-03. | Se utilizaron las recomendaciones para separar los avances en commits, documentar el trabajo realizado y abrir el Pull Request hacia `develop`. |
| 2026-09-18 | Julian Agredo | ChatGPT/Codex | Explicación del estado `Character \| null` y de la comunicación entre componentes mediante `onSelect` y `onBack`. | Se aplicó la explicación para implementar la selección de una carta, mostrar el personaje seleccionado y regresar a la colección. |
| 2026-09-18 | Julian Agredo | ChatGPT/Codex | Revisión de `CharacterCard`, `CharacterDetail` y los tipos adicionales recibidos desde la API. | Se utilizaron explicaciones, estructuras parciales y correcciones sobre el código escrito para mostrar origen, ubicación, tipo y cantidad de episodios en RF-04. |
| 2026-09-18 | Julian Agredo | ChatGPT/Codex | Análisis del error `TS2739` obtenido durante `npm run build`. | Se corrigieron las props de `CharacterCard` para que exigieran únicamente los datos utilizados y se reservó el tipo `Character` completo para la vista de detalle. |
| 2026-09-18 | Julian Agredo | ChatGPT/Codex | Verificación de RF-03 y RF-04 mediante ESLint, compilación y pruebas en el navegador. | Se utilizaron los resultados para confirmar que `npm run lint` y `npm run build` terminaban sin errores antes de realizar los commits y Pull Requests. |
| 2026-09-18 | Santiago Arenas | ChatGPT/Codex | Preparación de la plantilla obligatoria de Pull Request, la bitácora y la estructura de la declaración de IA. | Se adaptaron las plantillas para documentar los intentos, errores, decisiones, pruebas y revisiones exigidas por el taller. |
| 2026-09-18 | Santiago Arenas | ChatGPT/Codex | Orientación sobre comandos de Git para crear ramas desde `develop`, actualizar ramas remotas, realizar commits y abrir PR hacia `develop`. | Se utilizaron los comandos como guía para organizar el repositorio y evitar pushes directos a `main`. |
| 2026-09-18 | Santiago Arenas | ChatGPT/Codex | Guía para los componentes `FavoriteButton`, `FavoriteCounter`, las props de `CharacterCard` y la persistencia con `localStorage`. | Los fragmentos proporcionados se digitaron, adaptaron e integraron en la rama `feature/rf05-favoritos`. El integrante realizó la coordinación entre archivos y las pruebas locales. |
| 2026-09-18 | Santiago Arenas | ChatGPT/Codex | Análisis del estado de las ramas locales y remotas y orientación para actualizar RF-05 con RF-03 y RF-04. | Se utilizó la respuesta para determinar que la actualización debía hacerse desde `develop` hacia la rama RF-05. |
| 2026-09-19 | Julian Agredo | ChatGPT/Codex | Repaso del funcionamiento de RF-03 y RF-04 y corrección de conceptos sobre componentes padres, hijos, props y estado. | Se utilizó la explicación para comprender el recorrido de los datos y preparar la sustentación y futuras modificaciones del código. |
| 2026-09-19 | Julian Agredo | ChatGPT/Codex | Organización y redacción de las entradas personales de la declaración de IA. | Se revisó el historial de consultas y se incorporó un registro explícito del alcance de la asistencia recibida. |
| 2026-09-19 | Santiago Arenas | ChatGPT/Codex | Diagnóstico de un conflicto de merge en `App.tsx` y pérdida de las propiedades de favoritos en `CharacterCard.tsx`. | Se identificaron los marcadores de conflicto, se recuperó la versión anterior desde el historial y se combinaron las funciones de detalle y favoritos. |
| 2026-09-19 | Santiago Arenas | ChatGPT/Codex | Explicación de `key`, `id`, extensión de interfaces y composición de `CharacterCardProps`. | Se utilizó la explicación para corregir los tipos, conservar las props necesarias y evitar que la tarjeta exigiera campos de la API que no utiliza. |
| 2026-09-19 | Santiago Arenas | ChatGPT/Codex | Redacción de las entradas personales de bitácora y de esta declaración de IA a partir del historial verificable. | El contenido se revisó y se incorporó a los archivos de documentación del proyecto. |

## Alcance de la asistencia

La herramienta se utilizó como apoyo frecuente para comprender conceptos de React, TypeScript y Git; interpretar errores; revisar código escrito durante el desarrollo; proporcionar ejemplos de sintaxis y estructuras parciales; y mejorar la documentación del proyecto.

En RF-03 y RF-04 la asistencia incluyó explicaciones paso a paso, revisión de intentos, identificación de errores y sugerencias concretas para conectar componentes y tipar sus props. En RF-05 incluyó orientación sobre componentes de favoritos, persistencia con `localStorage` y resolución de conflictos de integración.

## Responsabilidad de los integrantes

Las respuestas de la herramienta fueron revisadas antes de aplicarse. Cada integrante fue responsable de escribir o adaptar los cambios en su entorno, comprobar su funcionamiento, realizar los commits desde su cuenta y comprender las decisiones incluidas en el código.

Las validaciones incluyeron pruebas manuales en el navegador, revisión de los estados de la interfaz y ejecución de `npm run lint` y `npm run build`. Los integrantes reconocen que el uso de IA fue frecuente y lo registran explícitamente para conservar la trazabilidad del proceso.