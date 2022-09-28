import React, {useState} from "react";
import {Form} from "semantic-ui-react"



function FoodForm({sendUpNewFoodTruck}){

const[nameForFoodSpot, setNameForFoodSpot]=useState("")
const[addressForFoodSpot, setAddressForFoodSpot]=useState("")
const[infoForFoodSpot, setInfoForFoodSpot]=useState("")
const[imageForFoodSpot, setImageForFoodSpot]=useState("")

    return (<>
        <form onSubmit={(e)=>{
            e.preventDefault()
        let newFoodTruck= {
            "name": nameForFoodSpot,
            "address": addressForFoodSpot,
            "info": infoForFoodSpot,
            "image": imageForFoodSpot
             }
        
             sendUpNewFoodTruck(newFoodTruck)
        }
    }
>
    <input type="text" name="name" placeholder="Name" value= {nameForFoodSpot} onChange={(e)=>{setNameForFoodSpot(e.target.value)}}/>
    <input type="text" name="address" placeholder="Location" value= {addressForFoodSpot} onChange={(e)=>{setAddressForFoodSpot(e.target.value)}}/>
    <input type="text" name="legth" placeholder="Info" value= {infoForFoodSpot} onChange={(e)=>{setInfoForFoodSpot(e.target.value)}}/>
    <input type="text" name="image" placeholder="Image" value= {imageForFoodSpot} onChange={(e)=>{setImageForFoodSpot(e.target.value)}}/>

    <button type="submit"> Add Food </button>
</form>
</>

)
}

export default FoodForm