# Esquema de ejercicio propuesto:

- Maquetación de un diseño.
- Implementación de pruebas.

## Implementar las siguientes funcionalidades:

- Mostrar productos
- Buscar productos
- Agregar productos
- Editar productos
- Eliminar productos

**NOTAS:**

- Se debe implementar buenas prácticas (clean code, SOLID).
- Se debe implementar.
- No se debe usar ningún framework de estilos o componentes prefabricados para maquetar el diseño.

### Historia de Usuario 1

Como Oficial de Cuenta del Banco del Pichincha quiero tener una aplicación para visualizar los diferentes productos financieros ofertados por la Institución, además de poder crear nuevos productos, editarlos y eliminarlos.

**Criterio de aceptación**

**Escenario A:** Maquetar diseño propuesto.

Dado: que se desea evaluar el nivel de conocimiento en el desarrollo Frontend.

Como: Evaluador.

Requiero: que se maquete, implemente el diseño propuesto.

**Escenario B:** Implementación de funcionalidad.

Dado: que se desea mostrar elementos consumidos desde un API.

Como: Evaluador.

Requiero: Se muestren los elementos consumidos desde la API en el diseño propuesto, además que se puedan realizar las acciones de búsqueda, crear, eliminar y editar mediante el consumo de la API.

**Escenario C:** Implementación de pruebas.

Dado: que se desea evaluar el nivel de conocimiento en pruebas.

Como: Evaluador.

Requiero: que el código desarrollado tenga pruebas unitarias de los diferentes componentes. La cobertura de las pruebas unitarias debe ser del 100%.

**Requerimientos**

Dado: que se desea evaluar el conocimiento del Framework Angular

Como: Evaluador

Requiero: que el ejercicio sea desarrollado bajo la utilización de rutas

- Desarrollar el ejercicio bajo la utilización de rutas de Angular

Dado: que se desea evaluar el nivel de maquetación del aspirante

Como: Evaluador

Requiero: que la vista de la tabla de información de productos financieros se implemente según el siguiente diseño:

- Implementar la tabla de información de los productos financieros según el siguiente diseño.

![diseño tabla](https://storage.googleapis.com/utility-bucket-392305/Imagen1.jpg)

Dado: que se desea evaluar el nivel de programación del aspirante

Como: Evaluador

Requiero: que se implemente la funcionalidad de búsqueda para la información obtenida por el servicio.

Implementar la funcionalidad de búsqueda para la información obtenida por el servicio.

Dado: que se desea evaluar el nivel de programación del aspirante

Como: Evaluador

Requiero: que se implemente la funcionalidad de conteo total de elementos que obtiene desde el servicio.

Mostrar el total de elementos que obtiene desde el servicio.
![diseño total elementos](https://storage.googleapis.com/utility-bucket-392305/Imagen2.png)

Dado: que se desea evaluar el grado de funcionalidad del ejercicio

Como: Evaluador

Requiero: que se implemente un botón de “Agregar” para navegar al formulario de registro.

Implementar el botón de “Agregar” para navegar al formulario de registro.
![!diseño botón agregar](https://storage.googleapis.com/utility-bucket-392305/Imagen3.png)

Dado: que se desea evaluar el grado de funcionalidad del ejercicio

Como: Evaluador

Requiero: que se incluya un menú contextual al final de la fila donde al hacer clic en los 3 puntos constaran las opciones de Editar y Eliminar el producto financiero.

Dentro de cada Fila incluir un menú contextual al hacer clic en los 3 puntos donde constaran las opciones de Editar y Eliminar el producto financiero.

Adicional: Funcionalidad de paginación de 5 elementos por página.

Dado: que se desea evaluar el nivel de maquetación del aspirante

Como: Evaluador

Requiero: que la vista del formulario de registro/edición de un producto financiero se implemente según el siguiente diseño:

- Implementar el formulario de registro/edición de un producto financiero según el siguiente diseño:

![diseño formulario registro](https://storage.googleapis.com/utility-bucket-392305/Imagen4.png)

Dado: que se desea evaluar el nivel de programación del aspirante

Como: Evaluador

Requiero: que se implemente la funcionalidad donde el input correspondiente a la fecha de revisión se deberá mantener inhabilitado y se deberá llenar automáticamente siguiente la regla: “La Fecha de Revisión será un año exacto posterior a la Fecha de Liberación”

- El input correspondiente a la fecha de revisión se deberá mantener inhabilitado y se deberá llenar automáticamente siguiente la regla: “La Fecha de Revisión será un año exacto posterior a la Fecha de Liberación”

![diseño fecha revision](https://storage.googleapis.com/utility-bucket-392305/Imagen5.jpg)

Dado: que se desea evaluar el nivel de programación del aspirante

Como: Evaluador

Requiero: que se implemente la funcionalidad donde el botón de Enviar deberá mantenerse desactivado mientras el formulario contenga errores.

El botón de Enviar deberá mantenerse desactivado mientras el formulario contenga
![diseño botón desactivado](https://storage.googleapis.com/utility-bucket-392305/Imagen6.png)

Dado: que se desea evaluar el nivel de maquetación del aspirante

Como: Evaluador

Requiero: que en el formulario se muestre visualmente al cliente el estado de error de cada campo, de la siguiente manera:

- El formulario deberá mostrar visualmente al cliente el estado de error de cada campo, de la siguiente manera:

![diseño campo error](https://storage.googleapis.com/utility-bucket-392305/Imagen8.png)

Dado: que se desea evaluar el nivel de programación del aspirante

Como: Evaluador

Requiero: que al momento de Editar un producto este no podrá cambiar de ID por lo cual deberá mantenerse deshabilitado.

Al momento de Editar un producto este no podrá cambiar de ID por lo cual deberá mantenerse deshabilitado.
![diseño campo deshabilitado](https://storage.googleapis.com/utility-bucket-392305/Imagen9.png)

**Validaciones**

Cada campo del formulario contendrá su respectiva validación previa al envío del formulario:

| **Campo**           | **Validación**                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| Id                  | Requerido, mínimo 3 caracteres y máximo 10, validación de ser un Id valido mediante el consumo del servicio. |
| Nombre              | Requerido, mínimo 5 caracteres y máximo 100                                                                  |
| Descripción         | Requerido, mínimo 10 caracteres y máximo 200                                                                 |
| Logo                | Requerido                                                                                                    |
| Fecha de Liberación | Requerido, la Fecha debe ser igual o mayor a la fecha actual                                                 |
| Fecha de Revisión   | Requerido, la Fecha debe ser exactamente un año posterior a la fecha de liberación                           |
