# Ejercicio Práctico: Grid + Breakpoints en Tailwind CSS

**U-TAD - Desarrollo Web**

---

## Objetivo

Crear una página web completa y responsive usando **CSS Grid** y **breakpoints** de Tailwind CSS. Este ejercicio pondrá a prueba tu comprensión de layouts responsive y cómo combinar diferentes técnicas.

---

## Descripción del Ejercicio

Debes crear una landing page para una **tienda de tecnología** que se adapte perfectamente a móvil, tablet y desktop. La página debe incluir varios componentes y seguir un diseño específico según el tamaño de pantalla.

---

## Componentes Requeridos

### 1. **Header / Navegación** (10 puntos)

**Requisitos:**
- Debe ocupar todo el ancho de la página
- En **móvil**:
  - Logo a la izquierda
  - Icono de menú hamburguesa (☰) a la derecha
  - Links de navegación OCULTOS
- En **tablet/desktop** (≥ 768px):
  - Logo a la izquierda
  - Links de navegación visibles a la derecha
  - Icono hamburguesa OCULTO
- Usar Flexbox para la alineación
- Fondo oscuro con texto blanco

**Pista:** Usa `hidden`, `md:block`, `md:flex`, `justify-between`

---

### 2. **Sección Hero** (15 puntos)

**Requisitos:**
- Grid de **2 columnas** en desktop, **1 columna** en móvil
- Columna izquierda:
  - Título grande (responsive: más pequeño en móvil)
  - Subtítulo
  - Botón de "Comprar Ahora"
  - Botón de "Ver Catálogo"
- Columna derecha:
  - Placeholder para imagen (puede ser un div con gradiente)
  - En móvil debe aparecer ARRIBA del texto
- Padding responsive: más pequeño en móvil, más grande en desktop

**Pista:** Usa `grid`, `grid-cols-1`, `md:grid-cols-2`, `order` para cambiar el orden en móvil

---

### 3. **Sección de Características** (15 puntos)

**Requisitos:**
- Grid responsive de tarjetas:
  - **Móvil**: 1 columna
  - **Tablet** (≥ 640px): 2 columnas
  - **Desktop** (≥ 1024px): 4 columnas
- Cada tarjeta debe tener:
  - Icono/emoji grande
  - Título
  - Descripción corta
  - Hover effect (escala o sombra)
- Mínimo 4 tarjetas
- Gap responsive (más pequeño en móvil, más grande en desktop)

**Pista:** Usa `sm:grid-cols-2`, `lg:grid-cols-4`, `gap-4 lg:gap-6`, `hover:scale-105`

---

### 4. **Galería de Productos** (20 puntos)

**Requisitos:**
- Grid de productos:
  - **Móvil**: 1 columna
  - **Tablet** (≥ 640px): 2 columnas
  - **Desktop** (≥ 1024px): 3 columnas
  - **Desktop XL** (≥ 1280px): 4 columnas
- Cada producto debe tener:
  - Imagen (o placeholder con color)
  - Nombre del producto
  - Precio
  - Botón "Añadir al carrito"
- **EXTRA:** El primer producto debe ser DESTACADO y ocupar 2 columnas en desktop (col-span-2)
- Mínimo 6 productos
- Cards con sombra y hover effect

**Pista:** Usa `first:col-span-2 first:md:col-span-2`, `aspect-square`, `object-cover`

---

### 5. **Sección de Estadísticas / Dashboard** (20 puntos)

**Requisitos:**
- Grid de métricas estilo dashboard:
  - **Móvil**: 1 columna (apilado)
  - **Tablet** (≥ 768px): 2 columnas
  - **Desktop** (≥ 1024px): 4 columnas
- Una métrica debe ser DESTACADA y ocupar 2 columnas en tablet y desktop
- Cada métrica debe mostrar:
  - Título descriptivo
  - Número grande
  - Indicador de cambio (↑ +12% o similar)
- Colores diferentes para cada métrica
- Usar gradientes

**Pista:** Usa `md:col-span-2`, gradientes con `bg-gradient-to-br`, iconos con emojis

---

### 6. **Sección de Testimonios** (10 puntos)

**Requisitos:**
- Grid de testimonios:
  - **Móvil**: 1 columna
  - **Desktop** (≥ 768px): 3 columnas
- Cada testimonio debe tener:
  - Foto/avatar del cliente (puede ser un círculo de color)
  - Nombre
  - Comentario
  - Estrellas de valoración (★★★★★)
