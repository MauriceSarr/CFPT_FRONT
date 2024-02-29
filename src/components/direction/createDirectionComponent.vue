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
                                <div class="page-title">Nouvelle Direction</div>
                            </div>
                            <ol class="breadcrumb page-breadcrumb pull-right">
                                <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
                                        href="{{ route('admin_index') }}">Tableau de Bord</a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>
                                <li class="active">Paramétres &nbsp;<a class="parent-item"></a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>
                                <li><a class="parent-item" href="{{ route('direction_create') }}">Direction</a>&nbsp;<i
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
                                                v-show="!form.nom_direction">Nom Direction</label>
                                            <input class="mdl-textfield__input" type="text" id="txtFirstName"
                                                v-model="form.nom_direction" @input="validatedata('nom_direction')">
                                            <span class="erreur">{{ this.nom_direction_erreur }}</span>
                                        </div>
                                    </div>


                                    <div class="col-lg-6 p-t-20">
                                        <div
                                            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <label for="list6" class="mdl-textfield__label"
                                                v-show="!form.id_user">Choisissez le chef de direction</label>
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
                                            <header>Liste des dernieres directions</header>
                                            <div class="tools">
                                                <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                                                <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                                                <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                                            </div>
                                        </div>
                                        <div class="card-body ">
                                            <table
                                                class="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                                                id="example47">
                                                <thead>
                                                    <tr>
                                                        <th> # </th>
                                                        <th> Direction </th>
                                                        <th> Chef de direction </th>
                                                        <th> Date de création</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="odd gradeX" v-for="(direction, index) in directions"
                                                        :key="index">
                                                        <td> {{ index + 1 }} </td>
                                                        <td> {{ direction.nom_direction }} </td>
                                                        <td
                                                            v-show="direction.user.prenom != '' && direction.user.nom != ''">
                                                            {{ direction.user.prenom }} {{ direction.user.nom }}</td>
                                                        <td>{{ this.formatDateTime(direction.created_at) }}</td>
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
    props: ['direction'],
    name: "createDirectionCompenent",
  
    data() {
        return {
            users: [],
            form: new Form({
                'nom_direction': "",
                'id_user': "",

            }),

            nom_direction_erreur: "",
            id_user_erreur: "",
            etatForm: false,
            editModal: false,
            directions: [],
            idDirection: "",

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
        bus.on('directionModifier', (eventData) => {
            this.editModal = eventData.editModal;
            this.monterToupdate(eventData.direction);
        });
    },

    methods: {
        ...mapActions(["login", "logout"]),
        async soumettre() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('nom_direction', this.form.nom_direction);
            formdata.append('id_user', this.form.id_user);
            try {
                const create_store = await axios.post('/direction/store', formdata, {headers});
                showDialog6("Direction ajoutée avec succès");
                bus.emit('directionAjoutee;')
                this.resetForm();
                bus.emit('directionAjoutee');
                setTimeout(() => {
                    window.location.href = '/direction/accueil';
                }, 1500);

            }
            catch (e) {
                /* console.log(e.request.status) */
                if (e.request.status === 404) {
                    showDialog3("Ce service existe déjà");
                }
                else {
                    showDialog3("Une erreur est survenue lors de l\'enregistrement");
                }
            }
        },

        formatDateTime(dateTime) {
            // Utilisez une fonction pour formater la date
            return this.formatDate(new Date(dateTime));
        },
        formatDate(date) {
            const day = date.getDate();
            const monthNumber = date.getMonth() + 1;
            const year = date.getFullYear();

            // Tableau des trois premières lettres des mois en français
            const monthAbbreviations = [
                "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
                "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"
            ];

            // Obtenez les trois premières lettres du mois correspondant au numéro du mois
            const month = monthAbbreviations[monthNumber - 1];

            return `${day} ${month} ${year}`;

        },

        verifCaratere(nom) {
            const valeur = /^[a-zA-ZÀ-ÿ\s]*$/;
            return valeur.test(nom);
        },


        validatedata(champ) {
            var i = 0;
            switch (champ) {
                case 'nom_direction':
                    this.nom_direction_erreur = "";
                    // Effectuez la validation pour le champ 'nom'
                    if (this.form.nom_direction === "") {
                        this.nom_direction_erreur = "Ce champ est obligatoire"
                        i = 1;
                        return true

                    }
                    if (!this.verifCaratere(this.form.nom_direction)) {
                        this.nom_direction_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                        /* this.erreur= "Ce champ ne peut comporter que des lettres et des espaces" */
                        i = 1;
                        return true
                    }

                    break;

                case 'user':
                    this.id_user_erreur = "";
                    //pour user
                    if (this.editModal) {
                        if (this.form.id_user === "") {
                            this.id_user_erreur = "Vous avez oublié de sélectionner  le chef de direction'"
                            i = 1;
                            return true

                        }
                    }
                    break;


                default:
                    break;
            }
        },


        validatedataOld() {
            this.nom_direction_erreur = "";

            this.id_user_erreur = "";
            var i = 0;

            if (this.form.nom_direction === "") {
                this.nom_direction_erreur = "Ce champ est obligatoire"
                i = 1;
            } else {
                if (!this.verifCaratere(this.form.nom_direction)) {
                    this.nom_direction_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                    i = 1;
                }
            }
            if (this.editModal) {
                if (this.form.id_user === "") {
                    this.id_user_erreur = "Vous avez oublié de sélectionner le chef de direction "
                    i = 1;
                }
            }

            if (i == 1) return true;

            return false;
        },
        verifId() {
            this.id_user_erreur = "";
            var i = 0;
            if (this.editModal) {
                if (this.form.id_user === "") {
                    this.id_user_erreur = "Vous avez oublié de sélectionner le chef de direction "
                    i = 1;
                    return true
                }
            }

            if (i == 1) return true;
            return false;

        },
        validerAvantAjout() {
            const isNomDirectionValid = this.validatedataOld();
            const isIdDirectionValid = this.verifId();

            console.log(isNomDirectionValid);
            console.log(isIdDirectionValid);

            if (isNomDirectionValid === true || isIdDirectionValid === true) {
                this.etatForm = false;
                this.editModal = false;
                return 0;
            } else {

                if (this.editModal === true) {
                    this.etatForm = false;
                    this.form.nom_direction = this.form.nom_direction.toUpperCase();
                    this.update_direction(this.idDirection);

                    this.editModal = false;
                }
                else {
                    this.etatForm = true;
                    this.form.nom_direction = this.form.nom_direction.toUpperCase();
                    this.soumettre();

                    this.editModal = false;
                }
            }

        },

        resetForm() {
            this.form.nom_direction = "";
            this.form.id_user = "";
            this.editModal = false;
            this.nom_direction_erreur = "";
            this.id_user_erreur = "";
            const eventData = {
                editModal: false,
            };
            bus.emit('directionDejaModifier', eventData);

        },

        async get_user() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/user/getpersoadminunique', {headers})
                .then(response => {
                    this.users = response.data.user


                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation des roles', 'error')
                });
        },

        async get_direction() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/direction/index/get/last', {headers})
                .then(response => {
                    this.directions = response.data.direction
                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation des dernieres directions', 'error')
                });
        },

        async update_direction(id) {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('nom_direction', this.form.nom_direction);
            formdata.append('id_user', this.form.id_user);

            //if(this.form.nom!==""){
            try {
                await axios.post('/direction/update/' + id, formdata, {headers});
                showDialog6("Direction modifiée avec succès");
                bus.emit('directionAjoutee');
                const eventData = {
                    editModal: false,
                };
                bus.emit('directionDejaModifier', eventData);
            }
            catch (e) {
                /* console.log(e.request.status) */
                if (e.request.status === 404) {
                    Swal.fire('Erreur !', 'Cette direction existe déjà', 'error')
                }
                else {
                    Swal.fire('Erreur !', 'Une erreur est survenue lors de l\'enregistrement', 'error')
                }
            }
        },
        monterToupdate(direction) {
            this.idDirection = direction.id;
            this.editModal = direction.editModal;
            this.form.nom_direction = direction.direction;
            this.form.id_user = direction.id_user;
        },

    }
}
</script>


