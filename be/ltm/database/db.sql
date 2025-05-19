CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

CREATE TABLE IF NOT EXISTS ecommerce.products
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
VALUES 
('Panasonic Inverter 1HP', 'Máy lạnh tiết kiệm điện, phù hợp phòng nhỏ.', 7800000, 'Panasonic', 'Air Conditioner', 9000, 4.5, 10),
('Samsung Smart TV 55"', 'Smart TV 4K UHD, tích hợp Netflix, YouTube.', 15000000, 'Samsung', 'Television', 150, 4.7, 5),
('Sharp Refrigerator 300L', 'Tủ lạnh 2 cửa, ngăn đá trên, tiết kiệm điện.', 6900000, 'Sharp', 'Refrigerator', 120, 4.4, 8),
('Electrolux Washing Machine 8kg', 'Giặt sạch mạnh mẽ, inverter tiết kiệm điện.', 7200000, 'Electrolux', 'Washing Machine', 200, 4.3, 6),
('LG Microwave Oven 23L', 'Lò vi sóng có nướng, nhiều chế độ nấu.', 2200000, 'LG', 'Microwave', 800, 4.2, 15),
('Philips Air Fryer XL', 'Nồi chiên không dầu dung tích lớn, dễ vệ sinh.', 2800000, 'Philips', 'Air Fryer', 1400, 4.6, 12),
('Daikin Inverter 1.5HP', 'Làm lạnh nhanh, tiết kiệm điện, bền bỉ.', 8900000, 'Daikin', 'Air Conditioner', 12000, 4.8, 4),
('Sony Soundbar 2.1', 'Âm thanh vòm sống động, dễ kết nối Bluetooth.', 4100000, 'Sony', 'Speaker', 100, 4.5, 7),
('Midea Water Heater 15L', 'Máy nước nóng chống giật, tiết kiệm điện.', 2500000, 'Midea', 'Water Heater', 1500, 4.1, 9),
('Toshiba Rice Cooker 1.8L', 'Nồi cơm điện đa chức năng, chống dính.', 1200000, 'Toshiba', 'Rice Cooker', 700, 4.0, 20),
('Hitachi Refrigerator 400L', 'Tủ lạnh dung tích lớn, công nghệ làm lạnh kép.', 12500000, 'Hitachi', 'Refrigerator', 160, 4.6, 6),
('Aqua Washing Machine 9kg', 'Giặt nhanh, tiết kiệm nước và điện.', 6100000, 'Aqua', 'Washing Machine', 220, 4.2, 5),
('TCL Smart TV 50"', 'Màn hình LED, hỗ trợ YouTube, Netflix.', 9700000, 'TCL', 'Television', 130, 4.3, 8),
('Panasonic Microwave 25L', 'Lò vi sóng có nướng, dễ sử dụng.', 2400000, 'Panasonic', 'Microwave', 1000, 4.4, 10),
('Mitsubishi Electric Fan', 'Quạt đứng điều khiển từ xa, tiết kiệm điện.', 980000, 'Mitsubishi', 'Fan', 60, 4.1, 18),
('BlueStone Air Fryer 3.5L', 'Nồi chiên không dầu, dễ vệ sinh.', 1900000, 'BlueStone', 'Air Fryer', 1350, 4.3, 12),
('Kangaroo Water Purifier', 'Máy lọc nước RO 5 lõi lọc, bảo vệ sức khỏe.', 3500000, 'Kangaroo', 'Water Purifier', 45, 4.5, 7),
('Coway Air Purifier', 'Máy lọc không khí hiện đại, lọc bụi mịn.', 6300000, 'Coway', 'Air Purifier', 55, 4.7, 4),
('Sunhouse Electric Stove', 'Bếp điện đôi, mặt kính chịu lực.', 2100000, 'Sunhouse', 'Electric Stove', 2000, 4.2, 11),
('Casper Inverter 1HP', 'Máy lạnh tiết kiệm điện, bền bỉ.', 7200000, 'Casper', 'Air Conditioner', 9000, 4.3, 6),
('Fujiyama Rice Cooker 1L', 'Nồi cơm điện nhỏ gọn, phù hợp gia đình ít người.', 890000, 'Fujiyama', 'Rice Cooker', 600, 4.0, 14),
('JBL Bluetooth Speaker', 'Loa di động âm thanh mạnh mẽ, chống nước.', 3200000, 'JBL', 'Speaker', 20, 4.6, 9),
('Panasonic Water Heater 20L', 'Bình nóng lạnh chống giật, tiết kiệm điện.', 2750000, 'Panasonic', 'Water Heater', 1800, 4.4, 5),
('Electrolux Dryer 7kg', 'Máy sấy quần áo tiết kiệm điện, vận hành êm ái.', 7600000, 'Electrolux', 'Dryer', 250, 4.5, 3),
('Toshiba Vacuum Cleaner', 'Máy hút bụi công suất lớn, nhỏ gọn.', 1800000, 'Toshiba', 'Vacuum Cleaner', 1800, 4.2, 13);
