package com.sunbase.sunbase.Repository;

import com.sunbase.sunbase.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryCustomer extends JpaRepository<Customer,Integer> {
}
