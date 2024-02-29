<template>
    <div class="liste-alerte-container">
      <span id="alerteMessage" class="scrolling-text">
        {{ alertes.statut }}: {{ alertes.titre }}, {{ alertes.message }}
      </span>
    </div>
  </template>
  
  <script>
  import axios from '@/axios';
  import appafterContent from "../layout/afterContent.vue";
  import appheader from "../layout/header.vue";
import appfooter from "../layout/footer.vue";
import appnavbar from "../layout/navbar.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    appnavbar,
    appfooter,
    appheader,
    appafterContent,
  },
    name: "createAlerteComponent",
    data() {
      return {
        alertes: "",
      };
    },
    computed: {
    //...mapState(['isLoggedIn', 'userNom','userPrenom', 'userIdrole', 'userPhoto', 'userRole']),
    token() {
      return this.$store.state.isLoggedIn;
    },
    userNom() {
      return this.$store.state.userNom;
    },
    userPrenom() {
      return this.$store.state.userPrenom;
    },
    userIdrole() {
      return this.$store.state.userIdrole;
    },
    userPhoto() {
      return this.$store.state.userPhoto;
    },
    userRole() {
      return this.$store.state.userRole;
    },
  },
    mounted() {
      this.get_alert();
    },
    methods: {
      ...mapActions(["login", "logout"]),
      async get_alert() {
        const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
        await axios.get('/alerte/showLatestAlert', {headers})
          .then(response => {
            this.alertes = response.data.alerte;
            console.log(this.alertes);
  
            if (this.alertes) {
              document.getElementById('messageDeroulant').style.display = 'block';
            }
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la dernière alerte', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .liste-alerte-container {
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  
  .scrolling-text {
    animation: scrollToLeft 15s linear infinite;
    white-space: nowrap;
    width: 100%; /* Utilise toute la largeur disponible */
    font-size: 25px;
  }
  
  @keyframes scrollToLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @media (max-width: 600px) {
    .scrolling-text {
      animation: scrollToLeftResponsive 15s linear infinite;
    }
  
    @keyframes scrollToLeftResponsive {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
  </style>
  