function HikingComponent({spots}){
    
    
    return( <>  
   

        <div  className="cards">
        <div className="cards__item">
            <div className="card">
                <div className="card__content">
                  

        <img className="card__image" src={spots.image} alt={spots.name}/>
            <h2 className="card__title">{spots.name}</h2>
            <p className="card__text">{spots.address}</p>
            {spots.price <= 1?
                <h3 className="card__price">Free</h3>
                :
                <h3 className="card__price">${spots.cost} to enter park</h3>
                
            }
                <h3 className="card__length">Trail Length- {spots.length} Miles</h3>
                        <button className="card__detail__buton">Like</button>
            
                </div>
            </div>
        </div>

        </div>
  
</>
)
}

export default HikingComponent;