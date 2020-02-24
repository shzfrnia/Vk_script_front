<template>
    <div class="container">
        <h1 class="message">Why  are  you here,  man?<br>This  is  404 -_-</h1>
    </div>
</template>

<script>
  export default {
    name: "404"
  }
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Monoton);

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 100%;
        font-family: 'Monoton', cursive;
    }

    .message {
        white-space: pre-wrap;
        text-align: center;
        line-height: 7vw;
        font-size: 6vw;
    }
</style>
