// Importa gli hook di React per gestire lo stato e gli effetti collaterali
import { useEffect, useState } from "react";

// Importa Axios per effettuare richieste HTTP
import axios from "axios";

// Importa NavLink per creare link di navigazione dinamici
import { Link } from 'react-router-dom';

// Importa il componente PostCard per visualizzare ogni post
import PostCard from "../../components/PostCard";

export default function Posts() {
    // Stato per memorizzare la lista dei post
    const [posts, setPosts] = useState([]);

    // URL dell'API definito nelle variabili d'ambiente
    const url = import.meta.env.VITE_ENDPOINT_URL;

    // Effettua una richiesta HTTP all'API quando il componente viene montato
    useEffect(() => {
        axios.get(url)
            .then((res) => setPosts(res.data)) // Salva i dati ricevuti nello stato `posts`
            .catch(err => console.error(err))
    }, []); // Il secondo parametro `[]` assicura che la chiamata venga eseguita solo una volta

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
                                    {/* Link al singolo post usando il suo ID */}
                                    <Link to={`/posts/${id}`}>
                                        <PostCard
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
