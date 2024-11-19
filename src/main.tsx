import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GetData from "./context/GetData.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <GetData>
        <BrowserRouter>
           <App />
        </BrowserRouter>
     </GetData>
  </StrictMode>,
)
