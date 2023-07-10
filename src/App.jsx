import {
  Home,
  About,
  Services,
  Resume,
  Portfolio,
  Testimonials,
  Blog,
  Contact,
} from './pages';
import { Sidebar } from './components';
import './App.css';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
