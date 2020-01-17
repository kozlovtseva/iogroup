<template>
    <div id="app">
        <Form />
    </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
    name: "app",
    components: {
        Form
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-image: url("https://klondaik-plitka.ru/wp-content/uploads/2014/10/grey-marbled-paper1.jpg");
    height: 100vh;
    margin-top: 0;
}
* {
    box-sizing: border-box;
    margin: 0;
    outline: none;
}
</style>
