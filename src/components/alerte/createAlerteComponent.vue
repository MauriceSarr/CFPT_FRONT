<template>
    <dialog data-modal-ajout class="modal actif">
        <div class="titres">
            <h1>Nouvelle Alerte</h1>
        </div>

        <form @submit.prevent="validerAvantAjout()" action="" method="dialog">

            <div class="informations">
                <div class="titres">
                    <h1>Nouvelle Alerte</h1>
                </div>

                <div class="champ">
                    <label for="titre" :class="{ 'couleur_rouge': (this.titre_erreur) }">Titre</label>
                    <input type="text" name="titre" id="titre" v-model="form.titre" @input="validatedata('titre')"
                        :class="{ 'bordure_rouge': (this.titre_erreur) }">
                    <span class="erreur">{{ this.titre_erreur }}</span>
                </div>

                <div class="champ">
                    <label for="statut" :class="{ 'couleur_rouge': (this.statut_erreur) }">Statut</label>
                    <select v-model="form.statut" @change="validatedata('statut')"
                        :class="{ 'bordure_rouge': (this.statut_erreur) }">
                        <option value="urgence">Urgence</option>
                        <option value="Annonce">Annonce</option>
                    </select>
                    <span class="erreur" v-if="statut_erreur !== ''">{{ statut_erreur }}</span>
                </div>

                <div class="champ">
                    <label for="message" :class="{ 'couleur_rouge': (this.message_erreur) }">Message</label>
                    <textarea rows="5" type="text" v-model="form.message" id="message" @input="validatedata('message')"
                        :class="{ 'bordure_rouge': (this.message_erreur) }">
                    </textarea>
                    <span class="erreur">{{ this.message_erreur }}</span>
                </div>






                <div class="groupe_champs validation">
                    <!-- Mettre la valeur 1 dans le data-close-modal pour qu'il soit actif -->
                    <button type="button" data-close-modal="1" class="annuler"><span data-statut="visible"
                            @click="resetForm">Annuler</span></button>
                    <button v-if="this.editModal === false" type="submit" class="suivant"><span
                            data-statut="visible">Ajouter</span></button>
                    <button v-if="this.editModal === true" type="submit" data-close-modal="0" class="suivant"><span
                            data-statut="visible">Modifier</span></button>

                </div>
            </div>

        </form>
    </dialog>
</template>
    
