import React, {useState} from 'react'
import './NavBar.css'

export default function NavBar(props) {
    const link_arr = [{text:"now_playing",show:"Now Playing"},{text:"upcoming",show:"Upcoming"},{text:"top_rated",show:"Top Rated"},{text:"popular",show:"Popular"}]
    const [selected, setSelected] = useState(link_arr[0].text);
           

    return (
    <div id="nav">
        <h3>IMDb</h3>
        <ul id="ul">
            {link_arr.map(item=><li onClick={(e)=>{
                console.log(e.target.className)
                setSelected(item.text)
                props.set(item.text)
            }} className={`li${item.text==selected? "-active": ""}`}>{item.show}</li>)}
        </ul>
    </div>
  )
}