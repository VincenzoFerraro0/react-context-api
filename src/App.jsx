// Importazione delle librerie necessarie per la gestione della navigazione e dei componenti
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importazione delle pagine e dei componenti necessari
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ListPosts from './pages/PagesPosts/ListPosts';
import SinglePost from './pages/PagesPosts/SinglePost';

// Importazione del layout di default
import DefaultLayout from './layout/DefaultLayout';

// Importazione del GlobalContext per la gestione dello stato globale
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    // Provider globale che avvolge tutta l'applicazione per gestire lo stato globale
    <GlobalProvider>
      
      {/* Router per gestire la navigazione tra le pagine */}
      <BrowserRouter>
        <Routes>
          {/* Definizione della route principale con layout predefinito */}
          <Route Component={DefaultLayout}>
            {/* Route per la Home Page */}
            <Route path="/" Component={HomePage} />              
            {/* Route per la pagina "About Us" */}
            <Route path="/about-us" Component={AboutUs} />        
            {/* Route per la lista dei post */}
            <Route path="/posts" Component={ListPosts} />        
            {/* Route per la visualizzazione di un singolo post, con parametro id */}
            <Route path="/posts/:id" Component={SinglePost} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App; 
