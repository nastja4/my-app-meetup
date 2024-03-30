
import App from './App';
import { StrictMode } from 'react';  // a tool for highlighting potential problems in an application
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


