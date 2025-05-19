package com.ecomerce.ltm.model.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductUpdateDTO {
    @NotBlank(message = "Tên sản phẩm không được để trống")
    private String name;

    @NotBlank(message = "Mô tả không được để trống")
    private String description;

    @NotNull(message = "Giá không được để trống")
    @PositiveOrZero(message = "Giá phải là số lớn hơn hoặc bằng 0")
    private Double price;

    @NotBlank(message = "Thương hiệu không được để trống")
    private String brand;

    @NotBlank(message = "Loại sản phẩm không được để trống")
    private String category;

    @NotNull(message = "Công suất không được để trống")
    @Min(value = 0, message = "Công suất phải lớn hơn hoặc bằng 0")
    private Integer power;

    @NotNull(message = "Số sao không được để trống")
    @PositiveOrZero(message = "Số sao phải lớn hơn hoặc bằng 0")
    private Double rating;

    @NotNull(message = "Số lượng tồn kho không được để trống")
    @PositiveOrZero(message = "Số lượng tồn kho phải lớn hơn hoặc bằng 0")
    private Integer stock;
}