import React from 'react';
import './ItemListContainer.css';
import CounterCustomhook from '../ItemCount/ItemCount';
import '../ItemCount/ItemCount.css'

export default function ItemListContainer() {
    function onAdd(count){
        console.log(`Llevas ${count} cocinitas`)
    }
    return(
        <div>
            <CounterCustomhook stock={10} onAdd={onAdd}/>
        </div>
        
    );
}
