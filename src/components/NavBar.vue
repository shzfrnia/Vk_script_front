<template>
    <div id="nav">
        <div class="my-btn-container">
            <div class="my-btn">
                <router-link :to="{name: 'One'}">
                    <i class="fas fa-comment"></i>
                </router-link>
            </div>
            <div class="my-btn">
                <router-link :to="{name: 'Second'}">
                    <i class="fas fa-user"></i>
                </router-link>
            </div>
            <div class="my-btn">
                <router-link :to="{name: 'Third'}">
                    <i class="fas fa-map-marker"></i>
                </router-link>
            </div>
            <div class="my-btn">
                <router-link :to="{name: 'Fourth'}">
                    <i class="fas fa-cog"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
    .my-btn-container {
        display: flex;
        background-color: black;
        /*padding-top: 150px;*/
        /*padding-bottom: 150px;*/
        justify-content: center;
    }

    .my-btn {
        display: inline-block;
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin: 5px;
        font-size: 25px;
        color: gray;
        border-radius: 25px;
        background-color: white;
        text-align: center;
        line-height: 50px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
</style>