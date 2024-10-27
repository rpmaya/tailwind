export default function PseudoClases() {
  return (
    <div className="p-4">
      {/* Con "after" ponemos el asterisco rojo para indicar que es un campo obligatorio */}
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          type="email"
          name="email"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>

      <br></br>

      {/* vemos ejemplo con input de fichero*/}
      <input
        type="file"
        className="file:bg-violet-100 file:border-0 file:rounded-lg file:text-violet-700 file:font-semibold file:px-3 hover:file:bg-violet-300"
      />

      <br></br>

      {/* Con "marker" para los puntos de una lista */}
      <ol className="list-decimal ml-6 marker:text-red-500 marker:font-bold">
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ol>

      <br></br>

      {/* Con "selection" para modificar texto seleccionado con el ratón */}
      <p className="selection:bg-green-500 selection:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consequatur, corrupti tempora cumque ipsam amet hic inventore unde. Impedit veritatis rerum molestias distinctio excepturi quidem beatae ratione dicta tempora veniam.</p>

      <br></br>

      {/* Con "first-line" y "first-letter" */}
      <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consequatur, corrupti tempora cumque ipsam amet hic inventore unde. Impedit veritatis rerum molestias distinctio excepturi quidem beatae ratione dicta tempora veniam.
      </p>



    </div>
  )
}