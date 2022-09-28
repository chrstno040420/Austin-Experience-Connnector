function FoodTruckComponent({spots}){
    
    
    console.log(spots)
    
    return( <>  

   
   

<div  className="cards">
<div className="cards__item">
    <div className="card">
        <div className="card__content">
          

<img className="card__image" src={spots.image} alt={spots.name}/>
    <h2 className="card__title">{spots.name}</h2>
    <p className="card__text">{spots.address}</p>
        <p>{spots.info}</p>
                <button className="card__detail__buton">Like</button>
    
        </div>
    </div>
</div>

</div>


    

</>
)
}

export default FoodTruckComponent;