<template>
  <div class="page-wrapper">
    <div class="page-header navbar navbar-fixed-top">
      <div class="page-header-inner">
        <appheader
          :userNom="userNom"
          :userPrenom="userPrenom"
          :userPhoto="userPhoto"
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
                <div class="page-title">Inscription</div>
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
                  <a class="parent-item" :href="'/caissier/inscription'">
                    Valider Inscription</a
                  >&nbsp;<i class="fa fa-angle-right"></i>
                </li>
                <!--  <li class="active">Valider Inscription</li> -->
              </ol>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tabbable-line">
                <ul class="nav customtab nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a href="#tab1" class="nav-link active" data-bs-toggle="tab"
                      >Inscription En Cours</a
                    >
                  </li>
                  <li class="nav-item">
                    <a href="#tab2" class="nav-link" data-bs-toggle="tab"
                      >Inscription Validée</a
                    >
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active fontawesome-demo" id="tab1">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="card card-box">
                          <div class="card-head">
                            <header>Inscription En Cours</header>
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
                                    :href="'/valider/paiement/inscription'"
                                    id="addRow"
                                    class="btn btn-primary"
                                  >
                                    Valider
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
                                  <th>id</th>
                                  <th>Photo</th>
                                  <th>Matricule</th>
                                  <th>Nom</th>
                                  <th>Prénom</th>
                                  <th>Date et Lieu de Naissance</th>
                                  <th>Classe</th>
                                  <th>Année Académique</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  class="odd gradeX"
                                  v-for="(inscription, index) in inscriptionInv"
                                  :key="index"
                                >
                                  <td>
                                    <a
                                      :href="'/valider/paiement/inscription'"
                                      id="addRow"
                                    >
                                      {{ inscription.id }}
                                    </a>
                                  </td>
                                  <td class="patient-img">
                                    <img
                                      :src="getImageUrl(inscription.photo)"
                                      alt="Etu"
                                    />
                                  </td>
                                  <td>{{ inscription.matricule }}</td>
                                  <td class="left">{{ inscription.nom }}</td>
                                  <td class="left">{{ inscription.prenom }}</td>
                                  <td class="left">
                                    {{ inscription.date }}
                                    {{ inscription.lieu_naissance_eleve }}
                                  </td>
                                  <td class="left">{{ inscription.classe }}</td>
                                  <td class="left">
                                    {{ inscription.annee_academique }}
                                  </td>

                                  <!--  <td class="text-center align-middle">
                                                            <span
                                                                :class="{ 'label label-sm label-success': utilisateur.status === '1', 'label label-sm label-danger': utilisateur.status === '0' }">
                                                                {{ utilisateur.status === '1' ? 'Actif' : 'Inactif' }}
                                                            </span>
                                                        </td> -->

                                  <td>
                                    <a
                                      class="tblEditBtn"
                                      @click="openModal(inscription)"
                                    >
                                      <i class="fa fa-pencil"></i>
                                    </a>
                                    <!-- <a class="tblDelBtn" @click="deleteInscription(inscription)">
                                                                <i class="fa fa-trash-o"></i>
                                                            </a> -->
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
                            <header>Inscription Validée</header>
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
                            <!-- <div class="row">
                                                <div class="col-md-6 col-sm-6 col-6">
                                                    <div class="btn-group">
                                                        <a :href="'/eleve/inscription'" id="addRow" class="btn btn-primary">
                                                            Ajouter <i class="fa fa-plus text-white"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>  -->
                            <table
                              class="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                              id="exemple1"
                              style="width: 100%"
                            >
                              <thead>
                                <tr>
                                  <th>Photo</th>
                                  <th>Matricule</th>
                                  <th>Nom</th>
                                  <th>Prénom</th>
                                  <th>Date et Lieu de Naissance</th>
                                  <th>Classe</th>
                                  <th>Année Académique</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  class="odd gradeX"
                                  v-for="(inscription, index) in inscriptionVal"
                                >
                                  <td class="patient-img">
                                    <img
                                      :src="getImageUrl(inscription.photo)"
                                      alt="Etu"
                                    />
                                  </td>
                                  <td>{{ inscription.matricule }}</td>
                                  <td class="left">{{ inscription.nom }}</td>
                                  <td class="left">{{ inscription.prenom }}</td>
                                  <td class="left">
                                    {{ inscription.date }}
                                    {{ inscription.lieu_naissance_eleve }}
                                  </td>
                                  <td class="left">{{ inscription.classe }}</td>
                                  <td class="left">
                                    {{ inscription.annee_academique }}
                                  </td>

                                  <td>
                                    <a
                                      class="tblEditBtn"
                                      @click="openModal(inscription)"
                                    >
                                      <i class="fa fa-pencil"></i>
                                    </a>
                                    <!--  <a href="javascript:void(0)" class="tblDelBtn"
                                                                @click="deleteInscription(inscription)">
                                                                <i class="fa fa-trash-o"></i>
                                                            </a> -->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
                <div class="page-title">Valider Inscription</div>
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
                    href="{{ route('valider/paiement/inscription') }}"
                    >Inscrire eleve</a
                  >&nbsp;<i class="fa fa-angle-right"></i>
                </li>
                <li class="active">Modifier Inscription</li>
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
import FormulaireModification from "./validerInscriptionComponent.vue";
import { mapState, mapActions } from "vuex";
import appheader from "../layout/header.vue";
import appfooter from "../layout/footer.vue";
import appnavbar from "../layout/navbar.vue";
import appafterContent from "../layout/afterContent.vue";

