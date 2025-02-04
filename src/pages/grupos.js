import '../style.css'

document.querySelector('#app').innerHTML = `
    <body class="bg-blue-900 min-h-screen">
    <!-- Barra de navegación -->
    <nav class="bg-white p-4 shadow-md">
        <div class="flex justify-between items-center">
        <div class="flex space-x-4">
            <a href="#" class="text-blue-900 font-semibold hover:underline">Grupos</a>
            <a href="#" class="text-blue-900 font-semibold hover:underline">Calendario</a>
            <a href="#" class="text-blue-900 font-semibold hover:underline">Perfil</a>
        </div>
        <div>
            <input
            type="text"
            placeholder="Buscar grupos"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
        </div>
        </div>
    </nav>

    <!-- Contenido principal -->
    <div class="p-8">
        <!-- Simulación de condición: Si hay cursos -->
        <div class="space-y-4">
        <!-- Mensaje cuando no hay cursos -->
        <div id="no-cursos" class="text-center text-white hidden">
            <p class="text-lg font-semibold">No estás suscrito a ningún curso.</p>
            <p class="text-sm">Puedes explorar cursos disponibles y unirte para empezar.</p>
        </div>

        <!-- Lista de grupos (visible si hay cursos) -->
        <div id="lista-cursos">
            <div class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <span class="font-semibold text-blue-900">Grupo 1</span>
            <button class="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <span class="font-semibold text-blue-900">Grupo 2</span>
            <button class="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
        </div>
        </div>
    </div>

    <!-- Script para simular la lógica -->
    <script>
        // Simulación: Usuario suscrito a cursos o no
        const isSubscribed = true; // Cambia a false para probar la condición

        if (!isSubscribed) {
        document.getElementById('no-cursos').classList.remove('hidden');
        document.getElementById('lista-cursos').classList.add('hidden');
        }
    </script>
    </body>
`
