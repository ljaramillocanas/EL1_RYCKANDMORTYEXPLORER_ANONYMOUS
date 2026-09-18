## 2026-09-16 - Julian Agredo

- Revisé la estructura actual del proyecto y las ramas disponibles.
- Identifiqué que RF-01 y RF-02 modifican App.tsx, CharacterCard.tsx y el tipo Character.
- Analicé RF-04: decidí separar la tarjeta resumida de una vista de detalle para conservar una responsabilidad por componente.
- Revisé los campos disponibles en la API de Rick and Morty que podrían mostrarse en el detalle.
- Aún no hice cambios de código porque estoy esperando la integración de RF-01 y RF-02 para evitar conflictos.
- Commit relacionado: pendiente.

## 2026-09-17 - Julian Agredo

- Definí una propuesta de experiencia: el usuario abre cofres y recibe cartas de personajes aleatorias.
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