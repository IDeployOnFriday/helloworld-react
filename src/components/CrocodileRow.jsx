const CrocodileRow = ({ id, name, habitat, status }) => {
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{habitat}</td>
            <td>{status}</td>
        </tr>
    );
}

export default CrocodileRow;
