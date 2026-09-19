# Declaración de uso de inteligencia artificial

Este documento registra el uso de herramientas de inteligencia artificial durante el desarrollo del proyecto.

| Fecha | Integrante | Herramienta | Consulta realizada | Uso de la respuesta |
|---|---|---|---|---|
| 2026-09-17 | Santiago Arenas | ChatGPT/Codex | Revisión de los requisitos del taller y análisis de la estrategia de ramas, issues, commits y Pull Requests. | Se utilizó la respuesta para comprender el flujo requerido con `main`, `develop` y ramas `feature/rfXX-descripción`, además de identificar incumplimientos existentes en el repositorio. |
| 2026-09-17 | Santiago Arenas | ChatGPT/Codex | Redacción de las seis issues correspondientes a RF-01 hasta RF-06. | Se utilizaron las descripciones y listas de criterios como base para crear y asignar las issues en GitHub. |
| 2026-09-18 | Santiago Arenas | ChatGPT/Codex | Preparación de la plantilla obligatoria de Pull Request, la bitácora y la estructura de la declaración de IA. | Se adaptaron las plantillas para documentar los intentos, errores, decisiones, pruebas y revisiones exigidas por el taller. |
| 2026-09-18 | Santiago Arenas | ChatGPT/Codex | Orientación sobre comandos de Git para crear ramas desde `develop`, actualizar ramas remotas, realizar commits y abrir PR hacia `develop`. | Se utilizaron los comandos como guía para organizar el repositorio y evitar pushes directos a `main`. |
| 2026-09-18 | Santiago Arenas | ChatGPT/Codex | Guia para componentes de  `FavoriteButton`, `FavoriteCounter`, las props de `CharacterCard` y la persistencia con `localStorage`. | Los fragmentos proporcionados se digitaron, adaptaron e integraron en la rama `feature/rf05-favoritos`. El integrante realizó la coordinación entre archivos y las pruebas locales. |
| 2026-09-18 | Santiago Arenas | ChatGPT/Codex | Análisis del estado de las ramas locales y remotas y orientación para actualizar RF-05 con RF-03 y RF-04. | Se utilizó la respuesta para determinar que la actualización debía hacerse desde `develop` hacia la rama RF-05. |
| 2026-09-19 | Santiago Arenas | ChatGPT/Codex | Diagnóstico de un conflicto de merge en `App.tsx` y pérdida de las propiedades de favoritos en `CharacterCard.tsx`. | Se identificaron los marcadores de conflicto, se recuperó la versión anterior desde el historial y se combinaron las funciones de detalle y favoritos. |
| 2026-09-19 | Santiago Arenas | ChatGPT/Codex | Explicación de `key`, `id`, extensión de interfaces y composición de `CharacterCardProps`. | Se utilizó la explicación para corregir los tipos, conservar las props necesarias y evitar que la tarjeta exigiera campos de la API que no utiliza. |
| 2026-09-19 | Santiago Arenas | ChatGPT/Codex | Redacción de las entradas personales de bitácora y de esta declaración de IA a partir del historial verificable. | El contenido se revisó y se incorporó a los archivos de documentación del proyecto. |

## Responsabilidad del integrante

Las respuestas de la herramienta se revisaron antes de aplicarse. El integrante fue responsable de integrar los cambios, resolver los conflictos, comprobar el funcionamiento, ejecutar las validaciones del proyecto y comprender las decisiones incluidas en el código.