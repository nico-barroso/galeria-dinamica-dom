![Logo](https://framerusercontent.com/images/zJBgnto0UuieHjFzX0KB4xPLrLk.png)

# ThePower - Entrega DOM Galería dinámica

Este proyecto tiene como objetivo desarrollar un producto utilizando las herramientas del DOM para la manipulación de contenido y el acceso a datos, permitiendo generar, interactuar y modificar los elementos de manera dinámica.

El objetivo principal es crear una página lo más fiel posible a un producto final, trabajando intensamente en los eventos y la manipulación de datos.

## 1. Preparación e ideación

Se optó por replicar una página de ecommerce de venta de gafas. Se utilizaron muchas secciones del contenido original, pero se modificaron otras que no se contemplaban en la versión original.

## 2. Estructuración

El proyecto se distribuye de la siguiente manera en la documentación:

1. Nav
2. Aside
3. Galería
4. Footer
5. Accesibilidad

### 2.1. Nav

El nav cuenta con tres versiones diferentes, todo el trabajo realizado en CSS. Se ha añadido una animación al hacer hover, trabajando con el pseudo-elemento `::after`.

![Nav Screenshot](https://github.com/user-attachments/assets/1a4e2211-4975-4a74-bc88-1530cd6fcb9e)

### 2.2. Aside

El aside es una ventana de filtros que aparece y desaparece según el tamaño de la web o al hacer clic en el botón de mostrar filtros.

![Aside Completo](https://github.com/user-attachments/assets/c8ed00c2-fd53-4aa9-a516-0634f3ae351c)
*Sección de filtros en tamaño completo*

![Aside Reducido](https://github.com/user-attachments/assets/f85f14f9-00b0-49ce-939b-29a126e9efe9)
*Tamaño reducido de la web*

El aside se modifica al redimensionar la ventana.

### 2.3. Galería de productos

La galería cuenta con dos botones para cambiar la cantidad de columnas, ajustándose según el tamaño de la pantalla. Al pasar el cursor sobre cada gafa, esta cambia a una vista en perspectiva de tres cuartos.

![Galería de productos 1](https://github.com/user-attachments/assets/c74ec16b-5a66-42e6-97e1-1977dfa31820)
![Galería de productos 2](https://github.com/user-attachments/assets/a997aab5-2ec5-497b-b310-6ade0baf1508)

### 2.4. Footer

El footer contiene una colección de objetos, algunos con iconos y otros no. Se ha creado una clase "expanded" para que al hacer clic se expanda y ocupe menos espacio.

![Footer Screenshot 1](https://github.com/user-attachments/assets/eca0e7c1-2056-4eae-a622-57a184046d92)
![Footer Screenshot 2](https://github.com/user-attachments/assets/efc7267d-272d-42d1-b0e1-7c7730971552)

### 2.5. Accesibilidad

La página pasa los test automáticos del Web Accessibility Evaluation Tool. Sin embargo, debido al diseño de la web, sería necesario realizar una evaluación presencial de usuarios para abordar directamente la UI.
