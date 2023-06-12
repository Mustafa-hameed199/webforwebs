<template>
    <div id="app">
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Pages  ~~~~~~~~~~~~~~~~~ -->
        <Links />
        <transition name="fade-in" mode="out-in">
            <router-view />
        </transition>
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Footer  ~~~~~~~~~~~~~~~~~ -->
        <Footer />
    </div>
</template>
<script>
import Links from "./components/HeaderComp.vue";
import Footer from "./views/Footer";

export default {
    name: "App",
    components: {
        Links,
        Footer,
    },
};
</script>

<style scoped lang="scss">
.fade-in {
    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
    &-leave-active,
    &-enter-active {
        transition: 0.2s ease-out;
    }
}
</style>
