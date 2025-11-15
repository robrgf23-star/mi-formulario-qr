# mi-formulario-qr
Generador de Tarjeta de Contacto QR
# Generador de Tarjeta de Contacto QR

Este proyecto es una aplicación web sencilla desarrollada con HTML, CSS y JavaScript que permite a los usuarios ingresar sus datos de contacto y generar un **Código QR** en formato **vCard**.

Al escanear el código QR con cualquier smartphone, el dispositivo lo interpretará automáticamente y pedirá al usuario que **guarde el contacto** en su agenda.

##  Cómo Ejecutar el Proyecto

1.  **Clonar el Repositorio:**
    ```bash
    git clone [https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    cd mi-formulario-qr
    ```

2.  **Abrir en el Navegador:**
    Simplemente abre el archivo `index.html` directamente en tu navegador web. Si usas VS Code, puedes usar la extensión **Live Server**.

##  Estructura del Proyecto

* `index.html`: Contiene la estructura del formulario y la referencia al código QR.
* `styles.css`: Define la apariencia y el estilo del formulario.
* `script.js`: La lógica central. Se encarga de capturar los datos y utilizar la librería `qrcode.js` (cargada por CDN) para generar la cadena vCard y el código QR.

## Formato Clave (vCard)

La lógica importante reside en la conversión de los datos del formulario a la cadena de texto **vCard** (versión 3.0), que es el estándar reconocido por los sistemas operativos móviles para el registro de contactos.

**Ejemplo de la cadena generada:**