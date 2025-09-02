import { useState } from "react";
import CrocRow from "./CrocRow";

const crocArray =[
    {
        id: 1,  
        name: "American Crocodile",
        habitat: "Coastal areas",
        status: "Least Concern"     
    },
    {
        id: 2,      
        name: "Orinoco Crocodile",
        habitat: "Orinoco River",
        status: "Critically Endangered"     
    },
    {
        id: 3,
        name: "Morelet's Crocodile",
        habitat: "Freshwater habitats",
        status: "Least Concern"
    }
];



const CrocList = () => {
    // rerenders the ui 
    const [crocs, setCrocs] = useState(crocArray);
    
    const addCrocs = () => {
        setCrocs([
            ...crocs, 
            {
            id: 6,
            name: "New Crocodile",
            habitat: "New Habitat",
            status: "New Status"
        },
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themefontColor text center">
                    Crocodiles
                </h5>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Habitat</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {crocs.map(c => <CrocRow key={c.id} croc={c} />)}
                        </tbody>
                    </table>
                    <button onClick={addCrocs} className="btn btn-primary">
                        Add
                    </button>

                </div>

            </div>
        </>

    );
}

export default CrocList;
