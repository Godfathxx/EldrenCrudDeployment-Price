import { useState } from "react";
import PriceForm from "./PriceForm";
import Axios from "axios";

function CreatePrice()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {Name: arr[0],ID:arr[1],Phone: arr[2],EmailID:arr[3],Plan:arr[4]};
        Axios.post("https://eldrencruddeployment.onrender.com/priceRoute/create-price",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <PriceForm getState={getState}
                    NameValue=""
                    IDValue=""
                    Phone Value=""
                    EmailIDValue=""
                    PlanValue="">
                Create Price
            </PriceForm>
        </form>
    )
}
export default CreatePrice;
