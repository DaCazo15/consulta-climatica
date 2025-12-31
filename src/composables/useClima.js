import { ref, computed} from 'vue';
import axios from 'axios';

const clima = ref({});
const error = ref(false)
const cargando = ref(false)

export default function useClima() {

  const obtenerClima = async ({ ciudad, pais }) => {
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
    cargando.value = true
    clima.value = {}
    try {
        const { data } = await axios(url);
        const { lat, lon } = data[0];
        error.value = false

        const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
        const { data: respuesta } = await axios(urlClima);
        clima.value = respuesta

    } catch {
        error.value = true
    } finally {
        cargando.value = false
    }
  };

  const mostrarClima = computed(() => {
    if (cargando.value) return false;
    if (error.value) return false;
    return clima.value && Object.keys(clima.value).length > 0;
  })

  return {
    obtenerClima,
    clima,
    mostrarClima,
    error,
    cargando
  
  };
}