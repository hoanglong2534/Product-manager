package com.ecomerce.ltm.repository;

import com.ecomerce.ltm.model.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
}
