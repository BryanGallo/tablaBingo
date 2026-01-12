# 🎲 Tabla de Bingo - 75 Bolas

Aplicación web interactiva desarrollada con React y Vite que simula una tabla de juego de Bingo de 75 bolas. Permite generar cartones aleatorios, marcar números llamados y detectar automáticamente cuando se completa un patrón ganador.

## ✨ Características

- 🎯 **Generación de Cartones**: Crea cartones de Bingo aleatorios según las reglas tradicionales del Bingo de 75 bolas
- ✅ **Marcado de Números**: Permite marcar los números llamados en los cartones de forma interactiva
- 🏆 **Detección de Bingo**: Identifica automáticamente cuando se completa una línea o un patrón ganador
- 🎨 **Interfaz Moderna**: Diseño intuitivo y fácil de usar
- ⚡ **Rendimiento Óptimo**: Construido con Vite para una experiencia de desarrollo y ejecución rápida

## 🛠️ Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción y servidor de desarrollo para proyectos frontend modernos
- **JavaScript/JSX** - Lenguaje de programación y sintaxis para React

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 🚀 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/BryanGallo/tablaBingo.git
cd tablaBingo
```

2. **Instala las dependencias**

```bash
npm install
```

## 🎯 Uso

### Modo Desarrollo

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo y podrás acceder a la aplicación en tu navegador. Generalmente estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

### Modo Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

Para previsualizar la versión de producción:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
tablaBingo/
├── public/              # Archivos estáticos
│   └── index.html      # HTML principal
├── src/                 # Código fuente
│   ├── components/     # Componentes de React
│   ├── assets/         # Recursos (imágenes, estilos)
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── package.json        # Dependencias y scripts
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la versión de producción |
| `npm run lint` | Ejecuta el linter (si está configurado) |

## 🎮 Cómo Jugar

1. La aplicación generará automáticamente un cartón de Bingo con números aleatorios
2. Los números se llamarán de forma aleatoria (o manualmente, según la implementación)
3. Marca los números que coincidan con los de tu cartón
4. La aplicación detectará automáticamente cuando completes:
   - Una línea horizontal
   - Una línea vertical
   - Una línea diagonal
   - El cartón completo (Bingo!)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. **Haz un Fork** del repositorio
2. **Crea una rama** para tu característica (`git checkout -b feature/nueva-funcionalidad`)
3. **Realiza tus cambios** y haz commit (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Sube tus cambios** (`git push origin feature/nueva-funcionalidad`)
5. **Abre un Pull Request** en el repositorio original

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👤 Autor

**Bryan Gallo**

- GitHub: [@BryanGallo](https://github.com/BryanGallo)
- Repositorio: [tablaBingo](https://github.com/BryanGallo/tablaBingo)

## 🙏 Agradecimientos

Gracias por usar esta aplicación. ¡Esperamos que disfrutes jugando Bingo!

---

⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub.