export default {
  components: {
    appnavbar,
    appfooter,
    appheader,
    appafterContent,
    FormulaireModification,
  },
  name: "listeUserCompenent",

  data() {
    return {
      form: new Form({
        id_eleve: "",
        id_classe: "",
        statut: "",
        montant: "",
        id_annee_academique: "",
        id_user: "",
      }),
      inscriptions: [],
      inscriptions: [],
      classes: [],

      annee_academiques: [],
      search_query: "",
      selectedEleve: {
        id: "",
        prenom: "",
        nom: "",
        classe: "",
        id_classe: "",
      },
      eleve_classe: "",
      id_eleve_erreur: "",
      id_annee_accademique_erreur: "",

      montant_erreur: "",
      id_eleve_erreur: "",
      id_classe_erreur: "",
      etatForm: false,
      searchidInscription: true,

      inscriptions: [],
      inscriptionInv: [],
      inscriptionVal: [],
      editModal: false,
      idInscription: "",
      eleveId: [],
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
    this.get_inscription_valider();
    bus.on("inscriptionAjoutee", () => {
      // Écouter l'événement de nouvelle utilisateur ajoutée
      this.get_inscription_valider(); // Mettre à jour la liste des utilisateurs
    });
    bus.on("inscriptionDejaModifier", (eventData) => {
      this.editModal = eventData.editModal;
      this.get_inscription_valider();
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

    async get_inscription_valider() {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      await axios
        .get("/inscription/all", { headers })
        .then((response) => {
          this.inscriptions = response.data.inscription;

          const allInscriptions = response.data.inscription;

          const inscriptionInv = allInscriptions.filter((inscription) => {
            if (inscription.statut == 0 && inscription.montant == null)
              return [inscription.statut, inscription.montant];
          });

          const inscriptionVal = allInscriptions.filter((inscription) => {
            if (inscription.statut == 1) return inscription.statut;
            else if (inscription.montant !== null) return inscription.montant;
          });

          const formattedInscriptionVal = inscriptionVal.map((inscrit) => {
            return {
              id: inscrit.id,
              photo: inscrit.eleve.user.photo,
              matricule: inscrit.eleve.user.matricule,
              nom: inscrit.eleve.user.nom,
              genre_eleve: inscrit.eleve.user.genre,
              prenom: inscrit.eleve.user.prenom,
              adresse_eleve: inscrit.eleve.user.adresse,
              telephone_eleve: inscrit.eleve.user.telephone,
              mail_eleve: inscrit.eleve.user.email,
              date: inscrit.eleve.user.date_naissance,
              lieu_naissance_eleve: inscrit.eleve.user.lieu_naissance,
              id_eleve: inscrit.eleve.id,
              nationalite_eleve: inscrit.eleve.user.nationalite,
              classe:
                inscrit.classe.type_formation.intitule +
                " " +
                inscrit.classe.nom_classe +
                " " +
                inscrit.classe.niveau +
                " " +
                inscrit.classe.type_classe,
              annee_academique: inscrit.annee_academique.intitule,
              contact1: inscrit.eleve.contact_urgence1,
              contact2: inscrit.eleve.contact_urgence2,
              editModal: true,
              statut: inscrit.statut,
              id_tuteur: inscrit.eleve.tuteur.id,
              nom_tuteur: inscrit.eleve.tuteur.user.nom,

              genre_tuteur: inscrit.eleve.tuteur.user.genre,
              prenom_tuteur: inscrit.eleve.tuteur.user.prenom,
              adresse_tuteur: inscrit.eleve.tuteur.user.adresse,
              telephone_tuteur: inscrit.eleve.tuteur.user.telephone,
              mail_tuteur: inscrit.eleve.tuteur.user.email,
              date: inscrit.eleve.tuteur.user.date_naissance,
              lieu_naissance_tuteur: inscrit.eleve.tuteur.user.lieu_naissance,

              nationalite_tuteur: inscrit.eleve.tuteur.user.nationalite,

              id_classe: inscrit.classe.id,
              id_departement: inscrit.classe.unite_de_formation.departement.id,
              id_filiere: inscrit.classe.unite_de_formation.id,
              id_annee_academique: inscrit.annee_academique.id,
              montant: inscrit.montant,

              nom_departement:
                inscrit.classe.unite_de_formation.departement.nom_departement,
              nom_filiere:
                inscrit.classe.unite_de_formation.nom_unite_formation,
              annee_academique: inscrit.annee_academique.intitule,
            };
          });
          const formattedInscriptionInv = inscriptionInv.map((inscrit) => {
            return {
              id: inscrit.id,
              photo: inscrit.eleve.user.photo,
              matricule: inscrit.eleve.user.matricule,
              nom: inscrit.eleve.user.nom,
              genre_eleve: inscrit.eleve.user.genre,
              prenom: inscrit.eleve.user.prenom,
              adresse_eleve: inscrit.eleve.user.adresse,
              telephone_eleve: inscrit.eleve.user.telephone,
              mail_eleve: inscrit.eleve.user.email,
              date: inscrit.eleve.user.date_naissance,
              lieu_naissance_eleve: inscrit.eleve.user.lieu_naissance,
              id_eleve: inscrit.eleve.id,
              nationalite_eleve: inscrit.eleve.user.nationalite,
              classe:
                inscrit.classe.type_formation.intitule +
                " " +
                inscrit.classe.nom_classe +
                " " +
                inscrit.classe.niveau +
                " " +
                inscrit.classe.type_classe,
              annee_academique: inscrit.annee_academique.intitule,
              contact1: inscrit.eleve.contact_urgence1,
              contact2: inscrit.eleve.contact_urgence2,
              editModal: true,
              statut: inscrit.statut,
              id_tuteur: inscrit.eleve.tuteur.id,
              nom_tuteur: inscrit.eleve.tuteur.user.nom,

              genre_tuteur: inscrit.eleve.tuteur.user.genre,
              prenom_tuteur: inscrit.eleve.tuteur.user.prenom,
              adresse_tuteur: inscrit.eleve.tuteur.user.adresse,
              telephone_tuteur: inscrit.eleve.tuteur.user.telephone,
              mail_tuteur: inscrit.eleve.tuteur.user.email,
              date: inscrit.eleve.tuteur.user.date_naissance,
              lieu_naissance_tuteur: inscrit.eleve.tuteur.user.lieu_naissance,

              nationalite_tuteur: inscrit.eleve.tuteur.user.nationalite,

              id_classe: inscrit.classe.id,
              id_departement: inscrit.classe.unite_de_formation.departement.id,
              id_filiere: inscrit.classe.unite_de_formation.id,
              id_annee_academique: inscrit.annee_academique.id,

              nom_departement:
                inscrit.classe.unite_de_formation.departement.nom_departement,
              nom_filiere:
                inscrit.classe.unite_de_formation.nom_unite_formation,
              annee_academique: inscrit.annee_academique.intitule,
            };
          });
          console.log(formattedInscriptionInv);
          this.inscriptionVal = formattedInscriptionVal;

          this.inscriptionInv = formattedInscriptionInv;

          this.initDataTable();
        })
        .catch((error) => {
          Swal.fire(
            "Erreur!",
            "Une erreur est survenue lors de la recuperation des inscrits",
            "error"
          );
          console.log(error);
        });
    },

    changement(event) {
      this.interesser = event;
    },

    resetForm() {
      this.form.input = "";
      this.form.id_annee_academique = "";
      this.form.montant = "";
    },

    async deleteInscription(type) {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      Swal.fire({
        title: "Voulez-vous confirmer la suppression?",
        text: "Cette action sera irréversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui",
        cancelButtonText: "Non",
      }).then((result) => {
        if (result.value) {
          axios
            .delete(`/inscription/delete/${type.id}`, { headers })
            .then((resp) => {
              this.get_inscription_valider();

              showModal3("Inscription supprimée avec succés");
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
    openModal(inscription) {
      this.editModal = true;
      this.get_id_eleve_by_inscrit(inscription.id)
        .then((eleveId) => {
          // Maintenant que la promesse est résolue, vous avez accès à la valeur de eleveId
          // Vérifiez que la valeur est correcte
          console.log(eleveId); // Vérifiez que la valeur est correcte
          const eventData = {
            inscription: inscription,
            eleve: eleveId,
            editModal: true,
          };
          console.log("eventData");
          console.log(eventData);
          bus.emit("inscriptionModifier", eventData);
          // Vous pouvez utiliser eleveId ici ou le passer à d'autres fonctions
        })
        .catch((error) => {
          // Gérez les erreurs ici
          Swal.fire("Erreur!", "une erreur est survenue ", "error");
          console.log(error);
        });
    },

    getImageUrl(url) {
      //return url ? `${window.location.origin}/storage/${url}` : '';
      return url ? `http://127.0.0.1:8000/storage/${url}` : "";
    },

    async get_id_eleve_by_inscrit(id) {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      // Retourne la promesse pour pouvoir la chaîner
      return await axios
        .get("/inscription/get_id_eleve_by_inscription/" + id, {}, { headers })
        .then((response) => {
          console.log(response.data.eleve);
          return response.data.eleve;
        });
    },
  },
};
</script>
