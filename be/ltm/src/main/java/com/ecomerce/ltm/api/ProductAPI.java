package com.ecomerce.ltm.api;

import com.ecomerce.ltm.model.dto.ProductUpdateDTO;
import com.ecomerce.ltm.model.entity.ProductEntity;
import com.ecomerce.ltm.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @PutMapping("/api/update-product/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable Long id, @Valid @RequestBody ProductUpdateDTO productUpdateDTO) {
        productService.updateProduct(id, productUpdateDTO);
        return ResponseEntity.ok("Cập nhật sản phẩm thành công");
    }
}
