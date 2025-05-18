package com.ecomerce.ltm.service;

import com.ecomerce.ltm.model.entity.ProductEntity;
import com.ecomerce.ltm.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<ProductEntity> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public void updateProduct(Long id, String name, String description, double price, String brand, String category, int power, double rating, int stock) {

    }

    @Override
    public void deleteProduct(Long id) {

    }

    @Override
    public ProductEntity getProductById(Long id) {
        return null;
    }


}
