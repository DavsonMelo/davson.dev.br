import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Contato from './pages/contato/Contato';
import Sobre from './pages/sobre/Sobre';

import JavascriptPage from './pages/linguagens/JavascriptPage';
import PythonPage from './pages/linguagens/PythonPage';
import TypescriptPage from './pages/linguagens/TypescriptPage';
import ReactPage from './pages/linguagens/ReactPage';
import CPage from './pages/linguagens/C++Page';
import JavaPage from './pages/linguagens/JavaPage';
import GolandPage from './pages/linguagens/GolandPage';
import SwiftPage from './pages/linguagens/SwiftPage';
import KotlinPage from './pages/linguagens/KotlinPage';
import PHPPage from './pages/linguagens/PHPPage';
import RustPage from './pages/linguagens/RustPage';
import RubyPage from './pages/linguagens/RubyPage';
import VSCodePage from './pages/linguagens/VSCodePage';
import IntellijPage from './pages/linguagens/IntellijPage';
import AndroidStudioPage from './pages/linguagens/AndroidStudioPage';
import HTMLPage from './pages/linguagens/HTMLPage'; 
import CSSPage from './pages/linguagens/CSSPage'; // Importando a página CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="/javascript" element={<JavascriptPage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/typescript" element={<TypescriptPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/c++" element={<CPage />} />
        <Route path="/java" element={<JavaPage />} />
        <Route path="/go" element={<GolandPage />} />
        <Route path="/swift" element={<SwiftPage />} />
        <Route path="/kotlin" element={<KotlinPage />} />
        <Route path="/php" element={<PHPPage />} />
        <Route path="/rust" element={<RustPage />} />
        <Route path="/ruby" element={<RubyPage />} />
        <Route path="/vscode" element={<VSCodePage />} />
        <Route path="/intellij" element={<IntellijPage />} />
        <Route path="/android-studio" element={<AndroidStudioPage />} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/css" element={<CSSPage />} /> {/* Adicionei a rota para CSSPage */}

        
        {/* Adicione mais rotas conforme necessário */}

      </Routes>
    </Router>
  );
}

export default App;
