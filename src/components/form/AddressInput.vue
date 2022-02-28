<template>
  <div class="input-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      type="text"
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
  name: "AddressInput",
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

<style lang="scss" scoped></style>
