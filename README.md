# SIIM INGENIERÍA 🔥⚡

> **Servicios integrales de ingeniería y montajes**  
> Sitio web corporativo de SIIM Fire & Electrical Systems

---

## 📋 Tabla de Contenidos

- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Arquitectura de Componentes](#-arquitectura-de-componentes)
- [Convenciones de Código](#-convenciones-de-código)
- [Configuración](#-configuración)

---

## 🚀 Tecnologías

| Tecnología                                    | Versión | Descripción                       |
| --------------------------------------------- | ------- | --------------------------------- |
| [Next.js](https://nextjs.org/)                | 16.1.2  | Framework de React con App Router |
| [React](https://react.dev/)                   | 19.2.3  | Biblioteca de UI                  |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.3   | Tipado estático                   |
| [Tailwind CSS](https://tailwindcss.com/)      | 3.4.17  | Framework de CSS utilitario       |
| [ESLint](https://eslint.org/)                 | 9.x     | Linter para JavaScript/TypeScript |
| [pnpm](https://pnpm.io/)                      | -       | Gestor de paquetes                |

### Dependencias Principales

- **lucide-react** - Librería de iconos
- **swiper** - Carrusel/slider moderno
- **mapbox-gl / react-map-gl** - Mapas interactivos

---

## 📦 Requisitos Previos

- **Node.js** >= 18.x
- **pnpm** (recomendado) o npm/yarn

---

## 🛠 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/grupo-siim/siim-ingenieria-web-page.git
cd siim-ingenieria-web-page

# Instalar dependencias
pnpm install

# Iniciar en modo desarrollo
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

---

## 📜 Scripts Disponibles

| Script     | Comando         | Descripción                               |
| ---------- | --------------- | ----------------------------------------- |
| `dev`      | `pnpm dev`      | Inicia el servidor de desarrollo          |
| `build`    | `pnpm build`    | Genera la build de producción             |
| `start`    | `pnpm start`    | Inicia el servidor de producción          |
| `lint`     | `pnpm lint`     | Ejecuta ESLint para detectar errores      |
| `lint:fix` | `pnpm lint:fix` | Corrige automáticamente errores de ESLint |

---

## 📁 Estructura del Proyecto

```
siim-ingenieria-web-page/
├── public/                    # Archivos estáticos públicos
│   └── images/                # Imágenes del sitio
│
├── src/                       # Código fuente principal
│   ├── app/                   # App Router de Next.js
│   ├── components/            # Componentes de React
│   └── shared/                # Recursos compartidos
│
├── eslint.config.mjs          # Configuración de ESLint (flat config)
├── next.config.js             # Configuración de Next.js
├── tailwind.config.js         # Configuración de Tailwind CSS
├── tsconfig.json              # Configuración de TypeScript
├── postcss.config.js          # Configuración de PostCSS
└── package.json               # Dependencias y scripts
```

### 📂 `/src/app` - App Router

Contiene las rutas y layouts de Next.js usando el **App Router**.

```
src/app/
├── globals.css           # Estilos globales de la aplicación
├── scrollbar.css         # Estilos personalizados del scrollbar
├── layout.tsx            # Layout raíz (metadata, viewport, html)
└── page.tsx              # Página principal (Home)
```

### 📂 `/src/components` - Componentes

Organización basada en **Feature-Based Architecture**:

```
src/components/
├── common/               # Componentes reutilizables globales
│   ├── animations/       # Componentes de animación
│   │   ├── slide-in.tsx  # Animación de entrada deslizante
│   │   └── types.ts      # Tipos para animaciones
│   └── index.ts          # Barrel exports
│
├── home/                 # Componentes específicos del Home
│   ├── certificates/     # Sección de certificaciones
│   ├── contacto/         # Sección de contacto (con mapa)
│   ├── empresa/          # Sección "Sobre la empresa"
│   ├── hero/             # Hero principal
│   ├── servicios/        # Sección de servicios
│   ├── social-media/     # Links de redes sociales
│   ├── somos-parte/      # Sección de afiliaciones
│   └── team/             # Sección del equipo
│
└── layout/               # Componentes de estructura
    ├── navbar/           # Navegación principal
    │   ├── dynamic-navbar.tsx    # Navbar con scroll dinámico
    │   ├── home-navbar.tsx       # Navbar del hero
    │   ├── mobile-menu.tsx       # Menú móvil hamburguesa
    │   └── menu-array.ts         # Configuración de items del menú
    └── footer/           # Pie de página
```

### 📂 `/src/shared` - Recursos Compartidos

Elementos compartidos en toda la aplicación:

```
src/shared/
├── assets/
│   └── logos/            # Logos de la empresa (componentes SVG)
│       ├── horizontal-logo.tsx
│       ├── vertical-logo.tsx
│       ├── siim-isotipo.tsx
│       └── siim-letters-logo.tsx
│
├── hooks/                # Custom hooks reutilizables
│   └── use-focus.ts      # Hook para manejo de focus
│
└── types/                # Tipos globales de TypeScript
    └── global.d.ts       # Declaraciones globales
```

---

## 🏗 Arquitectura de Componentes

### Patrón Barrel Exports

Cada carpeta de componentes tiene un archivo `index.ts` que re-exporta todos los componentes:

```typescript
// src/components/home/index.ts
export * from "./certificates";
export * from "./contacto";
export * from "./empresa";
// ...
```

**Uso:**

```typescript
// ✅ Importación limpia
import { Hero, Servicios, Contacto } from "@/components/home";

// ❌ Evitar importaciones directas
import Hero from "@/components/home/hero/hero";
```

### Lazy Loading

Los componentes pesados se cargan de forma diferida para mejorar el rendimiento:

```typescript
const Certificates = dynamic(
  () => import("@/components/home/certificates/certificates"),
  { ssr: false },
);
```

---

## 📐 Convenciones de Código

### Nombrado de Archivos

| Tipo                | Convención          | Ejemplo                     |
| ------------------- | ------------------- | --------------------------- |
| Componentes         | `kebab-case.tsx`    | `dynamic-navbar.tsx`        |
| Hooks               | `use-kebab-case.ts` | `use-focus.ts`              |
| Tipos               | `kebab-case.ts`     | `types.ts`                  |
| Estilos CSS Modules | `nombre.module.css` | `dynamic-navbar.module.css` |

### Estructura de un Componente

```
feature-name/
├── feature-name.tsx      # Componente principal
├── index.ts              # Barrel export
├── feature-name.module.css  # Estilos (opcional)
└── types.ts              # Tipos (si es necesario)
```

### Alias de Importación

Configurados en `tsconfig.json`:

| Alias      | Ruta         |
| ---------- | ------------ |
| `@/*`      | `./src/*`    |
| `public/*` | `./public/*` |

```typescript
// Ejemplo de uso
import { SlideIn } from "@/components/common";
import { VerticalLogo } from "@/shared/assets/logos";
```

---

## ⚙️ Configuración

### Tailwind CSS

Colores y tipografía personalizados en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#c10e18",  // Rojo SIIM
        dark: "#a00c14",
      },
    },
  },
}
```

### ESLint

Usa la nueva **Flat Config** de ESLint 9 con la configuración de Next.js:

```javascript
// eslint.config.mjs
const eslintConfig = [...compat.extends("next/core-web-vitals")];
```

### Next.js

Configuración en `next.config.js`:

- **React Strict Mode** habilitado
- **Imágenes remotas** permitidas desde `ingenieria.siim.cl`

---

## 🌐 Despliegue

El proyecto está configurado para desplegarse en cualquier plataforma compatible con Next.js:

- [Vercel](https://vercel.com) (recomendado)
- [Netlify](https://netlify.com)
- Docker / VPS

---

## 📄 Licencia

Proyecto privado - SIIM Ingeniería © 2023-2026
