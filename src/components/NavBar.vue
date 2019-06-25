<template>
    <div id="nav">
        <div class="my-btn-container">
            <div class="my-btn" :key="route.icon" v-for="(route, index) in routes">
                <router-link @click="selectRoute(index)" :style="{color: route.bkColor}" :to="route.route">
                    <i :class="['fas', `fa-${route.icon}`]"></i>
                </router-link>
            </div>
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
            icon: 'comment',
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
    }
</style>