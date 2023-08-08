import React, { useEffect, useState } from 'react';

function Pagination(props) {
    const[allProducts,setAllProducts]=useState([]);
  const[page,setPage]=useState(1);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async ()=>{
   const data = await fetch("https://dummyjson.com/products?limit=100");
   const resp = await data.json();
  //  console.log("resp",resp.products.length)
   if(resp && resp.products){
    setAllProducts(resp.products)
   }
  }
  const pageHandler=(selectedpage)=>{
    if(selectedpage>=1
       && selectedpage<=allProducts.length/10
        && selectedpage!==page)
 setPage(selectedpage);
  }
    return (
        <div>
            <div style={{
    
}}>
<div className='products'>
  {
    allProducts&&allProducts.slice(page*10-10,page*10).map((prod)=>{
      return <span className='product__single' key={prod.id}>
        <img className='product__single__imgs' src={prod.thumbnail} alt={prod.title}/>
        <p>{prod.title}</p>
      </span>
    })
  }
  
</div>
{
    allProducts.length>0&&<div className='pagination'>
    <span  
    className={page > 1 ?"":"pagination_disabled"}
    onClick={()=>pageHandler(page-1)} >⬅️</span>
    {
      [...Array(allProducts.length/10)].map((_,i)=>{
        // console.log(i);
        return <span key={i} 
        className={ page===i+1?"pagination__selected":""} 
        onClick={()=>pageHandler(i+1)}>{i+1}</span>
      })
      }
    <span 
    className={page < allProducts.length/10?"":"pagination_disabled"}
    onClick={()=>pageHandler(page+1)} >➡️</span>
    </div>
  }
</div>
        </div>
    );
}

export default Pagination;