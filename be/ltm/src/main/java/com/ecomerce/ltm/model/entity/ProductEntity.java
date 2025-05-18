package com.ecomerce.ltm.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "power", nullable = false)
    private int power;

    @Column(name = "rating" , nullable = false)
    private double rating;

    @Column(name = "stock", nullable = false)
    private int stock;


}
