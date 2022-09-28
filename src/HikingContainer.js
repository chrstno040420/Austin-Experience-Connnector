import { useEffect, useState } from "react";
import HikingComponent from "./HikingComponent";
import HikingForm from "./HikingForm";




function HikingContainer(){
    const [hikingSpots, setHikingSpots]= useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3000/hiking")
        .then(r => r.json())
        .then((data) => {
                                   
            setHikingSpots(data)
        
        })
      
      
      },[])

      function grabNewHikingSpot(newSpot){
            console.log("this is my container",newSpot)

            setHikingSpots([newSpot, ...hikingSpots])

            fetch("http://localhost:3000/hiking",{

                method:"Post",
                headers:{"Content-type": "application/json"},
                body: JSON.stringify(newSpot)
                })
            .then(res=> res.json())
            .then(console.log)

      }


    return (
    <>
    <h1>Hiking Spots withing Austin City Limits</h1>
    

        <>
       <HikingForm  sendUpNewHikingSpot={grabNewHikingSpot}/>
        </>
        {
            hikingSpots.map(eachHikingSpot => <HikingComponent key={eachHikingSpot.id} spots= {eachHikingSpot}/>)
        }
        
    </>
    )
}

export default HikingContainer;