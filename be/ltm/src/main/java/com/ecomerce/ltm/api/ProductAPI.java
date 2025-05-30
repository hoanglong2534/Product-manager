package com.ecomerce.ltm.api;

import com.ecomerce.ltm.model.dto.ProductSearchDTO;
import com.ecomerce.ltm.model.dto.ProductUpdateDTO;
import com.ecomerce.ltm.model.entity.ProductEntity;
import com.ecomerce.ltm.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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

    @DeleteMapping("/api/delete-product/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(List.of(id));
        return ResponseEntity.ok("Xóa sản phẩm thành công");
    }

    @DeleteMapping("/api/delete-products")
    public ResponseEntity<String> deleteProducts(@RequestBody List<Long> ids) {
        productService.deleteProduct(ids);
        return ResponseEntity.ok("Xóa các sản phẩm thành công");
    }

    @GetMapping("/api/get-search")
    public ResponseEntity<Map<String, Object>> getSearch() {
        Map<String,Object> map = new HashMap<>();
        map.put("categories", productService.getAllCategoriesName());
        map.put("stars", productService.getAllStars());
        return ResponseEntity.ok(map);
    }

    @PostMapping("/api/get-search-products")
    public List<ProductEntity> searchProducts(@RequestBody ProductSearchDTO productSearchDTO) {
        return productService.searchProducts(productSearchDTO);
    }

    @PostMapping("/api/add-product")
    public ResponseEntity<String> addProduct(@Valid @RequestBody ProductEntity productEntity) {
        productService.addProduct(productEntity);
        return ResponseEntity.ok("Thêm sản phẩm thành công");
    }
}
