export default function Grid() {
  return (
    <>
      {/** Prueba con distintos grid-cols-1-12 
       * con col-span-2 nos expandemos dos columnas
       * con col-start-2 y col-end-4 le indicamso desde donde empieza y donde acaba
       * o simplificado con col-[2/5] (empieza en la 2 y termina en la 5)
       * también se puede extener la fila con row-span-3
       * con w-full se toma todo el ancho disponible, lo mismo para h-full
      */}
      <div className="grid grid-cols-4 gap-4">
        <div className="card col-span-2 w-full">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card row-span-3 w-full h-full">4</div>
        <div className="card col-span-2 h-full">5</div>
        <div className="card">6</div>
        <div className="card col-start-2 col-end-4 w-full">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
      </div>

      <br></br>

      <div className="grid grid-cols-2 gap-4 h-[100vh]">
        <div className="card col-span-2 w-full">header</div>
        <div className="card col-span-2 w-full">nav</div>
        <div className="card w-full">section</div>
        <div className="card w-full">article</div>
        <div className="card row-[3/5] col-start-2 w-full h-full">aside</div>
        <div className="card w-full col-span-2">footer</div>
      </div>  

    </>
  )
}