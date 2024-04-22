import Axios from "axios";
import { Link } from "react-router-dom";

function PriceListRow(props) {
    const { _id, Name, ID, Phone, EmailID, Plan } = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://eldrencruddeployment.onrender.com/priceRoute/delete-price/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{Name}</td>
            <td>{ID}</td>
            <td>{Phone}</td>
            <td>{EmailID}</td>
            <td>{Plan}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/edit-Price/" + _id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default PriceListRow;
