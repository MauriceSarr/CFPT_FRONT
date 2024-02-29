<template>
    <div class="col-lg-12 p-t-20">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
            <label class="mdl-textfield__label" for="txtFirstName" v-show="!form.intitule">Nom rayon</label>
            <input class="mdl-textfield__input" type="text" id="txtFirstName" v-model="form.intitule"
                @input="validatedata('rayon')">
            <span class="erreur">{{ this.intitule_erreur }}</span>
        </div>
    </div>

    <div class="col-lg-12 p-t-20">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
            <label class="mdl-textfield__label" for="txtFirstName" v-show="!form.description">Description</label>
            <input class="mdl-textfield__input" type="text" id="txtFirstName" v-model="form.description"
                @input="validatedata('rayon')">
            <span class="erreur">{{ this.description_erreur }}</span>
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
            <header>Liste des derniers rayons</header>
            <div class="tools">
                <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
            </div>
        </div>
        <div class="card-body ">
            <table class="table table-striped table-bordered table-hover table-checkable order-column valign-middle w-2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>rayon</th>
                        <th>description</th>
                    </tr>
                </thead>  
                <tbody>
                    <tr class="odd gradeX" v-for="(rayon, index) in rayons" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td class="left"> {{ rayon.intitule }} </td>
                        <td class="left"> {{ rayon.description }} </td>

                       
                    </tr>
                </tbody>
            </table>
        </div>
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
    name: "createRayonCompenent",

    data() {
        return {
            form: new Form({
                'intitule': "",
                'description':""
            }),
            intitule_erreur: "",
            description_erreur:"",
            etatForm: false,
            editModal: false,
            rayons: [],
            idRayon: "",

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
        this.get_rayon();
        bus.on('rayonModifier', (eventData) => {
            this.editModal = eventData.editModal;
            this.monterToupdate(eventData.rayon);
        });
    },
    methods: {
        ...mapActions(["login", "logout"]),
        async soumettre() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('intitule', this.form.intitule);
            formdata.append('description', this.form.description);

            try {
                const create_store = await axios.post('/rayon/store', formdata, {headers});
                /*  Swal.fire('Succes!','rayon ajouté avec succés','succes') */
                bus.emit('rayonAjoutee');
                showDialog6("Rayon ajouté avec succès");
                this.resetForm();
                window.location.href = '/rayon/accueil';
            }
            catch (e) {
                if (e.request.status === 404) {
                    //Swal.fire('Erreur !', 'Ce rayon existe déjà', 'error')
                    showDialog3("Ce rayon existe déjà");
                }
                else {
                    // Swal.fire('Erreur !', 'Une erreur est survenue lors de l\'enregistrement', 'error')
                    showDialog3("Une erreur est survenue lors de l\'enregistrement");
                }
            }
        },
        async get_rayon() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/rayon/index/last/values', {headers})
                .then(response => {
                    this.rayons = response.data.rayon;

                }).catch(error => {
                    Swal.fire('Erreur!', 'Une erreur est survenue lors de la recupération des derniers rayons', 'error')
                });
        },

        validerAvantAjout() {
            const isVerifIdValid = this.validatedataOld();

            /*   console.log(isNomChampValid); */
            if (isVerifIdValid === true) {
                this.etatForm = false;
                this.editModal = false;
                console.log("erreur")
                return 0;
            } else {

                if (this.editModal === true) {
                    this.etatForm = true;
                    this.form.intitule = this.form.intitule.toUpperCase();
                    this.form.description = this.form.description.toUpperCase();
                    this.update_batiment(this.idBatiment);
                    this.editModal = false;
                }

                else {
                    this.form.intitule = this.form.intitule.toUpperCase();
                    this.form.description = this.form.description.toUpperCase();
                    this.soumettre();
                    this.etatForm = true;
                    this.editModal = false;
                    console.log("Tokkos");
                }

            }
        },
        validatedata(champ) {
            switch (champ) {
                case 'rayon':
                    this.intitule_erreur = "";
                    // Effectuez la validation pour le champ 'nom'
                    if (this.form.intitule === "") {
                        this.intitule_erreur = "Ce champ est obligatoire"
                        return true
                    }
                    if (this.form.description === "") {
                        this.description_erreur = "Ce champ est obligatoire"
                        return true
                    }
                    break;
                default:
                    break;
            }
            return false;
        },
        validatedataOld() {
            this.intitule_erreur = "";
            var i = 0;
            if (this.form.intitule === "") {
                this.intitule_erreur = "Ce champ est obligatoire"

                i = 1;
            }
            if (this.form.description === "") {
                this.description_erreur = "Ce champ est obligatoire"

                i = 1;
            }
            if (i == 1) return true;

            return false;
        },
        resetForm() {
            this.form.input = "";
            this.form.intitule = "";
            this.form.intitule_erreur = "";
            this.editModal = false;
            const eventData = {
                editModal: false,
            };
            bus.emit('batimentDejaModifier', eventData);
        },

        async update_rayon(id) {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('intitule', this.form.intitule);
            formdata.append('description', this.form.description);
            try {
                await axios.post('/rayon/update/' + id, formdata, {headers});
                showDialog6("Rayon modifié avec succès");
                bus.emit('rayonAjoutee');
                this.resetForm();
                const eventData = {
                    editModal: false,
                };
                bus.emit('rayonDejaModifier', eventData);
            }
            catch (e) {
                if (e.request.status === 404) {
                    showDialog3("Ce rayon existe déjà");
                }
                else {
                    showDialog3("Une erreur est survenue lors de l\'enregistrement");
                }
            }
        },
        monterToupdate(rayon) {

            this.idRayon = rayon.id;
            this.editModal = rayon.editModal;
            this.form.intitule = rayon.intitule;

        }


    
}
}
</script>
