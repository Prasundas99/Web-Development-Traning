const app = Vue.createApp({
  // template: '<h1>Hello World</h1>'  -- Printing Hello World in VUE
 // template: "<h1>Hello {{firstname}}</h1>",  //Printing Dynamic data in VUe

  //Dynamic Rendering in Vue
  data() {
    return {
      firstname: "Prasun",
    };
  },
});

app.mount("#app");
