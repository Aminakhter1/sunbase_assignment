import React,{useState,useEffect} from "react";
import axios from 'axios';
import '../style/detailpage.css';
import { Link } from "react-router-dom";

const DetailPage=()=>{
    const [cus,setCus]=useState([]);
    const getCustomer=async()=>{
        const {data}=await axios.get("http://localhost:8080/api/v1/customer");
        setCus(data);


    }
    useEffect(() =>{
       getCustomer();
    },[])
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/customer/id/${id}`);
            setCus(cus.filter(customer => customer.id !== id));
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };
    return(
        <div className="container-fluid" style={{backgroundColor:"black"}}>
            <div className="row">
                <h3 style={{color:"white"}}>Customer List</h3><hr/>
                <div className="column">
                    <div className="column">
                        <button><Link to="/customer">Add Customer</Link></button>
                        <button>Search</button>
                    </div>
                    <div className="column">
                       <table>
                        <thead>
                            <tr>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Street</td>
                            <td>Address</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                            </tr>
 
                        
                        </thead>
                        <tbody style={{color:"white"}}>
                            

                        {cus.length > 0 ? (
                                    cus.map((customer, index) => (
                                        <tr key={customer.id}>
                                            <td>{customer.firstName}</td>
                                            <td>{customer.lastName}</td>
                                            <td>{customer.street}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.city}</td>
                                            <td>{customer.state}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.phone}</td>
                                            <td>
                                            <button onClick={() => handleDelete(customer.id)}>Delete</button>
                                            <button>
                                                    <Link to={`/update-customer/${customer.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>Edit</Link>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9">No customers found</td>
                                    </tr>
                                )}
                                    
                        
                        </tbody>
                       </table>
                       
                    </div>



                </div>

            </div>

        </div>
    
    )
}
export default DetailPage;