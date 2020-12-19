<template>
  <div class="card user-card-full">
    <div>
      <div
        class="bg-c-lite-green user-profile d-flex align-items-center justify-content-center w-100"
      >
        <div class="card-block text-center text-white">
          <div>
            <img
              src="https://img.icons8.com/bubbles/100/000000/user.png"
              class="img-radius"
              alt="User-Profile-Image"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="card-block w-100">
          <div v-for="(value, key) in user" :key="value.id">
            <h2 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">{{ key }}</h2>
            <h3 class="text-muted f-w-400">{{ value }}</h3>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="logOut"
      type="button"
      class="btn btn-lg btn-block btn-logout"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        class="bi bi-box-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
        />
        <path
          fill-rule="evenodd"
          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
      </svg>
      Cerrar sesión
    </button>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    showKey(key) {
      return key;
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user.nombre = decoded.name;
      this.user.email = decoded.email;
      this.user.rol = decoded.rol;
    },
    logOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style scoped>
.padding {
  padding: 3rem !important;
}

.user-card-full {
  overflow: hidden;
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
}

.m-r-0 {
  margin-right: 0px;
}

.m-l-0 {
  margin-left: 0px;
}

.bg-c-lite-green {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#bf8069),
    to(#a68c86)
  );
  background: linear-gradient(to right, #bf8069, #a68c86);
}

.user-profile {
  padding: 20px 0;
}

.m-b-25 {
  margin-bottom: 25px;
}

.img-radius {
  border-radius: 5px;
}

.card-block {
  padding: 1.25rem;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
  margin-bottom: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.m-b-10 {
  margin-bottom: 10px;
}

.text-muted {
  color: #919aa3 !important;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
  font-weight: 600;
}

.m-b-20 {
  margin-bottom: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.m-b-10 {
  margin-bottom: 10px;
}

.m-t-40 {
  margin-top: 20px;
}

h2 {
  text-transform: capitalize;
}

.btn-logout {
  background-color: #594e4d;
  color: white;
  height: 72px;
  font-size: 30px;
}

.btn-logout:hover {
  background-color: #d9d3d2;
  color: black;
}
</style>
