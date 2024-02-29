<template>
  <div class="page-wrapper">
    <div class="page-header navbar navbar-fixed-top">
      <div class="page-header-inner">
        <appheader
          :userPhoto="userPhoto"
          :userNom="userNom"
          :userPrenom="userPrenom"
        />
      </div>
    </div>
    <div class="page-container">
      <appnavbar
        :userNom="userNom"
        :userPrenom="userPrenom"
        :userPhoto="userPhoto"
        :userIdrole="userIdrole"
        :userRole="userRole"
      />

      <!-- start page content -->
      <div class="page-content-wrapper">
        <!-- start page content -->
        <div class="page-content" v-if="!this.editModal">
          <div class="page-bar">
            <div class="page-title-breadcrumb">
              <div class="pull-left">
                <div class="page-title">Liste utilisateur</div>
              </div>
              <ol class="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i class="fa fa-home"></i>&nbsp;<a
                    class="parent-item"
                    :href="'/admin/index'"
                    >Accueil</a
                  >&nbsp;<i class="fa fa-angle-right"></i>
                </li>
                <li>
                  <a class="parent-item" :href="'/utilisateur/index'"
                    >Utilisateurs</a
                  >&nbsp;<i class="fa fa-angle-right"></i>
                </li>
                <li class="active">Liste utilisateur</li>
              </ol>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tabbable-line">
                <!-- <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#tab1" data-bs-toggle="tab"> List View </a>
                                </li>
                                <li>
                                    <a href="#tab2" data-bs-toggle="tab"> Grid View </a>
                                </li>
                            </ul> -->
                <ul class="nav customtab nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a href="#tab1" class="nav-link active" data-bs-toggle="tab"
                      >Formateurs</a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="#tab2" class="nav-link" data-bs-toggle="tab"
                      >Personnel Administratif</a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="#tab3" class="nav-link" data-bs-toggle="tab"
                      >Personnel d'appui</a
                    >
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active fontawesome-demo" id="tab1">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="card card-box">
                          <div class="card-head">
                            <header>Tous les formateurs</header>
                            <div class="tools">
                              <a
                                class="fa fa-repeat btn-color box-refresh"
                                href="javascript:;"
                              ></a>
                              <a
                                class="t-collapse btn-color fa fa-chevron-down"
                                href="javascript:;"
                              ></a>
                              <a
                                class="t-close btn-color fa fa-times"
                                href="javascript:;"
                              ></a>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6 col-sm-6 col-6">
                                <div class="btn-group">
                                  <a
                                    :href="'/utilisateur/create'"
                                    id="addRow"
                                    class="btn btn-primary"
                                  >
                                    Ajouter
                                    <i class="fa fa-plus text-white"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <table
                              class="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                              id="example47"
                              style="width: 100%"
                            >
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Matricule</th>
                                  <th>Prénom</th>
                                  <th>Nom</th>
                                  <th>Email</th>
                                  <th>Téléphone</th>
                                  <th>Unité de formation</th>
                                  <th>Département</th>
                                  <th>Statut</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  class="odd gradeX"
                                  v-for="(
                                    utilisateur, index
                                  ) in utilisateurProf"
                                >
                                  <td class="patient-img">
                                    <img
                                      :src="getImageUrl(utilisateur.photo)"
                                      alt="Etu"
                                    />
                                  </td>
                                  <td>{{ utilisateur.matricule }}</td>
                                  <td class="left">{{ utilisateur.prenom }}</td>
                                  <td class="left">{{ utilisateur.nom }}</td>
                                  <td>
                                    <a :href="'mailto:' + utilisateur.email"
                                      >{{ utilisateur.email }}
                                    </a>
                                  </td>
                                  <td>
                                    <a :href="'tel:' + utilisateur.telephone">{{
                                      utilisateur.telephone
                                    }}</a>
                                  </td>
                                  <td class="left">
                                    {{ utilisateur.filiere }}
                                  </td>

                                  <td>{{ utilisateur.departement }}</td>

                                  <!--  <td class="text-center align-middle">
                                                            <span
                                                                :class="{ 'label label-sm label-success': utilisateur.status === '1', 'label label-sm label-danger': utilisateur.status === '0' }">
                                                                {{ utilisateur.status === '1' ? 'Actif' : 'Inactif' }}
                                                            </span>
                                                        </td> -->
                                  <td
                                    class="text-center align-middle"
                                    v-if="utilisateur.status === '1'"
                                  >
                                    <span class="label label-sm label-success">
                                      Actif
                                    </span>
                                  </td>
                                  <td
                                    class="text-center align-middle"
                                    v-if="utilisateur.status === '0'"
                                    @click="activUser(utilisateur)"
                                  >
                                    <a class="label label-sm label-danger">
                                      Inactif
                                    </a>
                                  </td>

                                  <td>
                                    <a
                                      class="tblEditBtn"
                                      @click="openModal(utilisateur)"
                                    >
                                      <i class="fa fa-pencil"></i>
                                    </a>
                                    <a
                                      class="tblDelBtn"
                                      @click="deleteUtilisateur(utilisateur)"
                                    >
                                      <i class="fa fa-trash-o"></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fontawesome-demo" id="tab2">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="card card-box">
                          <div class="card-head">
                            <header>Tout le personnel administratif</header>
                            <div class="tools">
                              <a
                                class="fa fa-repeat btn-color box-refresh"
                                href="javascript:;"
                              ></a>
                              <a
                                class="t-collapse btn-color fa fa-chevron-down"
                                href="javascript:;"
                              ></a>
                              <a
                                class="t-close btn-color fa fa-times"
                                href="javascript:;"
                              ></a>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-6 col-sm-6 col-6">
                                <div class="btn-group">
                                  <a
                                    :href="'/utilisateur/create'"
                                    id="addRow"
                                    class="btn btn-primary"
                                  >
                                    Ajouter
                                    <i class="fa fa-plus text-white"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <table
                              class="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                              id="exemple1"
                              style="width: 100%"
                            >
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Matricule</th>
                                  <th>Prénom</th>
                                  <th>Nom</th>
                                  <th>Email</th>
                                  <th>Téléphone</th>
                                  <th>Fonction</th>
                                  <th>Service</th>
                                  <th>Statut</th>

                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  class="odd gradeX"
                                  v-for="(utilisateur, index) in utilisateurs"
                                >
                                  <td class="patient-img">
                                    <img
                                      :src="getImageUrl(utilisateur.photo)"
                                      alt="Etu"
                                    />
                                  </td>
                                  <td>{{ utilisateur.matricule }}</td>
                                  <td class="left">{{ utilisateur.prenom }}</td>
                                  <td class="left">{{ utilisateur.nom }}</td>
                                  <td>
                                    <a :href="'mailto:' + utilisateur.email">{{
                                      utilisateur.email
                                    }}</a>
                                  </td>
                                  <td>
                                    <a :href="'tel:' + utilisateur.telephone">{{
                                      utilisateur.telephone
                                    }}</a>
                                  </td>
                                  <td class="left">
                                    {{ utilisateur.fonction }}
                                  </td>
                                  <td>{{ utilisateur.nom_service }}</td>
                                  <!-- <td class="text-center align-middle">
                                                            <span
                                                                :class="{ 'label label-sm label-success': utilisateur.status === '1', 'label label-sm label-danger': utilisateur.status === '0' }">
                                                                {{ utilisateur.status === '1' ? 'Actif' : 'Inactif' }}
                                                            </span>
                                                        </td> -->
                                  <td
                                    class="text-center align-middle"
                                    v-if="utilisateur.status === '1'"
                                  >
                                    <span class="label label-sm label-success">
                                      Actif
                                    </span>
                                  </td>
                                  <td
                                    class="text-center align-middle"
                                    v-if="utilisateur.status === '0'"
                                    @click="activUser(utilisateur)"
                                  >
                                    <a class="label label-sm label-danger">
                                      Inactif
                                    </a>
                                  </td>

                                  <td>
                                    <a
                                      class="tblEditBtn"
                                      @click="openModal(utilisateur)"
                                    >
                                      <i class="fa fa-pencil"></i>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      class="tblDelBtn"
                                      @click="deleteUtilisateur(utilisateur)"
                                    >
                                      <i class="fa fa-trash-o"></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane" id="tab3">
                    <div class="row">
                      <div
                        class="col-md-4"
                        v-for="(utilisateur, index) in utilisateursPer"
                        :key="index"
                      >
                        <div>
                          <div class="card card-box">
                            <div class="card-body no-padding">
                              <div class="doctor-profile">
                                <img
                                  :src="getImageUrl(utilisateur.photo)"
                                  class="doctor-pic"
                                  alt=""
                                />
                                <div class="profile-usertitle">
                                  <div class="doctor-name">
                                    {{ utilisateur.prenom }}
                                    {{ utilisateur.nom }}
                                  </div>
                                  <div class="name-center">
                                    {{ utilisateur.role.intitule }}
                                  </div>
                                  <p>
                                    <i class="fa fa-phone"></i>
                                    <a :href="utilisateur.telephone">{{
                                      utilisateur.telephone
                                    }}</a>
                                  </p>
                                </div>
                                <div class="profile-userbuttons">
                                  <a
                                    class="btn btn-circle deepPink-bgcolor btn-sm"
                                    >{{ utilisateur.matricule }}</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-content-wrapper" v-show="editModal">
        <div class="page-content">
          <div class="page-bar">
            <div class="page-title-breadcrumb">
              <div class="pull-left">
                <div class="page-title">Nouvel Utilisateur</div>
              </div>
              <ol class="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i class="fa fa-home"></i>&nbsp;<a
                    class="parent-item"
                    href="{{ route('admin_index') }}"
                    >Tableau de Bord</a
                  >&nbsp;<i class="fa fa-angle-right"></i>
                </li>
                <li>
                  <a
                    class="parent-item"
                    href="{{ route('utilisateur_create') }}"
                    >Utilisateur</a
                  >&nbsp;<i class="fa fa-angle-right"></i>
                </li>
                <li class="active">Modifier Utilisateur</li>
              </ol>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card-box">
                <div class="card-head">
                  <header>Information</header>
                  <button
                    id="panel-button"
                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                    data-upgraded=",MaterialButton"
                  >
                    <i class="material-icons">more_vert</i>
                  </button>
                  <ul
                    class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                    data-mdl-for="panel-button"
                  >
                    <li class="mdl-menu__item">
                      <i class="material-icons">assistant_photo</i>Action
                    </li>
                    <li class="mdl-menu__item">
                      <i class="material-icons">print</i>Another action
                    </li>
                    <li class="mdl-menu__item">
                      <i class="material-icons">favorite</i>Something else here
                    </li>
                  </ul>
                </div>
                <div class="card-body row">
                  <FormulaireModification />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <appafterContent />
    </div>
    <appfooter />
  </div>
