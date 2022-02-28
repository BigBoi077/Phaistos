<template>
  <div class="input-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      type="tel"
      :name="name"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :readonly="isReadOnly"
      :autofocus="isAutoFocus"
      :required="isRequired"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  name: "PhoneInput",
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
};
</script>

<style scoped></style>
