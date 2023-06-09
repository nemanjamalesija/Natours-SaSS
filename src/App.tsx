import Header from './components/Header';
import About from './sections/About';
import BookForm from './sections/BookForm';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Navigation from './sections/Navigation';
import Testimonials from './sections/Testimonials';
import Tours from './sections/Tours';
import PopUp from './sections/PopUp';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Header />
      <About />
      <Features />
      <Tours />
      <Testimonials />
      <BookForm />
      <Footer />
      <PopUp />
    </div>
  );
}

export default App;
