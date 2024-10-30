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
     * con grow les permitiremos crecer si tienen espacio para hacerlo
     * con shrink-0 se mantiene la relación
    */}
    <div className="flex flex-wrap gap-4">
      <div className="card grow shrink-0">1</div>
      <div className="card grow shrink-0">2</div>
      <div className="card grow shrink-0">3</div>
      <div className="card grow shrink-0">4</div>
      <div className="card grow shrink-0">5</div>
      <div className="card grow shrink-0">6</div>
    </div>
    
    </>

  )
}