<template>
    <div id="UsersListComponent">

        <b-card
            tag="article"
            style="width: 260px;"
            class="tarjeta mb-2"
            v-for="(user,index) in users"
            :key="index"
        >
            <h5 class="card-title">
                Nombre: {{ user.name }}
            </h5>
            <b-card-text>
                Edad: {{ user.age }}
            </b-card-text>

            <b-button variant="danger" @click.prevent="remove(user.id)">Eliminar</b-button>
        </b-card>

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'UsersListComponent',
    computed: {
        ...mapState(['users'])
    },
    methods: {
        remove(id) {
            this.$store.commit('DELETE_USER', id)
        }
    }
}
</script>

<style scoped>
#UsersListComponent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 50px 50px 50px;
}

.tarjeta {
    background-color: #fff;
    box-shadow: 0px 0px 6px #ddd, 0px 0px 10px #ddd;
    margin: 10px;
}
</style>