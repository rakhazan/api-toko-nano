-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2024 at 08:30 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `k_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`, `is_deleted`) VALUES
(1, 'Pokok', '2023-11-27 01:28:19', NULL, 0),
(2, 'cemilan', '2024-02-12 07:15:48', NULL, 0),
(3, 'hewani', '2024-02-12 07:15:48', NULL, 0),
(4, 'nabati', '2024-02-12 07:15:48', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `fullname`, `username`, `email`, `phone`, `address`, `password`, `created_at`, `updated_at`, `is_deleted`) VALUES
(1, 'Ahmad Maulana', 'lana', 'lana@gmail.com', '0887263844234', 'Jalan yang pernah ada', 'password123', '2023-11-27 23:57:59', '2024-02-10 04:11:30', 0),
(2, 'Diana Putri', 'diana', 'diana@gmail.com', '812873234732', NULL, 'password123', '2023-11-27 23:57:59', NULL, 0),
(3, 'Zainudin Ahmad', 'Zain', 'zain.ahmad@gmail.com', NULL, NULL, 'password123', '2024-02-01 07:32:40', NULL, 0),
(4, 'Agatha Gabriella', 'gabagta', 'gabagta@gmail.com', NULL, NULL, 'password123', '2024-02-07 07:22:53', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `address` text NOT NULL,
  `total` int(11) NOT NULL DEFAULT 0,
  `date` date NOT NULL,
  `status` enum('Diproses','Dikirim','Diterima','Dibatalkan','Dipesan') DEFAULT 'Dipesan',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `address`, `total`, `date`, `status`, `created_at`, `updated_at`, `is_deleted`) VALUES
(1, 1, '', 30000, '2024-01-26', 'Diproses', '2024-01-25 17:45:00', '2024-01-25 19:15:39', 0),
(2, 1, '', 30000, '2024-01-26', 'Diproses', '2024-01-25 17:47:17', NULL, 0),
(4, 1, 'Default alamat adalah alamat yang diisi diprofile namun bisa di edit ketika ingin melakukan checkout', 70000, '2024-02-08', 'Dibatalkan', '2024-02-08 07:38:19', '2024-02-11 14:45:38', 0),
(7, 1, 'Default alamat adalah alamat yang diisi diprofile namun bisa di edit ketika ingin melakukan checkout', 70000, '2024-02-08', 'Dipesan', '2024-02-08 10:32:07', NULL, 0),
(8, 1, 'Default alamat adalah alamat yang diisi diprofile namun bisa di edit ketika ingin melakukan checkout', 70000, '2024-02-08', 'Dikirim', '2024-02-08 10:33:01', NULL, 0),
(9, 2, 'Default alamat adalah alamat yang diisi diprofile namun bisa di edit ketika ingin melakukan checkout', 70000, '2024-02-11', 'Dikirim', '2024-02-11 05:25:41', NULL, 0),
(10, 1, 'Jalan yang pernah ada', 40000, '2024-02-11', 'Dipesan', '2024-02-11 08:38:55', NULL, 0),
(11, 1, 'Jalan yang pernah ada', 40000, '2024-02-11', 'Dikirim', '2024-02-11 08:40:30', NULL, 0),
(12, 1, 'Jalan yang pernah ada', 40000, '2024-02-11', 'Dipesan', '2024-02-11 09:20:40', NULL, 0),
(13, 2, 'Default alamat adalah alamat yang diisi diprofile namun bisa di edit ketika ingin melakukan checkout', 70000, '2024-02-11', 'Dipesan', '2024-02-11 10:35:13', NULL, 0),
(14, 2, 'Default alamat adalah alamat yang diisi diprofile namun bisa di edit ketika ingin melakukan checkout', 70000, '2024-02-11', 'Dipesan', '2024-02-11 10:35:31', NULL, 0),
(15, 2, 'Default alamat adalah alamat yang diisi diprofile namun bisa di edit ketika ingin melakukan checkout', 70000, '2024-02-11', 'Dipesan', '2024-02-11 10:36:32', NULL, 0),
(16, 2, 'Default alamat adalah alamat yang diisi diprofile namun bisa di edit ketika ingin melakukan checkout', 70000, '2024-02-11', 'Dipesan', '2024-02-11 10:36:51', NULL, 0),
(17, 1, 'Jalan yang pernah ada', 75000, '2024-02-11', 'Diterima', '2024-02-11 14:38:15', '2024-02-12 06:53:22', 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders_detail`
--

CREATE TABLE `orders_detail` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `buying_price` int(11) NOT NULL DEFAULT 0,
  `quantity` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders_detail`
--

INSERT INTO `orders_detail` (`order_id`, `product_id`, `buying_price`, `quantity`) VALUES
(1, 2, 30000, 1),
(2, 2, 30000, 1),
(4, 2, 30000, 3),
(4, 3, 40000, 2),
(7, 2, 30000, 3),
(7, 3, 40000, 2),
(8, 2, 30000, 3),
(8, 3, 40000, 2),
(9, 2, 30000, 3),
(9, 3, 40000, 2),
(10, 2, 20000, 2),
(11, 2, 20000, 2),
(12, 2, 20000, 2),
(13, 2, 30000, 3),
(13, 3, 40000, 2),
(14, 2, 30000, 3),
(14, 3, 40000, 2),
(15, 2, 30000, 3),
(15, 3, 40000, 2),
(16, 2, 30000, 3),
(16, 3, 40000, 2),
(17, 5, 15000, 1),
(17, 8, 15000, 4);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `image` text DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL DEFAULT 0,
  `stock` int(11) NOT NULL DEFAULT 0,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `image`, `name`, `description`, `price`, `stock`, `category_id`, `created_at`, `updated_at`, `is_deleted`) VALUES
