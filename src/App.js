import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {

  const [category, setCategory] = useState("")

  return (
     <>
      <Nav />
     </>
  );
}

export default App;
