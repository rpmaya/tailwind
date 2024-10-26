export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className="bg-slate-400 text-[#d2d255]">Mi color personalizado</p>
      <p className="bg-azul-oscuro text-azul-claro">Mi clase personalizada</p>

      <button className="bg-azul-claro hover:bg-azul-oscuro text-white p-2 rounded-lg w-24 mx-auto block my-8">Suscríbete</button>
    </>
  )
}