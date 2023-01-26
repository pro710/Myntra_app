import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import data from '../../data';
import { useDispatch } from 'react-redux';

function ProductDetails() {
    const params = useParams();
    const user = params.userID;
    const dispatch = useDispatch();
    let item = {};
    
    for(let i=0; i<data.length; i++){
        if(data[i].id == user){
            item = data[i];
            break;
        }
    }
    
  return (
    <div className='productDetails'>
        <div className='imagesDiv'>
            {item["otherImages"].map((imgLink, index)=>
                <img key={index} src= {imgLink} className="image"/>
            )}
        </div>
        <div className='details'>
            <h2 className='productTitle'>{item.name}</h2>
            <p className='productDescription'>{item.description}</p>
            <p className='productPrice'>Rs.{item.finalPrice}/-</p>
            <p className='productPrice'><strike>Rs.{item.strickPrice}/-</strike></p>
            <p className='productDiscount'>DISCOUNT : <span>{item.discount}%</span></p>
            <h4 className='sizeH4'>SIZE CHART : </h4>
            <div className='productSize'>
                {item['productSize'].split(',').map((val, index)=>
                    <span key={index}>{val}</span>
                )}
            </div>
            <button className='addToCart' onClick={()=>dispatch({type : 'add', payload : item})}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDetails