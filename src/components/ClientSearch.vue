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
            transformedClientsArray: [],
            matchedClients: null
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
            //console.log(this.searchedText);
            if (this.transformedClientsArray.length != 0) {
                this.matchedClients = this.findMatch(this.searchedText);
                
            }
            },
        transformedClients: function() {
            //console.log('changed')
             this.transformedClientsArray = this.transformedClients;
             //console.log(this.transformedClientsArray);
            }
        },
        methods: {
            findMatch(searchedText) {
                let result;
                let propArr = [];
                let regExpr = new RegExp(searchedText, "i");
                propArr = Object.keys(this.transformedClientsArray[0]);
                result = _.filter(this.transformedClientsArray, function(client) { 
                    for (let i=0; i< propArr.length; i++) {
                        if (client[propArr[i]].match(regExpr)) return client;
                    }
                    });
                    //console.log(result);
                    if (result.length) this.$store.dispatch("matchFound", result);
                    return result;
            }
        }
    }
</script>
<style>

</style>


