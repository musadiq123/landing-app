import './App.css';
import Home from './pages/Home';
import ThemeProvider from "./theme";
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Home/>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
