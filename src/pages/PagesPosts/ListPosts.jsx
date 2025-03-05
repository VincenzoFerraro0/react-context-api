// Importa gli hook di React per gestire lo stato e gli effetti collaterali
import { useEffect } from "react";

// Importa Link per creare link di navigazione dinamici
import { Link } from 'react-router-dom';

// Hook personalizzato per usare il contesto globale
import { useGlobalContext } from "../../context/GlobalContext";

// Importa il componente PostCard per visualizzare ogni post
import CardPost from "../../components/CardPost";

export default function ListPosts() {

    const {posts, fetchData} = useGlobalContext();

    // Effettua il recupero dei dati al caricamento del componente
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-gray-50 p-6 min-h-screen transition-all">
            <div className="container mx-auto ">
              {/* Mappa i post ricevuti e crea una card per ognuno */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
                    {
                        posts.map((post) => {
                            const {id, title, content, tags, url} = post
                            return (
                                <div
                                    key={id}
                                    className="p-4 border rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-200 transition-allp-4 border rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
                                >
                                    {/* Link per visualizzare il post singolo */}
                                    <Link to={`/posts/${id}`}>
                                        <CardPost
                                            title={title}
                                            content={content}
                                            tags={tags}
                                            url={url}
                                        />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};
