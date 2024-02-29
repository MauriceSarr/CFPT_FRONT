<template>
    <div class="cote_droit">
        <form @submit.prevent="soumettre">
            <h1 class="sous_titre">Ajout de l'annee academique</h1>
           
            <div class="personnel">
            <input type="text" name="nom" id="nom" placeholder="  Intitule" v-model="form.nom">
        </div>

        <div class="boutons">
            <input type="submit" value="Ajouter">
            <button type="button">Annuler</button>
        </div>

        </form>
    </div>
</template>

<script>
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
    name:"createAnneeCompenent",
    data(){
        return {
            filieres:[],
            form:new Form({
                'nom':""
               
            }),
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
    
    methods:{
        ...mapActions(["login", "logout"]),
        async soumettre(){
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('intitule', this.form.nom  );
        
            if(this.form.nom!==""){
                try{
                    const create_store=await axios.post('/annee_academique/store', formdata, {headers });
                    Swal.fire('Succes!','annee_academique ajouté avec succés','succes')
                    this.resetForm();
                }
                catch(e){
                    console.log(e)
                    Swal.fire('Erreur!','Une erreur est survenue lors de l\'enregistrement','error')
                }

            }else{
                Swal.fire('Erreur!','Veillez remplir tous les champs ','error')
            }


        },

        resetForm(){
            this.form.nom="";
        }


    }
   }
</script>

