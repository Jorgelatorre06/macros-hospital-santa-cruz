const macros = [

"/do ¡TAZER! ¡TAZER! ¡TAZER!",

"/do ENTRENAMIENTO DEFENSA PERSONAL (TAZER)",

"/do ENTRENAMIENTO DEFENSA PERSONAL (PELEA)",

"/flobby Preparando vehículo médico en respuesta a llamadas de emergencia",

"/do Cámara de Cuerpo Encendida",

"/flobby En Ruta a Llamada de Emergencia",

"/do Accesando Signos Vitales / Realizando RCP / Aplicando Botiquín a Paciente",

"/me ¡El personal médico no podrá ayudarte durante una balacera o en una zona de peligro o riesgo!",

"/flobby (10-8) En Servicio Laboral",

"/flobby (10-7) Fuera de Servicio",

"/flobby (10-4) Entendido / De Acuerdo",

"/flobby Iniciando Entrega de Medicamentos",

"/flobby Ignorar lo anunciado o lo siguiente",

"/flobby (CÓDIGO VERDE) Todas las Llamadas de Emergencia Resueltas",

"/flobby (CÓDIGO ROJO) Sala de Hospital Fuera de Control",

"/flobby (CÓDIGO AZUL) ¡Se requiere oficial en el hospital! ¡Persona fuera de control o no abandona el hospital!",

"/flobby (CODIGO VIOLETA) Personal médico bajo situación de acoso, Requerimos apoyo de altos rangos, policial o de administración",

"/flobby Entrenando Nuevo Enfermero (Macros / Rol)",

"/flobby Vehículo Médico Encontrado (Equipo de Logística)",

"/flobby Vehículo Médico Guardado (Equipo de Logística)",

"/flobby SOLICITO PERMISO PARA HACER RCP O TRABAJO EN CONJUNTO CON UN INSTRUCTOR",

"/me Hola mi nombre es (Tu Nombre aquí), (Rango médico aquí) de la facción medica de Santa Cruz"

];

const lista = document.getElementById("listaMacros");
const buscador = document.getElementById("buscador");

function mostrarMacros(filtro = "") {

    lista.innerHTML = "";

    macros
        .filter(macro =>
            macro.toLowerCase().includes(filtro.toLowerCase())
        )
        .forEach(macro => {

            const tarjeta = document.createElement("div");

            tarjeta.className = "macro-card";

            tarjeta.innerHTML = `
                <div class="macro-texto">
                    ${macro}
                </div>

                <button class="boton-copiar">
                    📋 COPIAR
                </button>
            `;

            const boton = tarjeta.querySelector("button");

            boton.onclick = () => {

                navigator.clipboard.writeText(macro);

                boton.innerHTML = "✅ COPIADO";

                setTimeout(() => {

                    boton.innerHTML = "📋 COPIAR";

                }, 1500);

            };

            lista.appendChild(tarjeta);

        });

}

buscador.addEventListener("input", () => {

    mostrarMacros(buscador.value);

});

mostrarMacros();
