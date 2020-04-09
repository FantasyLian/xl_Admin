<template>
    <main>
        <router-view></router-view>
    </main>
</template>
<script>
export default {
    name: 'xl-main',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="css">
main {
    position: absolute;
    right: 0;
    width: auto;
    top: 60px;
    bottom: 44px;
    left: 250px;
}
main > * {
    text-align: center;
    line-height: calc(100vh - 110px);
}
</style>