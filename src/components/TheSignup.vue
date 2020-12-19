<template>
  <div class="limiter">
    <div class="container-login100">
      <div
        class="login100-more"
        :style="{ 'background-image': 'url(' + img + ')' }"
      ></div>

      <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
        <form class="login100-form validate-form" @submit.prevent="signup()">
          <span class="login100-form-title p-b-59">
            Regístrate
          </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Nombre es obligatorio"
            :class="validateAlertNombre"
          >
            <span class="label-input100">Nombre</span>
            <input
              class="input100"
              v-model="usuario.name"
              type="text"
              name="Nombre"
              placeholder="Nombre..."
              :class="hasvalueNombre"
              @blur="hasvalueNombre = validateNombre()"
              @focus="hasvalueNombre = 'init'"
            />
            <span class="focus-input100"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="ex@abc.xyz"
            :class="validateAlertEmail"
          >
            <span class="label-input100">Email</span>
            <input
              class="input100"
              v-model="usuario.email"
              type="text"
              name="Email"
              placeholder="Correo electrónico..."
              :class="hasvalueEmail"
              @blur="hasvalueEmail = validateEmail()"
              @focus="hasvalueEmail = 'init'"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100">
            <span class="label-input100">Rol</span>
            <select class="input100" name="Rol" v-model="usuario.rol">
              <option value=""></option>
              <option value="Administrador">Administrador</option>
              <option value="Vendedor">Vendedor</option>
              <option value="Almacenero">Almacenero</option>
            </select>
            <span class="focus-input100"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Al menos 8 caracteres"
            :class="validateAlertPassword"
          >
            <span class="label-input100">Contraseña</span>
            <input
              class="input100"
              v-model="usuario.password"
              type="password"
              name="Contraseña"
              placeholder="Contraseña..."
              :class="hasvaluePassword"
              @blur="hasvaluePassword = validatePassword()"
              @focus="hasvaluePassword = 'init'"
            />
            <span class="focus-input100"></span>
          </div>

          <div class="flex-m w-full p-b-33">
            <div class="contact100-form-checkbox">
              <input
                class="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
                v-model="check"
              />
              <label class="label-checkbox100" for="ckb1">
                <span class="txt1">
                  Acepto los
                  <a href="#" class="txt2 hov1">
                    Terminos de Uso
                  </a>
                </span>
              </label>
            </div>
          </div>

          <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtn"></div>
              <button class="login100-form-btn" type="submit">
                Regístrate
              </button>
            </div>

            <router-link
              class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30"
              to="/"
              >Login
              <i class="fa fa-long-arrow-right m-l-5"></i>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "TheSignup",
  data() {
    return {
      img: require("../assets/images/bg-02.jpg"),
      usuario: {
        name: "",
        email: "",
        password: "",
        rol: "",
      },
      check: false,
      hasvalueNombre: "init",
      hasvaluePassword: "init",
      hasvalueEmail: "init",
    };
  },
  methods: {
    validateInput: function(hasvalue) {
      if (hasvalue === "init") {
        return "";
      } else if (hasvalue === "has-value") {
        return "true-validate";
      } else {
        return "alert-validate";
      }
    },

    validateEmail: function() {
      let val =
        this.usuario.email
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) !== null;
      return this.hasvalue(val);
    },

    validatePassword: function() {
      let val = this.usuario.password.length >= 8;
      return this.hasvalue(val);
    },

    validateNombre: function() {
      let val = this.usuario.name.trim() !== "";
      return this.hasvalue(val);
    },

    hasvalue: function(validation) {
      return validation ? "has-value" : "";
    },
    signup: async function() {
      this.hasvalueNombre = this.validateNombre();
      this.hasvalueEmail = this.validateEmail();
      this.hasvaluePassword = this.validatePassword();

      if (this.hasvalueNombre && this.hasvalueEmail && this.hasvaluePassword) {
        if (this.check) {
          try {
            let response = await this.$http.post(
              "/api/user/signup",
              this.usuario
            );
            swal("Exitoso", "Se ha registrado exitosamente", "success");
            this.$router.push("/");
          } catch (error) {}
        } else {
          swal("Error", "No has aceptado los terminos de uso", "error");
        }
      } else {
        swal("Error", "Datos incorrectos", "error");
      }
    },
  },
  computed: {
    validateAlertNombre: function() {
      return this.validateInput(this.hasvalueNombre);
    },

    validateAlertPassword: function() {
      return this.validateInput(this.hasvaluePassword);
    },

    validateAlertEmail: function() {
      return this.validateInput(this.hasvalueEmail);
    },
  },
};
</script>
