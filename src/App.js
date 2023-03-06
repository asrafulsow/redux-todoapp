import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import TodoItems from './components/TodoItems/TodoItems';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div
      className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
    >
      <Navbar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr className="mt-4" />

        {/* <!-- todo list --> */}
        <div
          className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
          {/* <!-- todo --> */}
          <TodoItems />
          <TodoItems />
        </div>

        <hr className="mt-4" />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
