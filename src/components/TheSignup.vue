<template>
  <div class="limiter">
    <div class="container-login100">
      <div
        class="login100-more"
        :style="{ 'background-image': 'url(' + img + ')' }"
      ></div>

      <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
        <form class="login100-form validate-form">
          <span class="login100-form-title p-b-59">
            Regístrate
          </span>

          <div v-for="item in inputs" :key="item.id" @submit.prevent="submit">
            <input-signup :info="item"></input-signup>
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
import InputSignup from "./InputSignup.vue";
export default {
  components: { InputSignup },
  name: "TheSignup",
  data() {
    return {
      img: require("../assets/images/bg-02.jpg"),
      check:false,
      inputs: [
        {
          type: "text",
          name: "Nombre",
          placeholder: "Nombre...",
          dataValidate: "Nombre es obligatorio",
        },
        {
          type: "text",
          name: "Email",
          placeholder: "Correo electrónico...",
          dataValidate: "Email es obligatorio: ex@abc.xyz",
        },
        {
          type: "text",
          name: "Rol",
          placeholder: "Rol...",
          dataValidate: "Rol es obligatorio",
        },
        {
          type: "password",
          name: "Contraseña",
          placeholder: "Contraseña...",
          dataValidate: "Al menos 8 caracteres",
        },
      ],
    };
  },
  methods: {

  },
};
</script>
