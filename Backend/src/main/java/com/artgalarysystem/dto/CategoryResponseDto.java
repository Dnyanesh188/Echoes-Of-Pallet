package com.artgalarysystem.dto;

import java.util.ArrayList;
import java.util.List;

import com.artgalarysystem.entity.Category;

import lombok.Data;

@Data
public class CategoryResponseDto extends CommonApiResponse {
	
	private List<Category> categories = new ArrayList<>(); 

}
