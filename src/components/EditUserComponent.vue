<template>
  <div class="container">
    <h2 id="textForm">Editar Usuário</h2>
    <form class="form-insert">
      <div class="mb-3">
        <div class="mb-3">
          <label for="exampleFormControlInput" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Nome"
            v-model="userForm.name"
            v-on:keyup.prevent="hideMessage()"
          />
          <div class="ivalid-feedback config-text" id="ms_name"></div>
        </div>
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          placeholder="name@example.com"
          v-model="userForm.email"
          v-on:keyup.prevent="hideMessage()"
        />
        <div class="ivalid-feedback config-text" id="ms_email"></div>
      </div>
      <div class="mb-3 btns">
        <input
          type="button"
          class="btn btn-secondary"
          id="btn-cancelar"
          @click.prevent="redirectGoBack()"
          value="Cancelar"
        />
        <input
          type="button"
          id="addButton"
          class="btn btn-primary"
          @click.prevent="editUser()"
          value="Editar Usuário"
        />
      </div>
    </form>
    <!-- Button trigger modal -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      id="btnModal"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    ></button>

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
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" id="modal-dody-id"></div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="redirectView()"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
    <h1 @add-value="testeCom()"></h1>
  </div>
</template>

<script>
import jQuery from "jquery";
import usersService from "../services/usersService";

global.jQuery = jQuery;

export default {
  mounted() {
    this.getUsersComponent();
    this.getObjectById();
    jQuery("#btnModal").hide();
    document.getElementById("modal-dody-id").innerHTML = "";
  },
  data() {
    return {
      users: [],
      userForm: {
        id: "",
        name: "",
        email: ""
      }
    };
  },
  validations: {
    userForm: {
      name: {},
      email: {}
    }
  },
  methods: {
    async getUsersComponent() {
      await usersService.getUsers().then(res => {
        this.users = res;
      });
    },
    async getObjectById() {
      const user = await usersService.getUserById(this.$route.query.id);
      this.userForm = { ...user };
    },
    hideMessage() {
      document.getElementById("ms_name").innerHTML = "";
      document.getElementById("ms_email").innerHTML = "";
    },
    validateChilds() {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      if (name.value === null || name.value === "") {
        document.getElementById("ms_name").innerHTML = "O campo Nome é obrigatório!";
        return;
      }

      if (email.value === null || email.value === "") {
        document.getElementById("ms_email").innerHTML = "O campo Email é obrigatório!";
        return;
      }
    },
    async editUser() {
      this.getUsersComponent();
      for (let i = 0; i < this.users.length; i = i + 1) {
        if (this.users[i].name == this.userForm.name) {
          document.getElementById("modal-dody-id").innerHTML = "Nome já cadastrado!";
          jQuery("#btnModal").click();
          return;
        }
        if (this.users[i].email == this.userForm.email) {
          document.getElementById("modal-dody-id").innerHTML = "Email já cadastrado!";
          jQuery("#btnModal").click();
          return;
        }
      }
      await usersService
        .updateUser({
          id: this.$route.query.id,
          name: this.userForm.name,
          email: this.userForm.email
        })
        .then(resp => {
          document.getElementById("modal-dody-id").innerHTML = "Usuário editado com successo!";
          jQuery("#btnModal").click();
        })
        .catch(error => {
          console.log(error);
        });
    },
    redirectGoBack() {
      window.history.go(-1);
    },
    redirectView() {
      if (document.getElementById("modal-dody-id").innerHTML === "Usuário editado com successo!") {
        document.location.href =
          window.location.origin + window.location.pathname + window.location.search;
      }
    }
  }
};
</script>
