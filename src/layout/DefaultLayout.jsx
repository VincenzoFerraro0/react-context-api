// Importa il componente Header che contiene la navigazione
import Header from "../section/Header";

// Importa il componente Footer che sarà mostrato in tutte le pagine
import Footer from "../section/Footer";

// Importa Outlet da React Router per rendere dinamico il contenuto della pagina
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            {/* Header fisso per tutte le pagine */}
            <Header />

            {/* Outlet è il punto in cui verranno renderizzate le pagine dinamiche */}
            <Outlet />

            {/* Footer fisso per tutte le pagine */}
            <Footer />
        </>
    );
};
