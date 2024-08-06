package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Website;

public interface WebsiteRepo extends JpaRepository<Website, Long>{
   
}
