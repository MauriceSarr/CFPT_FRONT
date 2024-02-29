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
                <!-- start page content -->
                <div class="page-content" v-if="!this.editModal">
                    <div class="page-bar">
                        <div class="page-title-breadcrumb">

                            <ol class="breadcrumb page-breadcrumb pull-right">
                                <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
                                        :href="'/admin/index'">Accueil</a>&nbsp;<i class="fa fa-angle-right"></i>
                                </li>

                                <li class="active"> Paramétres &nbsp;<i class="fa fa-angle-right"></i></li>
                                <li><a class="parent-item" :href="'/batiment/accueil'"> Batiment </a>&nbsp;<i
                                        class="fa fa-angle-right"></i>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="tabbable-line">

                                <ul class="nav customtab nav-tabs" role="tablist">
                                    <li class="nav-item"><a href="#tab1" class="nav-link active"
                                            data-bs-toggle="tab">Batiment</a>
                                    </li>

                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active fontawesome-demo" id="tab1">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card card-box">
                                                    <div class="card-head">
                                                        <header>Tous les batiments</header>
                                                        <div class="tools">
                                                            <a class="fa fa-repeat btn-color box-refresh"
                                                                href="javascript:;"></a>
                                                            <a class="t-collapse btn-color fa fa-chevron-down"
                                                                href="javascript:;"></a>
                                                            <a class="t-close btn-color fa fa-times"
                                                                href="javascript:;"></a>
                                                        </div>
                                                    </div>
                                                    <div class="card-body ">
                                                        <div class="row">
                                                            <div class="col-md-6 col-sm-6 col-6">
                                                                <div class="btn-group">
                                                                    <a :href="'/batiment/create'" id="addRow"
                                                                        class="btn btn-primary">
                                                                        Ajouter <i class="fa fa-plus text-white"></i>
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <table
                                                            class="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                                                            id="example47">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Batiment</th>
                                                                    <th>Nombre de Salle</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr class="odd gradeX"
                                                                    v-for="(batiment, index) in batiments" :key="index">
                                                                    <td>{{ index + 1 }}</td>
                                                                    <td class="left"> {{ batiment.intitule }} </td>
                                                                    <td class="left"> {{ batiment.nbr_salle }} </td>

                                                                    <td class="left">
                                                                        <a class="tblEditBtn" @click="openModal(batiment)">
                                                                            <i class="fa fa-pencil"></i>
                                                                        </a>
                                                                        <a class="tblDelBtn"
                                                                            @click="deleteBatiment(batiment)">
                                                                            <i class="fa fa-trash-o"></i>
                                                                        </a>
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


                <div class="page-content-wrapper" v-show="editModal">
                    <div class="page-content">
                        <div class="page-bar">
                            <div class="page-title-breadcrumb">
                                <div class=" pull-left">
                                    <div class="page-title">Nouveau batiment</div>
                                </div>
                                <ol class="breadcrumb page-breadcrumb pull-right">
                                    <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item"
                                            href="{{ route('admin_index') }}">Tableau
                                            de Bord</a>&nbsp;<i class="fa fa-angle-right"></i>
                                    </li>
                                    <li><a class="parent-item" href="{{ route('batiment_create') }}">Batiment</a>&nbsp;<i
                                            class="fa fa-angle-right"></i>
                                    </li>
                                    <li class="active">Modifier Batiment</li>
                                </ol>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box">
                                    <div class="card-head">
                                        <header>Information</header>
                                        <button id="panel-button"
                                            class="mdl-button mdl-js-button mdl-button--icon pull-right"
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
                                        <FormulaireModification />
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
import appheader from "../layout/header.vue";
import appfooter from "../layout/footer.vue";
import appnavbar from "../layout/navbar.vue";

import FormulaireModification from './createBatimentComponent.vue';

import datatable from 'datatables.net-bs5';
import { mapState, mapActions } from "vuex";
import appafterContent from "../layout/afterContent.vue";

