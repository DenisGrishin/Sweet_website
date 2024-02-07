import './scss/style.scss';
import { Footer } from './ui/Footer/Footer';
import { Header } from './ui/Header/Header';
import { Main } from './ui/Main/Main';

function App() {
  return (
    <div className="wrapper max-w-[1300px] container mx-auto px-12">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
