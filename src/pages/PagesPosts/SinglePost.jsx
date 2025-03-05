// Importa gli hook di React 
import { useEffect } from "react";

// Importa `useParams` per ottenere i parametri dell'URL (come l'ID del post)
import { useParams } from "react-router-dom";

// Importa il componente PostCard per visualizzare il singolo post
import CardPost from "../../components/CardPost";

import { useGlobalContext } from "../../context/GlobalContext";
export default function SinglePost() {

    const { singlePost, getPostId } = useGlobalContext();
    // Ottieni l'ID del post dalla URL usando `useParams`
    const { id } = useParams();

    // Recupera i dati del post quando cambia l'ID
    useEffect(() => {
        getPostId(id)
    }, [id]);

    return (

        <div className="bg-gray-50 p-6 min-h-screen transition-all">
            <div className="container mx-auto " >
                 {/* Controlla se il post è stato caricato prima di renderizzarlo */}
                {singlePost &&
                    <CardPost
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
