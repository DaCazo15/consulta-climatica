<script setup>
    import { paises } from '../helpers/data';

    const props = defineProps({
        ciudad: {
            type: String,
            required: true
        },
        pais: {
            type: String,
            required: true
        },
        alerta: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['consultar-clima', 'limpiar', 'update:ciudad', 'update:pais']);
    
</script>
<template>
    <form 
        class="formulario"
        @submit.prevent="emit('consultar-clima')"
    >
        <div class="campo">
            <label for="ciudad">Ciudad</label>
            <input 
                type="text" 
                id="ciudad"
                placeholder="Ciudad"
                :value="props.ciudad"
                @input="emit('update:ciudad', $event.target.value)"

            >
        </div>
        <div class="campo">
            <label for="pais">País</label>
            <select 
                id="pais"
                :value="props.pais"
                @change="emit('update:pais', $event.target.value)"

            >
                <option value="">--Seleccione un país--</option>
                <option v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
            </select>
        </div>
        <div class="contenedor-btn">
            <input type="submit" value="Consultar Clima" :class="props.alerta.color">
            <input 
                type="button" 
                value="limpiar"  
                class="limpiar" 
                @click="emit('limpiar')"
            >
        </div>

    </form>
</template>
<style scoped>
    .formulario{
        margin-bottom: 0;
    }
    input[type="submit"]{
        border-radius: 1rem;
    }
    input[type="button"]{
        border-radius: 1rem;
    }
    input[type="submit"].red{
        background-color: #8e2424;
    }
    .contenedor-btn{
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: flex-end;
        gap: 1rem;
    }
</style>