export default {
  components: {
    appnavbar,
    FormulaireModification,
    appfooter,
    appheader,
    appafterContent,
  },
    name: "listeBatimentComponent",
    data() {
        return {
            form: new Form({
                'intitule': ""

            }),
            batiments: [],
            idBatiment: "",
            editModal: false,

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
        bus.on('batimentAjoutee', () => { // Écouter l'événement de nouvelle utilisateur ajoutée
            this.get_batiment(); // Mettre à jour la liste des utilisateurs
        });
        bus.on('batimentDejaModifier', (eventData) => {
            this.editModal = eventData.editModal;
            this.get_batiment();
        });
    },

    methods: {
        ...mapActions(["login", "logout"]),
        initDataTable() {
            this.$nextTick(() => {
                // Initialiser DataTable sur la table avec l'id 'example47' si elle n'a pas déjà été initialisée
                if (!$.fn.DataTable.isDataTable('#example47')) {
                    $('#example47').DataTable({
                        responsive: true,
                        language: {
                            // Messages pour la pagination
                            paginate: {
                                first: 'Premier',
                                previous: 'Précédent',
                                next: 'Suivant',
                                last: 'Dernier'
                            },
                            // Message d'affichage du nombre d'éléments par page
                            lengthMenu: 'Afficher _MENU_ entrées',
                            // Message d'information sur le nombre total d'entrées et le nombre affiché actuellement
                            info: 'Affichage de _START_ à _END_ sur _TOTAL_ entrées',
                            // Message lorsque le tableau est vide
                            emptyTable: 'Aucune donnée disponible dans le tableau',
                            // Message indiquant que la recherche est en cours
                            loadingRecords: 'Chargement en cours...',
                            // Message indiquant que la recherche n'a pas renvoyé de résultats
                            zeroRecords: 'Aucun enregistrement correspondant trouvé',
                            // Message indiquant le nombre total d'entrées
                            infoEmpty: 'Affichage de 0 à 0 sur 0 entrées',
                            // Message indiquant que la recherche est en cours dans le champ de recherche
                            search: 'Recherche :'
                        }
                    });
                }
            });
        },
        async get_batiment() {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            await axios.get('/batiment/index', {headers})
                .then(response => {
                    const allbatiment = response.data.batiment
                    const formattedBatiment = allbatiment.map(bati => {
                        return {
                            id: bati.id,
                            intitule: bati.intitule,
                            nbr_salle: bati.salle.length,
                            editModal: true,
                        };
                    });

                    this.batiments = formattedBatiment;
                    this.initDataTable();


                }).catch(error => {
                    //Swal.fire('Erreur!', 'Une erreur est survenue lors de la recuperation des batiments', 'error')
                    showDialog3("Une erreur est survenue lors de la recuperation des batiments")
                });
        },

        changement(event) {
            this.interesser = event;
        },

        resetForm() {
            this.form.input = "";
            this.form.intitule = "";
        },

        async deleteBatiment(type) {
            const token = localStorage.getItem("token");
            const headers = { Authorization: `Bearer ${token}` };
            Swal.fire({
                title: 'Voulez-vous confirmer la suppression?',
                text: "Cette action sera irréversible!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui',
                cancelButtonText: 'Non'
            }).then((result) => {
                if (result.value) {
                    axios.delete(`/batiment/delete/${type.id}`, {headers}).then(resp => {
                        showDialog6("Batiment supprimé avec succés")
                        this.get_batiment();

                    }).catch(function (error) {
                        console.log(error);
                        showDialog3("Une erreur est survenue lors de la suppression du batiment")

                    })
                }
            });
        },
        openModal(batiment) {
            this.editModal = true;
            // Créez un objet avec les données à envoyer
            const eventData = {
                batiment: batiment,
                editModal: this.editModal,
            };
            bus.emit('batimentModifier', eventData);
        },
    }
}
</script>
