<p align="center">
  <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo">
</p>
<h1 align="center">Consulta Climatica</h1>
<p align="left"> Una aplicación Vue.js para consultar el clima. Ingresa el nombre de una ciudad para obtener información meteorológica actual, incluyendo temperatura, condiciones y más.
    <br>
</p>

## 📝 Tabla de Contenidos

- [Acerca de](#acerca-de)
- [Primeros Pasos](#primeros-pasos)
- [Uso](#uso)
- [Despliegue](#despliegue)
- [Construido Con](#construido-con)
- [Autores](#autores)
- [Agradecimientos](#agradecimientos)

## 🧐 Acerca de <a name = "acerca-de"></a>

Esta aplicación permite a los usuarios consultar el clima actual de cualquier ciudad del mundo. Utiliza la API de OpenWeatherMap para obtener datos precisos y actualizados. La interfaz es intuitiva y responsiva, construida con Vue.js y Vite.

## 🏁 Primeros Pasos <a name = "primeros-pasos"></a>

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas. Consulta [despliegue](#despliegue) para notas sobre cómo desplegar el proyecto en un sistema en vivo.

### Prerrequisitos

- Node.js (versión 14 o superior)
- Una clave API de OpenWeatherMap (regístrate en [openweathermap.org](https://openweathermap.org/) para obtener una)

### Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd consulta-climatica
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave API:

```env
VITE_API_KEY=tu_clave_api_aqui
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:5173

## 🎈 Uso <a name="uso"></a>

- Abre la aplicación en tu navegador.
- Ingresa el nombre de una ciudad y selecciona el país en el formulario.
- Haz clic en "Buscar Clima" para obtener la información meteorológica.
- La información se mostrará en una tarjeta con temperatura, condiciones, humedad, etc.

## 🚀 Despliegue <a name = "despliegue"></a>

Para desplegar en producción:

1. Construye el proyecto:

```bash
npm run build
```

2. Sirve los archivos generados en la carpeta `dist` usando un servidor web estático.

## ⛏️ Construido Con <a name = "construido-con"></a>

- [Vue.js](https://vuejs.org/) - Framework frontend
- [Vite](https://vitejs.dev/) - Herramienta de construcción
- [Axios](https://axios-http.com/) - Cliente HTTP para llamadas API
- [@headlessui/vue](https://headlessui.com/vue) - Componentes UI
- [vue-select](https://vue-select.org/) - Componente de selección

## ✍️ Autores <a name = "autores"></a>

- **Tu Nombre** - Trabajo inicial

## 🎉 Agradecimientos <a name = "agradecimientos"></a>

- Datos meteorológicos proporcionados por [OpenWeatherMap](https://openweathermap.org/)
- Inspiración y referencias de la comunidad Vue.js
