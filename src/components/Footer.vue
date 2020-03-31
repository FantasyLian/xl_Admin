<template>
    <footer>
        <p>&copy;<span>{{ year }}</span> 绚铃 All Rights Reserved.</p>
    </footer>
</template>
<script>
export default {
    name: 'xl-footer',
   
    data() {
        return {
            year: new Date().getFullYear()
        }
    },
    methods: {

    }
}
</script>
<style lang="css">
footer {
    position: fixed;
    right: 0;
    left: 250px;
    bottom: 0;
    background-color: #eee;
    text-align: center;
}
</style>