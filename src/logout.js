// Importez Axios
import axios from 'axios';

// Fonction pour se déconnecter
const logout = async () => {
    try {
        const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };
        // Faites une requête POST vers l'URL de déconnexion de votre API Laravel
        const response = await axios.post('http://127.0.0.1:8000/api/logout');
        // Traitez la réponse ou faites une redirection, par exemple
        console.log(response.data); // Affichez la réponse
        // Redirigez l'utilisateur vers la page de connexion ou une autre page appropriée
        window.location.href = '/login';
    } catch (error) {
        // Gérez les erreurs, par exemple affichez un message d'erreur
        console.error('Erreur lors de la déconnexion :', error);
    }
};

export default logout;
