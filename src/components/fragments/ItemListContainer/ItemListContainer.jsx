import React from 'react';
import './ItemListContainer.css';
import CounterCustomhook from '../ItemCount/ItemCount';
import '../ItemCount/ItemCount.css'
import ListContainer from '../ListContainer/ListContainer';


export default function ItemListContainer() {
    
    
    
    function onAdd(count){
        console.log(`Llevas ${count} cocinitas`)
    }
    return(
        <div>
            <ListContainer />
            <CounterCustomhook stock={10} onAdd={onAdd}/>
            
           
            
            
        </div>
        
    );
}
