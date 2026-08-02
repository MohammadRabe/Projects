import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.jsx'
import './App.css'
import "antd/dist/reset.css";
import './components/hero-3/skill-bar.css'
import './components/hero-4/track-card.css'

createRoot(document.getElementById('root')).render(
    <App />
)
