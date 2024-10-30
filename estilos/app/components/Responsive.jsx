export default function Responsive() {
  //Cuando la pantalla supere el tamaño de sm (640px), el color será amber-200, y así sucesivamente para md (768px), etc.
  //Puedes ver las dimensiones en la parte superior de la página con "Inspeccionar"
  //Lo mismo lo podemos aplicar a cualquier cosa, por ejemplo, al tamaño de la fuente
  return (
    <div className="sm:bg-amber-200 md:bg-blue-200 lg:bg-red-200">
      {/* Se aplica flex en xl (1280px) */}
      <section className="xl:flex">

        <div className="border-2 border-black p-6 w-80 mx-auto mt-10 lg:w-96">
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Coding</h2>
          <p className="mt-4 md:text-2xl">Aprendiendo Tailwind</p>
        </div>

        <div className="border-2 border-black p-6 w-80 mx-auto mt-10 lg:w-96">
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Coding</h2>
          <p className="mt-4 md:text-2xl">Aprendiendo Tailwind</p>
        </div>

        <div className="border-2 border-black p-6 w-80 mx-auto mt-10 lg:w-96">
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Coding</h2>
          <p className="mt-4 md:text-2xl">Aprendiendo Tailwind</p>
        </div>
        
      </section>

    </div>
  )
  //Cambia el tamaño "lg:" por el personalizado "tablet:" para el cambio de color a bg-red-200, ancho de tarjeta w-96, etc.
}