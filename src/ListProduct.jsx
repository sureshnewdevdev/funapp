import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

 
const ListProduct = () => {

    const items = [
        'Investment',
        'Savings',
        'Sales',
        'Purchase',
        'Finance'
    ];

   

    const handleClick = (event)=> {
        console.log({event})
    };

    if (items.length === 0)
        return(
            <>
            <h1>List of products</h1>
            <p>No item Found</p>
            </>
        ); 
   return (
 
   <div>
   <p>List the product</p>

   {/* <ul className="list-group">
        {items.map((item,index) => <li key={item} className="list-group-item" 
                    onClick={ (event)=> console.log({event})} >{item}</li>) }
        </ul> */}
{/* 
   <ul className="list-group">
        {items.map((item,index) => <li key={item} className="list-group-item"  
                    onClick={ (event)=> console.log({event})} >{item}</li>) }
        </ul>  */}

        <ul className="list-group">
        {items.map((item,index) => <li key={item} className="list-group-item" 
                    onClick={ handleClick } >{item}</li>) }
        </ul> 

        {/* <ul className="list-group">
        {items.map((item,index) => <li key={item} className="list-group-item" 
                    onClick={ ()=> console.log({item,index})} >{item}</li>) }
        </ul>  */}

        {/* <ul className="list-group">
        {items.map(item=> <li key={item} className="list-group-item" onClick={ ()=> console.log({item})} >{item}</li>) }
        </ul>     */}
    
    
    
    
    
     {/* <ul className="list-group">
        {items.map(item => <li key={item} className="list-group-item">{item}</li>) }
    </ul>   */}

    {/* <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
    </ul> */}
   </div>
);
};

export default ListProduct;