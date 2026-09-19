## 2026-09-16 - Julian Agredo

- Revisé la estructura actual del proyecto y las ramas disponibles.
- Identifiqué que RF-01 y RF-02 modifican App.tsx, CharacterCard.tsx y el tipo Character.
- Analicé RF-04: decidí separar la tarjeta resumida de una vista de detalle para conservar una responsabilidad por componente.
- Revisé los campos disponibles en la API de Rick and Morty que podrían mostrarse en el detalle.
- Aún no hice cambios de código porque estoy esperando la integración de RF-01 y RF-02 para evitar conflictos.
- Commit relacionado: pendiente.

## 2026-09-17 - Julian Agredo

- Definimos una propuesta de experiencia: el usuario abre cofres y recibe cartas de personajes aleatorias.
- Propuse permitir cartas repetidas dentro de la colección.
- Propuse que la búsqueda filtre únicamente las cartas que el usuario ya obtuvo.
- Propuse representar los personajes no obtenidos como cartas oscuras dentro de un catálogo o álbum.
-Identifiqué que será necesario diferenciar el catálogo recibido de la API de la colección del usuario. Se utilizará el id que ya entrega la API para identificar cada personaje y una cantidad para representar las copias repetidas.
- No realicé commit hoy porque estoy esperando la integración de RF-01 y RF-02 y validando con el equipo las reglas de colección.

## 2026-09-17 - Julian Agredo

- Creé la rama feature/rf03-busqueda a partir del código que contiene RF-01 y RF-02.
- Creé el issue correspondiente a RF-03.
- Inicié el requisito analizando cómo funciona un input controlado en React.
- Identifiqué que se necesita un estado para guardar inmediatamente el texto escrito por el usuario.

## 2026-09-18 - Julian Agredo

- Implementé un segundo estado para retrasar la búsqueda.
- Usé setTimeout dentro de useEffect con una espera de 400 ms.
- Añadí clearTimeout para cancelar la búsqueda anterior cuando el usuario continúa escribiendo.
- Filtré los personajes visibles utilizando el texto retardado.
- Queda pendiente mostrar el mensaje cuando no existen coincidencias y realizar las pruebas finales.

## 2026-09-18 - Julian Agredo

- Terminé las pruebas de RF-03 y abrí el Pull Request hacia develop.
- Creé el issue correspondiente a RF-04.
- Creé la rama feature/rf04-detalle a partir de feature/rf03-busqueda.
- Inicié el análisis de la selección de una carta y la vista de detalle.
- Implementé la selección de una carta mediante un estado Character | null.
- Añadí una función onSelect tipada para comunicar CharacterCard con App.
- Creé CharacterDetail para mostrar información adicional del personaje.
- Implementé el botón para volver a la colección.
- Corregí las props de CharacterCard para que solo exijan los datos que utiliza.
- Verifiqué npm run lint y npm run build sin errores.

## 2026-09-18 - Santiago Arenas

### Trabajo realizado

- Creé y trabajé en la rama `feature/rf05-favoritos`.
- Revisé los criterios de aceptación de RF-05 y definí que los favoritos se identificarían mediante el `id` de cada personaje.
- Creé el componente `FavoriteButton` para marcar y desmarcar personajes.
- Creé el componente `FavoriteCounter` para mostrar la cantidad de favoritos seleccionados.
- Añadí en `App.tsx` el estado encargado de almacenar los identificadores de los personajes favoritos.
- Implementé una función para agregar o retirar identificadores sin producir duplicados.
- Implementé la lectura y persistencia de los favoritos mediante `localStorage`.
- Añadí estilos básicos para distinguir visualmente los personajes favoritos.

### Dificultades encontradas

- La rama RF-05 había sido creada antes de que RF-03 y RF-04 estuvieran terminadas e integradas.
- Fue necesario esperar la integración de búsqueda y detalle para combinar las funcionalidades.
- La modificación local de `package-lock.json` no correspondía a RF-05, por lo que se evitó incluirla en los commits funcionales.

### Solución aplicada

- Separé favoritos en componentes con responsabilidades específicas.
- Mantuve el estado de favoritos en `App.tsx` y envié datos y funciones a los componentes mediante props.
- Realicé commits separados para el botón, el contador y la integración de favoritos.

### Commits relacionados

- `8138d9d` — `feat: add favorite button component`
- `a62f461` — `feat: add favorite counter component`
- `5ea8592` — `feat: se actualiza el app.tsx`
- `477eaec` — `feat: boton agreger favoritos y contador se encuentran ok, con estilos basicos`

### Estado del requisito

RF-05 quedó funcional en su primera versión. Quedó pendiente actualizar la rama con las versiones aprobadas de RF-03 y RF-04.

---

## 2026-09-19 - Santiago Arenas

### Trabajo realizado

- Actualicé `feature/rf05-favoritos` con el contenido más reciente de `develop`.
- Incorporé los cambios aprobados de RF-03 y RF-04.
- Revisé la integración entre búsqueda, detalle y favoritos.
- Organicé las propiedades de `CharacterCard` para admitir simultáneamente la apertura del detalle y la selección de favoritos.
- Ajusté los tipos para evitar que `CharacterCard` exigiera campos de la API que no utiliza directamente.
- Eliminé el archivo vacío `DetalleElemento.tsx`, debido a que la implementación utilizada por RF-04 se encuentra en `CharacterDetail.tsx`.

### Dificultades encontradas

- `App.tsx` y `CharacterCard.tsx` habían sido modificados tanto por RF-04 como por RF-05.
- Durante el merge, `CharacterCard` perdió `isFavorite`, `onToggleFavorite` y el uso de `FavoriteButton`.
- La interfaz extendía todo el tipo `Character`, por lo que TypeScript solicitaba también `type`, `origin`, `location` y `episode`.
- Algunas importaciones utilizaban mayúsculas distintas a los nombres reales de los archivos, causando errores de TypeScript en Windows.

### Solución aplicada

- Conservé en `CharacterCard` tanto `onSelect` para RF-04 como las propiedades de favoritos para RF-05.
- Diferencié `key`, que React utiliza internamente en el listado, de `id`, que sí recibe el componente.
- Organicé las props de la tarjeta para representar únicamente los datos y funciones que necesita.
- Corregí la capitalización de las rutas de importación.
- Mantuve la lógica de búsqueda, detalle y favoritos dentro de la misma versión integrada.


