package com.ecomerce.ltm.service;

import com.ecomerce.ltm.model.entity.ProductEntity;

import java.util.List;

public interface ProductService {

    void updateProduct(Long id, String name, String description, double price, String brand, String category, int power, double rating, int stock);

    void deleteProduct(Long id);

    ProductEntity getProductById(Long id);

    List<ProductEntity> getAllProducts();


}
