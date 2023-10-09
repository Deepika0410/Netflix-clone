
import "./hoe.scss"
import Navbar from "../../Component/navbar/Navbar"
import Featured from "../../Component/Featured/Featured";
import List from "../../Component/list/List";
const Home = () => {
  return (
    <div className='hoe'>
      <Navbar/>
       <Featured />
       <List/>
       <List/>
       <List/>
    </div>
  );
};
export default Home
