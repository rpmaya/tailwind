import Colores from '@/components/Colores'
import Medidas from '@/components/Medidas'
import Estados from '@/components/Estados'
import PseudoClases from '@/components/PseudoClases'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Colores />
      <Medidas />
      <Estados />
      <PseudoClases />
    </>
  )
}