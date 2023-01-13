import React from 'react'

const Card = ({menuData}) => {
  return (
<>
<section className='main-card--container'>
{
    menuData.map((menu)=>{

        const {id,name,description,category,image} = menu;
        return(
            <div className="card-container" key={id}>
            <div className="card">
    
              <div className="card-body" key={id}> 
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{menu.category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                           {description}
                    </span>
                    <div className="card-read">Read</div>
                </div>
                <img src={image}alt="maggi" className='card-media' />
                <span className="card-tag subtle">Order Now</span>
            </div>
        </div>
        )
    })
}
        </section>
                    
</>
  )
}

export default Card