-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2024 at 01:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taskmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `project_details`
--

CREATE TABLE `project_details` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `developer` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_details`
--

INSERT INTO `project_details` (`id`, `userId`, `project_name`, `start_date`, `end_date`, `developer`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Task', '2023-05-23', '2023-05-23', 'Shadab', 'Non-billable', '2024-06-04 08:20:21', '2024-06-04 08:20:21'),
(4, 2, 'Task Management', '2023-05-23', '2023-05-23', 'Rahul', 'Non-billable', '2024-06-04 08:22:19', '2024-06-04 08:22:19'),
(5, 2, 'Task data', '2023-05-23', '2023-05-23', 'Rahul', 'Non-billable', '2024-06-04 08:22:29', '2024-06-04 08:22:29'),
(8, 3, 'Task Funding', '2023-05-23', '2023-05-23', 'Ramesh', 'Non-billable', '2024-06-04 08:31:44', '2024-06-04 08:31:44'),
(9, 2, 'Task Funding', '2023-05-23', '2023-05-23', 'Ramesh', 'Non-billable', '2024-06-04 08:32:38', '2024-06-04 08:32:38'),
(10, 3, 'Task Funding', '2023-05-23', '2023-05-23', 'Ramesh', 'Non-billable', '2024-06-04 08:34:40', '2024-06-04 08:34:40'),
(11, 3, 'Task Manager', '2023-05-23', '2023-05-23', 'Ramesh', 'Non-billable', '2024-06-04 08:34:52', '2024-06-04 08:34:52'),
(12, 1, 'Shadab', '2024-06-01', '2024-06-29', 'Alice Smith', 'Billable', '2024-06-04 09:13:08', '2024-06-04 09:13:08'),
(13, 2, 'Rahul', '2024-06-11', '2024-06-22', 'Alice Smith', 'Billable', '2024-06-04 11:18:42', '2024-06-04 11:18:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Shadab', 'shadab@gmail.com', '13321846cd47fd79358cda440751108a', '2024-06-03 09:02:08', '2024-06-03 09:02:08'),
(2, 'Rahul', 'rahul@gmail.com', '1298815fd9e0a06860203eefd188c354', '2024-06-04 06:05:01', '2024-06-04 06:05:01'),
(3, 'Ramesh', 'ramesh@gmail.com', 'b6aa2ba4d5da750d50907a06f31e74fc', '2024-06-04 08:30:14', '2024-06-04 08:30:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project_details`
--
ALTER TABLE `project_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project_details`
--
ALTER TABLE `project_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `project_details`
--
ALTER TABLE `project_details`
  ADD CONSTRAINT `project_details_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
