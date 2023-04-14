import Header from './components/Header';
import About from './sections/About';
import BookForm from './sections/BookForm';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Testimonials from './sections/Testimonials';
import Tours from './sections/Tours';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Features />
      <Tours />
      <Testimonials />
      <BookForm />
      <Footer />
    </div>
  );
}

export default App;
