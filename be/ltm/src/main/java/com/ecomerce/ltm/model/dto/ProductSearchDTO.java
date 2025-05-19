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
    private Integer priceFrom;
    private Integer priceTo;
    private Integer powerFrom;
    private Integer powerTo;
    private String brand;
}
