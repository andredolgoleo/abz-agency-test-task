import './App.css';
import './styles/index.scss';
import { FirstPage } from "./components/FirtsPage";
import { Users } from "./components/Users";
import {useEffect, useState} from "react";
import {getUsers} from "./api/api";

function App() {
  const [data, setData] = useState([]);

  console.log(data)

  useEffect(() => {
    getUsers(1).then(data => setData([...data.users]));

  }, [])

  return (
    <div className='container'>
      <FirstPage />
      <main className='main'>
        <h2 className='main__title'>Working with GET request</h2>

        <section className='main__users'>
          <Users users={data} />
        </section>
      </main>
    </div>
  );
}

export default App;
