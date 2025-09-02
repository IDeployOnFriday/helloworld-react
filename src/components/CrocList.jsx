
const crocodiles =[
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
                            {crocodiles.map(croc => (
                                <tr key={croc.id}>
                                    <td>{croc.name}</td>
                                    <td>{croc.habitat}</td>
                                    <td>{croc.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>
        </>

    );
}

export default CrocList;
