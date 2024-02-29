<template>
        <div class="sidebar-container" v-show="this.userIdrole && this.userIdrole==3">
            <div class="sidemenu-container navbar-collapse collapse fixed-menu">
                <div id="remove-scroll" class="left-sidemenu">
                    <ul class="sidemenu  page-header-fixed slimscroll-style" data-keep-expanded="false"
                        data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
                        <li class="sidebar-toggler-wrapper hide">
                            <div class="sidebar-toggler">
                                <span></span>
                            </div>
                        </li>
                        <li class="sidebar-user-panel">
                            <div class="sidebar-user">
                                <div class="sidebar-user-picture">
                                    <img alt="image" :src="getImageUrl(this.userPhoto)">
                                </div>
                                <div class="sidebar-user-details">
                                    <div class="user-name">{{ this.userNom }} {{ this.userPrenom }}</div>
                                    <div class="user-role">{{ this.userRole }}</div>
                                </div> 
                            </div>
                        </li>
                        <li class="nav-item start active open">
                           <!--  <a href="{{ route('admin_index') }}" class="nav-link nav-toggle"> -->
                            <a :href="'/dashboard'" class="nav-link nav-toggle">
                                <i data-feather="airplay"></i>
                                <span class="title">Tableau de Bord</span>
                                <span class="selected"></span>
                            </a>
                              
                               
                          <!--   </a> -->
                           
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle"> <i data-feather="user"></i>
                                <span class="title">Utilisateurs</span> <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                        <a :href="'/listeUser'" class="nav-link ">
                                        <span class="title">Liste Utilisateur</span>
                                        </a>
                                </li>
                               
                                <li class="nav-item">
                                    <a :href="'/createUser'" class="nav-link ">
                                        <span class="title">Nouvel Utilisateur</span>
                                    </a>
                                </li>
                               
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a :href="'/listeinscription'" class="nav-link nav-toggle">
                                <i data-feather="calendar"></i>
                                <span class="title">Inscription</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle"> <i data-feather="users"></i>
                                <span class="title">Paramétres</span><span class="arrow"></span> </a> 
                               
                            <ul class="sub-menu">
                                <li class="nav-item">
                                        <a :href="'/listedirection'" class="nav-link ">
                                            <span class="title">Direction</span>
                                        </a>
                                </li>
                                <li class="nav-item">
                                            <a :href="'/service'">
                                                <span class="title">Service</span>
                                            </a>
                                </li>

                                <li class="nav-item">
                                            <a :href="'/listedepartement'">
                                                <span class="title">Département</span>
                                            </a>
                                </li>
                                <li class="nav-item">
                                            <a :href="'/listeFiliere'">
                                                <span class="title">Filière</span>
                                            </a>
                                </li>
                                <li class="nav-item">
                                            <a :href="'/listeTypeFormation'">
                                                <span class="title">Type Formation</span>
                                            </a>
                                </li>
                                <li class="nav-item">
                                            <a :href="'/listeClasse'">
                                                <span class="title">Classe</span>
                                            </a>
                                </li>

                                <li class="nav-item">
                                            <a :href="'/listeBatiment'">
                                                <span class="title">Batiment</span>
                                            </a>
                                </li>
                                <li class="nav-item">
                                            <a :href="'/listeSalle'">
                                                <span class="title">Salle</span>
                                            </a>
                                </li>
                               
                            </ul>
                        </li>
                      
                        <li class="nav-item">
                            <a href="#" @click="handleLogout()" class="nav-link nav-toggle"> <i class="icon-logout"></i>
                                <span class="title">Déconnexion</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

  <!--   @if (Auth::user()->id_role == 7) -->
        <div class="sidebar-container" v-show="this.userIdrole && this.userIdrole==7">
            <div class="sidemenu-container navbar-collapse collapse fixed-menu">
                <div id="remove-scroll" class="left-sidemenu">
                    <ul class="sidemenu  page-header-fixed slimscroll-style" data-keep-expanded="false"
                        data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
                        <li class="sidebar-toggler-wrapper hide">
                            <div class="sidebar-toggler">
                                <span></span>
                            </div>
                        </li>
                        <li class="sidebar-user-panel">
                            <div class="sidebar-user">
                                <div class="sidebar-user-picture">
                                    <img alt="image" :src="getImageUrl(this.userPhoto)">
                                </div>
                               <div class="sidebar-user-details">
                                    <div class="user-name">{{ this.userNom }} {{ this.userPrenom }}</div>
                                    <div class="user-role">{{ this.userRole }}</div>
                                </div> 
                            </div>
                        </li>
                        <li class="nav-item start active open">
                            <a href="{{ route('admin_index') }}" class="nav-link nav-toggle">
                                <i data-feather="airplay"></i>
                                <span class="title">Tableau de Bord</span>
                                <span class="selected"></span>
                              
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item active">
                                    <a href="index.html" class="nav-link ">
                                        <span class="title">Dashboard</span>
                                        <span class="selected"></span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle"> <i data-feather="user"></i>
                                <span class="title">Livre</span> <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a href="{{ route('livre_index') }}" class="nav-link "> <span
                                            class="title">Liste Livre</span>
                                    </a>
                                </li>
                              
                                <li class="nav-item">
                                    <a href="{{ route('livre_create') }}" class="nav-link "> <span
                                            class="title">Nouveau livre</span>
                                    </a>
                                </li>

                            </ul>

                            <a href="#" class="nav-link nav-toggle"> <i data-feather="user"></i>
                                <span class="title">Livre Emprunter</span> <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a href="{{ route('emprunter_livre_index') }}" class="nav-link "> <span
                                            class="title">Liste des livres emprunter</span>
                                    </a>
                                </li>
                               
                                <li class="nav-item">
                                    <a href="{{ route('emprunter_livre_create') }}" class="nav-link "> <span
                                            class="title">Nouveau demande livre</span>
                                    </a>
                                </li>
                            </ul>

                        </li>

                      
                        <li class="nav-item">

                            <a href="/auteur/accueil" class="nav-link "> <span
                                    class="title">Auteur</span>
                            </a>
                        </li>


                            <a href="#" class="nav-link nav-toggle"><i data-feather="users"></i>
                                <span class="title">Paramétres</span><span class="arrow"></span></a>

                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a href="{{ route('rayon_accueil') }}" class="nav-link "> 
                                    <span class="title">Rayon</span>
                                    </a>
                                </li>
                               
                                <li class="nav-item">
                                    <a href="{{ route('categorie_accueil') }}" class="nav-link "> <span
                                            class="title">Categorie</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="/auteur/create" class="nav-link "> <span
                                            class="title">Auteur</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="/editeur/create" class="nav-link "> <span
                                            class="title">Editeur</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="/edition/create" class="nav-link "> <span
                                            class="title">Edition</span>
                                    </a>
                                </li>
                            </ul>
                    

                        <li class="nav-item">

                            <a href="#" @click="handleLogout()" class="nav-link nav-toggle"> <i class="icon-logout"></i>
                                <span class="title">Déconnexion</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   

    <!-- @if (Auth::user()->id_role == 4) -->
        <div class="sidebar-container" v-show="this.userIdrole && this.userIdrole==4">
          
            <div class="sidemenu-container navbar-collapse collapse fixed-menu">
                <div id="remove-scroll" class="left-sidemenu">
                    <ul class="sidemenu  page-header-fixed slimscroll-style" data-keep-expanded="false"
                        data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
                        <li class="sidebar-toggler-wrapper hide">
                            <div class="sidebar-toggler">
                                <span></span>
                            </div>
                        </li>
                        <li class="sidebar-user-panel">
                            <div class="sidebar-user">
                                <div class="sidebar-user-picture">
                                    <img alt="image" :src="getImageUrl(this.userPhoto)">
                                </div>
                              <div class="sidebar-user-details">
                                    <div class="user-name">{{ this.userNom }} {{ this.userPrenom }}</div>
                                    <div class="user-role">{{ this.userRole }}</div>
                                </div> 
                            </div>
                        </li>
                        <li class="nav-item start active open">
                            <a href="{{ route('caissier_accueil') }}" class="nav-link nav-toggle">
                                <i data-feather="airplay"></i>
                                <span class="title">Tableau de Bord</span>
                                <span class="selected"></span>
                               
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="{{ route('validation_inscription') }}" class="nav-link nav-toggle"> <i
                                    data-feather="user"></i>
                                <span class="title">Valider Inscription</span> 
                            </a>
                        </li>

                        <li>
                            <a href="{{ route('paiement_accueil') }}" class="nav-link nav-toggle"> <i
                                    data-feather="user"></i>
                                <span class="title">Paiement</span> 
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="{{ route('recouvrement_index') }}" class="nav-link nav-toggle"><i
                                    data-feather="users"></i>
                                <span class="title">Récouvrement</span>
                            </a>
                        </li>

                        <li class="nav-item">

                            <a href="#" @click="handleLogout()" class="nav-link nav-toggle"> <i class="icon-logout"></i>
                                <span class="title">Déconnexion</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    


   <!--  @if (Auth::user()->id_role == 12) -->
    <div class="sidebar-container" v-show="this.userIdrole && this.userIdrole==12">
      
        <div class="sidemenu-container navbar-collapse collapse fixed-menu">
            <div id="remove-scroll" class="left-sidemenu">
                <ul class="sidemenu  page-header-fixed slimscroll-style" data-keep-expanded="false"
                    data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
                    <li class="sidebar-toggler-wrapper hide">
                        <div class="sidebar-toggler">
                            <span></span>
                        </div>
                    </li>
                    <li class="sidebar-user-panel">
                        <div class="sidebar-user">
                            <div class="sidebar-user-picture">
                                <img alt="image" :src="getImageUrl(this.userPhoto)">
                            </div>
                           <div class="sidebar-user-details">
                                <div class="user-name">{{ this.userNom }} {{ this.userPrenom }}</div>
                                <div class="user-role">{{ this.userRole }}</div>
                            </div> 
                        </div>
                    </li>
                    <li class="nav-item start active open">
                        <a href="{{ route('caissier_accueil') }}" class="nav-link nav-toggle">
                            <i data-feather="airplay"></i>
                            <span class="title">Tableau de Bord</span>
                            <span class="selected"></span>
                          
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="{{ route('liste_inscription') }}" class="nav-link nav-toggle"> <i
                                data-feather="user"></i>
                            <span class="title"> Inscription</span> 
                        </a>
                    </li>

                    <li class="nav-item">

                        <a href="#" @click="handleLogout()" class="nav-link nav-toggle"> <i class="icon-logout"></i>
                            <span class="title">Déconnexion</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>
<script>
import { mapState, mapActions } from "vuex";
import axios from "@/axios";

export default {
  props: ['userNom', 'userPrenom', 'userIdrole', 'userPhoto', 'userRole'], // Déclarez une prop appelée 'userName'
  // ...
 /*  computed: {
    ...mapState(['isLoggedIn', ' userNom','userPrenom', 'userIdrole', 'userPhoto', 'userRole']),
  }, */
  methods: {
    ...mapActions(['login', 'logout']),
    getImageUrl(url) {
      return url ? `http://127.0.0.1:8000/storage/${url}` : '';
  },


    async handleLogout() {
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  try {
    // Envoyer une requête POST à l'API Laravel avec l'en-tête d'autorisation
    await axios.post("/logout", null, { headers });

    // Si la déconnexion est réussie, supprimez le token du localStorage
    //localStorage.removeItem('token');
    localStorage.clear();

    // Rediriger l'utilisateur vers la page de connexion
    this.$router.push('/login');
  } catch (error) {
    // Gérer les erreurs en affichant une alerte
    Swal.fire(
      "Erreur!",
      "Une erreur est survenue lors de la déconnexion",
      "error"
    );
  }
},

}
}
</script>