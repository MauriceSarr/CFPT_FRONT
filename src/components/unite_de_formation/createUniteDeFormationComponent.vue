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
            <div class="page-content-wrapper" id="app">
                <div class="page-content">
                    <div class="page-bar">
                        <div class="page-title-breadcrumb">
                            <div class=" pull-left">
                                <div class="page-title">Nouveau Filiere</div>
                            </div>
                            <ol class="breadcrumb page-breadcrumb pull-right">
                                <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
                                        href="{{ route('admin_index') }}">Tableau de Bord</a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>
                                <li class="active">Paramétres &nbsp;<a class="parent-item"></a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                        </li>
                                <li><a class="parent-item" :href="'/unite_de_formation/index'">Filière</a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>

                            </ol>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card-box">
                                <div class="card-head">
                                    <header>Information</header>
                                    <button id="panel-button" class="mdl-button mdl-js-button mdl-button--icon pull-right"
                                        data-upgraded=",MaterialButton">
                                        <i class="material-icons">more_vert</i>
                                    </button>
                                    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                        data-mdl-for="panel-button">
                                        <li class="mdl-menu__item"><i class="material-icons">assistant_photo</i>Action
                                        </li>
                                        <li class="mdl-menu__item"><i class="material-icons">print</i>Another action
                                        </li>
                                        <li class="mdl-menu__item"><i class="material-icons">favorite</i>Something else
                                            here</li>
                                    </ul>
                                </div>
                                <div class="card-body row">
                                    <div class="col-lg-6 p-t-20">
                                        <div
                                            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label class="mdl-textfield__label" for="txtFirstName"
                                                v-show="!form.nom_unite_formation">Nom Filière</label>
                                            <input class="mdl-textfield__input" type="text" id="txtFirstName"
                                                v-model="form.nom_unite_formation"
                                                @input="validatedata('nom_unite_de_formation')">
                                            <span class="erreur">{{ this.nom_unite_erreur }}</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 p-t-20 mt-1">
                                        <div
                                            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">

                                            <label class="mdl-textfield__label" for="departementSelect"
                                                v-show="!form.id_departement"> Choisissez le
                                                Departement
                                            </label>
                                            <select class="mdl-textfield__input" id="departementSelect" readonly
                                                tabIndex="-1" v-model="form.id_departement"
                                                @change="validatedata('departement')">

                                                <option v-for="(departement, index) in departements" :value="departement.id"
                                                    :key="index">{{
                                                        departement.nom_departement }}</option>
                                            </select>
                                            <span class="erreur">{{ id_departement_erreur }}</span>
                                        </div>
                                    </div>





                                    <div class="col-lg-6 p-t-20">
                                        <div
                                            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <label for="list6" class="mdl-textfield__label"
                                                v-show="!form.id_user">Choisissez le chef de Filière</label>
                                            <select class="mdl-textfield__input" id="list6" readonly tabIndex="-1"
                                                v-model="form.id_user" @change="validatedata('user')">
                                                <option v-for="(user, index) in users" :value="user.id" :key="index">{{
                                                    user.prenom }} {{ user.nom }}
                                                </option>
                                            </select>
                                            <span class="erreur">{{ id_user_erreur }}</span>
                                        </div>
                                    </div>




                                    <div class="col-lg-12 p-t-20 text-center">

                                        <button type="submit" v-if="!this.editModal"
                                            class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn-primary"
                                            @click.prevent="validerAvantAjout()">Enregistrer</button>
                                        <button type="submit" v-if="this.editModal"
                                            class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn-primary"
                                            @click.prevent="validerAvantAjout()">Modifier</button>
                                        <button type="button"
                                            class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn-danger"
                                            @click="resetForm">Annuler</button>
                                    </div>

                                    <div class="card card-box mt-4">
                                        <div class="card-head">
                                            <header>Liste des derniers service</header>
                                            <div class="tools">
                                                <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                                                <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                                                <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                                            </div>
                                        </div>
                                        <div class="card-body ">
                                            <table
                                                class="table table-striped table-bordered table-hover table-checkable order-column valign-middle">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th> Filière </th>
                                                        <th> Chef de filière </th>
                                                        <th> Département </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="odd gradeX"
                                                        v-for="(unite_de_formation, index) in unite_de_formations"
                                                        :key="index">
                                                        <td> {{ index + 1 }} </td>
                                                        <td> {{ unite_de_formation.nom_unite_formation }} </td>
                                                        <td
                                                            v-show="unite_de_formation.user.prenom != '' && unite_de_formation.user.nom">
                                                            {{ unite_de_formation.user.prenom }} {{
                                                                unite_de_formation.user.nom }}</td>
                                                        <td> {{ unite_de_formation.departement.nom_departement }}</td>
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
            <appafterContent />
        </div>

    

    <appfooter />

