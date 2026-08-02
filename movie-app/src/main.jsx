import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/home-page/header/header.css'
import './components/home-page/movies-section/movies-section.css'
import './pages/movie-details/movie-details.css';
import './components/home-page/movies-section/movie-card/movie-card.css'

createRoot(document.getElementById('root')).render(
            <App />
)