(2, 'https://iili.io/J1usTWN.jpg', 'Susu Ultramilk rasa coklat', 'Ultra Milk Cokelat Susu UHT [1000 mL] merupakan susu cair segar berkualitas tinggi dengan perpaduan natural rasa coklat yang juga mengandung keseimbangan nutrisi baik dari protein, karbohidrat, vitamin, dan mineral seperti kalsium, magnesium, dan forsfor. Sangat cocok diminum sehari-hari terutama oleh remaja.', 5000, 20, 2, '2023-11-27 02:00:27', NULL, 0),
(3, 'https://iili.io/J0iyUsR.jpg', 'Indomie goreng', 'Indomie Goreng Mie Instan merupakan mie instant goreng yang memiliki cita rasa gurih dan lezat, sehingga membuat siapa saja menyukainya. Mie Instan dari Indomie ini dapat dikonsumsi setiap saat kapanpun dan dimanapun, serta aman dikonsumsi.', 3000, 100, 1, '2023-11-27 02:31:51', NULL, 0),
(4, 'https://iili.io/J1usoOv.jpg', 'Gulaku Premium', 'Gulaku Gula Tebu Premium 1 kg Gula Pasir Premium 1kg Gulaku premium adalah gula pasir putih produksi nasional yang berkualitas lebih putih dan lebih jernih, serta diproduksi dari tebu alami langsung dari perkebunan.', 15000, 10, 1, '2023-11-27 02:32:41', NULL, 0),
(5, 'https://iili.io/J1usn5J.jpg', 'Minyak Goreng Bimoli 2L', 'KOMPOSISI :\nMinyak kelapa sawit.\nOTHER DETAILS :\nGunakan minyak goreng dari Bimoli untuk menyempurnakan masakan keluarga yang sudah diproses melalui tahap Pemurnian Multi Proses (PMP) sehingga zat-zat yang bermanfaat bagi kesehatan bisa dipertahankan.\nTAKARAN PER KEMASAN :\nSajian per kemasan : 90\nTAKARAN PER SERVING :\nEnergi total 90kkal, energi dari lemak 90kkal. % AKG: Lemak total 10g, lemak jenuh 4.5g, lemak tidak jenuh tunggal 4.5g, lemak tidak jenuh ganda 1g, kolesterol 0mg, protein 0g, karbohidrat total 0g, natrium 0mg.\nTAKARAN SAJI :\nTakaran saji (1sdm): 10g', 42500, 30, 1, '2023-11-27 02:33:48', NULL, 0),
(6, 'https://iili.io/J1usCJa.jpg', 'Beras 1L', 'ini adalah deskripsi produk', 18000, 200, 1, '2023-11-27 02:34:26', NULL, 0),
(7, 'https://iili.io/J1usqUg.jpg', 'Pronas Corned Beef', 'Pronas Corned Beef merupakan kornet yang diolah dari daging sapi pilihan dan diproses secara higienis menggunakan modern. Kornet Pronas ini dibuat padat tanoa campuran tepung sehingga saat dimasak tidak berair dan tidak lembek.', 25000, 75, 3, '2023-11-27 02:37:12', NULL, 0),
(8, 'https://iili.io/J1usf0F.jpg', 'ASTOR', 'Deskripsi Produk\nAstor wafer stick coklat\n\nKomposisi :\nGula, terigu, minyak nabati, susu bubuk, kakao bubuk, tapioka, kacang mede, multidestrin, lesitin kedelai, pewarna karamel, garam, vanili, pengembang.\n\nTakaran Per Kemasan :\nSajian per kemasan : 2\n\nTakaran Per Serving :\nEnergi total 120kkal, energi dari lemak 40kkal, lemak total 4.5g, protein 2g, karbohidrat total 18g, gula 12g, natrium 50mg.\n\nTakaran Saji :\nTakaran saji : 25g', 7400, 50, 2, '2023-11-27 02:37:28', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `payment_method` enum('Bank Transfer','COD') DEFAULT NULL,
  `payment_status` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `order_id`, `date`, `payment_method`, `payment_status`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL, 0, '2024-02-11 05:22:09', NULL),
