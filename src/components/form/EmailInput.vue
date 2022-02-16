<template>
  <label :for="id">{{ label }}</label>
  <input
    :id="id"
    type="email"
    :name="name"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :readonly="isReadOnly"
    :autofocus="isAutoFocus"
    :required="isRequired"
    v-model="inputValue"
    v-on:keyup="isEmailValid"
  />
  <div class="error-box" v-if="error !== ''">
    <font-awesome-icon icon="circle-exclamation" />
    <span>{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "EmailInput",
  props: {
    label: String,
    id: String,
    name: String,
    placeholder: String,
    isReadOnly: Boolean,
    isAutoFocus: Boolean,
    isDisabled: Boolean,
    isRequired: Boolean,
  },
  data() {
    return {
      error: "",
      inputValue: "",
    };
  },
  methods: {
    isEmailValid() {
      const regex =
        "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";
      if (!this.inputValue.match(regex) && this.inputValue.length > 15) {
        this.error = "Email format is not valid";
      } else {
        this.error = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos.scss";

input {
  height: 24px;
  margin: 0 0 16px;
}
</style>
