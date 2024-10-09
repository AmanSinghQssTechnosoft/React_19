import seriesData from "../api/seriesData.json";
import List from "./List";
import './Netflix.css'
const Netflix = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem)=> (
      <List key={curElem.id} curElem={curElem}/>
      )
      )}
    </ul>
  );
};
export default Netflix;
