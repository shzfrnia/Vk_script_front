<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <md-field>
                    <label>Ссылка на профиль</label>
                    <md-input v-model="type"></md-input>
                </md-field>
                <md-button class="md-raised md-primary">Сканировать аккаунт</md-button>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "OnePage"
  }
</script>

<style scoped>
    .md-field:after {
        height: 2px;
        background: black;
    }
    .md-input {
        text-align: center;
    }

    .md-field label {
        right: 0;
    }
    
    .container {
        align-self: center;
        margin-bottom: 160px;
    }
</style>