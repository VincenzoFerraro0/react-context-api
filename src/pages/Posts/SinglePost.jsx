// Importa gli hook di React per gestire stato ed effetti collaterali
import { useEffect, useState } from "react";

// Importa `useParams` per ottenere i parametri dell'URL (come l'ID del post)
import { useParams } from "react-router-dom";

// Importa axios per effettuare la richiesta HTTP all'API
import axios from "axios";

// Importa NavLink per creare link di navigazione dinamici
import { Link } from 'react-router-dom';

// Importa il componente PostCard per visualizzare il singolo post
import PostCard from "../../components/PostCard";


export default function SinglePost() {
    // Ottieni l'ID del post dalla URL usando `useParams`
    const { id } = useParams();

    // Stato per memorizzare i dettagli del post
    const [singlePost, singleSetPost] = useState(null);

    // URL dell'API da cui recuperare i post
    const url = import.meta.env.VITE_ENDPOINT_URL;

    // Effettua una richiesta HTTP per ottenere il post specifico usando l'ID
    useEffect(() => {
        // Quando l'ID cambia, esegui la richiesta per ottenere il post
        axios.get(`${url}/${id}`)
            .then((res) => {
                // Memorizza il post ricevuto nello stato
                singleSetPost(res.data);
            });
    }, [id, url]); // La chiamata verrà fatta ogni volta che l'ID o l'URL cambiano

    return (

        <div className="bg-gray-50 p-6 min-h-screen transition-all">
            <div className="container mx-auto " >
                {/* Se il post è stato caricato, visualizzalo usando PostCard */}
                {singlePost &&
                    <PostCard
                        id={singlePost.id}
                        title={singlePost.title}
                        content={singlePost.content}
                        tags={singlePost.tags}
                        url={singlePost.url}
                    />}
            </div>
        </div>
    );
};
