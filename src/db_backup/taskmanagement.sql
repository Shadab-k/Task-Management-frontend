-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2024 at 12:44 PM
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

INSERT INTO `project_details` (`id`, `project_name`, `start_date`, `end_date`, `developer`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Nirvasa', '2023-05-23', '2023-05-23', 'Shadab', 'billable', '2024-05-31 06:01:35', '2024-05-31 06:01:35'),
(7, 'Task Management', '2024-05-09', '2024-05-23', 'Alice Smith', 'Non-Billable', '2024-05-31 08:39:18', '2024-05-31 08:39:18'),
(15, 'transformers', '2024-06-21', '2024-06-21', 'Alice Smith', 'Billable', '2024-06-01 10:24:35', '2024-06-01 10:24:35'),
(21, 'Data Main ', '2024-06-21', '2024-06-27', 'John Doe', 'Billable', '2024-06-03 04:56:28', '2024-06-03 04:56:28'),
(23, 'Express', '2024-06-07', '2024-06-24', 'Alice Smith', 'Billable', '2024-06-03 05:08:32', '2024-06-03 05:08:32'),
(43, 'Task Management functtoin', '2024-06-03', '2024-06-22', 'Alice Smith', 'Billable', '2024-06-03 10:41:33', '2024-06-03 10:41:33');

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
(1, 'Shadab', 'shadab@gmail.com', '13321846cd47fd79358cda440751108a', '2024-06-03 09:02:08', '2024-06-03 09:02:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project_details`
--
ALTER TABLE `project_details`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
