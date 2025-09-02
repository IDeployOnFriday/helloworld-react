

const CrocRow = ({ croc }) => {
    return (
        <tr>
            <td>{croc.name}</td>
            <td>{croc.habitat}</td>
            <td>{croc.status}</td>
        </tr>
    );
}

export default CrocRow;
