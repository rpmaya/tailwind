import Colores from '@/components/Colores'
import Medidas from '@/components/Medidas'
import Estados from '@/components/Estados'
import PseudoClases from '@/components/PseudoClases'
import Responsive from './components/Responsive'
import Flexbox from './components/Flexbox'
import Grid from './components/Grid'
import GridBreakpoints from './components/GridBreakpoints'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Hello Tailwind!
        </h1>
      </main>

      {/* Componente nuevo para la clase: Grid + Breakpoints */}
      <GridBreakpoints />

      {/* Componentes anteriores */}
      <Colores />
      <Medidas />
      <Estados />
      <PseudoClases />
      <Responsive />
      <Flexbox />
      <Grid />
    </>
  )
}