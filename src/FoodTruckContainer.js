import React, {useState, useEffect} from "react"
import FoodForm from "./FoodForm"
import FoodTruckComponent from "./FoodTruckComponent"

function FoodTruckContainer(){
    const [foodSpots, setFoodSpots]= useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3000/foodTrucks")
        .then(r => r.json())
        .then((data) => setFoodSpots(data))
      
      
      },[])

      function grabNewFoodTruck(newFood){
          setFoodSpots([newFood, ...foodSpots])


          fetch("http://localhost:3000/foodTrucks",{
            method:"Post",
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(newFood)

          })
        .then(r => r.json())
        .then(console.log)



      }

    return (<>
    <h1>Food Trucks</h1>
      <>
      <FoodForm  sendUpNewFoodTruck={grabNewFoodTruck}/>
      </>
        {


        foodSpots.map(eachTruckSpot => <FoodTruckComponent key={eachTruckSpot.id} spots= {eachTruckSpot}/>)

       }
    </>
    )
}

export default FoodTruckContainer;