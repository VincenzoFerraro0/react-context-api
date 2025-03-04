export default function CardPost({ id, title, content, tags, url }) {
    return (
        <div key={id} className="bg-white md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all max-w-md mx-auto">
             {/* Titolo del post */}
            <h3 className="text-2xl font-semibold text-gray-800" >{title}</h3>
            {/* Immagine del post */}
            <figure className="my-4" >
                <img 
                    className="w-full object-cover rounded-lg" 
                    src={url} 
                    alt={title}
                />
            </figure>
            {/* Contenuto del post */}
            <p className="text-gray-700 text-lg">{content}</p>
            {/* Lista dei tag (se presenti) */}
            {tags && Array.isArray(tags) && (
                <ul className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <li  className="bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full" key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}