<script>
import bus from '../../eventBus';
import axios from '@/axios';
import Form from 'vform';
import appheader from "../layout/header.vue";
import appfooter from "../layout/footer.vue";
import appnavbar from "../layout/navbar.vue";
import appafterContent from "../layout/afterContent.vue";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    appnavbar,
    appfooter,
    appheader,
    appafterContent,
  },
    name: "createAlerteCompenent",
    data() {
        return {
            form: new Form({
                'titre': "",
                'message': "",
                'statut': "",
            }),
            titre_erreur: "",
            message_erreur: "",
            statut_erreur: "",
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
        bus.on('alerteModifier', (eventData) => {
            this.idSalle = eventData.idSalle;
            this.editModal = eventData.editModal;
            this.form.titre = eventData.titre;
            this.form.message = eventData.message;
            this.form.statut = eventData.statut;
        });
    },



    methods: {
        ...mapActions(["login", "logout"]),
        async soumettre() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('titre', this.form.titre);
            formdata.append('message', this.form.message);
            formdata.append('statut', this.form.statut);
            try {
                await axios.post('/alerte/store', formdata, {headers});
                this.resetForm();
                bus.emit('alerteAjoutee');
            }
            catch (e) {

                if (e.request.status === 404) {
                    Swal.fire('Erreur !', 'Ce message existe déjà', 'error')
                }
                else {
                    Swal.fire('Erreur !', 'Une erreur est survenue lors de l\'enregistrement', 'error')
                }

            }

        },

        validerAvantAjout() {
            // Exécutez la validation des champs
            const isNomSalleValid = this.validatedataold();

            //console.log(isNomSalleValid);

            if (isNomSalleValid === true) {
                this.etatForm = false;
                this.editModal = false;
                return 0;
            } else {

                if (this.editModal === true) {
                    this.etatForm = true;
                    this.form.titre = this.form.titre.toUpperCase();
                    this.update_salle(this.idSalle);
                    this.closeModal('[data-modal-confirmation-modifier]');
                    this.editModal = false;
                }

                else {
                    this.form.titre = this.form.titre.toUpperCase();
                    this.soumettre();
                    this.etatForm = true;
                    this.closeModal('[data-modal-confirmation]');
                    this.editModal = false;

                }
            }
        },

        resetForm() {
            this.form.titre = "";
            this.form.message = "";
            this.form.statut = "";
            this.titre_erreur = "";
            this.message_erreur = "";
            this.statut_erreur = "";
            this.editModal === false;
        },



        validatedataold() {
            this.titre_erreur = "";
            this.message_erreur = "";
            this.statut_erreur = "";
            var i = 0;
            if (this.form.titre === "") {
                this.titre_erreur = "Ce champ est obligatoire"
                i = 1;
            }


            if (this.form.message === "") {
                this.message_erreur = "Ce champ est obligatoire"
                i = 1;

            }


            if (this.form.statut === "") {
                this.statut_erreur = "Vous avez oublié de selectionner le statut"
                    ;
                i = 1;
            }

            if (i === 1)
                return true;
            return false;

        },
        validatedata(champ) {
            // Réinitialiser les erreurs pour le champ actuel

            switch (champ) {
                case 'titre':
                    // Effectuez la validation pour le champ 'nom'
                    this.titre_erreur = "";

                    if (this.form.titre === "") {
                        this.titre_erreur = "Ce champ est obligatoire"
                        return true

                    }

                    // Ajoutez d'autres validations si nécessaire
                    break;
                case 'message':

                    this.message_erreur = "";

                    if (this.form.message === "") {
                        this.message_erreur = "Ce champ est obligatoire"
                        return true
                    }

                    break;
                case 'statut':

                    this.statut_erreur = "";

                    if (this.form.statut === "") {
                        this.statut_erreur = "Vous avez oublié de selectionner le statut"
                        return true;
                    }
                    break;
                default:
                    break;
            }
        },


        closeModal(selector) {
            /*  var ajout = document.querySelector('[data-modal-ajout]'); */
            var confirmation = document.querySelector(selector);

            /* console.log(ajout); */
            /*  if (this.etatForm == true) {
                 var actif = document.querySelectorAll('.actif');
                 actif.forEach(item => {
                     item.classList.remove("actif");
                 });
                 //ajout.classList.remove("actif");
                 ajout.close();
             } */
            this.editModal === false;

            confirmation.style.backgroundColor = 'white';
            confirmation.style.color = 'var(--clr)';

            confirmation.showModal();
            confirmation.classList.add("actif");
            setTimeout(function () {
                confirmation.close();

                setTimeout(function () {
                    confirmation.classList.remove("actif");
                }, 100);

            }, 1700);
        },


        async update_salle(id) {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('intitule', this.form.titre);
            formdata.append('nombre_place', this.form.message);
            formdata.append('id_batiment', this.form.statut);

            //if(this.form.nom!==""){
            /*  try {
                 await axios.post('/salle/update/' + id, formdata);
                 bus.emit('salleAjoutee');
                 this.resetForm();
                 this.editModal = false;
             }
             catch (e) {
                 console.log(e) */
            /*      if(e.request.status===404){
                     Swal.fire('Erreur !','Ce salle existe déjà','error')
                 }
                 else{
                     Swal.fire('Erreur !','Une erreur est survenue lors de l\'enregistrement','error')
                 } */
            /*  } */
        }

    }
}
</script>