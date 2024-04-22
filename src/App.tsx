import './App.css';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from "styled-components";
import { lightTheme } from './components/themes/Themes';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/themes/Home";
import Projects from './components/themes/otherComp/Projects';
import MySkillsPage from './components/themes/otherComp/MySkillsPage';
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/React-PortFolio" element={<Home />} />
              
            <Route path="/Projects" element={<Projects />} />
            <Route path="/skills" element={<MySkillsPage />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
