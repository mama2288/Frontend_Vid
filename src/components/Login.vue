<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-14">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-5">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Sign in to WeFit</h1>

                        <v-form>

                          <v-text-field
                              label="Username"
                              name="username"
                              prepend-icon="person"
                              type="text"
                              color="teal accent-3"
                              required
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            required
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-10">

                        <router-link to="/home"><v-btn rounded color="teal accent-3">SIGN IN</v-btn></router-link>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">New User?</h1>
                        <h3
                          class="text-center my-4"
                        >Enter your personal details and become healthy with us!</h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++" to="/signup">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String
  },
  data: () => ({
    valid: true,

    username: '',
    password: '',
    step :1,// exist
    usernameRules:[v => !!v || 'Username is required'],
    passwordRules:[v => !!v || 'Username is required'],
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),
//This is a method that take information as a link .validate,... into this methods
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        // submit to backend to authenticate
        let formData = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.username);

        let respond = await Vue.axios.post("/api/login", formData);

        if (respond.data.success) {
          this.$router.push({path: "/"});
        }
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () { // think as a box that you are going to press
      this.$refs.form.resetValidation()
    },
  },


};

</script>

<!--<style scoped>-->
<!--.fill-height {-->
<!--  background: url('../assets/logo.png');-->
<!--  background-size: cover;-->
<!--}-->
<!--</style>-->