<template>
    <div class="d-flex align-items-center justify-content-center flex-column pt-5 mt-5 mb-5">
        <img :src="osos2" alt="osos2 gif" class="osos"/>
        <h4 class="text-center mt-3">SABIA QUE DIRIAS QUE SI !</h4>
    </div>

    <p class="text-center mt-5 pt-5">
        Pagina por J. Rico
    </p>
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
.osos {
    width: 200px;
    height: 200px;
    object-fit: contain;
}
</style>
