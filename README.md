# Tailwind CSS con Next.js

**U-TAD - Desarrollo Web**

---

## Tabla de Contenidos

1. [¿Qué es Tailwind CSS?](#qué-es-tailwind-css)
2. [Ventajas de Tailwind CSS](#ventajas-de-tailwind-css)
3. [Instalación con Next.js](#instalación-con-nextjs)
4. [Colores](#colores)
5. [Medidas (Sizing)](#medidas-sizing)
6. [Estados Interactivos](#estados-interactivos)
7. [Pseudo-clases](#pseudo-clases)
8. [Diseño Responsive](#diseño-responsive)
9. [Flexbox](#flexbox)
10. [Grid](#grid)
11. [Dark Mode](#dark-mode)
12. [Mejores Prácticas](#mejores-prácticas)
13. [Recursos Adicionales](#recursos-adicionales)

---

## ¿Qué es Tailwind CSS?

**Tailwind CSS** es un framework de CSS basado en **utilidades** (utility-first) que permite construir interfaces de usuario modernas de forma rápida y eficiente sin salir del HTML.

### Características principales:

- **Utility-first CSS**: Clases pequeñas y componibles
- **Diseño responsive**: Mobile-first por defecto
- **Altamente personalizable**: Sistema de diseño flexible
- **Optimizado para producción**: PurgeCSS integrado para eliminar CSS no utilizado
- **Sin opiniones sobre el diseño**: Libertad total para crear tu propia identidad visual

### ¿Por qué Tailwind?

```jsx
// ❌ CSS tradicional
<button className="btn-primary">Click me</button>

// styles.css
.btn-primary {
  background-color: blue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}

// ✅ Con Tailwind
<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
  Click me
</button>
```

**Ventajas:**
- No necesitas cambiar entre archivos
- Ves exactamente qué estilos se aplican
- No inventas nombres de clases
- Reutilizas las mismas clases en todo el proyecto

---

## Ventajas de Tailwind CSS

### ✅ Principales ventajas:

#### 1. **Manejo sencillo de estados (hover, focus, active)**

```jsx
<button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus:ring-2">
  Botón interactivo
</button>
```

No necesitas escribir CSS adicional para los estados. Todo está en el HTML.

#### 2. **Ahorro de tiempo eligiendo clases**

No pierdes tiempo pensando en nombres semánticos para tus clases CSS:
- ❌ `.header-navigation-link-active`
- ❌ `.card-product-title-primary`
- ✅ `text-xl font-bold text-gray-900`

#### 3. **Cambios de forma segura**

Las clases son locales al componente. Si cambias estilos en un componente, **no afectas** accidentalmente a otros.

#### 4. **Personalizable (a diferencia de Bootstrap)**

Bootstrap te da componentes pre-diseñados. Tailwind te da las herramientas para construir lo que quieras.

| Framework | Filosofía | Personalización |
|-----------|-----------|-----------------|
| **Bootstrap** | Component-based | Limitada |
| **Tailwind** | Utility-first | Total |

#### 5. **Excelente documentación**

- [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
- Búsqueda rápida
- Ejemplos interactivos
- Playground en línea

---

## Instalación con Next.js

### Paso 1: Crear un nuevo proyecto Next.js

```bash
npx create-next-app estilos
```

### Paso 2: Configuración durante la instalación

Cuando te pregunte, **asegúrate de seleccionar**:

```
✔ Would you like to use TypeScript? › No / Yes
✔ Would you like to use ESLint? › No / Yes
✔ Would you like to use Tailwind CSS? › No / Yes  ← ¡IMPORTANTE! Selecciona YES
✔ Would you like to use `src/` directory? › No / Yes
✔ Would you like to use App Router? (recommended) › No / Yes
✔ Would you like to customize the default import alias (@/*)? › No / Yes
```

**Recomendación para este curso:**
- **Tailwind CSS**: **Yes** ✅
- **TypeScript**: No (usaremos JavaScript)
- **ESLint**: Yes (ayuda a detectar errores)
- **App Router**: Yes (es el estándar moderno de Next.js)

### Paso 3: Navegar al proyecto y ejecutar

```bash
cd estilos
npm run dev
```

Abre tu navegador en: `http://localhost:3000`

### Paso 4: Probar que Tailwind funciona

Edita el archivo `app/page.js`:

```jsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold underline text-blue-600">
        Hello Tailwind!
      </h1>
    </main>
  )
}
```

Si ves el texto grande, en negrita, subrayado y azul, **¡Tailwind está funcionando!** 🎉

### Estructura del proyecto Next.js con Tailwind

```
estilos/
├── app/
│   ├── page.js          ← Tu página principal
│   ├── layout.js        ← Layout raíz (envuelve todas las páginas)
│   └── globals.css      ← CSS global con directivas de Tailwind
├── public/              ← Imágenes y archivos estáticos
├── tailwind.config.js   ← Configuración de Tailwind
└── package.json
```

### Archivo `globals.css`

Este archivo ya viene configurado con las directivas de Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**¿Qué hace cada directiva?**
- `@tailwind base`: Estilos base de Tailwind (reset CSS)
- `@tailwind components`: Clases de componentes personalizados
- `@tailwind utilities`: Todas las utilidades de Tailwind

### Archivo `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**¿Qué hace `content`?**
- Le dice a Tailwind dónde buscar las clases que usas
- Así puede eliminar las clases no utilizadas en producción

---

## Colores

Documentación: [https://tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors)

### Colores de fondo (Background)

```jsx
// Sintaxis: bg-{color}-{shade}
<div className="bg-slate-600">Fondo gris oscuro</div>
<div className="bg-blue-500">Fondo azul</div>
<div className="bg-red-400">Fondo rojo claro</div>
<div className="bg-green-600">Fondo verde</div>
```

**Escala de tonos**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

- **50**: Muy claro (casi blanco)
- **500**: Tono medio (color "estándar")
- **950**: Muy oscuro (casi negro)

### Colores de texto

```jsx
// Sintaxis: text-{color}-{shade}
<p className="text-white">Texto blanco</p>
<p className="text-gray-700">Texto gris oscuro</p>
<p className="text-blue-500">Texto azul</p>
```

### Colores personalizados

#### Opción 1: Color arbitrario en línea

```jsx
<p className="text-[#d2d255]">Color hexadecimal personalizado</p>
<div className="bg-[rgb(123,45,67)]">Color RGB personalizado</div>
```

⚠️ **Usa esta opción solo para prototipos**. Para producción, define los colores en `tailwind.config.js`.

#### Opción 2: Definir en `tailwind.config.js` (recomendado)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'azul-claro': '#242cff',
        'azul-oscuro': '#0d1b3e',
      },
    },
  },
}
```

**Uso:**

```jsx
<p className="bg-azul-oscuro text-azul-claro">
  Mi clase personalizada
</p>
```

### Ejemplo completo: Botón estilizado

```jsx
<p className="bg-azul-oscuro text-azul-claro p-4 rounded-md">
  Mi clase personalizada
</p>

<button className="bg-azul-claro text-white p-2 rounded-lg w-24 mx-auto block my-8 hover:bg-azul-oscuro transition-colors">
  Suscríbete
</button>
```

**Desglose de clases:**

| Clase | Propiedad CSS | Descripción |
|-------|---------------|-------------|
| `p-2` | `padding: 0.5rem` | Padding de 8px |
| `rounded-lg` | `border-radius: 0.5rem` | Esquinas redondeadas |
| `w-24` | `width: 6rem` | Ancho de 96px |
| `mx-auto` | `margin-left: auto; margin-right: auto` | Centrar horizontalmente |
| `block` | `display: block` | Elemento de bloque |
| `my-8` | `margin-top: 2rem; margin-bottom: 2rem` | Margen vertical de 32px |

### Enlaces útiles:

- **Padding**: [https://tailwindcss.com/docs/padding](https://tailwindcss.com/docs/padding)
- **Border Radius**: [https://tailwindcss.com/docs/border-radius](https://tailwindcss.com/docs/border-radius)
- **Width**: [https://tailwindcss.com/docs/width](https://tailwindcss.com/docs/width)
- **Margin**: [https://tailwindcss.com/docs/margin](https://tailwindcss.com/docs/margin)

### Opacidad

Controla la transparencia de cualquier color con `/`:

```jsx
<button className="bg-azul-claro/50 hover:bg-azul-oscuro text-white p-2 rounded-lg w-24 mx-auto block my-8">
  Suscríbete
</button>
```

**Sintaxis**: `{propiedad}-{color}/50`
- `/50` = 50% de opacidad
- `/25` = 25% de opacidad
- `/75` = 75% de opacidad
- `/100` = 100% de opacidad (por defecto)

### Gradientes

Documentación: [https://tailwindcss.com/docs/gradient-color-stops](https://tailwindcss.com/docs/gradient-color-stops)

```jsx
<div className="bg-gradient-to-r from-azul-claro to-azul-oscuro border-red-500 border-2 p-4">
  DIV con gradiente horizontal
</div>
```

**Direcciones de gradiente:**
- `bg-gradient-to-r` → Right (izquierda a derecha)
- `bg-gradient-to-l` → Left (derecha a izquierda)
- `bg-gradient-to-t` → Top (abajo a arriba)
- `bg-gradient-to-b` → Bottom (arriba a abajo)
- `bg-gradient-to-br` → Bottom Right (diagonal)
- `bg-gradient-to-tl` → Top Left (diagonal)

**Colores del gradiente:**
- `from-{color}` → Color inicial
- `to-{color}` → Color final
- `via-{color}` → Color intermedio (opcional)

```jsx
// Gradiente con color intermedio
<div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8">
  Gradiente con 3 colores
</div>
```

### Texto con gradiente (Cropping to text)

Documentación: [https://tailwindcss.com/docs/background-clip#cropping-to-text](https://tailwindcss.com/docs/background-clip#cropping-to-text)

```jsx
<div className="text-4xl font-extrabold">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
    Hello world
  </span>
</div>
```

**¿Cómo funciona?**
1. `bg-gradient-to-r from-pink-500 to-violet-500` → Crea el gradiente de fondo
2. `bg-clip-text` → Recorta el gradiente para que solo se vea en el texto
3. `text-transparent` → Hace el texto transparente para que se vea el gradiente

### Paleta de colores de Tailwind

Tailwind incluye una paleta completa de colores:

- **Grises**: `slate`, `gray`, `zinc`, `neutral`, `stone`
- **Colores**: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

Cada color tiene tonos del 50 al 950.

---

## Medidas (Sizing)

### Width (Ancho)

Documentación: [https://tailwindcss.com/docs/width](https://tailwindcss.com/docs/width)

```jsx
<div className="bg-red-400 w-40">
  Medidas en Tailwind (ancho de 160px)
</div>
```

**Opciones de ancho:**

```jsx
// Anchos fijos
<div className="w-20">80px</div>
<div className="w-40">160px</div>
<div className="w-64">256px</div>

// Anchos relativos
<div className="w-full">100% del contenedor padre</div>
<div className="w-screen">100% del ancho del viewport</div>
<div className="w-1/2">50% del contenedor padre</div>
<div className="w-1/3">33.33% del contenedor padre</div>
<div className="w-2/3">66.66% del contenedor padre</div>
```

### Width personalizado

#### Opción 1: Valor arbitrario

```jsx
<div className="w-[170px]">Ancho de 170px</div>
```

#### Opción 2: Configurar en `tailwind.config.js`

```javascript
module.exports = {
  theme: {
    extend: {
      spacing: {
        '42': '170px', // Se aplica a width, height, padding, margin
      },
      // O específicamente para width:
      width: {
        '42': '170px', // Solo se aplica a width
      }
    },
  },
}
```

**Uso:**

```jsx
<div className="bg-red-400 w-42">
  Medidas en Tailwind (170px)
</div>
```

### Height (Alto)

Documentación: [https://tailwindcss.com/docs/height](https://tailwindcss.com/docs/height)

```jsx
<div className="bg-red-400 h-[100px]">
  <div className="bg-green-400 h-1/3">
    Altura proporcional en Tailwind (33.33px)
  </div>
</div>
```

**Opciones de alto:**

```jsx
// Altos fijos
<div className="h-20">80px</div>
<div className="h-64">256px</div>

// Altos relativos
<div className="h-full">100% del contenedor padre</div>
<div className="h-screen">100% del alto del viewport</div>
<div className="h-1/2">50% del contenedor padre</div>
```

### Min y Max

```jsx
// Ancho mínimo y máximo
<div className="min-w-full">Ancho mínimo del 100%</div>
<div className="max-w-md">Ancho máximo de 28rem (448px)</div>
<div className="max-w-7xl mx-auto">Contenedor máximo centrado (80rem)</div>

// Alto mínimo y máximo
<div className="min-h-screen">Alto mínimo del viewport completo</div>
<div className="max-h-96">Alto máximo de 24rem (384px)</div>
```

### Escala de medidas en Tailwind

Tailwind usa una escala de espaciado consistente basada en `rem`:

| Clase | Rem | Píxeles (aprox.) |
|-------|-----|------------------|
| `1` | 0.25rem | 4px |
| `2` | 0.5rem | 8px |
| `4` | 1rem | 16px |
| `6` | 1.5rem | 24px |
| `8` | 2rem | 32px |
| `12` | 3rem | 48px |
| `16` | 4rem | 64px |
| `20` | 5rem | 80px |
| `40` | 10rem | 160px |
| `64` | 16rem | 256px |

---

## Estados Interactivos

Tailwind facilita enormemente el manejo de estados sin escribir CSS adicional.

### Hover (al pasar el ratón)

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
  Pasa el ratón sobre mí
</button>
```

### Focus (al enfocar un elemento)

```jsx
<input
  type="text"
  className="border border-gray-300 px-3 py-2 rounded-md
             focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Haz click aquí"
/>
```

**Explicación:**
- `focus:outline-none` → Elimina el borde azul por defecto del navegador
- `focus:ring-2` → Añade un anillo de 2px
- `focus:ring-blue-500` → Color azul del anillo

### Ejemplo completo: Input con validación

```jsx
<div className="space-y-2">
  <input
    className="border border-gray-300 w-full px-3 py-2 rounded-md
               focus:outline-none
               focus:ring-1 focus:ring-purple-600
               invalid:focus:ring-red-400
               peer"
    type="email"
    placeholder="E-mail"
  />
  <p className="text-red-400 hidden peer-invalid:block">
    El correo es incorrecto
  </p>
</div>
```

**¿Cómo funciona?**

1. **`peer`**: Marca el input como elemento "hermano" de referencia
2. **`peer-invalid:block`**: Muestra el párrafo solo cuando el input es inválido
3. **`invalid:focus:ring-red-400`**: Cambia el color del anillo cuando el input es inválido
4. **`hidden`**: Oculta el mensaje de error por defecto

### Estados adicionales

```jsx
// Active (al hacer clic)
<button className="bg-green-500 active:bg-green-700">Click me</button>

// Disabled
<button
  disabled
  className="bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
>
  Deshabilitado
</button>

// Visited (enlaces visitados)
<a href="#" className="text-blue-600 visited:text-purple-600">Enlace</a>
```

### Combinando estados

```jsx
<button className="
  bg-blue-500 hover:bg-blue-600 active:bg-blue-700
  text-white font-semibold px-4 py-2 rounded-lg
  transition duration-200
  disabled:opacity-50 disabled:cursor-not-allowed
  focus:outline-none focus:ring-2 focus:ring-blue-300
">
  Botón completo
</button>
```

---

## Pseudo-clases

Documentación: [https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after](https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after)

### Before y After

```jsx
<div className="
  before:content-['→'] before:mr-2 before:text-blue-500
  after:content-['←'] after:ml-2 after:text-red-500
">
  Contenido con flechas
</div>
```

### Marker (para listas)

```jsx
<ul className="marker:text-blue-500 marker:text-lg list-disc ml-6">
  <li>Item con marcador azul</li>
  <li>Otro item con marcador azul</li>
  <li>Un tercer item</li>
</ul>
```

### Selection (texto seleccionado)

```jsx
<p className="selection:bg-yellow-200 selection:text-yellow-900">
  Selecciona este texto y verás el fondo amarillo.
  Prueba a seleccionar varias líneas para ver el efecto.
</p>
```

### First-line y First-letter

```jsx
<p className="
  first-line:font-bold first-line:text-lg
  first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600
">
  La primera letra será grande y azul, y la primera línea estará en negrita.
  El resto del texto tendrá el formato normal. Este es un ejemplo de cómo
  usar pseudo-clases en Tailwind CSS para dar formato especial.
</p>
```

### First, Last, Odd, Even

```jsx
<ul className="space-y-2">
  <li className="first:font-bold first:text-blue-600">
    Primero (negrita y azul)
  </li>
  <li className="odd:bg-gray-100 p-2">Segundo (fondo gris)</li>
  <li className="odd:bg-gray-100 p-2">Tercero (fondo gris)</li>
  <li className="odd:bg-gray-100 p-2">Cuarto</li>
  <li className="last:border-b-0 odd:bg-gray-100 p-2">
    Último (sin borde inferior)
  </li>
</ul>
```

### Placeholder

```jsx
<input
  type="text"
  placeholder="Escribe tu nombre"
  className="
    border border-gray-300 px-3 py-2 rounded
    placeholder:italic placeholder:text-gray-400
  "
/>
```

---

## Diseño Responsive

Documentación: [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design)

Tailwind usa un enfoque **mobile-first**: las clases sin prefijo se aplican a todos los tamaños, y los breakpoints añaden estilos para pantallas más grandes.

### Breakpoints por defecto

| Prefijo | Tamaño mínimo | Dispositivo típico |
|---------|---------------|--------------------|
| **(ninguno)** | 0px | Móvil (por defecto) |
| `sm:` | 640px | Móvil grande / Tablet pequeña |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Desktop grande |

### Ejemplo básico

```jsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Texto que crece según el tamaño de pantalla
</div>
```

**Comportamiento:**
- **Móvil (< 768px)**: `text-sm` (14px)
- **Tablet (≥ 768px)**: `text-base` (16px)
- **Desktop (≥ 1024px)**: `text-lg` (18px)
- **Desktop grande (≥ 1280px)**: `text-xl` (20px)

### Grid responsive

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div className="bg-blue-200 p-4">Card 1</div>
  <div className="bg-blue-200 p-4">Card 2</div>
  <div className="bg-blue-200 p-4">Card 3</div>
  <div className="bg-blue-200 p-4">Card 4</div>
</div>
```

**Comportamiento:**
- **Móvil**: 1 columna (elementos apilados)
- **Small (≥ 640px)**: 2 columnas
- **Large (≥ 1024px)**: 3 columnas
- **Extra large (≥ 1280px)**: 4 columnas

### Ocultar/Mostrar elementos según el tamaño

```jsx
// Visible solo en desktop
<div className="hidden lg:block">
  Este contenido solo se ve en pantallas grandes
</div>

// Visible solo en móvil
<div className="block lg:hidden">
  Este contenido solo se ve en móviles
</div>

// Menú hamburguesa (móvil) vs menú horizontal (desktop)
<nav>
  {/* Botón hamburguesa - solo móvil */}
  <button className="md:hidden">
    ☰
  </button>

  {/* Menú completo - solo desktop */}
  <div className="hidden md:flex gap-4">
    <a href="#">Inicio</a>
    <a href="#">Servicios</a>
    <a href="#">Contacto</a>
  </div>
</nav>
```

### Padding y margin responsive

```jsx
<div className="p-4 md:p-8 lg:p-12">
  El padding aumenta en pantallas más grandes
</div>

<section className="my-8 md:my-16 lg:my-24">
  Sección con márgenes verticales adaptativos
</section>
```

### Personalizar breakpoints

En `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
}
```

Documentación: [https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints](https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints)

### Ejemplo completo: Card responsive

```jsx
<div className="
  w-full sm:w-1/2 lg:w-1/3
  p-4 sm:p-6 lg:p-8
  bg-white rounded-lg shadow-md
">
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
    Título responsive
  </h2>
  <p className="mt-2 text-sm md:text-base">
    Descripción que se adapta
  </p>
</div>
```

---

## Flexbox

Flexbox es ideal para diseños en una dimensión (horizontal o vertical).

### Crear un componente personalizado con @apply

En `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    @apply bg-red-500 w-40 h-40
           grid place-content-center
           rounded-lg text-white font-bold
           border-2 border-red-600 text-4xl;
  }
}
```

**Uso:**

```jsx
<div className="flex gap-4">
  <div className="card">1</div>
  <div className="card">2</div>
  <div className="card">3</div>
</div>
```

### Dirección del flex

```jsx
// Horizontal (por defecto)
<div className="flex flex-row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

// Vertical
<div className="flex flex-col">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### Alineación

```jsx
// Centrar horizontal y verticalmente
<div className="flex justify-center items-center h-screen">
  <div>Perfectamente centrado</div>
</div>

// Justify content (eje principal)
<div className="flex justify-start">Al inicio</div>
<div className="flex justify-center">Centrado</div>
<div className="flex justify-end">Al final</div>
<div className="flex justify-between">Espacio entre elementos</div>
<div className="flex justify-around">Espacio alrededor</div>
<div className="flex justify-evenly">Espacio equitativo</div>

// Align items (eje transversal)
<div className="flex items-start">Arriba</div>
<div className="flex items-center">Centro</div>
<div className="flex items-end">Abajo</div>
<div className="flex items-stretch">Estirar (por defecto)</div>
```

### Wrap (envolver elementos)

```jsx
<div className="flex flex-wrap gap-4">
  {/* Los elementos se envuelven en múltiples líneas si no caben */}
  <div className="w-40 h-40 bg-blue-500">1</div>
  <div className="w-40 h-40 bg-blue-500">2</div>
  <div className="w-40 h-40 bg-blue-500">3</div>
  <div className="w-40 h-40 bg-blue-500">4</div>
</div>
```

### Gap (espacio entre elementos)

```jsx
<div className="flex gap-4">
  {/* Espacio de 1rem (16px) entre elementos */}
</div>

<div className="flex gap-x-4 gap-y-8">
  {/* Gap horizontal de 16px y vertical de 32px */}
</div>
```

### Ejemplo completo: Navbar con Flexbox

```jsx
<nav className="flex justify-between items-center bg-gray-800 text-white p-4">
  <div className="text-xl font-bold">Mi App</div>
  <div className="flex gap-6">
    <a href="#" className="hover:text-gray-300 transition">Inicio</a>
    <a href="#" className="hover:text-gray-300 transition">Servicios</a>
    <a href="#" className="hover:text-gray-300 transition">Contacto</a>
  </div>
</nav>
```

### Flex grow y shrink

```jsx
<div className="flex">
  <div className="flex-1 bg-blue-200 p-4">
    Crece para llenar el espacio disponible
  </div>
  <div className="flex-none w-32 bg-red-200 p-4">
    Ancho fijo de 128px
  </div>
</div>
```

---

## Grid

Grid CSS es ideal para diseños en dos dimensiones (filas y columnas).

Documentación: [https://tailwindcss.com/docs/grid-template-columns](https://tailwindcss.com/docs/grid-template-columns)

### Grid básico

```jsx
<div className="grid grid-cols-3 gap-4">
  <div className="bg-blue-500 p-4 text-white">1</div>
  <div className="bg-blue-500 p-4 text-white">2</div>
  <div className="bg-blue-500 p-4 text-white">3</div>
  <div className="bg-blue-500 p-4 text-white">4</div>
  <div className="bg-blue-500 p-4 text-white">5</div>
  <div className="bg-blue-500 p-4 text-white">6</div>
</div>
```

**Resultado**: Grid de 3 columnas con 2 filas automáticas

### Diferentes números de columnas

```jsx
// 1 columna
<div className="grid grid-cols-1 gap-4">...</div>

// 2 columnas
<div className="grid grid-cols-2 gap-4">...</div>

// 4 columnas
<div className="grid grid-cols-4 gap-4">...</div>

// 12 columnas (como Bootstrap)
<div className="grid grid-cols-12 gap-4">...</div>
```

### Grid responsive

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-purple-200 p-4">Item 1</div>
  <div className="bg-purple-200 p-4">Item 2</div>
  <div className="bg-purple-200 p-4">Item 3</div>
  <div className="bg-purple-200 p-4">Item 4</div>
  <div className="bg-purple-200 p-4">Item 5</div>
  <div className="bg-purple-200 p-4">Item 6</div>
</div>
```

**Comportamiento:**
- **Móvil**: 1 columna
- **Tablet (≥ 768px)**: 2 columnas
- **Desktop (≥ 1024px)**: 3 columnas

### Span (ocupar múltiples columnas/filas)

```jsx
<div className="grid grid-cols-6 gap-4">
  <div className="col-span-4 bg-blue-500 p-4">Ocupa 4 columnas</div>
  <div className="col-span-2 bg-red-500 p-4">Ocupa 2 columnas</div>
  <div className="col-span-3 bg-green-500 p-4">Ocupa 3 columnas</div>
  <div className="col-span-3 bg-yellow-500 p-4">Ocupa 3 columnas</div>
</div>
```

### Rows (filas)

```jsx
<div className="grid grid-rows-3 grid-flow-col gap-4 h-64">
  <div className="bg-pink-200 p-4">1</div>
  <div className="bg-pink-200 p-4">2</div>
  <div className="bg-pink-200 p-4">3</div>
  <div className="bg-pink-200 p-4">4</div>
  <div className="bg-pink-200 p-4">5</div>
  <div className="bg-pink-200 p-4">6</div>
</div>
```

### Place items (alinear contenido)

```jsx
<div className="grid grid-cols-3 place-items-center gap-4 h-64 bg-gray-100">
  <div className="bg-blue-500 p-2 text-white">Centrado</div>
  <div className="bg-blue-500 p-2 text-white">Centrado</div>
  <div className="bg-blue-500 p-2 text-white">Centrado</div>
</div>
```

### Ejemplo: Galería de imágenes

```jsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img src="/img1.jpg" alt="1" className="w-full h-full object-cover" />
  </div>
  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img src="/img2.jpg" alt="2" className="w-full h-full object-cover" />
  </div>
  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img src="/img3.jpg" alt="3" className="w-full h-full object-cover" />
  </div>
  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img src="/img4.jpg" alt="4" className="w-full h-full object-cover" />
  </div>
</div>
```

---

## Dark Mode

Documentación: [https://tailwindcss.com/docs/dark-mode](https://tailwindcss.com/docs/dark-mode)

### Configuración automática (preferencias del sistema)

Por defecto, Tailwind detecta las preferencias del sistema operativo.

```jsx
<body className="bg-white dark:bg-slate-900 text-black dark:text-white">
  <p>Este contenido se adapta al modo oscuro del sistema</p>
</body>
```

**Nota**: "Habría que setear el modo oscuro en el navegador" o en las preferencias del sistema operativo.

### Configuración manual (recomendado para producción)

#### Paso 1: Configurar Tailwind

En `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Cambia de 'media' a 'class'
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Paso 2: Implementar el toggle en Next.js

Crea un componente `components/DarkModeToggle.jsx`:

```jsx
'use client'

import { useState, useEffect } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Recuperar preferencia guardada
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700
                 hover:bg-gray-300 dark:hover:bg-gray-600
                 transition-colors"
    >
      {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  )
}
```

#### Paso 3: Usar el componente en tu app

En `app/page.js`:

```jsx
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <nav className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mi App
          </h1>
          <DarkModeToggle />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Contenido
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Este contenido se adapta automáticamente al modo oscuro.
          </p>
        </div>
      </main>
    </div>
  )
}
```

### Clases útiles para Dark Mode

```jsx
// Backgrounds
<div className="bg-white dark:bg-gray-900">...</div>

// Texto
<p className="text-gray-900 dark:text-gray-100">...</p>
<h1 className="text-black dark:text-white">...</h1>

// Bordes
<div className="border border-gray-300 dark:border-gray-700">...</div>

// Hover states con dark mode
<button className="
  bg-blue-500 dark:bg-blue-600
  hover:bg-blue-600 dark:hover:bg-blue-700
">
  Botón
</button>

// Inputs
<input className="
  bg-white dark:bg-gray-800
  text-black dark:text-white
  border-gray-300 dark:border-gray-600
" />
```

### Transiciones suaves

```jsx
<div className="transition-colors duration-300 bg-white dark:bg-slate-900">
  El cambio de color será suave y animado
</div>
```

---

## Mejores Prácticas

### 1. Componentes reutilizables

❌ **Evita repetir clases:**

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Botón 1
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Botón 2
</button>
```

✅ **Crea un componente:**

```jsx
// components/Button.jsx
export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
      {...props}
    >
      {children}
    </button>
  )
}

// Uso:
<Button>Botón 1</Button>
<Button>Botón 2</Button>
```

### 2. Usa @apply para clases complejas

En `app/globals.css`:

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
           transition duration-200 ease-in-out transform hover:scale-105;
  }

  .card {
    @apply bg-white dark:bg-gray-800 rounded-lg shadow-md p-6
           transition-shadow duration-200 hover:shadow-xl;
  }

  .input-field {
    @apply border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2
           focus:outline-none focus:ring-2 focus:ring-blue-500
           bg-white dark:bg-gray-800 text-gray-900 dark:text-white;
  }
}
```

### 3. Organiza las clases de forma consistente

**Orden recomendado:**

1. Layout (display, position, flex, grid)
2. Sizing (width, height, padding, margin)
3. Typography (font, text)
4. Visual (background, border, shadow)
5. Misc (cursor, transition, animation)

```jsx
<div className="
  flex justify-center items-center
  w-full h-64 p-4 m-2
  text-xl font-bold text-center
  bg-blue-500 rounded-lg shadow-md
  hover:bg-blue-600 transition duration-200
">
  Bien organizado
</div>
```

### 4. Usa el plugin Prettier para ordenar clases automáticamente

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

Crea `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 5. Personaliza en `tailwind.config.js` en lugar de usar valores arbitrarios

❌ **Evita:**

```jsx
<div className="w-[753px] text-[#1a2b3c]">...</div>
```

✅ **Mejor:**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      width: {
        'custom': '753px',
      },
      colors: {
        'brand-dark': '#1a2b3c',
      }
    },
  },
}
```

```jsx
<div className="w-custom text-brand-dark">...</div>
```

### 6. Usa la escala de espaciado de forma consistente

Tailwind usa múltiplos de 4px: `0`, `1` (4px), `2` (8px), `4` (16px), `8` (32px), etc.

```jsx
// ✅ Consistente
<div className="p-4 m-8 gap-4">...</div>

// ❌ Inconsistente
<div className="p-[17px] m-[33px]">...</div>
```

### 7. Aprovecha los componentes de Next.js

```jsx
// components/Container.jsx
export default function Container({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

// components/Section.jsx
export default function Section({ children, className = '' }) {
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  )
}
```

---

## Recursos Adicionales

### Documentación Oficial

- **Documentación de Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Next.js + Tailwind**: [https://nextjs.org/docs/app/building-your-application/styling/tailwind-css](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)
- **Playground interactivo**: [https://play.tailwindcss.com/](https://play.tailwindcss.com/)

### Herramientas útiles

- **Tailwind CSS IntelliSense** - Extensión de VS Code (autocomplete de clases)
- **Headless UI** - Componentes accesibles sin estilos para React
- **Heroicons** - Iconos SVG diseñados por los creadores de Tailwind
- **Tailwind UI** - Componentes premium (de pago)
- **DaisyUI** - Librería de componentes gratuita
- **Flowbite** - Componentes open source

### Cheat Sheets

- [Tailwind CSS Cheat Sheet oficial](https://tailwindcomponents.com/cheatsheet/)
- [Nerdcave Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Inspiración y componentes

- **Tailwind Components**: [https://tailwindcomponents.com/](https://tailwindcomponents.com/)
- **Tailwind Toolbox**: [https://www.tailwindtoolbox.com/](https://www.tailwindtoolbox.com/)
- **Tailwind Templates**: [https://tailwindtemplates.io/](https://tailwindtemplates.io/)

### Videos y tutoriales

- **Canal oficial de Tailwind Labs**: [YouTube](https://www.youtube.com/@TailwindLabs)
- **Curso gratuito de Tailwind**: [Scrimba](https://scrimba.com/learn/tailwind)

---

## Resumen y Conclusión

### Lo que has aprendido:

✅ **Instalación** de Tailwind CSS con Next.js
✅ **Colores** (predefinidos, personalizados, gradientes)
✅ **Medidas** (width, height, spacing)
✅ **Estados interactivos** (hover, focus, active, peer)
✅ **Pseudo-clases** (before, after, first, last, selection)
✅ **Diseño responsive** (breakpoints, mobile-first)
✅ **Flexbox** (alineación, dirección, gap)
✅ **Grid** (columnas, filas, span, responsive)
✅ **Dark Mode** (automático y manual)
✅ **Mejores prácticas** (componentes, @apply, organización)

### Próximos pasos:

1. **Practica** creando componentes desde cero
2. **Explora** la documentación oficial
3. **Instala** la extensión Tailwind CSS IntelliSense en VS Code
4. **Experimenta** con diferentes combinaciones de clases
5. **Crea** tu propio sistema de diseño en `tailwind.config.js`

### Recuerda:

- Tailwind es **utility-first**, no component-based
- Usa **mobile-first** (las clases sin prefijo son para móvil)
- **Personaliza** en `tailwind.config.js` para mantener consistencia
- **Reutiliza** componentes en lugar de repetir clases
- **Consulta** la documentación frecuentemente

---

**¡Feliz codificación con Tailwind CSS!** 🎨

*U-TAD - Desarrollo Web*
