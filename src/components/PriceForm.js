import { useEffect, useState } from "react";

function PriceForm(props)
{
    const [Name,setName] = useState(props.NameValue);
    const [ID,setID] = useState(props.IDValue);
    const [Phone,setPhone] = useState(props.PhoneValue);
    const [EmailID,setEmailID] = useState(props.EmailIDValue);
    const [Plan,setPlan] = useState(props.PlanValue);

    useEffect(()=>{
        setName(props.NameValue);
        setID(props.IDValue);
        setPhone(props.PhoneValue);
        setEmailID(props.EmailIDValue);
        setPlan(props.PlanValue);
    },[props.NameValue,props.IDValue,props.PhoneValue,props.EmailIDValue,props.PlanValue]);
   
    const arr = [Name,ID,Phone,EmailID,Plan];  //[Raj,raj@gmail.com,1]
   
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.NameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your Name" />
            <input defaultValue={props.IDValue} onChange={(event)=>setID(event.target.value)} class="form-control my-3" placeholder="Enter your ID" />
            <input defaultValue={props.PhoneValue} onChange={(event)=>setPhone(event.target.value)} class="form-control my-3" placeholder="Enter your Phone Number" />
            <input defaultValue={props.EmailIDValue} onChange={(event)=>setEmailID(event.target.value)} class="form-control my-3" placeholder="Enter your EmailID" />
            <select value={Plan} onChange={(event) => setPlan(event.target.value)} className="form-control my-3">
                <option value="">Please Select a Plan</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
            </select>
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default PriceForm;
