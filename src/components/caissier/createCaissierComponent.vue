<template>
    <div class="cote_droit">
        <form @submit.prevent="soumettre">
            <h1 class="sous_titre">Ajout de caissier</h1>
            <div>

            </div>
            <!--Informations personnelles-->
            <p><span class="str">*</span> Assurez vous que la photo est bien carrée</p>
            <div class="photo">
                <label for="dossiers">Glissez la photo ici <span></span>
                    <input type="file" name="dossiers" id="dossiers" @change="ajoutimage" accept="image/*">
                </label>
            </div>

            <div class="personnel">
            <input type="text" name="nom" id="nom" placeholder="Nom" v-model="form.nom">
            <input type="text" name="prenom" id="prenom" placeholder="Prenom" v-model="form.prenom">
            <input type="date" name="date_naissance" id="date_naissance" placeholder="Date de naissance" v-model="form.date_naissance">
            <input type="text" name="lieu_naissance" id="lieu_naissance" placeholder="Lieu de Naissance" v-model="form.lieu_naissance">
            <input type="text" name="nationalite" id="nationalite" placeholder="Nationalité" v-model="form.nationalite">
        </div>

            <div class="sexe">
                <span class="b">Sexe</span>
                <label for="masculin">Masculin
                   <span></span>
                    <input type="radio" name="sexe" id="masculin" value="masculin" v-model="form.genre">
                </label>
                <label for="feminin">Feminin
                   <span></span>
                    <input type="radio" name="sexe" id="feminin" value="feminin" v-model="form.genre">
                </label>
            </div>
            <div class="num-addr">

                <input type="tel" name="telephone" id="telephone" placeholder="Tel : 77 234 48 43" v-model="form.telephone">
                <input type="text" name="adresse" id="adresse" placeholder="Adresse" v-model="form.adresse">
                <input type="mail" name="email" id="email" placeholder="Email" v-model="form.email">
            </div>


            <div class="roles">
                <select name="role" id="role" v-model="form.id_role">
                        <option value=""> Role</option>
                        <option v-for="role in roles" :key="role.id">{{ role.intitule }}</option>
                </select>
            </div>

            <div class="services">
                <select name="service" id="service" v-model="form.id_service">
                        <option value=""> Service</option>
                        <option v-for="service in services" :key="service.id">{{ service.nom_service }}</option>
                </select>
            </div>



             <!-- <div class="identifiants">
                <input type="text" name="matricule" id="matricule" placeholder="Matricule" v-model="form.contact_urgence_2">
                <input type="password" name="mot_de_passe" id="mot_de_passe" placeholder="Mot de passe" v-model="form.contact_urgence_2">
            </div> -->



            <!--paiement-->


            <div class="boutons">
                <input type="submit" value="Ajouter">
                <button type="button">Annuler</button>
            </div>
        </form>
    </div>
</template>

<script>
import bus from '../../eventBus';
import axios from '@/axios';
import Form from 'vform';
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
  },
    name:"createCaissierCompenent",
    data(){
        return {
            filieres:[],
            form:new Form({
                'nom':"",
                'prenom':"",
                'genre':"",
                'adresse':"",
                'telephone':"",
                'email':"",
                'date_naissance':"",
                'lieu_naissance':"",
                'nationalite':"",
                'id_role':"",
                'id_service':""
            }),
            photo:"",
            roles:[],
            services:[],

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

    mounted(){
        this.get_role();
        this.get_service();

    },

    methods:{
        ...mapActions(["login", "logout"]),
        async soumettre(){
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            const formdata = new FormData();
            formdata.append('nom_caissier', this.form.nom  );
            formdata.append('prenom_caissier', this.form.prenom  );
            formdata.append('lieu_naissance_caissier', this.form.lieu_naissance);
            formdata.append('date_naissance_caissier', this.form.date_naissance);
            formdata.append('genre_caissier', this.form.genre);
            formdata.append('adresse_caissier', this.form.adresse);
            formdata.append('email_caissier', this.form.email);
            formdata.append('telephone_caissier', this.form.telephone);
            formdata.append('nationalite_caissier', this.form.nationalite);
            formdata.append('id_role', this.form.id_role);
            formdata.append('id_service', this.form.id_service);
            formdata.append('photo', this.photo);





            if(this.form.nom!=="" && this.form.prenom!=="" && this.form.telephone!=="" && this.form.date_naissance!==""){
                try{
                    const create_store=await axios.post('/caissier/store', formdata, {headers});
                    Swal.fire('Succes!','caissier ajouté avec succés','succes')
                    this.resetForm();
                    bus.emit('formationAjoutee');
                }
                catch(e){
                    console.log(e)
                    Swal.fire('Erreur!','Une erreur est survenue lors de l\'enregistrement','error')
                }

            }else{
                Swal.fire('Erreur!','Veillez remplir tous les champs obligatoires','error')
            }


        },


         async get_role(){
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };

             await axios.get('/roles/index', {headers})
             .then(response => {
                 this.roles=response.data.role


            }).catch(error=>{
                Swal.fire('Erreur!','Une erreur est survenue lors de la recuperation des roles','error')
            });
        },

        async get_service(){
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };

            await axios.get('/service/index', {headers})
            .then(response => {
                this.services=response.data.service


           }).catch(error=>{
               Swal.fire('Erreur!','Une erreur est survenue lors de la recuperation des services','error')
           });
       },

        ajoutimage(event){
            this.photo=event.target.files[0];
        },
        resetForm(){
            this.form.nom="";
            this.form.prenom="";
            this.form.genre="";
            this.form.adresse="";
            this.form.telephone="";
            this.form.email="";
            this.form.date_naissance="";
            this.form.lieu_naissance="";
            this.form.nationalite="";
            this.form.id_role="";
            this.form.id_service="";

        }


    }
   }
</script>

