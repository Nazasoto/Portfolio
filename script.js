document.querySelector('.input-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = this.value.trim(); // Limpia espacios adicionales
        const outputArea = document.querySelector('.output-area');

        if (command === "clear") {
            // Ejecuta la limpieza directamente si el comando es "clear"
            outputArea.innerHTML = "";
        } else {
            // Para otros comandos, ejecuta normalmente y muestra el resultado
            const output = executeCommand(command);
            outputArea.innerHTML += `<p>$ ${command}</p><p>${output.replace(/\n/g, "<br>")}</p>`;
        }

        this.value = "";  // Limpia el campo de entrada después de ejecutar el comando
    }
});


// Selección del contenedor de consola y la cabecera
const consoleContainer = document.querySelector('.console-container');
const consoleHeader = document.querySelector('.console-header');

consoleHeader.style.cursor = "move"; // Cambia el cursor a "mover" en la cabecera

let isDragging = false;
let offsetX, offsetY;

// Manejadores de eventos para arrastrar el contenedor
consoleHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - consoleContainer.getBoundingClientRect().left;
    offsetY = e.clientY - consoleContainer.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        consoleContainer.style.left = `${e.clientX - offsetX}px`;
        consoleContainer.style.top = `${e.clientY - offsetY}px`;
        consoleContainer.style.position = "absolute";
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Variables para controlar el estado de minimización y maximización
let isMinimized = false;
let isMaximized = false;
const originalSize = {
    width: consoleContainer.style.width || '80%',
    height: consoleContainer.style.height || 'auto',
    top: consoleContainer.style.top || '50px',
    left: consoleContainer.style.left || '50px',
};

// Función para alternar la minimización de la consola
function toggleMinimize() {
    if (!isMinimized) {
        // Minimiza a un tamaño pequeño en una posición específica
        consoleContainer.style.width = '300px';
        consoleContainer.style.height = '40px';
        consoleContainer.style.overflow = 'hidden';
        consoleContainer.style.top = '50px';
        consoleContainer.style.left = '50px';
        isMinimized = true;
    } else {
        // Restaura el tamaño y la posición originales
        consoleContainer.style.width = originalSize.width;
        consoleContainer.style.height = originalSize.height;
        consoleContainer.style.overflow = 'auto';
        consoleContainer.style.top = originalSize.top;
        consoleContainer.style.left = originalSize.left;
        isMinimized = false;
    }
}

// Función para alternar la maximización de la consola
function toggleMaximize() {
    if (!isMaximized) {
        // Maximiza para ocupar toda la pantalla
        consoleContainer.style.width = '100vw';
        consoleContainer.style.height = '100vh';
        consoleContainer.style.top = '0';
        consoleContainer.style.left = '0';
        isMaximized = true;
    } else {
        // Restaura el tamaño y la posición originales
        consoleContainer.style.width = originalSize.width;
        consoleContainer.style.height = originalSize.height;
        consoleContainer.style.top = originalSize.top;
        consoleContainer.style.left = originalSize.left;
        isMaximized = false;
    }
}
