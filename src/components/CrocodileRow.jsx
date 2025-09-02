const CrocodileRow = ({ croc }) => {
    return (
        <tr key={croc.id}>
            <td>{croc.name}</td>
            <td>{croc.habitat}</td>
            <td>{croc.status}</td>
        </tr>
    );
}

export default CrocodileRow;
