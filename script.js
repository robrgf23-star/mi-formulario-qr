document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const qrContainer = document.getElementById('qrContainer');
    const qrCodeDiv = document.getElementById('qrcode');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Detener el envío normal del formulario

        // 1. Obtener los valores del formulario
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const org = document.getElementById('org').value.trim();

        // 2. Formatear el contenido como vCard 3.0
        // Esta estructura es la que el smartphone detecta para el registro de contacto
        const vCardContent = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            // N: Nombre estructurado (Apellido;Nombre;SegundoNombre;Prefijo;Sufijo)
            // Asumimos un nombre simple por ahora:
            `FN:${name}`, // Nombre Completo (Display Name)
            name ? `N:${name.split(' ').reverse()[0]};${name.split(' ')[0]};;;` : '',
            phone ? `TEL;TYPE=CELL:${phone}` : '', // TEL;TYPE=CELL o WORK o HOME
            email ? `EMAIL:${email}` : '',
            org ? `ORG:${org}` : '',
            'END:VCARD'
        ].filter(line => line).join('\n'); // Filtramos líneas vacías y unimos con saltos de línea

        console.log("Contenido vCard generado:\n" + vCardContent);
        
        // 3. Limpiar el contenedor anterior y generar el nuevo QR
        qrCodeDiv.innerHTML = ''; // Limpiar cualquier QR previo
        
        // Usar la librería qrcode.js
        if (typeof QRCode !== 'undefined') {
            new QRCode(qrCodeDiv, {
                text: vCardContent,
                width: 256,
                height: 256,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
            
            // 4. Mostrar el contenedor del QR
            qrContainer.classList.remove('hidden');

            // Opcional: Desplazar la vista hacia el QR generado
            qrContainer.scrollIntoView({ behavior: 'smooth' });

        } else {
            console.error('La librería qrcode.js no se ha cargado correctamente.');
            alert('Error al cargar el generador de QR. Por favor, revisa la conexión.');
        }

    });
});