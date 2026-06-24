ETAPA A

Componentes:
Donde usarlo:
para dividir la app web en partes; la primera seria para representar o mostrar los datos de los eventos,
para guardar el listado de los eventos,
y para filtrarlos.
Por que usar:
por que los componentes son reutilizables es decir, que pueden cambiar con el desarrollo del código.

JSX:
DOnde usarlo:
para crear y estructurar una interfaz grafica de un componente sin necesidad de crearle un respectivo archivo HTML es. es decir, a cada evento que este guardado en el componente; se le debe estructurar una tarjeta para guardar su información de manera ordenada.
por que usar:
por que jsx permite escribir código HTML dentro de un archivo JSX.

Props:
donde usarlo:
para pasar datos de cada evento de donde se reciben los datos entregados a los componentes que se crean luego.
por que usar:
los props reciben los "atributos" o información de los eventos para guardar la información de cada tarjeta evitando duplicaciones de los props y así optimizar el renderizado.

useState:
Donde usarlo:
para manejar los filtros y estados en la App.jsx.
por que usar:
permite actualizar datos de un componente  mediante el desarrollo del código.

Renderizado de listas (.map + key):
donde usarlo:
para recorrer el array de eventos (.map) y muestra cada uno en forma de tarjeta (Key) ayuda a identificar los elementos.
por que usar: 
cada elemento del código se guarda como una key única para identificar y optimizar el renderizado.


Renderizado condicional:
donde usarlo:
se puede usar para crear condiciones o limitaciones en inputs cuando un usuario ingrese un texto de búsqueda.
por que usar:
permite mostrar o ocultar elementos según estado o situaciones donde no se cumpla con las búsquedas.

ETAPA B
PREGUNTA 1:
RESPUESTA: dividir en componentes tiene la ventaja de que todo es mas ordenado, claro y permite control. ya que, permite evitar errores y facilitar la lectura. ya que cada componente tiene una función y tenerlo en un solo archivo podría generar errores.

PREGUNTA 2:
RESPUESTA: 
un prop es un componente que nace de otro componente o que depende en cierta manera de este; ejemplo el componente principal seria el que guarda los datos del evento, luego de ese se crea otro que los lista y luego que los filtra.

y un estado se usa para guardar información o datos y cambiarlos mediante el desarrollo del código o interacción con el usuario en este; ejemplo se usaría para filtrar los tipos de eventos o filtrar eventos mediante la búsquedas. 