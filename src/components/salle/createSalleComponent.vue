<template>
    <div class="page-wrapper">

        <div class="page-header navbar navbar-fixed-top">
            <div class="page-header-inner">
                <appheader 
                :userNom="userNom"
        :userPrenom="userPrenom"
        :userPhoto="userPhoto"/>
            </div>
        </div>
        <div class="page-container">
            <appnavbar 
            :userNom="userNom"
        :userPrenom="userPrenom"
        :userPhoto="userPhoto"
        :userIdrole="userIdrole"
        :userRole="userRole"/>

            <!-- start page content -->
            <div class="page-content-wrapper" id="app">
                <div class="page-content">
                    <div class="page-bar">
                        <div class="page-title-breadcrumb">
                            <div class=" pull-left">
                                <div class="page-title">Nouvelle Salle</div>
                            </div>
                            <ol class="breadcrumb page-breadcrumb pull-right">
                                <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
                                        href="{{ route('admin_index') }}">Tableau de Bord</a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>
                                <li class="active">Paramétres &nbsp;<a class="parent-item"></a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                        </li>
                                <li><a class="parent-item" :href="'/salle/accueil'">Salle</a>&nbsp;<i
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
                                                v-show="!form.intitule">Nom Salle</label>
                                            <input class="mdl-textfield__input" type="text" id="txtFirstName"
                                                v-model="form.intitule" @input="validatedata('intitule')">
                                            <span class="erreur">{{ this.nom_salle_erreur }}</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 p-t-20">
                                        <div
                                            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label class="mdl-textfield__label" for="txtFirstName"
                                                v-show="!form.nombre_place">Nombre de Place</label>
                                            <input class="mdl-textfield__input" type="text" id="txtFirstName"
                                                v-model="form.nombre_place" @input="validatedata(' nombre_place')">
                                            <span class="erreur">{{ this.nombre_place_erreur }}</span>
                                        </div>
                                    </div>


                                    <div class="col-lg-6 p-t-20">
                                        <div
                                            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <label for="list6" class="mdl-textfield__label"
                                                v-show="!form.id_batiment">Choisissez le batiment</label>
                                            <select class="mdl-textfield__input" id="list6" readonly tabIndex="-1"
                                                v-model="form.id_batiment" @change="validatedata('id_batiment')">
                                                <option v-for="(batiment, index) in batiments" :value="batiment.id"
                                                    :key="index">{{ batiment.intitule }}
                                                </option>
                                            </select>
                                            <span class="erreur">{{ id_batiment_erreur }}</span>
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
                                            <header>Liste des dernières salles</header>
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
                                                        <th>Salle</th>
                                                        <th>Nombre de place</th>
                                                        <th>Batiment</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="odd gradeX" v-for="(salle, index) in salles" :key="index">
                                                        <td> {{ index + 1 }} </td>
                                                        <td> {{ salle.intitule }} </td>
                                                        <td> {{ salle.nombre_place }}</td>
                                                        <td> {{ salle.batiment.intitule }} </td>
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

    </div>
</template>
    
<script>
import bus from '../../eventBus';
import axios from '@/axios';
import Form from 'vform';
import Swal from 'sweetalert2';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import appheader from "../layout/header.vue";
import appfooter from "../layout/footer.vue";
import appnavbar from "../layout/navbar.vue";
import { mapState, mapActions } from "vuex";
import appafterContent from "../layout/afterContent.vue";

