import React, { useContext } from 'react'
import './Css/ShoCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png' 
import  {Item} from '../Components/Item/Item'
export const ShoCategory = (props) => {
  const{all_product} = useContext(ShopContext);
  return (
    <div className='sho-category'>
      <img className='shocategory-banner' src={props.banner} alt="" />
      <div className="shocategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
      <div className="shocategory-sort">
        sort by <img src={dropdown_icon} alt="" />
      </div>
      </div>
      <div className="shocategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>  
          }
          else{
            return null;

          }
        })}
      </div>
      <div className="shocategory-loadmore">
        Explore More
      </div>
      </div>
  
  )
}
