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
  name: "BaseInput",
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
};
</script>