export default {
  components: {
    appnavbar,
    appfooter,
    appheader,
    appafterContent,
    flatPickr,
  },
    props: ['salle'],
    name: "createSalleCompenent",

    data() {
        return {
            users: [],
            salles: [],
            batiments: [],
            form: new Form({
                'intitule': "",
                'nombre_place': "",
                'id_batiment': "",
            }),
            nom_salle_erreur: "",
            nombre_place_erreur: "",
            id_batiment_erreur: "",
            etatForm: false,
            editModal: false,
            idSalle: "",
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
        this.get_batiment();
        this.get_salle();
        bus.on('salleModifier', (eventData) => {
            this.editModal = eventData.editModal;
            this.monterToupdate(eventData.salle);
        });
    },



    methods: {
        ...mapActions(["login", "logout"]),
        async soumettre() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('intitule', this.form.intitule);
            formdata.append('nombre_place', this.form.nombre_place);
            formdata.append('id_batiment', this.form.id_batiment);
            try {
                await axios.post('/salle/store', formdata, {headers});
                showDialog6("Salle ajoutée avec succès");
                bus.emit('salleAjoutee');
                this.resetForm();
                setTimeout(() => {
                    window.location.href = '/salle/accueil';
                }, 1500);
            }
            catch (e) {
                /* console.log(e.request.status) */
                if (e.request.status === 404) {
                    showDialog3("Cette salle existe déjà");
                }
                else {
                    showDialog3("Une erreur est survenue lors de l\'enregistrement");
                }

            }

        },

        validerAvantAjout() {
            // Exécutez la validation des champs
            const isNomSalleValid = this.validatedataold();
            if (isNomSalleValid === true) {
                this.etatForm = false;
                this.editModal = false;
                return 0;
            } else {

                if (this.editModal === true) {
                    this.etatForm = true;
                    this.form.intitule = this.form.intitule.toUpperCase();
                    this.update_salle(this.idSalle);
                    this.editModal = false;
                }

                else {
                    this.form.intitule = this.form.intitule.toUpperCase();
                    this.soumettre();
                    this.etatForm = true;
                    this.editModal = false;

                }
            }
        },

        resetForm() {
            this.form.intitule = "";
            this.form.nombre_place = "";
            this.form.id_batiment = "";
            this.nom_salle_erreur = "";
            this.nombre_place_erreur = "";
            this.id_batiment_erreur = "";
            this.editModal === false;
        },

        verifCaratere(nom) {
            const valeur = /^[a-zA-ZÀ-ÿ\s]*$/;
            return valeur.test(nom);
        },

        validatedataold() {
            this.nom_salle_erreur = "";
            this.nombre_place_erreur = "";
            this.id_batiment_erreur = "";
            var i = 0;
            if (this.form.id_batiment === "") {
                this.id_batiment_erreur = "Vous avez oublié de sélectionner le batiment"
                i = 1;
            }


            if (this.form.intitule === "") {
                this.nom_salle_erreur = "Ce champ est obligatoire"
                i = 1;

            }
            /*  if (!this.verifCaratere(this.form.intitule)) {
                 this.nom_salle_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                 i = 1;
 
             } */
            if (this.form.intitule.length < 4) {
                this.nom_salle_erreur = "Ce champ doit contenir au moins 12 Caratères"
                i = 1;

            }
            if (this.form.id_batiment === "") {
                this.id_batiment_erreur = "Vous avez oublié de sélectionner le batiment"
                    ;
                i = 1;
            }
            if (this.form.nombre_place === "") {
                this.nombre_place_erreur = "Ce champ est obligatoire"
                    ;
                i = 1;
            }

            if (i === 1)
                return true;
            return false;

        },
        validatedata(champ) {
            switch (champ) {
                case 'intitule':
                    // Effectuez la validation pour le champ 'nom'
                    this.nom_salle_erreur = "";

                    if (this.form.intitule === "") {
                        this.nom_salle_erreur = "Ce champ est obligatoire"
                        return true

                    }
                    /*   if (!this.verifCaratere(this.form.intitule)) {
                          this.nom_salle_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
  
                          return true
                      } */
                    // Ajoutez d'autres validations si nécessaire
                    break;
                case 'nombre_place':
                    //pour prenom
                    this.nombre_place_erreur = "";

                    if (this.form.nombre_place === "") {
                        this.nombre_place_erreur = "Ce champ est obligatoire"
                        return true
                    }
                    if (!/^\d+$/.test(this.form.nombre_place)) {
                        this.nombre_place_erreur = "Ce champ ne peut contenir que des chiffres";

                        return true
                    }
                    break;
                case 'id_batiment':
                    //pour prenom
                    this.id_batiment_erreur = "";

                    if (this.form.id_batiment === "") {
                        this.id_batiment_erreur = "Vous avez oublié de sélectionner la salle"
                        return true;
                    }
                    break;
                default:
                    break;
            }
        },

        async get_batiment() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/batiment/index', {headers})
                .then(response => {
                    this.batiments = response.data.batiment
                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation des membres administratifs', 'error')
                });
        },

        async get_salle() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/salle/get/last', {headers})
                .then(response => {
                    this.salles = response.data.salle
                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation des dernières salles', 'error')
                });
        },

        async update_salle(id) {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('intitule', this.form.intitule);
            formdata.append('nombre_place', this.form.nombre_place);
            formdata.append('id_batiment', this.form.id_batiment);

            //if(this.form.nom!==""){
            try {
                await axios.post('/salle/update/' + id, formdata, {headers});
                showDialog6("Salle modifiée avec succès");
                bus.emit('salleAjoutee');
                const eventData = {
                    editModal: false,
                };
                bus.emit('salleDejaModifier', eventData);
            }
            catch (e) {
                console.log(e)
                if (e.request.status === 404) {
                    showDialog3("Une erreur est survenue lors de la modification");


                }
                else {
                    showDialog3("Une erreur est survenue lors de la modification");
                }
            }
        },
        monterToupdate(salle) {
            console.log("MonterToupdate called");

            this.idSalle = salle.id;
            this.editModal = salle.editModal;
            this.form.intitule = salle.salle;
            this.form.nombre_place = salle.nombre_de_place;
            this.form.id_batiment = salle.id_batiment;
            this.form.nom_batiment = salle.batiment;


        },

    }
}
</script>