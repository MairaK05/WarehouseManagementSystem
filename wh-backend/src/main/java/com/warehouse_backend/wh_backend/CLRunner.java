package com.warehouse_backend.wh_backend;

import java.util.List;

import org.springframework.boot.CommandLineRunner;

import com.warehouse_backend.wh_backend.entities.EmployeeEntity;
import com.warehouse_backend.wh_backend.repositories.EmployeeRepository;
import org.springframework.stereotype.Component;

@Component
public class CLRunner implements CommandLineRunner {
    private final EmployeeRepository employeeRepository;

    public CLRunner(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @Override
    public void run(String...args) throws Exception {
        Iterable<EmployeeEntity> employees = this.employeeRepository.findAll();
        EmployeeEntity employee = this.employeeRepository.findByEmail("jparker@gmail.com");
        System.out.println("Employee" + employee);
    }
}
