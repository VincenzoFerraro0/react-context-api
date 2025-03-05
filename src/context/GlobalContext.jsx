import { createContext, useState, useContext } from 'react';
import axios from "axios";

// Creazione del contesto globale
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    // Stato per memorizzare tutti i post
    const [posts, setPosts] = useState([]);
    // Stato per memorizzare un singolo post selezionato
    const [singlePost, singleSetPost] = useState(null);
    
    // URL dell'API (proveniente dall'ambiente di sviluppo)
    const url = import.meta.env.VITE_ENDPOINT_URL;
    
    // Funzione per recuperare tutti i post
    const fetchData = () => {
        axios.get(url)
            .then((res) => setPosts(res.data)) // Aggiorna lo stato con i dati ricevuti
            .catch(err => console.error(err)); // Gestisce eventuali errori
    };
    
    // Funzione per ottenere i dettagli di un singolo post tramite ID
    const getPostId = (id) => {
        axios.get(`${url}/${id}`)
            .then((res) => {
                singleSetPost(res.data);
            })
            .catch(err => console.error(err)); // Gestisce eventuali errori
    };
    
    // Valori condivisi nel contesto globale
    const value = {
        posts,
        singlePost,
        fetchData,
        getPostId
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook personalizzato per accedere al contesto globale in altri componenti
const useGlobalContext = () => useContext(GlobalContext);

// Esportazione del GlobalProvider e del custom hook per l'uso nei componenti
export { GlobalProvider, useGlobalContext };