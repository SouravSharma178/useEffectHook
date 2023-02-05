import './App.css';
import React,{useState,useEffect} from 'react';
import Display from './Components/Display';

function App() {
const [state,setState] = useState(1);
const [data,setData] = useState([]);

useEffect(()=>{
  async function getData(){
    let getapi = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)

    const res = await getapi.json();
    setData(res);
    console.log(res)
  }
  getData()
},[state])

  return (
    <div className="App">
      <button onClick={add=>setState(state+1)}>{state}</button>
      {
        data.map((element,index)=>{
            return(
             <Display key={index} firstName={element.firstName} imageUrl={element.imageUrl}/>
            )
        })
      }
    </div>
  );
}

export default App;
