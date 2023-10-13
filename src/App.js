import './App.css';
import Home from './home';
import Nav from './Nav';
import Transection from './transection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Make_payment from './Make_payment';
import { useState } from 'react';
import History from './History';
function App() {
  let [a,seta]=useState([20000,20000,20000,20000,20000,20000,20000,20000,20000,20000])
  let wow=[20000,20000,20000,20000,20000,20000,20000,20000,20000,20000];
  let [history,sethistory]=useState([]);
  let money_subtractor=(i,j,amount ) =>{
    for(let x=0;x<10;x++){
      if(x===i-1){wow[x]=a[x]-amount}
      else if(x===j-1){wow[x]=a[x]+amount}
      else {wow[x]=a[x]}    
    }
    seta(wow);
    sethistory(history.concat([[i,j,amount]]))
  }
 
  let person=new Map();
  person.set("Person1", a[0]);
  person.set("Person2", a[1]);
  person.set("Person3", a[2]);
  person.set("Person4", a[3]);
  person.set("Person5", a[4]);
  person.set("Person6", a[5]);
  person.set("Person7", a[6]);
  person.set("Person8", a[7]);
  person.set("Person9", a[8]); 
  person.set("Person10", a[9]);
  return (
    <Router>
    <div className="App">
      <Nav />
    <Routes>
      
        <Route path="/" element={<Home/>}/> 
        <Route path="/history" element={<History history={history} />}/>
        <Route path="/transaction" element={<Transection persons={person}/>}/>
        <Route path="/make_payment" element={<Make_payment person={person} money_subtractor={money_subtractor}/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;