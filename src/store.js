import { createStore } from "vuex";
import router from './router';

export default createStore({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
       userNom: localStorage.getItem('userNom'),
       userPrenom: localStorage.getItem('userPrenom'),
       userIdrole: localStorage.getItem('userIdrole'),
       userPhoto: localStorage.getItem('userPhoto'),
       userRole: localStorage.getItem('userrole'),
       //user: JSON.parse(localStorage.getItem('user') || "{}")
    },
    mutations:{ // button (instructions)
        LOGIN(state, userNom, userPrenom, userIdrole, userPhoto, userRole){
           
            state.isLoggedIn= true; //on
            state.userNom = userNom;
            state.userPrenom = userPrenom;
            state.userIdrole = userIdrole;
            state.userPhoto = userPhoto;
            state.userRole = userRole;
            
        },
        LOGOUT(state){
            state.isLoggedIn= false // off
            //state.user = {};
            state.userNom = "";
            state.userPrenom = "";
            state.userIdrole = "";
            state.userPhoto = "";
            state.userRole = "";
        }
    },

    actions:{ // kids
        login({commit}, userNom, userPrenom, userIdrole, userPhoto, userRole){
            commit('LOGIN', userNom, userPrenom, userIdrole, userPhoto, userRole)
        },
        logout({commit, dispatch}){
            commit('LOGOUT')
            dispatch('navigateToLogin')
        },
        navigateToLogin(){
            router.push({name: 'Login'});
        }
    }
});
