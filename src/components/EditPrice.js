import { useParams } from "react-router-dom";
import PriceForm from "./PriceForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditPrice() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ Name: "", ID: "", Phone: "", EmailID: "", Plan: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://eldrencruddeployment.onrender.com/priceRoute/update-Price/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { Name,  ID , Phone , EmailID , Plan } = res.data;
                    setInitialValue({ Name, ID , Phone , EmailID , Plan   });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { Name: newData[0], ID: newData[1], Phone: newData[2],EmailID: newData[3],Plan: newData[4] };
        Axios.put("https://crud-deployment-backend-15pi.onrender.com/priceRoute/update-price/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <PriceForm getState={getState}
                NameValue={initialValue.Name}
                IDValue={initialValue.ID}
                PhoneValue={initialValue.Phone}
                EmailIDValue={initialValue.EmailID}
                PlanValue={initialValue.Plan}
                >
                    Update Price
            </PriceForm>
        </form>
    )
}
export default EditPrice;
