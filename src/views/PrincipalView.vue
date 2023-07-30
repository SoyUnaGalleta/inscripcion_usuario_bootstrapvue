<template>
  <div id="PrincipalView">
    <CarruselComponent />
    <NewUserComponent />
    <UsersListComponent />
  </div>
</template>

<script>
import NewUserComponent from '../components/NewUserComponent.vue'
import UsersListComponent from '../components/UsersListComponent.vue'
import CarruselComponent from '../components/CarruselComponent.vue'

export default {
  name: 'PrincipalView',
  components: {
    NewUserComponent,
    UsersListComponent,
    CarruselComponent
  }
}
</script>
