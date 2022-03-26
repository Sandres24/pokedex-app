import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ProtectedRoutes } from './components';
import {
   ConfigPage,
   EncountersPage,
   LoginPage,
   PokemonPage,
   PokemonsPage,
} from './views';

function App() {
   const theme = useSelector((state) => state.theme);

   if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
   } else if (theme === 'dark') {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
   }

   return (
      <div className='App'>
         <Routes>
            <Route path='/' element={<LoginPage />} />

            <Route element={<ProtectedRoutes />}>
               <Route path='/pokedex' element={<PokemonsPage />} />
               <Route path='/pokedex/:id' element={<PokemonPage />} />
               <Route path='/pokedex/:id' element={<EncountersPage />} />
               <Route path='/config' element={<ConfigPage />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
