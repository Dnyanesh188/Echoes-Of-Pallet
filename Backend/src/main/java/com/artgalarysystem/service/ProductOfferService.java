package com.artgalarysystem.service;

import java.util.List;

import com.artgalarysystem.entity.Product;
import com.artgalarysystem.entity.ProductOffer;
import com.artgalarysystem.entity.User;

public interface ProductOfferService {
	
	ProductOffer addOffer(ProductOffer offer);
	
	ProductOffer updateOffer(ProductOffer offer);
	
	ProductOffer getOfferById(int offerId);
	
	List<ProductOffer> getOffersByUserAndStatus(User user, List<String> status);
	
	List<ProductOffer> getOffersByProductAndStatus(Product product, List<String> status);
	

}
