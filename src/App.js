import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Header/>
      <Main/>
      <Footer/>
    </UserProvider>
  );
}

export default App;
