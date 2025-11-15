
export default function Colores() {
  return (
    <>
      <p className="bg-slate-400 text-[#d2d255]">Mi color personalizado</p>
      <p className="bg-azul-oscuro text-azul-claro">Mi clase personalizada</p>

      <button className="bg-azul-claro/50 hover:bg-azul-oscuro text-white p-2 rounded-lg w-24 mx-auto block my-8">Suscríbete</button>

      <div className="bg-gradient-to-r from-azul-claro to-azul-oscuro border-red-500 border-2 p-4">DIV</div>

      <div className="text-4xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Hello world
        </span>
      </div>
    </>
  )
}