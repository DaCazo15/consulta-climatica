<script setup>
    import {formatTemp} from '../helpers/formatTemp';
    import {emojiClima} from '../helpers/emojiClima';

    const props = defineProps({
        clima: {
            type: Object,
            required: true
        }, 
        formulario: {
            type: Object,
            required: true
        }
    });

</script>

<template>
    <div class="resultado">
        <h2>Clima de: {{ formulario.ciudad }}, {{ formulario.pais }}</h2>
        <p class="">Referencia: {{ clima.name }}</p>
        <div class="temperatura">
            <p class="actual">{{ formatTemp(clima.main.temp) }}&deg;C</p>
            <p class="emoji">{{ emojiClima(clima.weather[0].main) }}</p>
        </div>
        <div class="temperaturas">
            <p>Min: {{ formatTemp(clima.main.temp_min) }}<span>&deg;C</span></p>
            <p>Max: {{ formatTemp(clima.main.temp_max) }}<span>&deg;C</span></p>
        </div>
    </div>
</template>

<style scoped>
    .temperatura{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .emoji{
        margin-top: -2.5rem;
    }
</style>
