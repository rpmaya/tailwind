export default function Flexbox() {
  return (
    <>
    <div className="flex items-start place-content-between border-2 border-blue-800 h-[600px]">
      {/* Prueba para flex con flex-col, flex-row, flex-col-reverse, flex-row-reverse, place-content-around y place-content-between */}
      {/* Prueba con items-center item-end e item-start (valor por defecto) */}
      <div className="card self-start">1</div>
      <div className="card self-center">2</div>
      <div className="card self-end">3</div>
    </div>
    {/** Mantienen su ancho definido con flex-wrap
     * con gap-4, ponemos un espacio entre ellos
    */}
    <div className="flex flex-wrap gap-4">
      <div className="card">1</div>
      <div className="card">2</div>
      <div className="card">3</div>
      <div className="card">4</div>
      <div className="card">5</div>
      <div className="card">6</div>
    </div>
    
    </>

  )
}