<template>
  <div
    class=""
    :style="'margin-left: 20%; margin-top: 8%; width: 50vw; height: 50vh; font-family: Poppins;'"
  >
    <div
      class="border"
      :style="' width: 638px; height: 785px; background: rgba(255, 255, 255, 0.80); box-shadow: -2px 5px 22.899999618530273px -2px rgb(89, 83, 83, .4); border-radius: 16px 0 0 16px; backdrop-filter: blur(29.50px)'"
    >
      <div
        class=""
        :style="' width: 364px; height: 350px; left: 67px; top: 20%; position: absolute; background:rgba(255, 255, 255, 0.80);'"
      >
        <div>
          <div
            :style="'width: 275px; height: 31px; top: 0px; margin-left:50px;  text-align: center; color: #505050; font-size: 20px; font-family: Poppins; font-weight:400; text-transform: uppercase; letter-spacing: 3.20px; word-wrap: break-word'"
          >
            CONNEXION
          </div>

          <form action="votre_action.php" method="post" id="login-form">
            <div class="form-floating mb-2 mt-4" :style="'margin-left: 9%;'">
              <input
                v-model="form.matricule"
                type="email"
                class="form-control ml-6"
                id="floatingInput"
                placeholder="name@example.com"
                :style="'width: 88%; background: rgba(255, 255, 255, 0.66); box-shadow: -2px 5px 10.899999618530273px -2px #595353; border-radius: 16px; backdrop-filter: blur(29.50px)'"
              />
              <label for="floatingInput"
                ><i class="fa fa-user"></i> Matricule</label
              >
            </div>
            <div class="form-floating mt-4" :style="'margin-left: 9%;'">
              <input
                v-model="form.password"
                :type="passwordFieldType"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                :style="'width: 88%; background: rgba(255, 255, 255, 0.66); box-shadow: -2px 5px 10.899999618530273px -2px #59535300; border-radius: 16px; backdrop-filter: blur(29.50px)'"
              />
              <button
                class="border-0 position-absolute top-50 end-0 translate-middle-y"
                @click.prevent="togglePasswordVisibility"
                type="button"
                id="togglePassword"
                :style="'margin-right: 15%; background-color: white;'"
              >
                <i
                  class="fi"
                  :class="
                    passwordFieldType === 'password'
                      ? 'fi-rr-eye'
                      : 'fi-rr-eye-crossed'
                  "
                ></i>
              </button>
              <label for="floatingPassword"
                ><i class="fa fa-lock"></i> Mot de passe</label
              >
            </div>

            <div
              :style="'width: 205px; height: 52px; left: 79px; top: 62%; position: absolute;'"
            >
              <div
                :style="'width: 205px; height: 52px; left: 0px; top: 0px; position: absolute; background: linear-gradient(9deg, #9181F4 0%, #5038ED 100%); box-shadow: 0px 8px 21px rgb(80, 56, 237, .4); border-radius: 16px'"
              ></div>
              <a
                @click.prevent="verification()"
                :style="'width:100%;text-align:center; text-decoration:none; top: 8px; position: absolute; color: white; font-size: 20px; font-family: Poppins; font-weight: 400; word-wrap: break-word;'"
              >
                Se connecter</a
              >
            </div>
          </form>
        </div>
      </div>
      <div
        style="
          width: 268px;
          height: 60px;
          left: 115px;
          top: 70px;
          position: absolute;
          text-align: center;
          color: #5038ed;
          font-size: 37px;
          font-family: Poppins;
          font-weight: 700;
          line-height: 18px;
          letter-spacing: 1.11px;
          word-wrap: break-word;
        "
      >
        CFPT-Digital
      </div>
      <div
        style="
          width: 638px;
          height: 808px;
          left: 461px;
          top: 0px;
          position: absolute;
          width: 50vw;
          height: 50vh;
        "
      >
        <div
          class="border-color-none"
          style="
            box-shadow: -2px 5px 22.899999618530273px -2px #595353;
            border-radius: 0 16px 16px 0;
            border: 0px solid linear-gradient(218deg, #9181f4 0%, #5038ed 100%);
            backdrop-filter: blur(29.5px);
            width: 585px;
            margin-top: 45px;
            height: 784px;
            left: 53px;
            top: -45px;
            position: absolute;
            background: linear-gradient(218deg, #9181f4 0%, #5038ed 100%);
          "
        ></div>
        <img
          style="
            width: 585px;
            height: 784px;
            left: 53px;
            top: 0px;
            position: absolute;
            opacity: 0.13;
          "
          :src="'./assets/auth/images/fond.jpg'"
        />
        <img
          style="
            width: 555px;
            height: 539px;
            left: 10%;
            top: 125px;
            position: absolute;
          "
          :src="'./assets/auth/images/logo2.png'"
        />
        <div
          style="
            width: 380px;
            height: 29px;
            left: 182px;
            top: 729px;
            position: absolute;
            color: white;
            font-size: 16px;
            font-family: Poppins;
            font-style: italic;
            font-weight: 700;
            letter-spacing: 1.28px;
            word-wrap: break-word;
          "
        >
          ‘’L'excellence au service de l’industrie’’
        </div>
      </div>

      <div
        style="
          width: 155.28px;
          height: 21.21px;
          left: 171px;
          top: 737px;
          position: absolute;
        "
      >
        <div
          style="
            width: 155.28px;
            height: 21.21px;
            left: 0px;
            top: 0px;
            position: absolute;
          "
        >
          <div
            style="
              width: 20.78px;
              height: 19.76px;
              left: -0px;
              top: 0.5px;
              position: absolute;
            "
          >
            <img :src="'./images/facebook.png'" alt="" />
          </div>
        </div>
        <div
          style="
            width: 20.78px;
            height: 19.76px;
            left: 44.33px;
            top: 0.5px;
            position: absolute;
          "
        >
          <div
            style="
              width: 20.78px;
              height: 19.76px;
              left: -0px;
              top: 0.5px;
              position: absolute;
            "
          >
            <img :src="'./images/instagram.png'" alt="" />
          </div>
        </div>
        <div
          style="
            width: 20.78px;
            height: 19.76px;
            left: 92.2px;
            top: 0.5px;
            position: absolute;
          "
        >
          <div
            style="
              width: 20.78px;
              height: 19.76px;
              left: -0px;
              top: 0.5px;
              position: absolute;
            "
          >
            <img :src="'./images/youtube.png'" alt="" />
          </div>
        </div>
        <div
          style="
            width: 22.3px;
            height: 21.21px;
            left: 132.98px;
            top: -0px;
            position: absolute;
          "
        >
          <div
            style="
              width: 20.78px;
              height: 19.76px;
              left: -0px;
              top: 0.5px;
              position: absolute;
            "
          >
            <img :src="'./images/linkedin.png'" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
 */
import axios from "@/axios";
import Form from "vform";

export default {
  name: "loginComponent",
  data() {
    return {
      form: new Form({
        matricule: "",
        password: "",
      }),
      message: "",
      errorMessage: "",
      erreur: false,
      bouton: "",
      rememberMe: false,
      passwordVisible: false,
      passwordFieldType: "password",
    };
  },
  /*  computed: {
    passwordFieldType() {
      return this.passwordVisible ? 'text' : 'password';
    },
  }, */
  mounted() {
    //$(".tstWarning").on("click", this.afficherToastWarning);
    // ... Ajoutez des écouteurs pour les autres types de toast
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    afficherToastInfo(message) {
      $.toast({
        heading: "Erreur",
        text: message,
        position: "top-right",
        loaderBg: "#ff6849",
        icon: "error",
        hideAfter: 3500,
      });
    },

    async verification() {
      /*   this.message = document.querySelector('.b');
        this.bouton = document.querySelector('.suivant'); */

      if (this.form.matricule !== "" && this.form.password !== "") {
        await axios
          .post("/connexion", this.form)
          .then(({ data }) => {
            // console.log(data.url)
            this.message = "";

            if (data.statut !== "Error" && data.token) {
              window.location.href = data.url;
             

              localStorage.setItem("token", data.token);
              localStorage.setItem("userNom", data.user.nom);
              localStorage.setItem("userPrenom", data.user.prenom);
              localStorage.setItem("userIdrole", data.user.id_role);
              localStorage.setItem("userPhoto", data.user.photo); 
              localStorage.setItem("userrole", data.user.role.intitule); 
             

              /* this.$store.dispatch('login', {
                nom: data.user.nom,
                prenom: data.user.prenom,
                id_role: data.user.id_role,
                photo: data.user.photo,
                role: data.user.role.intitule
              });
 */

              //localStorage.setItem('user', JSON.stringify(data.user));
              this.$store.commit("LOGIN",  data.user.nom, data.user.prenom, data.user.id_role, data.user.photo, data.user.role.intitule); 
              //this.$router.push(data.url);
              
             
              
            } else {
              if (data.message === "L'utilisateur est bloqué") {
                this.message =
                  "Vous avez été bloqué. Rapprochez-vous de votre administrateur pour plus informations.";
                this.afficherToastInfo(this.message);
              } else {
                this.message = "Matricule ou mot de passe incorrect.";
                this.afficherToastInfo(this.message);
              }
            }

            //this.$store.commit("LOGIN");
            
          })
          .catch({
            // Gestion des erreurs
          });
      } else {
        this.message = "Tous les champs sont obligatoires.";
        this.afficherToastInfo(this.message);
      }
    },
  },
};
</script>

<style>
.text-danger {
  color: red;
}

.flash-message {
  position: fixed;
  top: 10px;
  left: 10px;
  /* Modifier la propriété 'left' pour déplacer le message à gauche */
  padding: 10px;
  border-radius: 5px;
  z-index: 9999;
}

.error {
  background-color: #ce0404;
  color: #ffffff;
}
</style>
