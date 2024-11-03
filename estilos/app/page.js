import Colores from '@/components/Colores'
import Medidas from '@/components/Medidas'
import Estados from '@/components/Estados'
import PseudoClases from '@/components/PseudoClases'
import Responsive from './components/Responsive'
import Flexbox from './components/Flexbox'
import Grid from './components/Grid'
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Estilos con Tailwind!
      </h1>
{/*
      <Colores />
      <Medidas />
      <Estados />
      <PseudoClases />
      <Responsive />
      <Flexbox />
*/}
      <Grid />
    </>
  )
}