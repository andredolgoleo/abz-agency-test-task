import './App.css';
import './styles/index.scss';
import { FirstPage } from "./components/FirtsPage";
import { Users } from "./components/Users";

function App() {
  return (
    <div className='container'>
      <FirstPage />
      <main className='main'>
        <h2 className='main__title'>Working with GET request</h2>

        <section>
          <Users />
        </section>
      </main>
    </div>
  );
}

export default App;
