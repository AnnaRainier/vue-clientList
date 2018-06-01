<template>
    <div>
        <input type="text" class="form-control" placeholder="Type to search..." v-model="searchedText">
    </div>
</template>
<script>
import _ from 'lodash';

export default {
    data() {
        return {
            searchedText: '',
            clients: this.$store.getters.getClients,
            transformedClientsArray: []
        }
    }, 
    computed: {
        transformedClients: function () {
            //console.log(this.$store.getters.getTransformedClients);
            return this.$store.getters.getTransformedClients
        }
    },
    watch: {
        searchedText: function() {
            console.log(this.searchedText);
            if (this.transformedClientsArray.length != 0) {
               console.log(_.some(this.transformedClientsArray, _.method('match', this.searchedText)));
            }
            },
        transformedClients: function() {
            //console.log('changed')
             this.transformedClientsArray = this.transformedClients;
             //console.log(this.transformedClientsArray);
            }
        },
        created() {
            //  setInterval(function() {
            //     console.log(this.transformedClientsArray)
            // },2000)
        }
    }
</script>
<style>

</style>


