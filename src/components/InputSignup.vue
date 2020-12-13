<template>
  <div
    class="wrap-input100 validate-input"
    :data-validate="info.dataValidate"
    :class="validateAlert"
  >
    <span class="label-input100">{{ info.name }}</span>
    <input
      class="input100"
      v-model="inputText"
      :type="info.type"
      :name="info.name"
      :placeholder="info.placeholder"
      :class="hasvalue"
      @blur="hasvalue = validate ? 'has-value' : ''"
      @focus="hasvalue = 'init'"
    />
    <span class="focus-input100"></span>
  </div>
</template>

<script>
export default {
  name: "InputSignup",
  data() {
    return {
      inputText: "",
      hasvalue: "init",
    };
  },
  props: {
    info: Object,
  },

  computed: {
    validate: function() {
      if (this.info.name === "Email") {
        if (
          this.inputText
            .trim()
            .match(
              /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
            ) === null
        ) {
          return false;
        } else {
          return true;
        }
      } else if (this.info.name==="Contraseña") {
        return this.inputText.length >= 8;
      } else {
        return this.inputText.trim() !== "";
      }
    },
    validateAlert: function() {
      if (this.hasvalue === "init") {
        return "";
      } else if (this.hasvalue === "has-value") {
        return "true-validate";
      } else {
        return "alert-validate";
      }
    },
  },
};
</script>

<style scoped></style>
