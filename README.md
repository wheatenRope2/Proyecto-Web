# Houston Music

## Descripción

La funcionalidad del proyecto consiste, en la reproducción de canciones, proporcionando al usuario una vista previa de canciones recomendados por el programa de manera aleatoria por medio de un carrusel; al igual que una serie de artistas y géneros. También proporciona al usuario una búsqueda rápida de canciones, por medio del nombre de estas o nombre del artista; canciones previamente almacenadas en la bace de datos del programa, con vista previa de expansión de cada canción y artista. 

La estructura del programa está conformada por un apartado de lado izquierdo de la pantalla, el cual almacena cuatro botones que nos permiten navegar por la página, por medio de cuatro apartados de funcionalidades siendo estas, “inicio”; con dos carruseles de imágenes acomodados de manera horizontal, uno debajo del otro, estableciendo una organización amable y armoniosa a la vista del usuario; el primer carrusel perteneciendo a canciones recomendadas, el segundo muestra artistas recomendados y por último, la tercer sección, proporciona una selección de géneros que se pueden encontrar en la base de datos. El segundo botón envía al usuario a un apartado de playlist, el tercer botón “búsqueda” muestra al usuario el buscador del programa, donde le proporciona la facilidad de buscar canciones por medio de artistas o el nombre de la canción, mostrando una serie de botones con las canciones y artistas, que al ser presionados reproducen la canción y al colocar el mouse sobre cada uno estos crecen proporcionando al usuario una buena visualización de lo buscado. El cuarto botón “créditos” dirige al usuario a una pantalla donde se muestran los nombres de los colaboradores y creadores del programa, al igual que fecha de creación y una breve descripciones proyecto. 

Por último, debajo de los botones en el mismo apartado se le proporciona al usuario la vista de una pantalla de reproducción, que está establecida en todas las ventanas del programa y donde se puede reducir cualquier canción almacenada, en el sistema del programa, permitiendo al usuario pausar, subir y bajar el volumen, al igual que adelantar y atrasar la reproducción del video. 

El propósito del proyecto es proporcionar un programa que permita la reproducción de canciones de diversos géneros, facilitando la consulta de canciones predeterminadas al usuario. Siendo dirigido a todo público con gustos parecidos a los géneros que el programa proporciona.

## Instalación

#### Los pasos y herramientas necesarias para poder instalar y ejecutar el proyecto son las siguientes:

1. Instalar la aplicación de XAMPP. Esta aplicación está disponible para sistema Windows, OS X (MacOS) y Linux. Puede encontrar los enlaces a su página para descargarlo a continuación.

[XAMPP para Windows](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe)

[XAMPP para OS X (MacOS)](https://sourceforge.net/projects/xampp/files/XAMPP%20Mac%20OS%20X/8.2.4/xampp-osx-8.2.4-0-installer.dmg)

##### Nota: En el caso de Mac, muchas veces no permite ejecutar el instalador alegando que el desarrollador no está verificado. Para poderlo ejecutar hay que abrir Preferencias del sistema, irse al apartado de "Privacidad y Seguridad", buscar en este apartado la pestaña "General" y en esa sección encontraremos la advertencia del sistema, le daremos en Abrir de todos modos y aceptaremos lo que nos pida el sistema.

[XAMPP para Linux](https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/8.2.12/xampp-linux-x64-8.2.12-0-installer.run)

2. Moverse a la carpeta necesaria. XAMPP suele instalarse en directorios específicos y es necesario moverse al mismo para poder ejecutar nuestro proyecto. Las rutas en las que XAMPP suele instalarse en cada SO se pueden acceder mediante las siguiente rutas.

#### Windows
`cd \XAMPP\htdocs\`

#### Linux
`cd /opt/laamp/htdocs/`

### OS X (MacOS)
`cd /Applications/XAMPP/htdocs/`

3. Al terminar la instalación de XAMPP se abrirá un panel de control, es necesario prender la opción de Apache Web Server y asegurarse que dice running, este deberá permanecer activo por lo que no podrá cerrar la ventana.

4. Una vez ya estando en htdocs, haremos un git clone del repositorio en GitHub del proyecto cuya liga es la siguiente: [https://github.com/wheatenRope2/Proyecto-Web]

#### Nota: Para esto, es necesario tener ya instalado y configurado Git en nuestra computadora.

5. Este enlace lo pondremos en la terminal ya sea de CMD, Bash o la de MacOS con el siguiente comando: `git clone https://github.com/wheatenRope2/Proyecto-Web.git`

#### Nota: Para el caso de Linux, es necesario poner: `sudo git clone https://github.com/wheatenRope2/Proyecto-Web.git` para poder clonar el repositorio de manera exitosa

6. Una vez ya clonado el repositorio, vamos a introducir una de las siguientes rutas en nuestro navegador de preferencia:

#### Windows
`localhost\Proyecto-Web\Templates\login.html`

### OS X (MacOS)
`localhost/Proyecto-Web/Templates/login.html`

### Linux
`localhost/Proyecto-Web/Templates/login.html`

7. Ya en la página de Login, es necesario crear un usuario con el botón correspondiente para poder entrar a la página.

8. Con el usuario ya creado podremos hacer login en la página y nos deberá dar acceso a la página principal.

## Tecnologías Utilizadas
Para este proyecto se emplearon las siguientes tecnologías:

* HTML5
* CSS3
* JavaScript
* YouTube Data API
* Visual Studio Code
* Git
* GitHub

## Integrantes y aportes
| Integrante | Aportaciones |
--------------|------------------------------
|Alarcón Mia |Asesora y mentora del proyecto|
-------------|------------------------------
|Domínguez Jiménez Arturo Gabriel|Desarrollo de  cookies e interfaz|
---------------------------------|----------------------------------
|Fernández Varela Gómez Jorge|Desarrollo de lógica de colas de reproducción y apoyo en el diseño de interfaz|
-----------------------------|----------------------------------------------------------
|Gonzalez Peña Ruben Isaac|Desarrollo de lógica general y apoyo en el desarrollo de la interfaz|
--------------------------|--------------------------------------------------------------
|Hernández Rivera Dulce Esmeralda|Desarrollo de base de datos y apoyo en la interfaz|
|--------------------------------|---------------------------------------------------
|López Mayen Diego|Conexión de la página con la API de YouTube y apoyo con la base de datos|
------------------|--------------------------------------------------------------------------
|Zozaya Fernández Melanie| Asesora y mentora del proyecto|