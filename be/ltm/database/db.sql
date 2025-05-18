CREATE
DATABASE IF NOT EXISTS ecommerce;
USE
ecommerce;
CREATE TABLE ecommerce.products
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100)   NOT NULL,
    description TEXT,
    price       DECIMAL(10, 2) NOT NULL,
    brand       VARCHAR(50),
    category    VARCHAR(50),
    power       INT,
    rating      DECIMAL(2, 1),
    stock       INT
);

INSERT INTO ecommerce.products (name, description, price, brand, category, power, rating, stock)
VALUES ('Panasonic Inverter 1HP', 'Máy lạnh tiết kiệm điện, phù hợp phòng nhỏ.', 7800000, 'Panasonic',
        'Air Conditioner', 9000, 4.5, 10),
       ('Samsung Smart TV 55"', 'Smart TV 4K UHD, tích hợp Netflix, YouTube.', 15000000, 'Samsung', 'Television', 150,
        4.7, 5),
       ('Sharp Refrigerator 300L', 'Tủ lạnh 2 cửa, ngăn đá trên, tiết kiệm điện.', 6900000, 'Sharp', 'Refrigerator',
        120, 4.4, 8),
       ('Electrolux Washing Machine 8kg', 'Giặt sạch mạnh mẽ, inverter tiết kiệm điện.', 7200000, 'Electrolux',
        'Washing Machine', 200, 4.3, 6),
       ('LG Microwave Oven 23L', 'Lò vi sóng có nướng, nhiều chế độ nấu.', 2200000, 'LG', 'Microwave', 800, 4.2, 15),
       ('Philips Air Fryer XL', 'Nồi chiên không dầu dung tích lớn, dễ vệ sinh.', 2800000, 'Philips', 'Air Fryer', 1400,
        4.6, 12),
       ('Daikin Inverter 1.5HP', 'Làm lạnh nhanh, tiết kiệm điện, bền bỉ.', 8900000, 'Daikin', 'Air Conditioner', 12000,
        4.8, 4),
       ('Sony Soundbar 2.1', 'Âm thanh vòm sống động, dễ kết nối Bluetooth.', 4100000, 'Sony', 'Speaker', 100, 4.5, 7),
       ('Midea Water Heater 15L', 'Máy nước nóng chống giật, tiết kiệm điện.', 2500000, 'Midea', 'Water Heater', 1500,
        4.1, 9),
       ('Toshiba Rice Cooker 1.8L', 'Nồi cơm điện đa chức năng, chống dính.', 1200000, 'Toshiba', 'Rice Cooker', 700,
        4.0, 20);