- Mínimo 3 testimonios
- Bordes redondeados y sombras

**Pista:** Usa `rounded-full` para avatares circulares, `shadow-lg`

---

### 7. **Footer** (10 puntos)

**Requisitos:**
- Grid responsive:
  - **Móvil**: 1 columna (todo apilado)
  - **Tablet** (≥ 768px): 3 columnas
- Tres secciones:
  - Información de la empresa
  - Enlaces rápidos
  - Newsletter/Suscripción
- Debe ocupar todo el ancho
- Fondo oscuro con texto claro
- Copyright centrado al final

**Pista:** Usa `md:grid-cols-3`, `col-span-full` para el copyright

---

## Requisitos Técnicos

### Breakpoints que DEBES usar:
- `sm:` → 640px (móvil grande)
- `md:` → 768px (tablet)
- `lg:` → 1024px (laptop)
- `xl:` → 1280px (desktop)

### Clases de Tailwind que DEBES practicar:
- ✅ `grid`, `grid-cols-*`
- ✅ `gap-*` responsive
- ✅ `col-span-*`
- ✅ `hidden`, `block`, `flex`
- ✅ `hover:*` states
- ✅ `bg-gradient-*`
- ✅ Padding/margin responsive (`p-4 md:p-8`)
- ✅ Tamaños de texto responsive (`text-xl md:text-3xl`)

### Colores recomendados:
- **Header/Footer**: `bg-gray-800`, `bg-gray-900`
- **Hero**: Gradientes azules/morados
- **Cards**: Blanco con sombras
- **Botones**: `bg-blue-500`, `bg-green-500`

---

## Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Header responsive | 10 |
| Hero section | 15 |
| Características | 15 |
| Galería de productos | 20 |
| Dashboard/Estadísticas | 20 |
| Testimonios | 10 |
| Footer | 10 |
| **TOTAL** | **100** |

### Puntos Extra (Bonus):
- +5 pts: Animaciones y transiciones suaves
- +5 pts: Dark mode implementado
- +5 pts: Diseño creativo y profesional
- +5 pts: Código limpio y bien organizado

---

## Entrega

**Archivo:** `app/components/Ejercicio.jsx`

**Contenido mínimo:**
```jsx
export default function Ejercicio() {
  return (
    <div>
      {/* Tu código aquí */}
    </div>
  )
}
```

**Cómo probar:**
1. Importa el componente en `app/page.js`
2. Ejecuta `npm run dev`
3. Abre las DevTools (F12)
4. Usa el modo responsive (Ctrl+Shift+M)
5. Prueba diferentes tamaños: 375px, 768px, 1024px, 1920px

---

## Consejos

1. **Empieza por móvil primero** (mobile-first)
2. **Usa max-w-7xl mx-auto** para centrar el contenido en pantallas grandes
3. **Prueba cada sección individualmente** antes de continuar
4. **Consulta el README.md** para ejemplos de cada técnica
5. **Usa nombres de clase descriptivos** y comenta tu código
6. **No uses CSS personalizado**, solo clases de Tailwind
7. **Redimensiona la ventana frecuentemente** para ver los cambios

---

## Recursos de Ayuda

- **Documentación de Tailwind**: https://tailwindcss.com/docs
- **README.md del proyecto**: Tiene todos los ejemplos que necesitas
- **Componente GridBreakpoints.jsx**: Ejemplos visuales de referencia
- **Tailwind Play**: https://play.tailwindcss.com/ (para experimentar)

---

## Ejemplo de Estructura Básica

```jsx
export default function Ejercicio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4">
        {/* Tu código aquí */}
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Tu código aquí */}
      </section>

      {/* Características */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tu código aquí */}
        </div>
      </section>

      {/* Galería de Productos */}
      <section className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Tu código aquí */}
      </section>

      {/* Dashboard */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tu código aquí */}
        </div>
      </section>

      {/* Testimonios */}
      <section className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Tu código aquí */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Tu código aquí */}
      </footer>
    </div>
  )
}
```

---

## Tiempo Estimado

- **Tiempo sugerido**: 2-3 horas
- **Dificultad**: Media-Alta
- **Conocimientos previos**: Grid, Flexbox, Breakpoints responsive

---

**¡Buena suerte! 🚀**

*Recuerda: La práctica hace al maestro. No te frustres si algo no sale a la primera, consulta la documentación y los ejemplos.*
