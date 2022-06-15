import './App.css';

import {useState,useEffect} from "react";
import Articles from './components/Articles.js';

//url
let url = "https://storage.googleapis.com/aller-structure-task/test_data.json";
// Her lager jeg en useState som tar imot JSON data fra api
function App() {
  const [json, setJson] = useState(null);
// Her blir data fra api etter at komponente er renderet ferdig og den kjører en gang på refresh/rerender
useEffect(()=>{
  //async funksjon heter data fra api med fetch
  const getData = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((stuff)=>setJson(stuff))
  }
  getData();
},[]);
  return (
    <div className="App">
      {/* Her mapper jeg igjennom array som har data fra api */}
     {json?.length > 0 ? json.map((art)=>{
      
      const {type, columns} = art;
      /* Her lager jeg en key med math.random for å unngå error i log */
      return <section key={Math.floor(Math.random() * 100000)}>
        {/* Her blir columns mappet for å hente data fra hver artikkel */}
         {columns?.map(col =>{
          const {title, type,url, width,imageUrl: img} = col;
          /* Her blir tittel, type, img, url og width brukt */
          return  <Articles key={title} title={title} img={img} url={url} width={width} type={type} />
        })}
      </section>
     }) : null}
    </div>
  );
}

export default App;