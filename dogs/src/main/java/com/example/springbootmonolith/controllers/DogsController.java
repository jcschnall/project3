package com.example.springbootmonolith.controllers;


import com.example.springbootmonolith.models.Dogs;
import com.example.springbootmonolith.repositories.DogsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;



@RestController
public class DogsController {

    @Autowired
    private DogsRepository DogsRepository;

    @GetMapping("/Dogs")
    public Iterable<Dogs> findAllDogs() {
        return DogsRepository.findAll();
    }

    @GetMapping("/Dogs/{DogId}")
    public Dogs findDogById(@PathVariable Long DogId) {
        return DogsRepository.findOne(DogId);
    }

    @DeleteMapping("/Dogs/{DogId}")
    public HttpStatus deleteDogById(@PathVariable Long DogId) {
        DogsRepository.delete(DogId);
        return HttpStatus.OK;
    }

    @PostMapping("/Dogs")
    public Dogs createNewDog(@RequestBody Dogs newDog) {
        return DogsRepository.save(newDog);
    }

    @PatchMapping("/Dogs/{DogId}")
    public Dogs updateDogById(@PathVariable Long DogId, @RequestBody Dogs DogRequest) {
        Dogs DogFromDb = DogsRepository.findOne(DogId);
        DogFromDb.setTitle(DogRequest.getTitle());
        DogFromDb.setLen(DogRequest.getImage());

        return DogsRepository.save(DogFromDb);
    }

}