</template>

<script>
import bus from "../../eventBus";
import axios from "@/axios";
import Form from "vform";
import datatable from "datatables.net-bs5";
import FormulaireModification from "./utilisateurComponent.vue";
import appheader from "../layout/header.vue";
import appfooter from "../layout/footer.vue";
import appnavbar from "../layout/navbar.vue";
import appafterContent from "../layout/afterContent.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "listeUserCompenent",
  components: {
    FormulaireModification,
    appnavbar,
    appfooter,
    appheader,
    appafterContent,
  },
  data() {
    return {
      form: new Form({
        nom: "",
        prenom: "",
        genre: "",
        adresse: "",
        telephone: "",
        email: "",
        date_naissance: "",
        lieu_naissance: "",
        nationalite: "",
        id_role: "",
        id_specialite: "",
        id_departement: "",
        id_service: "",
        type: "",
        situation_matrimoniale: "",
      }),
      utilisateurs: null,
      utilisateurProf: null,
      utilisateursPer: [],
      idUser: "",
      editModal: false,

      activePhase: 1,
      idUser: "",
      userEnCoursDeModification: null,
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
    this.get_utilisateur();
    bus.on("utilisateurAjoutee", () => {
      // Écouter l'événement de nouvelle utilisateur ajoutée
      this.get_utilisateur(); // Mettre à jour la liste des utilisateurs
    });

    bus.on("userDejaModifier", (eventData) => {
      this.editModal = eventData.editModal;
      this.get_utilisateur();
    });
  },

  methods: {
    ...mapActions(["login", "logout"]),
    initDataTable() {
      this.$nextTick(() => {
        // Initialiser DataTable sur la table avec l'id 'exemple1' si elle n'a pas déjà été initialisée
        if (!$.fn.DataTable.isDataTable("#exemple1")) {
          $("#exemple1").DataTable({
            responsive: true,
            autoWidth: true,
            // ... (autres options)
            language: {
              // Messages pour la pagination
              paginate: {
                first: "Premier",
                previous: "Précédent",
                next: "Suivant",
                last: "Dernier",
              },
              // Message d'affichage du nombre d'éléments par page
              lengthMenu: "Afficher _MENU_ entrées",
              // Message d'information sur le nombre total d'entrées et le nombre affiché actuellement
              info: "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
              // Message lorsque le tableau est vide
              emptyTable: "Aucune donnée disponible dans le tableau",
              // Message indiquant que la recherche est en cours
              loadingRecords: "Chargement en cours...",
              // Message indiquant que la recherche n'a pas renvoyé de résultats
              zeroRecords: "Aucun enregistrement correspondant trouvé",
              // Message indiquant le nombre total d'entrées
              infoEmpty: "Affichage de 0 à 0 sur 0 entrées",
              // Message indiquant que la recherche est en cours dans le champ de recherche
              search: "Recherche :",
            },
          });
        }

        // Initialiser DataTable sur la table avec l'id 'example47' si elle n'a pas déjà été initialisée
        if (!$.fn.DataTable.isDataTable("#example47")) {
          $("#example47").DataTable({
            responsive: true,
            autoWidth: true,
            // ... (autres options)
            language: {
              // Messages pour la pagination
              paginate: {
                first: "Premier",
                previous: "Précédent",
                next: "Suivant",
                last: "Dernier",
              },
              // Message d'affichage du nombre d'éléments par page
              lengthMenu: "Afficher _MENU_ entrées",
              // Message d'information sur le nombre total d'entrées et le nombre affiché actuellement
              info: "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
              // Message lorsque le tableau est vide
              emptyTable: "Aucune donnée disponible dans le tableau",
              // Message indiquant que la recherche est en cours
              loadingRecords: "Chargement en cours...",
              // Message indiquant que la recherche n'a pas renvoyé de résultats
              zeroRecords: "Aucun enregistrement correspondant trouvé",
              // Message indiquant le nombre total d'entrées
              infoEmpty: "Affichage de 0 à 0 sur 0 entrées",
              // Message indiquant que la recherche est en cours dans le champ de recherche
              search: "Recherche :",
            },
          });
        }
      });
    },

    async get_utilisateur() {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      await axios
        .get("/user/getPersonnel", { headers })
        .then((response) => {
          this.utilisateursPer = response.data.user.filter((utilisateur) => {
            return (
              utilisateur.role.categorie_personnel === "Personnel d'appui" ||
              utilisateur.role.categorie_personnel === "Personnel Appui"
            );
          });
          /*      console.log("this.utilisateursPer ")
                         console.log(this.utilisateursPer) */
          const allUtilisateurs = response.data.user;

          // Filtrer les utilisateurs en fonction de la catégorie du personnel
          const filteredUtilisateurs = allUtilisateurs.filter((utilisateur) => {
            return (
              utilisateur.role.categorie_personnel === "Personnel Administratif"
            );
          });

          // Filtrer les utilisateurs en fonction de la catégorie du personnel
          const filteredProf = allUtilisateurs.filter((utilisateur) => {
            return utilisateur.role.id === 2;
          });

          // Formater les utilisateurs pour DataTables
          const formattedUtilisateurs = filteredUtilisateurs.map(
            (utilisateur) => {
              return {
                photo: utilisateur.photo,
                adresse: utilisateur.adresse,
                date_naissance: utilisateur.date_naissance,
                lieu_naissance: utilisateur.lieu_naissance,
                id: utilisateur.id,
                type: utilisateur.type,
                genre: utilisateur.genre,
                id_role: utilisateur.id_role,
                nationalite: utilisateur.nationalite,
                situation_matrimonial: utilisateur.situation_matrimonial,
                matricule: utilisateur.matricule,
                prenom: utilisateur.prenom,
                nom: utilisateur.nom,
                status: utilisateur.status,
                email: utilisateur.email,
                telephone: utilisateur.telephone,
                editModal: true,
                fonction: utilisateur.role.intitule,
                nom_service: utilisateur.personnel_admin_appui
                  .map((ele) => ele.service.nom_service)
                  .join(", "),
                id_service: utilisateur.personnel_admin_appui
                  .map((ele) => ele.service.id)
                  .join(", "),
              };
            }
          );
          const formattedFormateur = filteredProf.map((utilisateur) => {
            return {
              photo: utilisateur.photo,
              adresse: utilisateur.adresse,
              date_naissance: utilisateur.date_naissance,
              lieu_naissance: utilisateur.lieu_naissance,
              id: utilisateur.id,

              genre: utilisateur.genre,
              id_role: utilisateur.id_role,
              nationalite: utilisateur.nationalite,
              matricule: utilisateur.matricule,
              prenom: utilisateur.prenom,
              nom: utilisateur.nom,
              status: utilisateur.status,
              email: utilisateur.email,
              telephone: utilisateur.telephone,
              editModal: true,
              fonction: utilisateur.role.intitule,

              situation_matrimoniale: utilisateur.formateur
                .map((ele) => ele.situation_matrimoniale)
                .join(", "),
              type: utilisateur.formateur.map((ele) => ele.type).join(", "),
              specialite: utilisateur.formateur
                .map((ele) => ele.specialite.id)
                .join(", "),
              type_formateur: utilisateur.formateur
                .map((ele) => ele.type_formateur)
                .join(", "),

              filiere: utilisateur.formateur
                .map((ele) => ele.unite_de_formation.nom_unite_formation)
                .join(", "),
              id_filiere: utilisateur.formateur
                .map((ele) => ele.unite_de_formation.id)
                .join(", "),
              id_departement: utilisateur.formateur
                .map((eles) => eles.unite_de_formation.departement.id)
                .join(", "),
              departement: utilisateur.formateur
                .map(
                  (eles) => eles.unite_de_formation.departement.nom_departement
                )
                .join(", "),
            };
          });

          // Mettez à jour la liste des utilisateurs au format de tableau de dictionnaires
          this.utilisateurs = formattedUtilisateurs;
          this.utilisateurProf = formattedFormateur;
          /*  console.log(this.utilisateurProf) */

          this.initDataTable();
        })
        .catch((error) => {
          Swal.fire(
            "Erreur!",
            "Une erreur est survenue lors de la recupération des utilisateurs",
            "error"
          );
        });
    },
    async toggleUserStatus(user) {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const response = await axios.put(`/user/toggle-status/${user.id}`, {
          headers,
        });

        if (response.data.status === 200) {
          // Succès, mettez à jour la liste des utilisateurs ou affichez un message
          this.get_utilisateur();
          console.log(response.data.message);
        } else {
          // Échec, affichez un message d'erreur
          console.error(response.data.message);
        }
      } catch (error) {
        // Gestion des erreurs
        console.error(error);
      }
    },

    changement(event) {
      this.interesser = event;
    },

    goToStep: function (step) {
      this.activePhase = step;
    },

    async activUser(user) {
      Swal.fire({
        title: "Êtes-vous sûr de vouloir réactiver cet utilisateur?",
        text: "Cette action sera irréversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui",
        cancelButtonText: "Non",
      }).then((result) => {
        //console.log(result.value);
        if (result.value) {
          const token = localStorage.getItem("token");
          const headers = { Authorization: `Bearer ${token}` };
          axios
            .delete(`/user/delete/${user.id}`, { headers })
            .then((resp) => {
              showDialog6("Utilisateur réactiver avec succès");
              this.get_utilisateur();
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },

    async deleteUtilisateur(user) {
      if (user.status === "1") {
        const confirmation = Swal.fire({
          title: "Êtes-vous sûr de vouloir désactiver cet utilisateur?",
          text: "Cette action sera irréversible!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui",
          cancelButtonText: "Non",
        }).then((result) => {
          if (result.value) {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            try {
              axios.delete(`/user/delete/${user.id}`, { headers });
              showDialog6("Utilisateur désactivé avec succès");
              this.get_utilisateur();
            } catch (error) {
              showDialog3(
                "Une erreur est survenue lors de la suppression de l'utilisateur"
              );
              console.error(
                "Erreur lors de la suppression de l'utilisateur :",
                error
              );
            }
          }
        });
      } else {
        showDialog3("Cet utilisateur est déjà inactif");
      }
    },

    openModal(utilisateur) {
      this.editModal = true;
      const eventData = {
        utilisateur: utilisateur,
      };
      bus.emit("userModifier", eventData);
      console.log("etatModal set to true:", this.etatModal);
    },

    getImageUrl(url) {
      //return url ? `${window.location.origin}/storage/${url}` : '';
      return url ? `http://127.0.0.1:8000/storage/${url}` : "";
    },
  },
};
</script>
