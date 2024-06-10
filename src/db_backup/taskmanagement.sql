-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2024 at 02:33 PM
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
  `userId` int(11) NOT NULL,
  `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_description` varchar(255) NOT NULL,
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

INSERT INTO `project_details` (`userId`, `project_id`, `project_name`, `project_description`, `start_date`, `end_date`, `developer`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '1369d094-935c-4209-a2a1-ce3982d40c9d', 'Express Miles', 'Hii this is my new Express Miles Project', '2023-05-25', '2023-05-26', 'Shadab', 'Non-billable', '2024-06-10 07:59:33', '2024-06-10 07:59:33'),
(2, '2d29075d-3f04-4f97-bd3d-2316cfb76381', 'Data Inherit', 'Hii this is my new Data Inherit Project', '2023-05-15', '2023-05-26', 'Rahul', 'Non-billable', '2024-06-10 11:27:04', '2024-06-10 11:27:04'),
(3, '3817e650-9fca-406e-95ad-1e35b6e38dd5', 'Nirvasa ', 'Hii this is my new Nirvasa Project', '2023-05-25', '2023-05-26', 'Ramesh', 'Non-billable', '2024-06-10 07:58:26', '2024-06-10 07:58:26'),
(3, '4ab3d5ef-df29-4854-8004-9702622cba40', 'Transformers ', 'Hii this is my new Transformers Project', '2023-05-25', '2023-05-26', 'Ramesh', 'Non-billable', '2024-06-10 07:57:58', '2024-06-10 07:57:58'),
(1, '5308702a-089e-415c-b254-a5e15292fdfa', 'Server', 'Hii this is my new Server Project', '2023-05-15', '2023-05-26', 'Shadab', 'Non-billable', '2024-06-10 08:00:50', '2024-06-10 08:00:50'),
(1, '8183ac9e-5a47-4826-948d-19b530227f5f', 'Mantra', 'Hii this is my new Mantra Project', '2023-05-15', '2023-05-26', 'Shadab', 'Non-billable', '2024-06-10 08:00:19', '2024-06-10 08:00:19'),
(2, '8cfdb4fb-7214-4cee-8bc3-8fba7f0b7464', 'Insta', 'Hii this is my new Insta Project', '2023-05-15', '2023-05-26', 'Rahul', 'Non-billable', '2024-06-10 08:02:37', '2024-06-10 08:02:37'),
(2, 'e35833b0-5076-40b4-a8bd-2f3184d63bd8', 'Axios', 'Hii this is my new Axios Project', '2023-05-15', '2023-05-26', 'Rahul', 'Non-billable', '2024-06-10 08:02:09', '2024-06-10 08:02:09'),
(3, 'e53fabad-b640-4c78-9805-4e09de0e6d07', 'New Project', 'Hii this is my new proejct', '2023-05-23', '2023-05-23', 'Ramesh', 'Non-billable', '2024-06-10 07:56:59', '2024-06-10 07:56:59'),
(2, 'ee2ad7eb-bbf6-4116-9a16-9c20cce286f6', 'Meta', 'Hii this is my new Meta Project', '2023-05-15', '2023-05-26', 'Rahul', 'Non-billable', '2024-06-10 08:02:21', '2024-06-10 08:02:21');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `task_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `project_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `task_name` varchar(255) NOT NULL,
  `task_description` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `developer` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`task_id`, `project_id`, `task_name`, `task_description`, `start_date`, `end_date`, `developer`, `status`, `createdAt`, `updatedAt`) VALUES
('a2ad80ef-7d40-49aa-b45f-8ee34df476e9', '8cfdb4fb-7214-4cee-8bc3-8fba7f0b7464', 'Generate Invoice', 'Hi im task of Generate Invoice', '2023-05-15', '2023-05-26', 'Rahul', 'Non-billable', '2024-06-10 10:13:31', '2024-06-10 10:13:31'),
('c3f336da-4b85-4223-b339-8e61abbc9ec6', '8cfdb4fb-7214-4cee-8bc3-8fba7f0b7464', 'Sprite', 'Hi im task of spriete', '2023-05-15', '2023-05-26', 'Rahul', 'Non-billable', '2024-06-10 10:12:57', '2024-06-10 10:12:57'),
('d08f3afd-8ac5-4282-be3b-0a369258e931', '8cfdb4fb-7214-4cee-8bc3-8fba7f0b7464', 'Generate Mobile', 'Generate Mobile', '2023-05-15', '2023-05-26', 'Rahul', 'Non-billable', '2024-06-10 10:18:14', '2024-06-10 10:18:14');

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
(3, 'Ramesh', 'ramesh@gmail.com', 'b6aa2ba4d5da750d50907a06f31e74fc', '2024-06-04 08:30:14', '2024-06-04 08:30:14'),
(4, 'Suresh', 'suresh@gmail.com', 'bac015e70aa82a58423deae70f973c27', '2024-06-05 10:34:26', '2024-06-05 10:34:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project_details`
--
ALTER TABLE `project_details`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `project_details`
--
ALTER TABLE `project_details`
  ADD CONSTRAINT `project_details_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project_details` (`project_id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
