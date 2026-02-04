<template>
    <div class="container-page">
        <div class="d-flex align-items-center justify-content-center flex-column pt-5 mt-5 mb-5">
            <img :src="osos" alt="osos gif" class="osos"/>
            <h4 class="text-center mt-3">Quisieras ser mi San Valentin <3</h4>
            <h5 class="text-center mt-2">Aceptas? :D</h5>
        </div>

        <div class="d-flex align-items-center justify-content-center">
            <button @click="accept" class="aceptar btn btn-success me-2" :style="{ padding: padding }">Aceptar</button>
            <button @click="reject" class="rechazar btn btn-danger">Rechazar</button>
        </div>

        <p class="text-center mt-5 pt-5">
            Pagina por: J. Rico
        </p>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    import osos from '../assets/images/osos.gif'
    import osos2 from '../assets/images/osos2.gif'

    const router = useRouter();

    const paddingSize = ref(10);
    const padding = ref('10px 20px');

    const accept = () => {
        router.push("./accept");
    }

    const reject = () => {
        paddingSize.value += 10;
        padding.value = `${paddingSize.value}px ${paddingSize.value * 2}px`;
    }

</script>

<style>
.container-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.osos {
    width: 200px;
    height: 200px;
    object-fit: contain;
}
</style>
