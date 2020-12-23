# AmazonAPI
Examen del curso Javascript Axity

En esta pandemia nuestros amigos de Amazon han tenido mucho trabajo por lo que necesitan nuestra ayuda....

1) Necesitamos su ayuda para poder hacer compras, poder tener un carrito de compra
2) Poder ver catalogo de productos en base a su nombre, costo, y categoria.
3) Como a veces pasa, se puede tener un carrito de lo que el cliente podria querer y se podran agregar elementos.
3) Los usuarios quisieran comprar los elementos de su carrito.
4) Por necesidad, el almacen deberá descontar los elementos que ya vendió.

* Requisitos
a) Tener un repo de github y subir todo antes de las 12.am del 23/12/2020
b) Los datos pueden vivir en un excel, archivo TXT o una base de datos (no importa cual sea), solo no pueden vivir en memoria
c) Se podra hacer el proyecto de la siguientes formas:
    **1) Un proyecto node utilizando los verbos HTTP vistos en clase (proporcionar peticiones dentro del repo)**
    2) Un proyecto webpack utilzando una tabla para ver el catalogo y una tabla para ver el carrito y una tabla para ver el almacen
    
** SOLUCIÓN SELECCIONADA NO.1 **


## LAS PETICIONES

_Carrito de compra_

Para poder agregar datos al archivo carrito de compra ('shoppingCart.json') se utiliza (POST):
```
'/addProductcart'
```
Y se envía un json:
```
{
        "id": "040f2789-7558-4193-ac55-504c2b003a5d",
        "productName": "computadora2",
        "price": 3457,
        "category": "computers",
        "stock": 300
}
```


_Tabla con los datos del almacén_

Si se requiere consultar el catálogo de los productos ('products.json') se utiliza (GET):
```
'/readProducts'
```


_Descontar los elementos del almacén que ya fueron vendidos_

Para restar los elementos ya vendidos se utiliza (PUT):
```
'/manageStock'
```
Y se envía un json con los datos id y cantidad para poder actualizar el stock de lo vendido:
```
{
    "id": "2c66beb6-015f-4968-a054-fb63a9ca785e",
    "quantity": 1
}
```


_Agregar un nuevo producto al almacén_

Para agregar un porducto al almacén se ocupa (POST):
```
'/addProduct'
```
Se debe de enviar un json con la siguiente estructura:
```
{
        "productName": "computadora2",
        "price": 3457,
        "category": "computers",
        "stock": 300
}
```
Nota: El id del producto se genera automáticamente



_Busqueda de prducto en base a nombre, costo y categoría_

El filtrado por keyword se realiza en (GET):
```
'/filterProduct'
```
Se requiere un json con la siguiente estructura:
```
{
    "keyword": "computadora1"
}
```
Nota: El keyword puede ser nombre o precio o categoría





## Ejecutando las pruebas ⚙️





---
⌨️ Luis Enrique García Santiago
