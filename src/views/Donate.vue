<template>
  <v-container
    min-width="100vw"
  >
  
<v-card
    elevation="0"
    class="d-flex flex-row justify-center"
  >
    <v-card     
      max-width="50%"
    >
      <v-card-title>
        Donate
      </v-card-title>
      <v-card-text>
        We are a private organization who does research and development on many open technologies.
        We does not accept any kinds of government benefits or priviledges and provide services in the 
        guise of privacy. As being private, we rely on donations from the private to continue our development in
        free and open source products.
      </v-card-text>
      <v-card-text>
      <v-form v-model="valid" ref="form" name="donation" lazy-validation>
        <v-text-field
          label="Name"
          v-model="name"
          :counter="30"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          required
        ></v-text-field>
        <v-select
          label="Item"
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          required
        ></v-select>
        <v-checkbox
          label="Do you agree?"
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          required
        ></v-checkbox>

        <v-btn
          @click="submit"
          :disabled="!valid"
        >
          submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
      </v-card-text>

    </v-card>
  </v-card>
</v-container>
</template>


<script>
import axios from "axios";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Name is required", v => (v && v.length <= 30) || "Name must be less than 30 characters"],
    email: "",
    // emailRules: [v => !!v || "E-mail is required", v => /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(v) || "E-mail must be valid"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
