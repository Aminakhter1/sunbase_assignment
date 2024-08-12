import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCustomerForm = () => {
    let { id } = useParams();
    id=parseInt(id);
     // Get the customer ID from the URL
     console.log(typeof parseInt(id));
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        street: '',
        address: '',
        city: '',
        state: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const getCustomer = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/api/v1/customer/id/${id}`);
                setCustomer(data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };
        getCustomer();
    }, [id]);
    console.log(customer)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/v1/customer/id/${id}`, customer);
            navigate('/'); // Redirect to the customer list page
        } catch (error) {
            console.error('Error updating customer data:', error);
        }
    };

    return (
        <div className="container">
            <h2>Update Customer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={customer.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={customer.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Street</label>
                    <input
                        type="text"
                        name="street"
                        value={customer.street}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={customer.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>State</label>
                    <input
                        type="text"
                        name="state"
                        value={customer.state}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={customer.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateCustomerForm;
