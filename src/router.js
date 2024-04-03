import { createRouter, createWebHistory } from "vue-router";

// Importer les composants nécessaires
import Login from './components/auth/loginComponent.vue';
import Dashboard from './components/admin/adminComponent.vue';
import listeServiceComponent from './components/service/listeServiceComponent.vue';
import createServiceComponent from './components/service/createServiceComponent.vue';
import listeDirectionComponent from './components/direction/listeDirectionComponent.vue';

import createDirectionComponent from './components/direction/createDirectionComponent.vue';
import listeUserComponent from './components/utilisateur/listeUserComponent.vue';
import utilisateurComponent from './components/utilisateur/utilisateurComponent.vue';
import inscriptionComponent from './components/eleve/inscriptionComponent.vue';
import listeInscriptionComponent from './components/eleve/listeInscriptionComponent.vue';
import listeDepartementComponent from './components/departement/listeDepartementComponent.vue';
import createDepartementComponent from './components/departement/createDepartementComponent.vue';
import listeTypeFormationComponent from './components/type_formation/listeTypeFormationComponent.vue';
import createTypeFormationComponent from './components/type_formation/createTypeFormationComponent.vue';
import createClasseComponent from './components/classe/createClasseComponent.vue';
import listeClasseComponent from './components/classe/listeClasseComponent.vue';
import createBatimentComponent from './components/batiment/createBatimentComponent.vue';
import listeBatimentComponent from './components/batiment/listeBatimentComponent.vue';
import listeSalleComponent from './components/salle/listeSalleComponent.vue';
import createSalleComponent from './components/salle/createSalleComponent.vue';
import createUniteDeFormationComponent from './components/unite_de_formation/createUniteDeFormationComponent.vue';
import listeUniteDeFormationComponent from './components/unite_de_formation/listeUniteDeFormationComponent.vue';
import createMatiereComponent from './components/matiere/createMatiereComponent.vue';


import createOrganismeComponent from './components/organisme/createOrganismeComponent.vue';
import createExemplaireComponent from './components/exemplaire/createExemplaireComponent.vue';
import createRetardComponent from './components/retard/createRetardComponent.vue';
import createParticiperComponent from './components/participer/createParticiperComponent.vue';
import createFinancerBourseComponent from './components/financer_bourse/createFinancerBourseComponent.vue';

import createTypeEvaluationComponent from './components/type_evaluation/createTypeEvaluationComponent.vue';
import createTypeMaterielComponent from './components/type_materiel/createTypeMaterielComponent.vue';
import createEmprunterLivreComponent from './components/emprunter_livre/createEmprunterLivreComponent.vue';
import createEmprunterMaterielComponent from './components/emprunter_materiel/createEmprunterMaterielComponent.vue';
import createRessourcePedagogiqueComponent from './components/ressource_pedagogique/createRessourcePedagogiqueComponent.vue';
import createEditeurComponent from './components/editeur/createEditeurComponent.vue';
import createEditionComponent from './components/edition/createEditionComponent.vue';
import createCategorieComponent from './components/categorie/createCategorieComponent.vue';
import createAuteurComponent from './components/auteur/createAuteurComponent.vue';
import listeAuteurComponent from './components/auteur/listeAuteurComponent.vue';
import createRayonComponent from './components/rayon/createRayonComponent.vue';
import createLivreComponent from './components/livre/createLivreComponent.vue';

/* import createPaiementComponent from './components/paiement/createPaiementComponent.vue';
import listePaiementComponent from './components/paiement/listePaiementComponent.vue';

import createAnneeComponent from './components/annee_academique/createAnneeComponent.vue'; */
import createSeminaireComponent from './components/seminaire/createSeminaireComponent.vue';
import createDossierMedicalComponent from './components/dossier_medical/createDossierMedicalComponent.vue';
import createArchiveComponent from './components/archive/createArchiveComponent.vue';


/* import createPersonnelAdministratifComponent from './components/personnel_administratif/createPersonnelAdministratifComponent.vue';

import createPersonnelAppuiComponent from './components/personnel_appui/createPersonnelAppuiComponent.vue';

import listePersonnelAdministratifComponent from './components/personnel_administratif/listePersonnelAdministratifComponent.vue';
import listePersonnelAppuiComponent from './components/personnel_appui/listePersonnelAppuiComponent.vue';
import listeValiderInscriptionComponent from './components/caissier/listeValiderInscriptionComponent.vue'; */
import validerInscriptionComponent from './components/caissier/validerInscriptionComponent.vue';
import createAlerteComponent from './components/alerte/createAlerteComponent.vue';
/* import listeAlerteComponent from './components/alerte/listeAlerteComponent.vue';
import dashboardComponent from './components/dashboard/dashboardComponent.vue'; */
import profileUserComponent from './components/utilisateur/profileUserComponent.vue';
import dashboardComponent from './components/caissier/dashboardComponent.vue';

