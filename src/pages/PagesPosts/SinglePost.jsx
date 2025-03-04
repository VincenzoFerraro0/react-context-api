// Importa gli hook di React per gestire stato ed effetti collaterali
import { useEffect } from "react";

// Importa `useParams` per ottenere i parametri dell'URL (come l'ID del post)
import { useParams } from "react-router-dom";


// Importa il componente PostCard per visualizzare il singolo post
import CardPost from "../../components/CardPost";


export default function SinglePost() {
    // Ottieni l'ID del post dalla URL usando `useParams`
    const { id } = useParams();

    // Effettua una richiesta HTTP per ottenere il post specifico usando l'ID
    useEffect(() => {

    }, [id, url]); // La chiamata verrà fatta ogni volta che l'ID o l'URL cambiano

    return (

        <div className="bg-gray-50 p-6 min-h-screen transition-all">
            <div className="container mx-auto " >
                {/* Se il post è stato caricato, visualizzalo usando PostCard */}
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
