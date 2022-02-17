<template>
  <form class="footer-ask" :action="action" :method="method">
    <span>{{ askTitle }}</span>
    <EmailInput
      label="Email"
      id="footerEmailInput"
      name="email"
      placeholder="Email"
      is-required
    />
    <TheTextArea
      label="Message"
      id="footerTextArea"
      name="askMessage"
      placeholder="Ask us anything, were social !"
      rows="14"
      is-required
    />
    <SubmitButton title="Let's go" />
  </form>
</template>

<script>
import EmailInput from "@/components/form/EmailInput";
import TheTextArea from "@/components/form/TheTextArea";
import SubmitButton from "@/components/form/SubmitButton";

export default {
  name: "FooterAsk",
  components: { SubmitButton, TheTextArea, EmailInput },
  props: {
    action: String,
    method: String,
  },
  data() {
    return {
      askTitle: "Need something on command ?",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/stylesheets/phaistos";

form {
  display: flex;
  flex-direction: column;
  padding: 60px;

  span {
    font-family: "Caudex", serif;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 32px;
  }
}

@media only screen and (max-width: $small-breakpoint) {
  form {
    padding: 16px;

    span {
      margin-top: 32px;
    }
  }
}
</style>
