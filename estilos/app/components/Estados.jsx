export default function Estados() {
  return (
    <div className="bg-blue-400">
      <form action="" className="bg-white w-80 mx-auto mt-8 rounded-lg p-6">

        <input className="border border-gray-300 w-full px-3 py-2 mb-4 rounded-md disabled:bg-red-200" type="text" placeholder="Nombre" disabled/>

        <input className="border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600 invalid:focus:ring-red-400 peer" 
               type="email" 
               placeholder="E-mail"
        />
        <p className="text-red-400 hidden peer-invalid:block">El correo es incorrecto</p>

        <input className="border border-gray-300 w-full px-3 py-2 mt-4 mb-4 rounded-md" type="password" placeholder="Contraseña"/>

        <input className="bg-blue-500 w-full py-2 text-white rounded-md cursor-pointer hover:bg-blue-400" type="submit" value="Registrar"/>
      </form>
    </div>
  )
}