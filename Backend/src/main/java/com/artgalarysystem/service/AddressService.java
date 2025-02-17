package com.artgalarysystem.service;

import java.util.List;

import com.artgalarysystem.entity.Address;
import com.artgalarysystem.entity.User;

public interface AddressService {
	
	Address addAddress(Address address);
	
	Address updateAddress(Address address);
	
	Address getAddressById(int addressId);

}
