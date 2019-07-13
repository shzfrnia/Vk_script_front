<template>
    <md-card md-with-hover>
        <!--   HERE ANIMATION         -->
        <md-ripple>
            <!--                -->
            <md-card-header>
                <md-card-media>
                    <img :src="account.avatar" alt="People">
                </md-card-media>
                <md-card-header-text>
                    <div class="md-title">{{account.first_name}} {{account.last_name}}</div>
                    <!--                    <div class="md-subhead">Normal size</div>-->
                </md-card-header-text>

            </md-card-header>
            <!--            <md-card-actions>-->
            <!--                <md-button>Action</md-button>-->
            <!--                <md-button>Action</md-button>-->
            <!--            </md-card-actions>-->
        </md-ripple>
    </md-card>
</template>

<script>

    export default {
      name: "UserCard",
      props: {
        account: Object
      }
    }
</script>

<style scoped>
    .md-card {
        background: white;
        height: 110px;
    }
</style>