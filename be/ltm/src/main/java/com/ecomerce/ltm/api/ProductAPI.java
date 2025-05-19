package com.ecomerce.ltm.api;

import com.ecomerce.ltm.model.entity.ProductEntity;
import com.ecomerce.ltm.service.ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ProductAPI {


    private final ProductService productService;

    public ProductAPI(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/api/all-products")
    public List<ProductEntity> getAllProducts() {
        return productService.getAllProducts();

    }
}
