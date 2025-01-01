import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const quaryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<QueryClientProvider client={quaryClient}>
<App />
</QueryClientProvider>
</BrowserRouter>
)