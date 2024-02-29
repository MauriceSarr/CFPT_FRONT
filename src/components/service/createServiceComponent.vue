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
            <div class="page-content-wrapper">

                <div class="page-content">
                    <div class="page-bar">
                        <div class="page-title-breadcrumb">
                            <div class=" pull-left">
                                <div class="page-title">Nouveau Service</div>
                            </div>
                            <ol class="breadcrumb page-breadcrumb pull-right">
                                <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
                                        href="{{ route('admin_index') }}">Tableau de Bord</a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>
                                <li class="active">Paramétres &nbsp;<a class="parent-item"></a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                
                                <li><a class="parent-item" :href="'/service/accueil'">Service</a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>
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
                                            v-show="!form.nom_service">Nom
                                            Service</label>
                                        <input class="mdl-textfield__input" type="text" id="txtFirstName"
                                            v-model="form.nom_service" @input="validatedata('nom_service')">
                                        <span class="erreur">{{ this.nom_service_erreur }}</span>
                                    </div>

                                </div>

                                <div class="col-lg-6 p-t-20 mt-1">
                                    <div
                                        class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">

                                        <label class="mdl-textfield__label" for="directionSelect"
                                            v-show="!form.id_direction"> Choisissez la
                                            direction
                                        </label>
                                        <select class="mdl-textfield__input" id="directionSelect" readonly tabIndex="-1"
                                            v-model="form.id_direction" @change="validatedata('id_direction')">

                                            <option v-for="(direction, index) in directions" :value="direction.id"
                                                :key="index">{{
                                                    direction.nom_direction }}</option>
                                        </select>
                                        <span class="erreur">{{ id_direction_erreur }}</span>
                                    </div>
                                </div>

                                <div class="col-lg-6 p-t-20">
                                    <div
                                        class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                        <label for="list6" class="mdl-textfield__label" v-show="!form.id_user">Choisissez le
                                            chef de
                                            service</label>
                                        <select class="mdl-textfield__input" id="list6" readonly tabIndex="-1"
                                            v-model="form.id_user" @change="validatedata('user')">
                                            <option v-for="(user, index) in users" :value="user.id" :key="index">{{
                                                user.prenom }} {{
        user.nom }}
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


                                <div class="card card-box">
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
                                                    <th>Identifiant</th>
                                                    <th> Service </th>
                                                    <th> Chef de service </th>
                                                    <th> Direction </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="odd gradeX" v-for="(service, index) in services" :key="index">
                                                    <td> {{ index + 1 }} </td>
                                                    <td> {{ service.nom_service }} </td>
                                                    <td v-show="service.user.prenom != '' && service.user.nom != ''"> {{
                                                        service.user.prenom }}
                                                        {{ service.user.nom }}</td>
                                                    <td> {{ service.direction.nom_direction }}</td>
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
    props: ['service'],
    name: "createServiceCompenent",

    data() {
        return {
            users: [],
            directions: [],
            services: [],
            form: new Form({
                'nom_service': "",
                'id_user': "",
                'id_direction': ""
            }),
            nom_service_erreur: "",
            id_user_erreur: "",
            id_direction_erreur: "",
            etatForm: false,
            editModal: false,
            idService: "",
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
        this.get_user();
        this.get_direction();
        this.get_service();
        bus.on('serviceModifier', (eventData) => {
            this.editModal = eventData.editModal;
            this.monterToupdate(eventData.service);
        });

    },

    methods: {
        ...mapActions(["login", "logout"]),
        async soumettre() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('nom_service', this.form.nom_service);
            formdata.append('id_user', this.form.id_user);
            formdata.append('id_direction', this.form.id_direction);
            try {
                const user_store = await axios.post('/service/store', formdata, {headers});
                showDialog6("Service ajouté avec succès");
                bus.emit('serviceAjoutee;')
                this.resetForm();
                setTimeout(() => {
                    window.location.href = '/service/accueil';
                }, 1500);

            }
            catch (e) {
                /* console.log(e.request.status) */
                if (e.request.status === 404) {
                    showDialog3("Ce service existe déjà");
                }
                else {
                    //Swal.fire('Erreur !', 'Une erreur est survenue lors de l\'enregistrement', 'error')
                    showDialog3("Une erreur est survenue lors de l\'enregistrement");
                }

            }

        },

        validerAvantAjout() {
            const isVerifIdValid = this.validatedataOld();
            if (isVerifIdValid === true) {
                this.etatForm = false;
                this.editModal = false;
                console.log("erreur")
                return 0;
            } else {
                if (this.editModal === true) {
                    this.etatForm = true;
                    this.form.nom_service = this.form.nom_service.toUpperCase();
                    this.update_service(this.idService);
                    this.editModal = false;
                }

                else {
                    this.form.nom_service = this.form.nom_service.toUpperCase();
                    this.soumettre();
                    this.etatForm = true;
                    this.editModal = false;
                    console.log("Tokkos");
                }

            }
        },

        resetForm() {
            this.form.nom_service = "";
            this.form.id_user = "";
            this.form.id_direction = ""
            this.nom_service_erreur = "";
            this.id_user_erreur = "";
            this.id_direction_erreur = "";
            this.editModal = false;
            const eventData = {
                editModal: false,
            };
            bus.emit('serviceDejaModifier', eventData);
        },



        verifCaratere(nom) {
            const valeur = /^[a-zA-ZÀ-ÿ\s]*$/;
            return valeur.test(nom);
        },



        validatedata(champ) {
            switch (champ) {
                case 'nom_service':
                    this.nom_service_erreur = "";
                    // Effectuez la validation pour le champ 'nom'
                    if (this.form.nom_service === "") {
                        this.nom_service_erreur = "Ce champ est obligatoire"
                        //this.coloration_erreur_rouge(this.nom_service_erreur);
                        return true
                    }
                    if (!this.verifCaratere(this.form.nom_service)) {
                        this.nom_service_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                        /* this.erreur= "Ce champ ne peut comporter que des lettres et des espaces" */
                        // this.coloration_erreur_rouge(this.nom_service_erreur);
                        return true
                    }
                    if (this.form.nom_service.length < 12) {
                        this.nom_service_erreur = "Ce champ doit contenir au moins 12 Caractères"
                            ;
                        // this.coloration_erreur_rouge(this.nom_service_erreur);
                        return true
                    }
                    break;

                case 'user':
                    this.id_user_erreur = "";
                    //pour user
                    if (this.editModal) {
                        if (this.form.id_user === "") {
                            this.id_user_erreur = "Vous avez oublié de sélectionner  le chef de service'"
                            return true
                        }
                    }
                    break;

                case 'direction':
                    //pour direction
                    this.id_direction_erreur = "";
                    if (this.form.id_direction === "") {
                        this.id_direction_erreur = "Vous avez oublié de sélectionner  le chef de direction'"
                        return true
                    }
                    break;

                case 'id_user':
                    //pour direction
                    this.id_user_erreur = "";
                    if (this.editModal) {
                        if (this.form.id_user === "") {
                            this.id_user_erreur = "Vous avez oublié de sélectionner le chef de service"
                            return true
                        }
                    }
                    break;

                case 'id_direction':
                    //pour direction
                    this.id_direction_erreur = "";
                    if (this.form.id_direction === "") {
                        this.id_direction_erreur = "Vous avez oublié de sélectionner la direction concernée"
                        return true;
                    }
                    break;

                default:
                    break;
            }
            return false;
        },

        validatedataOld() {
            this.nom_service_erreur = "";
            this.id_user_erreur = "";
            this.id_direction_erreur = "";
            var i = 0;


            if (this.form.nom_service === "") {
                this.nom_service_erreur = "Ce champ est obligatoire"

                i = 1;
            }
            if (!this.verifCaratere(this.form.nom_service)) {
                this.nom_service_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                    ;
                i = 1;
            }

            /* if(this.form.nom_service.length < 12){
                this.nom_service_erreur= "Ce champ doit contenir au moins 12 Caratères"
                ;
                i=1;
            } */

            if (this.form.nom_service.length < 12) {
                this.nom_service_erreur = "Ce champ doit contenir au moins 12 Caratères"
                    ;
                i = 1;
            }

            if (this.editModal) {
                if (this.form.id_user === "") {
                    this.id_user_erreur = "Vous avez oublié de sélectionner le chef de service"
                        ;
                    i = 1;
                }
            }
            if (this.form.id_direction === "") {
                this.id_direction_erreur = "Vous avez oublié de sélectionner la direction concernée"
                    ;
                i = 1;
            }
            if (i == 1) return true;

            return false;
        },

        async get_user() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/user/getpersoadminunique', {headers})
                .then(response => {
                    this.users = response.data.user
                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation des membres administratifs', 'error')
                });
        },

        async get_direction() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/direction/index', {headers})
                .then(response => {
                    this.directions = response.data.direction

                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recupération des directions', 'error')
                });
        },
        async get_service() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/service/index/get/last', {headers})
                .then(response => {
                    this.services = response.data.service;
                    console.log(this.services)

                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recupération des service', 'error')
                });
        },

        async update_service(id) {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('nom_service', this.form.nom_service);
            formdata.append('id_user', this.form.id_user);
            formdata.append('id_direction', this.form.id_direction);

            //if(this.form.nom!==""){
            try {
                await axios.post('/service/update/' + id, formdata, {headers});
                showDialog6("Service modifié avec succès");
                bus.emit('serviceAjoutee');
                const eventData = {
                    editModal: false,
                };
                bus.emit('serviceDejaModifier', eventData);
            }
            catch (e) {
                /* console.log(e.request.status) */
                if (e.request.status === 404) {
                    showDialog3("Une erreur est survenue lors de la modification");
                }
                else {
                    showDialog3("Une erreur est survenue lors de la modification");
                }
            }
        },

        monterToupdate(service) {
            this.idService = service.id;
            this.editModal = service.editModal;
            this.form.nom_service = service.service;
            this.form.nom_direction = service.direction;
            this.form.id_direction = service.id_direction;
            this.form.id_user = service.id_user;
        },
    }
}
</script>

