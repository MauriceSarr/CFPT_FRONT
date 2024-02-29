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
        :userRole="userRole"/>

            <!-- start page content -->
            <div class="page-content-wrapper" >
                <div class="page-content">
                    <div class="page-bar">
                        <div class="page-title-breadcrumb">
                            <div class=" pull-left">
                                <div class="page-title">Nouvelle Classe</div>
                            </div>
                            <ol class="breadcrumb page-breadcrumb pull-right">
                                <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
                                        href="{{ route('admin_index') }}">Tableau de Bord</a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>
                                <li class="active">Paramétres &nbsp;<a class="parent-item"></a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                <li><a class="parent-item" :href="'/classe/all'">Classe</a>&nbsp;<i
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
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <label class="mdl-textfield__label" for="txtFirstName" v-show="!form.nom_classe">Nom Classe</label>
                    <input class="mdl-textfield__input" type="text" id="txtFirstName" v-model="form.nom_classe"
                        @input="validatedata('nom_classe')">
                    <span class="erreur">{{ this.nom_classe_erreur }}</span>
                </div>
            </div>
            <div class="col-lg-6 p-t-20">
                <div
                    class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                    <label for="list6" class="mdl-textfield__label" v-show="!form.type_classe">Choisissez le type de classe
                    </label>
                    <select class="mdl-textfield__input" id="list6" readonly tabIndex="-1" v-model="form.type_classe"
                        @change="validatedata('type_classe')">
                        <option value="CJ">CJ</option>
                        <option value="FPJ">FPJ</option>
                        <option value="CS">CS</option>
                    </select>
                    <span class="erreur">{{ type_classe_erreur }}</span>
                </div>
            </div>
            <div class="col-lg-6 p-t-20">
                <div
                    class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                    <label for="list6" class="mdl-textfield__label" v-show="!form.niveau">Choisissez le niveau
                    </label>
                    <select class="mdl-textfield__input" id="list6" readonly tabIndex="-1" v-model="form.niveau"
                        @change="validatedata('niveau')">
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3</option>
                    </select>
                    <span class="erreur">{{ niveau_erreur }}</span>
                </div>
            </div>
            <div class="col-lg-6 p-t-20 mt-1">
                <div
                    class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">

                    <label class="mdl-textfield__label" for="directionSelect" v-show="!form.id_type_formation"> Choisissez
                        le type
                        de formation </label>
                    <select class="mdl-textfield__input" id="directionSelect" readonly tabIndex="-1"
                        v-model="form.id_type_formation" @change="validatedata('type_formation')">

                        <option v-for="(type_formation, index) in type_formations" :value="type_formation.id" :key="index">
                            {{
                                type_formation.intitule }}</option>
                    </select>
                    <span class="erreur">{{ id_type_formation_erreur }}</span>
                </div>
            </div>



            <div class="col-lg-6 p-t-20">
                <div
                    class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                    <label for="list6" class="mdl-textfield__label" v-show="!form.id_unite_de_formation">Choisissez la
                        filiére</label>
                    <select class="mdl-textfield__input" id="list6" readonly tabIndex="-1"
                        v-model="form.id_unite_de_formation" @change="validatedata('unite_de_formation')">
                        <option v-for="(unite_de_formation, index) in unite_de_formations" :value="unite_de_formation.id"
                            :key="index">{{ unite_de_formation.nom_unite_formation }} </option>
                    </select>
                    <span class="erreur">{{ id_unite_de_formation_erreur }}</span>
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
                                <th>Nom</th>
                                <th>Type Classe</th>
                                <th>Niveau</th>
                                <th>Type de Formation</th>
                                <th>Filiere</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd gradeX" v-for="(classe, index) in classes" :key="index">
                                <td> {{ index + 1 }} </td>
                                <td> {{ classe.nom_classe }} </td>
                                <td> {{ classe.type_classe }} </td>
                                <td> {{ classe.niveau }}</td>
                                <td> {{ classe.type_formation.intitule }} </td>
                                <td> {{ classe.unite_de_formation.nom_unite_formation }} </td>
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
    name: "classeCompenent",
 
    data() {
        return {
            form: new Form({
                'nom_classe': "",
                'type_classe': "",
                'niveau': "",
                'id_type_formation': "",
                'id_unite_de_formation': "",

            }),
            type_formations: [],
            classes: [],
            unite_de_formations: [],
            nom_classe_erreur: "",
            id_type_formation_erreur: "",
            id_unite_de_formation_erreur: "",
            type_classe_erreur: "",
            niveau_erreur: "",
            etatForm: false,
            editModal: false,
            idClasse: "",

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
        this.get_classe();
        this.get_type_formation();
        this.get_unite_de_formation();
        bus.on('classeModifier', (eventData) => {
            this.editModal = eventData.editModal;
            this.monterToupdate(eventData.classe);


        });
    },



    methods: {
        ...mapActions(["login", "logout"]),
        async soumettre() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('nom_classe', this.form.nom_classe);
            formdata.append('type_classe', this.form.type_classe);
            formdata.append('niveau', this.form.niveau);
            formdata.append('id_type_formation', this.form.id_type_formation);
            formdata.append('id_unite_de_formation', this.form.id_unite_de_formation);


            /* if(this.form.nom_classe!=="" && this.form.type_classe!==""  && this.form.niveau!==""){ */
            try {
                const create_store = await axios.post('/classe/store', formdata, {headers});
                showDialog6("Classe ajoutée avec succès");
                this.resetForm();
                bus.emit('classeAjoutee');
                setTimeout(() => {
                    window.location.href = '/classe/index';
                }, 1500);

            }
            catch (e) {
                console.log(e)
                if (e.request.status === 404) {
                    showDialog3('Cette classe existe déjà')
                }
                else {
                    showDialog3("Une erreur est survenue lors de l\'enregistrement");
                }
            }
        },

        async get_classe() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/classe/get/last', {headers})
                .then(response => {
                    this.classes = response.data.classe;

                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recupération des derniers classes', 'error')
                });
        },


        async get_type_formation() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/type_formation/all', {headers})
                .then(response => {
                    this.type_formations = response.data.type_formation;
                }).catch(error => {
                    this.resetForm();
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation du type de formation', 'error')
                });
        },



        async get_unite_de_formation() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/unite_de_formation/all', {headers})
                .then(response => {
                    this.unite_de_formations = response.data.unite_de_formation;
                }).catch(error => {
                    this.resetForm();
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation de lunite de formation', 'error')
                });
        },
        verifCaratere(nom) {
            const valeur = /^[a-zA-ZÀ-ÿ\s]*$/;
            return valeur.test(nom);
        },

        validatedata(champ) {

            var i = 0;

            switch (champ) {
                case 'nom_classe':
                    this.nom_classe_erreur = "";
                    // Effectuez la validation pour le champ 'nom'
                    if (this.form.nom_classe === "") {
                        this.nom_classe_erreur = "Ce champ est obligatoire"
                        i = 1;
                        return true

                    }
                /*   if (!this.verifCaratere(this.form.nom_classe)) {
                      this.nom_classe_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                     
                      i = 1;
                      return true
                  }
               
                  break; */
                case 'niveau':
                    this.niveau_erreur = "";
                    //pour niveau
                    if (this.form.niveau === "") {
                        this.niveau_erreur = "Vous avez oublié de sélectionner le niveau "
                        i = 1;
                        return true
                    }

                    break;
                case 'unite_de_formation':
                    this.id_unite_de_formation_erreur = "";
                    //pour unite_de_formation
                    if (this.form.unite_de_formation === "") {
                        this.id_unite_de_formation_erreur = "Vous avez oublié de sélectionner  l'unite de formation'"
                        i = 1;
                        return true

                    }
                    break;
                case 'type_formation':
                    this.id_type_formation_erreur = "";
                    //pour type de formation
                    if (this.form.type_formation === "") {
                        this.type_formation_erreur = "Vous avez oublié de sélectionner le type de formation "
                        i = 1;
                        return true
                    }

                    break;
                case 'type_classe':
                    this.type_classe_erreur = "";
                    //pour type classe
                    if (this.form.type_classe === "") {
                        this.type_classe_erreur = "Vous avez oublié de sélectionner le type de classe "
                        i = 1;
                        return true
                    }

                    break;

                default:
                    break;
            }
        },

        verifId() {
            this.id_type_formation_erreur = "";
            this.id_unite_de_formation_erreur = "";
            this.type_classe_erreur = "";
            this.niveau_erreur = "";
            var i = 0;

            if (this.form.id_type_formation === "") {
                this.id_type_formation_erreur = "Vous avez oublié de sélectionner le type de formation"
                i = 1;
                return true
            }

            if (this.form.type_classe === "") {
                this.type_classe_erreur = "Vous avez oublié de sélectionner le type de la classe "
                i = 1;
                return true
            }
            if (this.form.niveau === "") {
                this.niveau_erreur = "Vous avez oublié de sélectionner le niveau "
                i = 1;
                return true
            }
            if (this.form.id_unite_de_formation === "") {
                this.id_unite_de_formation_erreur = "Vous avez oublié de sélectionner l'unité de formation' "
                i = 1;
                return true
            }

            if (i == 1) return true;

            return false;

        },
        validatedataOld() {
            this.nom_classe_erreur = "";
            this.id_type_formation_erreur = "";
            this.id_unite_de_formation_erreur = "";
            this.type_classe_erreur = "";
            this.niveau_erreur = "";
            var i = 0;

            if (this.form.nom_classe === "") {
                this.nom_classe_erreur = "Ce champ est obligatoire"
                i = 1;
            }
            /* else {
                if (!this.verifCaratere(this.form.nom_classe)) {
                    this.nom_classe_erreur = "Ce champ ne peut comporter que des lettres et des espaces"
                    i = 1;
                }

            } */

            if (this.form.id_type_formation === "") {
                this.id_type_formation_erreur = "Vous avez oublié de sélectionner le type de formation"
                i = 1;
            }

            if (this.form.type_classe === "") {
                this.type_classe_erreur = "Vous avez oublié de sélectionner le type de la classe "
                i = 1;
            }
            if (this.form.niveau === "") {
                this.niveau_erreur = "Vous avez oublié de sélectionner le niveau "
                i = 1;
            }
            if (this.form.id_unite_de_formation === "") {
                this.id_unite_de_formation_erreur = "Vous avez oublié de sélectionner l'unité de formation' "
                i = 1;
            }


            if (i == 1) return true;

            return false;
        },

        validerAvantAjout() {
            // Exécutez la validation des champs
            /*  const isNomChampValid = this.validatedata(); */
            const isIdChampValid = this.validatedataOld();

            /*   console.log(isNomChampValid); */
            if (isIdChampValid) {
                this.editModal = false;
                console.log("erreur")
                return 0;
            } else {

                if (this.editModal === true) {
                    this.etatForm = true;
                    this.form.nom_classe = this.form.nom_classe.toUpperCase();
                    this.update_classe(this.idClasse);
                    /*  this.closeModal('[data-modal-confirmation-modifier]'); */
                    this.editModal = false;
                }

                else {


                    this.form.nom_classe = this.form.nom_classe.toUpperCase();

                    this.soumettre();
                    this.etatForm = true;

                    this.editModal = false;
                    console.log("Tokkos");
                }

            }

        },
        async update_classe(id) {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('nom_classe', this.form.nom_classe);
            formdata.append('type_classe', this.form.type_classe);
            formdata.append('niveau', this.form.niveau);
            formdata.append('id_type_formation', this.form.id_type_formation);
            formdata.append('id_unite_de_formation', this.form.id_unite_de_formation);

            //if(this.form.nom!==""){
            try {
                await axios.post('/classe/update/' + id, formdata, {headers});
                showDialog6("Classe modifiée avec succès");
                bus.emit('classeAjoutee');
                const eventData = {
                    editModal: false,
                };
                bus.emit('classeDejaModifier', eventData);
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
        monterToupdate(classe) {
            console.log("MonterToupdate called");

            this.idClasse = classe.id;
            this.editModal = classe.editModal;
            this.form.nom_classe = classe.classe;
            this.form.niveau = classe.niveau;
            this.form.type_classe = classe.type_classe;
            this.form.type_de_formation = classe.type_de_formation;
            this.form.id_type_formation = classe.id_type_formation;
            this.form.unite_de_formation = classe.unite_de_formation;
            this.form.id_unite_de_formation = classe.id_unite_de_formation;


        },

        resetForm() {
            this.form.nom_classe = "";
            this.form.type_classe = "";
            this.form.niveau = "";
            this.form.id_type_formation = "";
            this.form.id_unite_de_formation = "";
            this.nom_classe_erreur = "";
            this.id_type_formation_erreur = "";
            this.id_unite_de_formation_erreur = "";
            this.type_classe_erreur = "";
            this.niveau_erreur = ""
        },



    }
}
</script>

