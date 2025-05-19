package com.ecomerce.ltm.service;

import com.ecomerce.ltm.model.dto.ProductSearchDTO;
import com.ecomerce.ltm.model.dto.ProductUpdateDTO;
import com.ecomerce.ltm.model.entity.ProductEntity;
import com.ecomerce.ltm.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


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
    public void updateProduct(Long id, ProductUpdateDTO productUpdateDTO) {
        ProductEntity product = productRepository.findById(id).orElse(null);
        if (product == null) {
            throw new RuntimeException("Không có sản phẩm nào với id: " + id);
        }
        boolean isUpdated = false;
        if(!product.getName().equals(productUpdateDTO.getName())) {
            product.setName(productUpdateDTO.getName());
            isUpdated = true;
        }
        if(!product.getDescription().equals(productUpdateDTO.getDescription())) {
            product.setDescription(productUpdateDTO.getDescription());
            isUpdated = true;
        }
        if(product.getPrice() != productUpdateDTO.getPrice()) {
            product.setPrice(productUpdateDTO.getPrice());
            isUpdated = true;
        }
        if(!product.getBrand().equals(productUpdateDTO.getBrand())) {
            product.setBrand(productUpdateDTO.getBrand());
            isUpdated = true;
        }
        if(!product.getCategory().equals(productUpdateDTO.getCategory())) {
            product.setCategory(productUpdateDTO.getCategory());
            isUpdated = true;
        }
        if(product.getPower() != productUpdateDTO.getPower()) {
            product.setPower(productUpdateDTO.getPower());
            isUpdated = true;
        }
        if(product.getRating() != productUpdateDTO.getRating()) {
            product.setRating(productUpdateDTO.getRating());
            isUpdated = true;
        }
        if(product.getStock() != productUpdateDTO.getStock()) {
            product.setStock(productUpdateDTO.getStock());
            isUpdated = true;
        }
        if(isUpdated) {
            productRepository.save(product);
        }

    }

    @Override
    public void deleteProduct(List<Long> id) {
        productRepository.deleteAllById(id);
        productRepository.resetAutoIncrement();
    }

    @Override
    public List<String> getAllCategoriesName() {
        return productRepository.findAll().stream().map(ProductEntity::getCategory).distinct().toList();
    }

    @Override
    public List<Double> getAllStars() {
        return productRepository.findAll().stream().map(ProductEntity::getRating).distinct().
                sorted().toList();
    }

    @Override
    public List<ProductEntity> searchProducts(ProductSearchDTO searchDTO) {
        List<ProductEntity> products = productRepository.findAll();

        // Lọc theo tên sản phẩm
        if (searchDTO.getName() != null && !searchDTO.getName().isEmpty()) {
            String name = searchDTO.getName().toLowerCase();
            products = products.stream()
                    .filter(p -> p.getName().toLowerCase().contains(name))
                    .collect(Collectors.toList());
        }

        // Lọc theo danh mục
        if (searchDTO.getCategory() != null && !searchDTO.getCategory().isEmpty()) {
            products = products.stream()
                    .filter(p -> p.getCategory().equals(searchDTO.getCategory()))
                    .collect(Collectors.toList());
        }

        // Lọc theo sao
        if (searchDTO.getRating() > 0) {
            double rating = searchDTO.getRating();
            products = products.stream()
                    .filter(p -> p.getRating() == rating)
                    .collect(Collectors.toList());
        }
        // Lọc theo giá
        if (searchDTO.getPriceFrom() > 0) {
            products = products.stream()
                    .filter(p -> p.getPrice() >= searchDTO.getPriceFrom())
                    .collect(Collectors.toList());
        }

        if (searchDTO.getPriceTo() > 0) {
            products = products.stream()
                    .filter(p -> p.getPrice() <= searchDTO.getPriceTo())
                    .collect(Collectors.toList());
        }

        // Lọc theo công suất
        if (searchDTO.getPowerFrom() > 0) {
            products = products.stream()
                    .filter(p -> p.getPower() >= searchDTO.getPowerFrom())
                    .collect(Collectors.toList());
        }

        if (searchDTO.getPowerTo() > 0) {
            products = products.stream()
                    .filter(p -> p.getPower() <= searchDTO.getPowerTo())
                    .collect(Collectors.toList());
        }

        return products;
    }

    @Override
    public Optional<ProductEntity> addProduct(ProductEntity productEntity) {
        return productRepository.findById(productRepository.save(productEntity).getId());
    }
}
