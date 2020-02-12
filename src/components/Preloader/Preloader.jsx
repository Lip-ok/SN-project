import React from "react"
import preloader from "./../../assets/image/flickoffdribbble.gif"

let Preloader = (props)=>{
   return(
       <div>
       {props.isFetching ?
               <div>
                   <img src={preloader}/>
               </div> : null}
       </div>
   )
}

export default Preloader;

