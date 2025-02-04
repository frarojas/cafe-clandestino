import '../style.css'

document.querySelector('#app').innerHTML = `
    <div class="bg-blue-900 flex items-center justify-center min-h-screen">
        <div class="bg-white rounded-lg shadow-lg p-8 w-80 text-center">
            <div class="mb-6">
            <h1 class="text-xl font-bold text-blue-900">Menú</h1>
            </div>
            <div class="space-y-4">
            <button class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
                Ver Perfil
            </button>
            <button class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
                Ver Grupos
            </button>
            <button class="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
                Calendario
            </button>
            </div>
            <div class="mt-8">
            <button class="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600">
                SALIR
            </button>
            </div>
        </div>
    </div>
`
