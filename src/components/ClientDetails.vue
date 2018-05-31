<template>

    <div class="card" style="width: 18rem;" :client="client" v-if="client">
        <img class="card-img-top" :src="client.general.avatar" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ client.general.firstName }} {{ client.general.lastName }}</h5>
            <p class="card-text"> {{ client.job.title }} - {{ client.job.company }}</p>
            <button class="btn btn-primary" @click="clearClient">Close</button>
        </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            client: undefined
        }
    },
    computed: {
        selectedClient: function () {
            return this.$store.getters.getChosenClient
        }
    },
    watch: {
        selectedClient: function() {
            if(this.selectedClient) this.client = this.selectedClient;
            console.log(this.client);
        }
    },
    methods: {
        clearClient() {
            this.client = undefined;
        }
    }
}
</script>

