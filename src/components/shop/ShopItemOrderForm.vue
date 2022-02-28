<template>
  <form>
    <div class="inner-form">
      <div class="form-left">
        <base-input
          name="address-1"
          id="address-1"
          label="Address line 1"
          placeholder="Address line 1"
        />
        <base-input name="city" id="city" label="City" placeholder="City" />
        <zip-code-input
          name="zip-code"
          id="zip-code"
          label="Zip code"
          placeholder="Zip"
        />
      </div>
      <div class="form-right">
        <base-input
          name="address-2"
          id="address-2"
          label="Address line 2"
          placeholder="Address line 2"
        />
        <base-input name="state" id="state" label="State" placeholder="State" />
        <country-list-input name="coutry" id="coutry" label="Coutry" />
      </div>
    </div>
    <div class="submit-button">
      <submit-button title="Place order" />
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/form/BaseInput";
import ZipCodeInput from "@/components/form/ZipCodeInput";
import CountryListInput from "@/components/form/CountryListInput";
import SubmitButton from "@/components/form/SubmitButton";

export default {
  name: "ShopItemOrderForm",
  components: { SubmitButton, CountryListInput, ZipCodeInput, BaseInput },
};
</script>

<style lang="scss" scoped>
form {
  margin-top: 32px;
  margin-bottom: 32px;

  .inner-form {
    display: flex;
    width: 100%;

    .form-left,
    .form-right {
      width: 50%;
    }
  }

  .submit-button {
    button {
      margin: auto;
    }
  }
}
</style>
