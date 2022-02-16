<template>
  <label :for="id">{{ label }}</label>
  <textarea
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    :disabled="isDisabled"
    :readonly="isReadOnly"
    :autofocus="isAutoFocus"
    :required="isRequired"
    v-model="inputValue"
    v-on:keyup="isMessageValid"
  />
  <div class="error-box" v-if="error !== ''">
    <font-awesome-icon icon="circle-exclamation" />
    <span>{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "TheTextArea",
  props: {
    label: String,
    id: String,
    name: String,
    placeholder: String,
    rows: String,
    cols: Number,
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
    isMessageValid() {
      if (this.inputValue.length <= 30) {
        this.error =
          "Your message is a bit too short. Come on tell us a little bit more !";
      } else {
        this.error = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

textarea {
  margin: 0 0 16px;
}

span {
  color: $error-red;
}
</style>
