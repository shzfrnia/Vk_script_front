<template>
    <div id="nav">
        <div class="my-btn-container">
            <router-link :key="route.icon" :to="route.route" v-for="route in routes">
                <div class="my-btn" :key="route.icon">
                    <i :style="{color: route.bkColor}" :class="['fas', `fa-${route.icon}`]"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        routes: [
          {
            icon: 'user-circle',
            route: '/one',
            bkColor: '#3EAF6F'
          },
          {
            icon: 'user',
            route: '/second',
            bkColor : '#BE0031'
          },
          {
            icon: 'map-marker',
            route: '/third',
            bkColor: '#8E00AC'
          },
          {
            icon: 'cog',
            route: '/fourth',
            bkColor: '#DE9B00'
          }
        ]
      }
    }
  }
</script>

<style scoped>
    .my-btn-container {
        display: flex;
        /*background-color: black;*/
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
        transition: 0.5s;
    }
    .router-link-active .my-btn{
        width: 80px;
    }
</style>