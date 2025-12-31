import { reactive } from 'vue'

export default function useAlerta(){
    const alerta = reactive({
        msj: '',
        color: ''
    })
    const tipoAlerta = (mensaje, color = 'red') => {
        if (mensaje) {
            alerta.msj = mensaje;
            alerta.color = color;

            setTimeout(() => {
                alerta.msj = '';
                alerta.color = '';
            }, 2000);
        }
    };


    return{
        alerta,
        tipoAlerta
    }

}