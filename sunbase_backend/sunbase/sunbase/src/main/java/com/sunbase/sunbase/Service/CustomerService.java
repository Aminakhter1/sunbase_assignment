package com.sunbase.sunbase.Service;

import com.sunbase.sunbase.Model.Customer;
import com.sunbase.sunbase.Repository.RepositoryCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    RepositoryCustomer repocustomer;
    public String addCustomerService(Customer customer){
        Customer cus=new Customer();
        cus.setFirstName(customer.getFirstName());
        cus.setLastName(customer.getLastName());
        cus.setStreet(customer.getStreet());
        cus.setAddress(customer.getAddress());
        cus.setCity(customer.getCity());
        cus.setState(customer.getState());
        cus.setEmail(customer.getEmail());
        cus.setPhone(customer.getPhone());
        repocustomer.save(cus);
        return "ok";

    }
    public List<Customer> getAllCustomerService(){
        List<Customer> getcus=repocustomer.findAll();

        return getcus;
    }
    public String deleteOneCustomerService(int id){
        repocustomer.deleteById(id);
        return "Ok";
    }
    public Customer getOneCustomerService(int id){
        Customer cc=repocustomer.getById(id);


        return cc;
    }

    public String updateOneCustomerService(int id,Customer customer){
        if (repocustomer.existsById(id)) {
            customer.setId(id); // Ensure ID is set for the update
            repocustomer.save(customer);
        }



        return "ok";
    }
}
