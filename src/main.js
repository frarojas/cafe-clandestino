import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="flex justify-center items-center h-screen bg-indigo-900">
    <div class="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 class="text-2xl font-bold text-center">Log In</h1>
      <hr class="mt-3"/>
      <div class="mt-3">
        <label form="username" class="block text-base mb-2">Correo</label>
        <input type="text" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Ingresa el correo electrónico"/>
      </div>
      <div class="mt-3">
        <label form="password" class="block text-base mb-2">Contraseña</label>
        <input type="password" id="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Ingresa la contraseña"/>
      </div>
      <div class="mt-3">
        <button class="w-full bg-indigo-600 text-white text-base font-semibold py-2 rounded-md hover:bg-indigo-700">Log In</button>
      </div>
    </div> 
  </div>
`
