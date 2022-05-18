import logo from './logo.svg';
import './App.css';
import  {Mobile,Manu} from "./components/Mobile"
import {List,Manuf} from './components/List';

  let style2 = {
    listStyleType:"square"
  }

  let style3 = {
    listStyleType:"disc"
  }

  let style4 = {
    listStyleType:"circle"
  }

  

function App() {

  let info = [
    {names:"Samsung"},
    {names:"HTC"},
    {names:"Micromax"},
    {names:"Apple"},
  ]

  return (
    <>
      <Mobile></Mobile>
      <List></List>
      <Manu></Manu>
      {/* <Manuf style={style2} {...info[0]} ></Manuf>
      <Manuf  {...info[1]} ></Manuf>
      <Manuf  {...info[2]} ></Manuf>
      <Manuf  {...info[3]} ></Manuf> */}

      <ul>
        <li style={style2}>Samsung</li>
        <li style={style2}>HTC</li>
        <li style={style3}>Micromax</li>
        <li style={style4}>Apple</li>
      </ul>
      
    </>
  );
}

export default App;
