<template>
  <div class="home">
    <ListUsersComponent msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListUsersComponent from '@/components/ListUsersComponent.vue';

export default {
  name: 'Home',
  components: {
    ListUsersComponent,
  },
};
</script>
