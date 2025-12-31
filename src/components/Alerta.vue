<script setup>
    const props = defineProps({
        color: {
            type: String,
            required: true
        }
    })

</script>

<template>
    <div class="alerta" :class="props.color">
        <slot></slot>
    </div>
</template>

<style>
    .alerta {
        text-align: center;
        color: var(--blanco);
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.1rem;
        padding: 1rem .5rem;
        border-radius: 0 0 2rem 2rem;
    }

        /* Clases dinámicas */
    .alerta.green {
        background-color: #0cb387;
    }

    .alerta.red {
        background-color: #8e2424;
    }
    .alerta.orange{
        background-color: #d08700;
    }
</style>