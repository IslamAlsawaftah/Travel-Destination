import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
import data from "./data/data.json";

function App() {
  // console.log(data)
  return (
    <>
      <Home />
      <Tours datas={data} />
    </>
  )
}
export default App;