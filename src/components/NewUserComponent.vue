<template>
    <div id="NewUserComponent">
        <form>

            <b-form-group id="txtNameLabel" label="Ingresa tu nombre:" label-for="txtName">
                <b-form-input
                id="txtName"
                v-model="form.name"
                placeholder="Escribe tu nombre"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="txtAgeLabel" label="Ingresa tu edad:" label-for="txtAge">
                <b-form-input
                id="txtAge"
                v-model="form.age"
                type="number"
                placeholder="Selecciona tu edad"
                required
                ></b-form-input>
            </b-form-group><br>

            <b-button type="submit" variant="warning" @click.prevent="agregar_usuario">Agregar Usuario</b-button>

        </form>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    name: 'NewUserComponent',
    data() {
      return {
        form: {
            name: '',
            age: ''
        },
      }
    },
    methods: {
        agregar_usuario() {
            if (
                this.form.name != ''
                && this.form.age != 0
            ) {
                let datos = {...this.form}
                this.$store.commit('ADD_USER', datos)
                this.clean()
            }
        },
        clean() {
            this.form.name != ''
            this.form.age != 0
        }
    },
    computed: {
        ...mapState(['contadorID'])
    }
}
</script>

<style scoped>
#NewUserComponent {
    padding: 50px;
}
</style>