const routes = [
    {
        path: '/Login',
        component: Login,
        meta: {public: true} // Marquer cette route comme publique si nécessaire

    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/dashboardCaissier',
        component: dashboardComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/service',
        component: listeServiceComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createservice',
        component: createServiceComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listedirection',
        component: listeDirectionComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createdirection',
        component: createDirectionComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeUser',
        component: listeUserComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createUser',
        component: utilisateurComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/inscription',
        component: inscriptionComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeinscription',
        component: listeInscriptionComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createdepartement',
        component: createDepartementComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listedepartement',
        component: listeDepartementComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeTypeFormation',
        component: listeTypeFormationComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createTypeFormation',
        component: createTypeFormationComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createClasse',
        component: createClasseComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeClasse',
        component: listeClasseComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createBatiment',
        component: createBatimentComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeBatiment',
        component: listeBatimentComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeSalle',
        component: listeSalleComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createSalle',
        component: createSalleComponent,

        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createFiliere',
        component: createUniteDeFormationComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeFiliere',
        component: listeUniteDeFormationComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/compte/bloquer',
        redirect: '/connexion'
    },
    
    
    // Ajout de la route /direction
    {
        path: '/direction',
        redirect: '/listedirection' // Rediriger vers la route correspondante
        
    },
    {
        path: '/creatematiere',
        component: createMatiereComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createorganisme',
        component: createOrganismeComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createdossiermedical',
        component: createDossierMedicalComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
   /*  {
        path: '/createinfirmier',
        component: createInfirmieComponent,
        meta: {public: true} 
    }, */
    {
        path: '/createEmprunterLivre',
        component: createEmprunterLivreComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeEmprunterlivre',
        //component: createEmprunterLivreComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createTypeEvaluation',
        component:createTypeEvaluationComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createSeminaire',
        component:createSeminaireComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createParticiper',
        component:createParticiperComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
  /*   {
        path: '/createSpecialiste',
        component:createSpecialisteComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
/*     {
        path: '/createtuteur',
        component:createTuteurComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
  /*   {
        path: '/createMois',
        component:createMoisComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/createLivre',
        component:createLivreComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
/*     {
        path: '/listeLivre',
        component:listeLivreComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/createEditeur',
        component:createEditeurComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
 /*    {
        path: '/listeEditeur',
        component:listeEditeurComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/createAuteur',
        component:createAuteurComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/listeAuteur',
        component:listeAuteurComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createRayon',
        component:createRayonComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
 /*    {
        path: '/listeRayon',
        component:listeRayonComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/createCategorie',
        component:createCategorieComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
   /*  {
        path: '/listeCategorie',
        component:listeCategorieComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
  /*   {
        path: '/createBibliothecaire',
        component:createBibliothecaireComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
   /*  {
        path: '/Bibliothecaire',
        component:bibliothecaireComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/createExemplaire',
        component:createExemplaireComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
   /*  {
        path: '/listeExemplaire',
        component:listeExemplaireComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/RessourcePedagogique',
        component:createRessourcePedagogiqueComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createArchive',
        component:createArchiveComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createEdition',
        component:createEditionComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    /* {
        path: '/listeEdition',
        component:listeEditionComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/createFinancerBourse',
        component:createFinancerBourseComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/createTypeMateriel',
        component:createTypeMaterielComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
 /*    {
        path: '/createCaissier',
        component:createCaissierComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
  /*   {
        path: '/createCour',
        component:createCourComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
 /*    {
        path: '/createEmprunterMateriel',
        component:createEmprunterMaterilComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
 /*    {
        path: '/createConsultation',
        component:createConsultationComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
  /*   {
        path: '/formateur',
        component:accueilComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
 /*    {
        path: '/formateurCour',
        component:courComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
  /*   {
        path: '/formateurNote',
        component:listeNoteComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    /* {
        path: '/formateurProfil',
        component:profilComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/ProfilUser',
        component:profileUserComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/Retard',
        component:createRetardComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    /* {
        path: '/recouvrement',
        component:createRecouvrementComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    }, */
    {
        path: '/createAlerte',
        component:createAlerteComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/CaissierInscription',
        component:listeInscriptionComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    {
        path: '/validerPaiementInscription',
        component:validerInscriptionComponent,
        meta: {public: true} // Marquer cette route comme publique si nécessaire
    },
    
];

const router = createRouter({
    history: createWebHistory(),
     scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');


    if(!to.meta.public && !isAuthenticated){
        //next({name: 'Login'});
        //this.$router.push('/login');
        next('/login');
    } else{
        next();
    }
});


export default router;

