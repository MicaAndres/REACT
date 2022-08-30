import React from 'react';
import './ItemListContainer.css';
import './Counter';


export default function ItemListContainer({}) {
    function onAdd(count){
        console.log(`Llevas ${count} cocinitas`)
    }
    return(
        <div>
            <Counter stock={10} onAdd={onAdd} />
        </div>
        
    );
}
