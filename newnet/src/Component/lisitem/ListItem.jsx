import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react"

export default function ListItem({index}) {
  const[isHovered,setIsHovered]=useState(false);
  const trailer="https://cdn.pixabay.com/vimeo/145116912/rotting-christ-1275.mp4?width=480&hash=e714b703d1ccb7b37b8bdb902bab361c7da084ef" 
  return (
    <div className="ListItem"
    style={{left:isHovered && index*225-50+index*2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="https://flxt.tmsimg.com/assets/p183931_b_v9_ac.jpg"
        alt=""
        />
        {isHovered && (
          <>
      <video src={trailer} autoPlay={true} loop/>
    <div className="iteminfo">
      <div className="icons">
        <PlayArrow className="icon"/>
        <Add className="icon"/>
        <ThumbUpAltOutlined className="icon"/>
        <ThumbDownAltOutlined className="icon"/>
      </div>
      <div className="iteminfoTop">
      <span>1 hour 14 mins</span>
      <span className="limit">+16</span>
      <span>1999</span>
    </div>
    <div className="desc">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div className="genre">Romance</div>
    </div></>
        )}
    </div>
  );
}
