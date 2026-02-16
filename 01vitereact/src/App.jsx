/*
function App() {

  return (
   <h1 style={{backgroundColor:"red", color:"black"}}>ReactJS with Vite | First Page</h1>
  )
  
}
export default App;
*/
import FirstFunction from "./FirstPageDemo";
import "./colorFull.css";
function App() {
  return (
    <>
      <h1 className="hx">ReactJS with Vite | First Page</h1>
      <FirstFunction />
    </>
  );
}
export default App;
