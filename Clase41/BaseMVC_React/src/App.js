import { useEffect, useState } from 'react';

import './App.css';
import { NewsTable } from './components/NewsTable';
import { NewsForm } from './components/NewForm';

function App() {
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const response = await fetch("http://localhost:8080/api/news");
      const responseJson = await response.json();
      setNews(responseJson.data)
    }
    getData();
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <NewsForm/>
        <NewsTable news={news}/>
      </header>
    </div>
  );
}

export default App;
