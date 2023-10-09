import { ArrowBackIosOutlined } from "@material-ui/icons"
import "./watch.scss"
export default function Watch() {
  return (
    <div className="watch">
    <div className="back">
        <ArrowBackIosOutlined/>
        Home
    </div>
    <video className="video" autoPlay progress controls src="https://www.shutterstock.com/shutterstock/videos/1022764525/preview/stock-footage-lot-of-people-clapping-at-rave-party-here-is-footage-of-people-crowd-partying-at-a-concert-or-a.webm"/>
      
    </div>
  )
}



