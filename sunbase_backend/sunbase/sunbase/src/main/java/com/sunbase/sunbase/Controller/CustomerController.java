package com.sunbase.sunbase.Controller;

import com.sunbase.sunbase.Model.Customer;
import com.sunbase.sunbase.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:3000")

public class CustomerController {
    @Autowired
    CustomerService customerservice;

    @PostMapping("/customer")
    public String addCustomer(@RequestBody Customer customer){
        customerservice.addCustomerService(customer);
        return "ok";
    }
    @GetMapping("/customer")
    public List<Customer> getAllCustomer(){
        List<Customer> ll=customerservice.getAllCustomerService();
        return ll;
    }
    @DeleteMapping("customer/id/{id}")
    public String deleteOneCustomer(@PathVariable("id") int id){
        customerservice.deleteOneCustomerService(id);

        return "ok";
    }
    @GetMapping("customer/id/{id}")
    public Customer GetOneCustomer(@PathVariable("id") int id){
        Customer cc=customerservice.getOneCustomerService(id);

        return cc;
    }
    @PutMapping("customer/id/{id}")
    public String UpdateOneCustomer(@PathVariable("id") int id, @RequestBody Customer customer){
        customerservice.updateOneCustomerService(id,customer);

        return "ok";
    }

}