(2, 2, '2024-02-11', 'Bank Transfer', 1, '2024-02-11 05:22:41', '2024-02-11 14:31:20'),
(3, 4, NULL, NULL, 0, '2024-02-11 05:22:41', NULL),
(4, 7, NULL, NULL, 0, '2024-02-11 05:22:41', NULL),
(5, 8, '2024-02-12', 'Bank Transfer', 1, '2024-02-11 05:22:41', '2024-02-12 07:26:16'),
(6, 9, '2024-02-11', 'Bank Transfer', 1, '2024-02-11 05:25:41', '2024-02-11 05:29:24'),
(7, 10, NULL, NULL, 0, '2024-02-11 08:38:55', NULL),
(8, 11, NULL, NULL, 0, '2024-02-11 08:40:30', NULL),
(9, 12, '2024-02-11', 'Bank Transfer', 1, '2024-02-11 09:20:40', '2024-02-11 14:39:26'),
(10, 13, NULL, NULL, 0, '2024-02-11 10:35:13', NULL),
(11, 14, NULL, NULL, 0, '2024-02-11 10:35:31', NULL),
(12, 15, NULL, NULL, 0, '2024-02-11 10:36:32', NULL),
(13, 16, NULL, NULL, 0, '2024-02-11 10:36:51', NULL),
(14, 17, '2024-02-11', 'Bank Transfer', 1, '2024-02-11 14:38:15', '2024-02-11 14:38:50');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_customer_order` (`customer_id`);

--
-- Indexes for table `orders_detail`
--
ALTER TABLE `orders_detail`
  ADD PRIMARY KEY (`order_id`,`product_id`),
  ADD KEY `fk_product_orderdetail` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_categories_product` (`category_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_transaction` (`order_id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`customer_id`,`product_id`),
  ADD KEY `fk_product_wishlist` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_customer_order` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `orders_detail`
--
ALTER TABLE `orders_detail`
  ADD CONSTRAINT `fk_order_orderdetail` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_product_orderdetail` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_categories_product` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `fk_order_transaction` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `fk_customer_wishlist` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_product_wishlist` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
