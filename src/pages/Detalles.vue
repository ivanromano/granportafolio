<template>
    <!-- {{Recetas.RecetasDBs}} -->
<div v-if="pokemon">
    
    <div v-for="item in (Recetas.RecetasDBs)[`${route.params.id}`].products" :key="item.id">
        <main class="h-[200px]">

            {{item}}
        </main>
        

    </div>
</div>
<div v-else>
    <div>
        no exiset
    </div>
</div>


</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useRecetas } from "../database/db.js";

const pokemon = ref(false)
const numero2 = 2
const Recetas = useRecetas()
const route = useRoute()

// const Actualizador = async() => {


    

    
    
// }

// watch(route, () => {
// 		Actualizador()
// 	})

// onMounted(() => {
// 	Actualizador()
// })

const truepoke = () => {
    pokemon.value = true
}
truepoke()
</script>

<style lang="scss" scoped>

</style>