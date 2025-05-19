package com.ecomerce.ltm.service;

import com.ecomerce.ltm.model.dto.ProductUpdateDTO;
import com.ecomerce.ltm.model.entity.ProductEntity;

import java.util.List;

public interface ProductService {

    void updateProduct(Long id, ProductUpdateDTO productUpdateDTO);

    void deleteProduct(Long id);

    ProductEntity getProductById(Long id);

    List<ProductEntity> getAllProducts();


}
