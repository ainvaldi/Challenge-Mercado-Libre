# Challenge-Mercado-Libre

Proyecto: Página de Compras con API de Mercado Libre
Objetivo:
Desarrollar una aplicación web utilizando JavaScript que consuma la API de Mercado Libre para crear una página de compras. El proyecto permitirá buscar productos, ver detalles, añadir productos al carrito, gestionar el carrito y finalizar la compra.

Requisitos:
Home Page:

Debe contar con un buscador (input) y un botón.
Al ingresar un término de búsqueda y presionar el botón, se debe enviar una solicitud al endpoint:
bash
Copiar código
https://api.mercadolibre.com/sites/MLA/search?q=valorBuscado
Mostrar los resultados de la búsqueda en una lista, incluyendo al menos la imagen del producto, el título, y el precio.
Detalles del Producto:

Al hacer clic en un producto de la lista de resultados, se debe enviar una solicitud al endpoint correspondiente para obtener detalles adicionales del producto.
Mostrar una página con los detalles del producto, incluyendo descripción, precio, imágenes adicionales, y cualquier otra información relevante.
Carrito de Compras:

Incluir un botón "Añadir al carrito" en la página de detalles del producto.
Implementar la funcionalidad para añadir productos al carrito utilizando localStorage.
Crear una página o sección para visualizar el carrito, mostrando los productos añadidos, la cantidad de cada producto, y el precio total.
Permitir al usuario aumentar o disminuir la cantidad de cada producto en el carrito.
Permitir al usuario eliminar productos del carrito.
Finalizar Compra:

Incluir un botón "Finalizar Compra" en la página del carrito.
Al presionar el botón, mostrar un mensaje que diga "Compra realizada con éxito" y limpiar el carrito en localStorage.
