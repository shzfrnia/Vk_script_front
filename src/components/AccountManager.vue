<template>
    <router-link :to="{name: 'Fourth'}">
        <div class="my-btn" :style="{'width': widthButton}">
            <i :class="['fas', `fa-user`]" class="inline">
                <transition name='component-fade'>
                     <p v-show="nameIsShow">{{message}}</p>
                    
                </transition>
            </i>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "AccountManager",
        props: {
            message: {
                type: String,
                required: true
            }
        },
        computed: {
            routeIsActive() {
                // console.log(this.$route)
                return this.$route.path === '/fourth'
            },
            nameIsShow() {
                return this.routeIsActive
            },
            widthButton() {
                if (this.routeIsActive) {
                    const width = (this.message.length * 20) + 'px'
                    console.log(width)
                    return width
                } else {
                    return 50 + "px"
                }
            }
        }
    }
</script>

<style scoped>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }




    .inline {
        display: inline-flex;
    }

    .inline p {
        margin-left: 10px;
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
        overflow: hidden;
    }
</style>