<template>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img
              :src="imagenLogin"
              alt="login"
              class="login-card-img"
              style="left:0px"
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <h1 style="display:inline">BitTravel</h1>
              </div>
              <p class="login-card-description">Iniciar sesión en su cuenta</p>
              <form @submit.prevent="loginUser">
                <div class="form-group">
                  <label for="email" class="sr-only">Correo electrónico</label>
                  <input
                    v-model="login.email"
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="password" class="sr-only">Contraseña</label>
                  <input
                    v-model="login.password"
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    placeholder="***********"
                  />
                </div>
                <input
                  name="login"
                  id="login"
                  class="btn btn-block login-btn mb-4"
                  type="submit"
                  value="Acceder"
                />
              </form>
              <a href="#!" class="forgot-password-link">¿Olvidó su contraseña?</a>
              <p class="login-card-footer-text">
                ¿No tienes una cuenta?
                <a href="#!" class="text-reset">Registrese aquí</a>
              </p>
              <nav class="login-card-footer-nav">
                <a href="#!">Terminos de uso.</a>
                <a href="#!">Politica de privacidad</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "TheLogin",
  data() {
    return {
      imagenLogin: require("../assets/images/login2.jpg"),
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/auth/signin", this.login);
        let token = response.data.accessToken;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Exitoso", "Ha iniciado sesión", "success");
          this.$router.push("/home");
        }
      } catch (err) {
        swal("Error", "Datos incorrectos", "error");
        this.login.email="";
        this.login.password="";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
