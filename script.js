// Listas para almacenar datos de jugadores y equipos
const employees = []; // Lista de jugadores
const companies = []; // Lista de equipos

// Lista de posiciones en el fÃºtbol
const occupationSelect = [
    "Administrador", // PosiciÃ³n de portero
    "Ingeniero civil", // PosiciÃ³n de defensa central
    "Ingeniero Industrial", // PosiciÃ³n de lateral derecho
];

// Carga las posiciones en el formulario
function loadPositions() {
    const occupationSelect = document.getElementById("employeeCccupation"); // Obtiene el elemento select para las posiciones
    occupationSelect.innerHTML = `<option value="">Seleccione una ocupacion</option>`; // Agrega la opciÃ³n predeterminada
    occupationSelect.forEach(occupationSelect => {
        const option = document.createElement("option"); // Crea un elemento de opciÃ³n
        option.value = occupation; // Establece el valor de la opciÃ³n
        option.textContent = occupation; // Establece el texto visible de la opciÃ³n
        occupationSelect.appendChild(option); // Agrega la opciÃ³n al selector
    });
}

// Carga los equipos en el selector del formulario de jugadores
function updateTeamSelect() {
    const teamSelect = document.getElementById("employeeOccupation"); // Obtiene el elemento select para los equipos
    teamSelect.innerHTML = `<option value="">Seleccione su ocupación</option>`; // Agrega la opciÃ³n predeterminada
    companies.forEach(team => {
        const option = document.createElement("option"); // Crea un elemento de opciÃ³n
        option.value = team.name; // Establece el valor de la opciÃ³n como el nombre del equipo
        option.textContent = team.name; // Establece el texto visible como el nombre del equipo
        teamSelect.appendChild(option); // Agrega la opciÃ³n al selector
    });
}

// Maneja el formulario para agregar equipos
const teamForm = document.getElementById("addcompanyForm"); // Obtiene el formulario para agregar equipos
teamForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envÃ­o predeterminado del formulario
    const name = document.getElementById("companyName").value; // Obtiene el nombre del equipo
    const logoFile = document.getElementById("companyLogo").files[0]; // Obtiene el archivo del logo
    const logo = logoFile ? URL.createObjectURL(logoFile) : "assets/images/default-team.jpg"; // Genera la URL del logo o usa una imagen predeterminada

    if (!name) {
        alert("Por favor, ingrese el nombre del equipo."); // Muestra un mensaje si el nombre estÃ¡ vacÃ­o
        return; // Finaliza la ejecuciÃ³n
    }

    const team = { name, logo }; // Crea un objeto equipo
    companies.push(team); // Agrega el equipo a la lista de equipos
    updateTeamCards(); // Actualiza las tarjetas de equipos
    updateTeamSelect(); // Actualiza el selector de equipos
    teamForm.reset(); // Resetea el formulario
});

// Actualiza la visualizaciÃ³n de los equipos
function updateTeamCards() {
    const teamContainer = document.getElementById("companyCardsContainer"); // Obtiene el contenedor de tarjetas de equipos
    teamContainer.innerHTML = ""; // Limpia el contenido existente
    companies.forEach(team => {
        const card = `<div class="team-card">
            <img src="${team.logo}" alt="${team.name}" style="width: 100px; height: 100px; border-radius: 50%;"> <!-- Imagen del logo del equipo -->
            <h3>${team.name}</h3> <!-- Nombre del equipo -->
        </div>`;
        teamContainer.innerHTML += card; // Agrega la tarjeta al contenedor
    });
}

// Maneja el formulario para agregar jugadores
const playerForm = document.getElementById("addEmployee-Form"); // Obtiene el formulario para agregar jugadores
playerForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envÃ­o predeterminado del formulario
    const name = document.getElementById("employeeName").value; // Obtiene el nombre del jugador
    const age = document.getElementById("employeeAge").value; // Obtiene la edad del jugador
    const position = document.getElementById("employeeArea").value; // Obtiene la posiciÃ³n seleccionada
    const team = document.getElementById("employeeOccupation").value; // Obtiene el equipo seleccionado
    const photoFile = document.getElementById("employeePhoto").files[0]; // Obtiene el archivo de la foto
    const photo = photoFile ? URL.createObjectURL(photoFile) : "assets/images/default-player.jpg"; // Genera la URL de la foto o usa una imagen predeterminada

    if (!name || !age || !position || !team) {
        alert("Por favor, complete todos los campos obligatorios."); // Muestra un mensaje si falta algÃºn campo obligatorio
        return; // Finaliza la ejecuciÃ³n
    }

    const player = { name, age, position, team, photo }; // Crea un objeto jugador
    employees.push(player); // Agrega el jugador a la lista de jugadores
    updatePlayerTable(); // Actualiza la tabla de jugadores
    playerForm.reset(); // Resetea el formulario
});

// Actualiza la tabla de jugadores
function updatePlayerTable() {
    const playerTable = document.getElementById("employeeTableBody"); // Obtiene el cuerpo de la tabla de jugadores
    playerTable.innerHTML = ""; // Limpia el contenido existente
    employees.forEach(player => {
        const row = `<tr>
            <td><img src="${player.photo}" alt="${player.name}" style="width: 50px; height: 50px; border-radius: 50%;"></td> <!-- Foto del jugador -->
            <td>${player.name}</td> <!-- Nombre del jugador -->
            <td>${player.age}</td> <!-- Edad del jugador -->
            <td>${player.position}</td> <!-- PosiciÃ³n del jugador -->
            <td>${player.team}</td> <!-- Equipo del jugador -->
        </tr>`;
        playerTable.innerHTML += row; // Agrega la fila a la tabla
    });
}

// Inicializa el sistema al cargar la pÃ¡gina
document.addEventListener("DOMContentLoaded", () => {
    loadPositions(); // Carga las posiciones en el selector
    updateTeamSelect(); // Carga los equipos en el selector
});