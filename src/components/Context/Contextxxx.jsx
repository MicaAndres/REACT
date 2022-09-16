import React, { createContext, useContext, useState } from "react";

//creo el contexto algo que puedo acceder y va a tener los valores, este caso vacio()
export const VotingContext = createContext();
// si lo quiero usar, uso el usecontext. necesita como valor de entrada un contexto, 
//si queremos evitarnos algunos import generero un customhooks, a mi contexto le puse el use delante es una buena practica

export const useVotingContext = () => useContext(VotingContext);


const VotingProvider = ({ children }) => {
    const [candidates, setCandidates] = useState([{id: '1', name: 'Test', votes: 1}]);
    return(
        <VotingContext.Provider value={candidates}>
        {' '}
        {children}
    </VotingContext.Provider>
    )
    
};

export default VotingProvider;