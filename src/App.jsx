// Importa le componenti necessari da React Router per gestire la navigazione
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pagine da importare
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ListPosts from './pages/PagesPosts/ListPosts';
import SinglePost from './pages/PagesPosts/SinglePost';

// Layout predefinito da usare in tutta l'app
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <>
      {/* Il BrowserRouter è il componente che gestisce la navigazione del router */}
      <BrowserRouter>
        <Routes>
          {/* Definisce una route che utilizza il layout predefinito */}
          <Route Component={ DefaultLayout }>
            {/* Definisce le rotte specifiche per le pagine */}
            <Route path="/" Component={ HomePage } />               {/* Home Page */}
            <Route path="/about-us" Component={ AboutUs } />         {/* Pagina Chi Siamo */}
            <Route path="/posts" Component={ ListPosts } />              {/* Lista dei Post */}
            <Route path="/posts/:id" Component={ SinglePost } />     {/* Pagina Singolo Post */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
