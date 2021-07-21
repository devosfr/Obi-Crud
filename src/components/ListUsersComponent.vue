<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>Lista de Usuários</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <!-- <router-link class="btn btn-success" :to="{ name: '', params: { id: user.id } }">
              <fa icon="edit" /> Editar
            </router-link> -->
            <button class="btn btn-success" @click.prevent="sendUser(user)">
              <fa icon="trash-alt" /> Editar
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="removeUser(user)">
              <fa icon="trash-alt" /> Excluir
            </button>
          </td>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Tem certteza que Quer excluir esse usuário?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Fechar
                  </button>
                  <button type="button" class="btn btn-danger">
                    Sim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import usersService from "../services/usersService";

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.geUsersComponent();
  },
  methods: {
    async geUsersComponent() {
      await usersService.getUsers().then(res => {
        this.users = res;
      });
    },
    async removeUser(user) {
      if (confirm("Deseja excluir este usuário?")) {
        await usersService
          .deleteUser(user.id)
          .then((res) => {
            this.geUsersComponent();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    async sendUser(_user) {
      document.location.href = (await document.location.origin) + "#/editUser?id=" + _user.id;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
