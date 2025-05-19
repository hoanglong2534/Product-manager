package com.ecomerce.ltm.service;

import com.ecomerce.ltm.model.dto.ProductSearchDTO;
import com.ecomerce.ltm.model.dto.ProductUpdateDTO;
import com.ecomerce.ltm.model.entity.ProductEntity;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    void updateProduct(Long id, ProductUpdateDTO productUpdateDTO);

    void deleteProduct(List<Long> id);

    List<String>  getAllCategoriesName();

    List<Double> getAllStars();

    List<ProductEntity> getAllProducts();

    List<ProductEntity> searchProducts(ProductSearchDTO productSearchDTO);

    Optional<ProductEntity> addProduct(ProductEntity productEntity);
}
