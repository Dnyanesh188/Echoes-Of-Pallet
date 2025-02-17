package com.artgalarysystem.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.artgalarysystem.entity.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {

}
