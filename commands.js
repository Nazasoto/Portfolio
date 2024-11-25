const commands = {
    ls: () => {
        // Genera HTML para mostrar los proyectos como carpetas
        return `
            <div class="folder" onclick="executeCommand('cd Proyecto1')">📁 Lista de Tareas</div>
            <div class="folder" onclick="executeCommand('cd Proyecto2')">📁 Proyecto Grámatica</div>
        `;
    },
    
    cd: (project) => {
        // Información detallada de cada proyecto al "entrar" en la carpeta
        if (project === "Lista") {
            return "Descripción: Este pequeño proyecto web te permite gestionar tus tareas de una manera práctica y motivadora. \n Link:<a href='https://nazasoto.github.io/Lista-de-Tareas/'>Enlace</a>;"
        } else if (project === "Proyecto") {
            return "Descripción de Proyecto: Es una página sencilla en la que colaboré con una profesora para crear problemas gramaticales interactivos para que juegue con sus alumnos.\n Link <a href='https://nazasoto.github.io/Proyecto-de-Gramatica/'>Enlace</>";
        } else {
            return `Proyecto no encontrado: ${project}`;
        }
    },

    about: () => "Soy desarrollador web con experiencia en frontend y backend, especializado en backend. He trabajado con tecnologías como SQL y Java, y tengo un sólido conocimiento en bases de datos relacionales y no relacionales. Me apasiona crear API eficientes y escalables, y disfruto resolviendo problemas complejos durante el desarrollo. He colaborado en proyectos desde sitios web sencillos hasta aplicaciones empresariales, adquiriendo habilidades técnicas y en gestión de proyectos. Siempre busco aprender nuevas herramientas y mantenerme al tanto de las últimas tendencias en desarrollo web. Aunque mi enfoque principal es el backend, reconozco la importancia del frontend y la mejora que un buen diseño aporta a la experiencia del usuario. Por ello, colaboro estrechamente con diseñadores y desarrolladores de frontend para asegurar una integración fluida. Mi objetivo es crear aplicaciones que funcionen bien y ofrezcan experiencias rmemorables a los usuarios.",

    projects: () => "Usa el comando 'ls' para ver la lista de proyectos.",


    contact: () => {
        return `
            <div class="contact-icons">
                <a href="https://mail.google.com/mail/u/0/#search/sotonazareno16%40gmail.com" target="_blank" class="contact-link">
                    <i class="fas fa-envelope"></i> Email
                </a>
                <a href="https://www.linkedin.com/in/nazareno-soto-44b124242/" target="_blank" class="contact-link">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/Nazasoto" target="_blank" class="contact-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </div>
        `;
    },

    clear: () => "clear",
    help: () => `Comandos disponibles:\n- ls: Ver los proyectos\n- cd <>Proyecto<>: Moverse entre carpetas\n- about: Información sobre mí\n- contact: Mis contactos\n- clear: Limpia la consola`,
};


function executeCommand(cmd) {
    const [command, ...args] = cmd.trim().split(" ");
    if (commands[command]) {
        return commands[command](...args);  // Ejecuta la función del comando
    } else {
        return `Comando no encontrado: ${command}`;
    }
}

