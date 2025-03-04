import { createContext, useState, useContext } from 'react';

// Importa axios per effettuare la richiesta HTTP all'API
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {


    // Stato per memorizzare la lista dei post
    const [posts, setPosts] = useState([]);

    // Stato per memorizzare i dettagli del post
    const [singlePost, singleSetPost] = useState(null);


    // URL dell'API definito nelle variabili d'ambiente
    const url = import.meta.env.VITE_ENDPOINT_URL;

    //chimate api
    //chimata per ottenere tutti i posts
    const fetchData = () => {
        axios.get(url)
            .then((res) => setPosts(res.data)) // Salva i dati ricevuti nello stato `posts`
            .catch(err => console.error(err))
    };


    //chimata api per i singoli post
    const getPostId = (id) => {
        // Quando l'ID cambia, esegui la richiesta per ottenere il post
        axios.get(`${url}/${id}`)
            .then((res) => {
                // Memorizza il post ricevuto nello stato
                singleSetPost(res.data);
            });
    };


    const value = {
        posts,
        singlePost,
        fetchData,
        getPostId
    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )

};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };