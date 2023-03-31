  import React from 'react'
import "./FeaturedProducts.scss";
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg",
            img2: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg",
            img2: "https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/4124201/pexels-photo-4124201.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://www.pexels.com/photo/woman-wearing-pink-long-sleeved-shirt-2703202/",
            title: "Skirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1750776/pexels-photo-1750776.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://www.pexels.com/photo/woman-wearing-pink-long-sleeved-shirt-2703202/",
            title: "Hat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
       

    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>hgfdrftgybhjnmkfc cbdhebdhyh hjeidmmc  fjcnnnnnnnnnn</p>
        </div> 
        <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id}/>
            
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
