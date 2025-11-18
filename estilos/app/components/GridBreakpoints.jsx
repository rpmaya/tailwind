export default function GridBreakpoints() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Grid + Breakpoints en Tailwind
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Ejemplos prácticos de cómo combinar CSS Grid con breakpoints responsivos
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              Móvil: &lt; 640px
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
              SM: ≥ 640px
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              MD: ≥ 768px
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
              LG: ≥ 1024px
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">
              XL: ≥ 1280px
            </span>
          </div>
        </header>

        {/* Ejemplo 1: Grid básico responsive */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            1. Grid Básico Responsive
          </h2>
          <p className="text-gray-600 mb-6">
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            </code>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md flex items-center justify-center text-2xl font-bold min-h-[120px] hover:scale-105 transition-transform"
              >
                {num}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Comportamiento:</strong> 1 columna en móvil → 2 en small → 3 en medium → 4 en large
            </p>
          </div>
        </section>

        {/* Ejemplo 2: Grid con col-span responsive */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            2. Col-span Responsive (Elementos destacados)
          </h2>
          <p className="text-gray-600 mb-6">
            Algunos elementos ocupan más espacio según el tamaño de pantalla
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Item destacado - ocupa diferentes espacios según breakpoint */}
            <div className="col-span-2 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-md flex items-center justify-center font-bold min-h-[120px]">
              <div className="text-center">
                <div className="text-xl md:text-2xl">Destacado</div>
                <div className="text-xs md:text-sm mt-2 opacity-90">
                  2 cols → 2 cols → 3 cols
                </div>
              </div>
            </div>

            <div className="bg-gray-300 p-6 rounded-lg flex items-center justify-center font-semibold min-h-[120px]">
              Normal
            </div>
            <div className="bg-gray-300 p-6 rounded-lg flex items-center justify-center font-semibold min-h-[120px]">
              Normal
            </div>
            <div className="bg-gray-300 p-6 rounded-lg flex items-center justify-center font-semibold min-h-[120px]">
              Normal
            </div>
            <div className="bg-gray-300 p-6 rounded-lg flex items-center justify-center font-semibold min-h-[120px]">
              Normal
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <code className="text-sm text-gray-700 block">
              col-span-2 md:col-span-2 lg:col-span-3
            </code>
          </div>
        </section>

        {/* Ejemplo 3: Layout de página completa */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            3. Layout de Página Completo
          </h2>
          <p className="text-gray-600 mb-6">
            Estructura típica de una página web con header, sidebar, contenido y footer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-[500px]">
            {/* Header - ocupa todo el ancho */}
            <header className="md:col-span-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-lg flex items-center justify-center font-bold text-xl">
              Header (col-span-full)
            </header>

            {/* Sidebar - oculto en móvil, visible en tablet+ */}
            <aside className="hidden md:block md:col-span-3 bg-gray-200 p-4 rounded-lg">
              <div className="font-semibold mb-3">Sidebar</div>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-2 rounded">Menú 1</div>
                <div className="bg-white p-2 rounded">Menú 2</div>
                <div className="bg-white p-2 rounded">Menú 3</div>
              </div>
              <div className="mt-4 text-xs text-gray-600">
                (Oculto en móvil)
              </div>
            </aside>

            {/* Contenido principal */}
            <main className="md:col-span-9 bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Contenido Principal</h3>
              <p className="text-gray-700 text-sm mb-4">
                Este contenido ocupa todo el ancho en móvil, y 9/12 columnas en tablet+
              </p>

              {/* Grid anidado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="bg-white p-4 rounded shadow-sm text-center font-semibold">
                    Card {num}
                  </div>
                ))}
              </div>
            </main>

            {/* Footer - ocupa todo el ancho */}
            <footer className="md:col-span-full bg-gray-800 text-white p-4 rounded-lg text-center font-semibold">
              Footer (col-span-full)
            </footer>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Clases clave:</strong>
            </p>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• <code className="bg-white px-2 py-0.5 rounded">md:col-span-full</code> - Ocupa todo el ancho</li>
              <li>• <code className="bg-white px-2 py-0.5 rounded">hidden md:block</code> - Oculto en móvil</li>
              <li>• <code className="bg-white px-2 py-0.5 rounded">md:col-span-3</code> - 3 de 12 columnas</li>
              <li>• <code className="bg-white px-2 py-0.5 rounded">md:col-span-9</code> - 9 de 12 columnas</li>
            </ul>
          </div>
        </section>

        {/* Ejemplo 4: Galería de productos */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            4. Galería de Productos Responsive
          </h2>
          <p className="text-gray-600 mb-6">
            Grid adaptativo perfecto para e-commerce
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Producto 1', price: '$29.99', color: 'from-red-400 to-red-600' },
              { name: 'Producto 2', price: '$49.99', color: 'from-yellow-400 to-yellow-600' },
              { name: 'Producto 3', price: '$39.99', color: 'from-green-400 to-green-600' },
              { name: 'Producto 4', price: '$59.99', color: 'from-blue-400 to-blue-600' },
              { name: 'Producto 5', price: '$34.99', color: 'from-purple-400 to-purple-600' },
              { name: 'Producto 6', price: '$44.99', color: 'from-pink-400 to-pink-600' },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-40 md:h-48 bg-gradient-to-br ${product.color} flex items-center justify-center text-white font-bold text-xl`}>
                  Imagen
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">Descripción del producto</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-green-600">{product.price}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Columnas por breakpoint:</strong> 1 → 2 → 3 → 4
            </p>
          </div>
        </section>

        {/* Ejemplo 5: Dashboard con métricas */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            5. Dashboard con Métricas
          </h2>
          <p className="text-gray-600 mb-6">
            Diferentes tamaños de cards para destacar información importante
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Métrica destacada - ocupa más espacio */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm md:text-base opacity-90 mb-2">Ventas Totales</p>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold">$125,430</p>
                  <p className="text-xs md:text-sm mt-2 opacity-75">+12.5% vs mes anterior</p>
                </div>
                <div className="text-4xl">📈</div>
              </div>
            </div>

            {/* Métricas normales */}
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <p className="text-sm text-gray-600 mb-2">Usuarios Activos</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">2,543</p>
              <p className="text-xs text-green-600 mt-2">↑ 8.2%</p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <p className="text-sm text-gray-600 mb-2">Nuevos Pedidos</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900">187</p>
              <p className="text-xs text-green-600 mt-2">↑ 15.3%</p>
            </div>

            {/* Gráfico - ocupa todo el ancho en móvil, la mitad en tablet */}
            <div className="md:col-span-2 lg:col-span-4 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Tendencia de Ventas</h3>
              <div className="h-48 md:h-64 bg-white rounded-lg flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                [Aquí iría un gráfico]
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Técnica:</strong> Combinar col-span con breakpoints
            </p>
            <code className="text-xs text-gray-600 block mt-2">
              md:col-span-2 → La card destacada ocupa 2 columnas en tablet+
            </code>
          </div>
        </section>

        {/* Ejemplo 6: Gap responsive */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            6. Gap Responsive (Espaciado adaptativo)
          </h2>
          <p className="text-gray-600 mb-6">
            El espaciado entre elementos crece en pantallas más grandes
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 xl:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="bg-gradient-to-br from-teal-400 to-teal-600 text-white p-4 md:p-6 rounded-lg shadow-md flex items-center justify-center font-bold text-lg min-h-[100px]"
              >
                {num}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-teal-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Gap por breakpoint:</strong>
            </p>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Móvil: gap-2 (8px)</li>
              <li>• Tablet: md:gap-4 (16px)</li>
              <li>• Laptop: lg:gap-6 (24px)</li>
              <li>• Desktop: xl:gap-8 (32px)</li>
            </ul>
          </div>
        </section>

        {/* Ejemplo 7: Grid con row-span */}
        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            7. Row-span + Col-span (Diseño tipo Pinterest)
          </h2>
          <p className="text-gray-600 mb-6">
            Elementos que ocupan múltiples filas y columnas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[100px] gap-4">
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-4 flex items-center justify-center text-white font-bold text-xl">
              2x2
            </div>
            <div className="bg-blue-400 rounded-lg p-4 flex items-center justify-center text-white font-bold">
              1x1
            </div>
            <div className="row-span-2 bg-purple-400 rounded-lg p-4 flex items-center justify-center text-white font-bold">
              1x2
            </div>
            <div className="bg-green-400 rounded-lg p-4 flex items-center justify-center text-white font-bold">
              1x1
            </div>
            <div className="bg-yellow-400 rounded-lg p-4 flex items-center justify-center text-white font-bold">
              1x1
            </div>
            <div className="col-span-2 bg-pink-400 rounded-lg p-4 flex items-center justify-center text-white font-bold">
              2x1
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Clases usadas:</strong> col-span-2, row-span-2, auto-rows-[100px]
            </p>
          </div>
        </section>

        {/* Footer educativo */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¡Practica redimensionando la ventana!</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Abre las DevTools (F12) y cambia el tamaño de la ventana para ver cómo se adaptan los grids.
            Cada ejemplo usa diferentes combinaciones de breakpoints para crear layouts responsivos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-gray-700 px-4 py-2 rounded">
              <kbd className="bg-gray-600 px-2 py-1 rounded">Ctrl</kbd> +
              <kbd className="bg-gray-600 px-2 py-1 rounded ml-1">Shift</kbd> +
              <kbd className="bg-gray-600 px-2 py-1 rounded ml-1">M</kbd>
              <span className="ml-2">= Vista responsive</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}
