package com.example.springbootmonolith.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.springbootmonolith.models.Dogs;


public interface DogsRepository extends CrudRepository<Dogs, Long> {
}

