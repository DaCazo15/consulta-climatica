<script setup>
  import { reactive } from 'vue';
  import Formulario from './components/Formulario.vue';
  import Tarjeta from './components/Tarjeta.vue';
  import Alerta from './components/Alerta.vue';
  import Spiner from './components/Spiner.vue';

  import useClima from './composables/useClima';
  import useAlerta from './composables/useAlerta';

  const { alerta, tipoAlerta } = useAlerta();
  const { obtenerClima, clima, mostrarClima, error, cargando } = useClima();

  const formulario = reactive({
    ciudad: '',
    pais: ''
  });

  const consultarClima = async () => {
    if (Object.values(formulario).includes('')) {return tipoAlerta('Todos los campos son obligatorios')}
    await obtenerClima({ciudad: formulario.ciudad, pais: formulario.pais});
    if (error.value){return tipoAlerta('Sin coindencias...')}
  };

  const limpiar = () => {
    Object.assign(formulario, { ciudad: '', pais: '' });
    clima.value = null;
  };
</script>

<template>
  <h1 class="titulo">Buscador del Clima</h1>
  <div class="contenedor buscador-clima">
    <div class="contenedor-formulario">
      <Formulario 
        @consultar-clima="consultarClima"
        @limpiar="limpiar"
        v-model:ciudad="formulario.ciudad"
        v-model:pais="formulario.pais"
        :alerta="alerta"
      />
      
      <Alerta
        v-if="error"
        :color="alerta.color"
      >{{ alerta.msj }}</Alerta>
    </div>

    <Spiner v-if="cargando"/>
    <Tarjeta
      v-if="mostrarClima"
      :clima="clima"
      :formulario="formulario"
    />
  </div>
</template>

<style scoped>
</style>
