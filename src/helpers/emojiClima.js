export const emojiClima = descripcion => {
    const texto = descripcion.toLowerCase();

    if (texto.includes('clear')) return '☀️';
    if (texto.includes('clouds')) return '☁️';
    if (texto.includes('rain')) return '🌧️';
    if (texto.includes('thunderstorm')) return '⛈️';
    if (texto.includes('snow')) return '❄️';
    if (texto.includes('mist') || texto.includes('fog')) return '🌫️';

    return '🌡️'; // genérico
};