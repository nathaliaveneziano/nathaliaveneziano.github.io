import {
  Sidebar,
  Home,
  About,
  Services,
  Resume,
  Portfolio,
  Testimonials,
  Blog,
  Contact,
} from './components';
import './App.css';

function App() {
  return (
    <>
      <Sidebar />
      <main className="home">
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
