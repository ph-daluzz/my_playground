import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomeScreen } from './components/home_screen.jsx';
import { MovieDetails } from './components/movieDetails_screen.jsx';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/*ROTAS PRINCIPAIS*/}
        <Route path='/' element={<HomeScreen />} />
        <Route path='/movie_details/:id' element={<MovieDetails />} />

        {/*ROTA FALLBACK CASO 404*/}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
