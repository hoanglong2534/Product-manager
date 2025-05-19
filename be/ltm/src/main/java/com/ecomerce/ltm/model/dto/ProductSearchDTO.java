package com.ecomerce.ltm.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductSearchDTO {
    private String name;
    private String category;
    private int priceFrom;
    private int priceTo;
    private int powerFrom;
    private int powerTo;
    private Double rating;
}
