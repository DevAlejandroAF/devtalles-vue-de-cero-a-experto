const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref("I'm Batman");
    const author = ref("Batman");

    const changeQuote = () => {
      message.value = "Hola, soy Goku";
      author.value = "Goku";
    };

    return {
      message,
      author,
      changeQuote,
    };
  },
});

app.mount("#app");
