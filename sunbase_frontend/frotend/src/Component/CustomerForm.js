import React,{useState} from "react";
import axios from "axios";
const CustomerForm=()=>{
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [street,setStreet]=useState("");
  const [address,setAddress]=useState("");

  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const submitData=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/customer",{firstName,lastName,street,address,city,state,email,phone})
    

    

  }
  

    return(
    <div className="row" style={{border:"1px solid green"}}>
    <div className="col-md-5" style={{border:"1px solid red",margin:"auto"}}>
      <h2 style={{backgroundColor:"pink",textAlign:"center"}}>Customer Entry</h2>
    <form onSubmit={submitData}>
  <div className="mb-3">
    <label for="firstName" class="form-label">FirstName</label>
    <input type="text" className="form-control" id="firstName" aria-describedby="firstNameHelp" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="lastName" class="form-label">LastName</label>
    <input type="text" className="form-control" id="lastName" aria-describedby="lastNameHelp" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="streetName" class="form-label">Street</label>
    <input type="text" className="form-control" id="streetName" aria-describedby="streetNameHelp" value={street} onChange={(e)=>setStreet(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="addressName" class="form-label">Address</label>
    <input type="text" className="form-control" id="adressName" aria-describedby="adressNameHelp" value={address} onChange={(e)=>setAddress(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="cityName" class="form-label">City</label>
    <input type="text" className="form-control" id="cityName" aria-describedby="cityNameHelp" value={city} onChange={(e)=>setCity(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="stateName" class="form-label">State</label>
    <input type="text" className="form-control" id="stateName" aria-describedby="stateNameHelp" value={state} onChange={(e)=>setState(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="emailName" class="form-label">Email</label>
    <input type="email" className="form-control" id="emailName" aria-describedby="emailNameHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label for="phoneName" class="form-label">Phone</label>
    <input type="number" className="form-control" id="phoneName" aria-describedby="phoneNameHelp" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    
  </div>
  
  
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

</div>
    )
        
}
export default CustomerForm;