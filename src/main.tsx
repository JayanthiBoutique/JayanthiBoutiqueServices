import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { setupSectionAnimations } from './utils/animations.ts';

// Component wrapper with animation setup
const AppWithAnimations = () => {
  useEffect(() => {
    // Set up animations after component mounts
    setupSectionAnimations();
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithAnimations />
  </StrictMode>
);