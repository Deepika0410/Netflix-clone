import { ArrowDropDown, NotificationImportant, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import { useState } from "react";


const Navbar = () => {
    const[isScrolled, setIsScrolled]=useState(false);

    window.onscroll=()=> {
        setIsScrolled(window.pageYOffset ===0 ? false:true);
        return()=>(window.onscroll=null);
    };
    console.log(isScrolled);
  return (
    <div className={isScrolled ?"navbar scrolled" :"navbar"}>
     <div className="container">
            <div className="left">
                <img src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png"
                />
                <span>Home</span>
                <span>series</span>
                <span>Movies</span>
                <span>New and popular</span>
                <span>My List</span> 
            </div>
            <div className="right">
            <Search className="icon"/>
            <span>kid</span>
            <Notifications className="icon"/>
            <img src="https://us.123rf.com/450wm/gelpi/gelpi2306/gelpi230603176/206993876-cute-happy-girl-isolated-on-a-white-background-generative-ai.jpg?ver=6"
            />
            <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>
            </div>
        </div>
    </div>
  );
}
export default Navbar
