import React, {useState} from "react";
import {Form} from "semantic-ui-react"



function HikingForm({sendUpNewHikingSpot}){

const[nameForHikingSpot, setNameForHikingSpot]=useState("")
const[addressForHikingSpot, setAddressForHikingSpot]=useState("")
const[lengthForHikingSpot, setLengthForHikingSpot]=useState("")
const[costForHikingSpot, setCostForHikingSpot]=useState("")
const[imageForHikingSpot, setImageForHikingSpot]=useState("")

    return (<>
        <form onSubmit={(e)=>{
            e.preventDefault()
        let newHikingSpot = {
            "name": nameForHikingSpot,
            "address": addressForHikingSpot,
            "length": lengthForHikingSpot,
            "cost": costForHikingSpot,
            "image": imageForHikingSpot
             }
        
             sendUpNewHikingSpot(newHikingSpot)
        }
    }
>
    <input type="text" name="name" placeholder="Name" value= {nameForHikingSpot} onChange={(e)=>{setNameForHikingSpot(e.target.value)}}/>
    <input type="text" name="address" placeholder="Location" value= {addressForHikingSpot} onChange={(e)=>{setAddressForHikingSpot(e.target.value)}}/>
    <input type="text" name="legth" placeholder="How Long" value= {lengthForHikingSpot} onChange={(e)=>{setLengthForHikingSpot(e.target.value)}}/>
    <input type="text" name="cost" placeholder="Cost" value= {costForHikingSpot} onChange={(e)=>{setCostForHikingSpot(e.target.value)}}/>
    <input type="text" name="image" placeholder="Image" value= {imageForHikingSpot} onChange={(e)=>{setImageForHikingSpot(e.target.value)}}/>

    <button type="submit"> Add Hike </button>
</form>
</>

)
}

export default HikingForm