</div></template>


<script>
import bus from '../../eventBus';
import axios from '@/axios';
import Form from 'vform';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import appheader from "../layout/header.vue";
import appfooter from "../layout/footer.vue";
import appnavbar from "../layout/navbar.vue";
import appafterContent from "../layout/afterContent.vue";
import { mapState, mapActions } from "vuex";

export default {
    name: "createUniteDeFormationCompenent",
    components: {
        flatPickr,
        appnavbar,
        appfooter,
        appheader,
        appafterContent,
    },
    data() {
        return {
            filieres: [],
            unite_de_formations: [],
            form: new Form({
                'nom_unite_formation': "",
                'id_departement': "",
                'id_user': ""
            }),

            departements: [],
            users: [],
            nom_unite_erreur: "",
            id_departement_erreur: "",
            id_user_erreur: "",
            etatForm: false,
            editModal: false,
            idFormation: "",


        }
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
        this.get_departement();
        this.get_filiere();
        this.get_user();
        bus.on('formationModifier', (eventData) => {
            this.editModal = eventData.editModal;
            this.monterToupdate(eventData.filiere);
        });

    },

    methods: {
        ...mapActions(["login", "logout"]),
        async soumettre() {
            const formdata = new FormData();
            formdata.append('nom_unite_formation', this.form.nom_unite_formation);
            formdata.append('id_departement', this.form.id_departement);
            formdata.append('id_user', this.form.id_user);

            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };

            //if(this.form.nom!==""){
            try {
                await axios.post('/unite_de_formation/store', formdata, {headers});
                showDialog6("Filière ajoutée avec succès");
                bus.emit('unite_formationAjoutee');
                this.resetForm();
                setTimeout(() => {
                    window.location.href = '/unite_de_formation/index';
                }, 1500);

            }
            catch (e) {
                /* console.log(e.request.status) */
                if (e.request.status === 404) {
                    // Swal.fire('Erreur !', 'Cette unité existe déjà', 'error')
                    showDialog3("Cette filière existe déjà");
                }
                else {
                    //Swal.fire('Erreur !', 'Une erreur est survenue lors de l\'enregistrement', 'error')
                    showDialog3("Une erreur est survenue lors de l\'enregistrement");
                }

            }
        },

        async get_departement() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };

            await axios.get('/departement/all', {headers})
                .then(response => {
                    this.departements = response.data.departement
                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation des departements', 'error')
                });
        },

        async get_filiere() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };

            await axios.get('/unite_de_formation/get/last', {headers})
                .then(response => {
                    this.unite_de_formations = response.data.filiere
                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation des dernière filières', 'error')
                });
        },

        async get_user() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };

            await axios.get('/user_formateur/index', {headers})
                .then(response => {
                    this.users = response.data.user
                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recupération du chef de filiére', 'error')
                });
        },


        validerAvantAjout() {
            const isNomUniteValid = this.validatedataOld();
            console.log(isNomUniteValid);
            if (isNomUniteValid === true) {
                this.etatForm = true;
                this.editModal = false;
                return 0;
            }
            else {
                if (this.editModal === true) {
                    this.etatForm = true;
                    this.form.nom_unite_formation = this.form.nom_unite_formation.toUpperCase();
                    console.log('Nice')
                    this.update_formation(this.idFormation);
                    this.editModal = false;
                }
                else {
                    this.form.nom_unite_formation = this.form.nom_unite_formation.toUpperCase();
                    console.log('NO Nice')
                    this.soumettre();
                    this.etatForm = true;
                    this.editModal = false;
                }

            }

        },

        resetForm() {
            this.form.nom_unite_formation = "";
            this.form.id_departement = "";
            this.form.id_user = "";
            this.nom_unite_erreur = "";
            this.id_departement_erreur = "";
            this.id_user_erreur = "";
            this.editModal = false;
            const eventData = {
                editModal: false,
            };
            bus.emit('unite_formationDejaModifier', eventData);

        },

        verifCaratere(nom_unite_formation) {
            const valeur = /^[a-zA-ZÀ-ÿ\s]*$/;
            return valeur.test(nom_unite_formation);
        },

        validatedata(champ) {
            var i = 0;
            switch (champ) {
                case 'nom_unite_de_formation':
                    this.nom_unite_erreur = "";
                    // Effectuez la validation pour le champ 'nom'
                    if (this.form.nom_unite_formation === "") {
                        this.nom_unite_erreur = "Ce champ est obligatoire"
                        i = 1;
                        return true

                    } else {
                        if (this.form.nom_unite_formation.length < 10) {
                            this.nom_unite_erreur = "Ce champ doit contenir au moins 14 Caratères"
                            i = 1;
                            return true
                        }
                        if (!this.verifCaratere(this.form.nom_unite_formation)) {
                            this.nom_unite_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                            /* this.erreur= "Ce champ ne peut comporter que des lettres et des espaces" */
                            i = 1;
                            return true
                        }
                    }
                    break;

                case 'user':
                    this.id_user_erreur = "";
                    //pour user
                    if (this.editModal) {
                        if (this.form.id_user === "") {
                            this.id_user_erreur = "Vous avez oublié de sélectionner  le chef de  filiére'"
                            i = 1;
                            return true

                        }
                    }
                    break;

                case 'departement':
                    this.id_departement_erreur = "";
                    if (this.form.id_departement === "") {
                        this.id_departement_erreur = "Vous avez oublié de sélectionner le département"
                        i = 1;
                        return true
                    }
                    break;
                default:
                    break;
            }
        },

        validatedataOld() {
            this.nom_unite_erreur = "";
            this.id_departement_erreur = "";
            this.id_user_erreur = "";
            var i = 0;

            if (this.form.nom_unite_formation === "") {
                this.nom_unite_erreur = "Ce champ est obligatoire"
                i = 1;
            }
            if (!this.verifCaratere(this.form.nom_unite_formation)) {
                this.nom_unite_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                i = 1;
            }
            if (this.form.nom_unite_formation.length < 10) {
                this.nom_unite_erreur = "Ce champ doit contenir au moins 14 Caratères"
                i = 1;
            }
            if (this.form.id_departement === "") {
                this.id_departement_erreur = "Vous avez oublié de sélectionner le département"
                i = 1;
            }
            if (this.editModal) {
                if (this.form.id_user === "") {
                    this.id_user_erreur = "Vous avez oublié de sélectionner le chef de filiére"
                    i = 1;
                }
            }
            if (i == 1)
                return true;

            return false;

        },


        async update_formation(id) {
            const formdata = new FormData();
            formdata.append('nom_unite_formation', this.form.nom_unite_formation);
            formdata.append('id_departement', this.form.id_departement);
            formdata.append('id_user', this.form.id_user);

            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            try {
                await axios.post('/unite_de_formation/update/' + id, formdata, {headers});
                showDialog6("Service modifié avec succès");
                this.resetForm();
                bus.emit('unite_formationAjoutee');

                const eventData = {
                    editModal: false,
                };
                bus.emit('unite_formationDejaModifier', eventData);
            }
            catch (e) {
                console.log(e)
                showDialog3("Une erreur est survenue lors de la modification");
            }
        },

        monterToupdate(filiere) {
            console.log("MonterToupdate called");
            this.idFormation = filiere.id;
            this.form.nom_unite_formation = filiere.filiere;
            this.form.id_departement = filiere.id_departement;
            this.form.id_user = filiere.id_user;

        },

    }


}

</script>

