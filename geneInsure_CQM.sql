-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 28, 2021 at 07:12 PM
-- Server version: 8.0.27-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geneInsure_CQM`
--

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `id` int NOT NULL,
  `callrecording_ref` varchar(255) DEFAULT NULL,
  `callref` varchar(255) DEFAULT NULL,
  `customernumber` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `rdate` varchar(255) DEFAULT NULL,
  `supervisor` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`id`, `callrecording_ref`, `callref`, `customernumber`, `name`, `rdate`, `supervisor`) VALUES
(1, 'W3335', 'Q2435', '764556754', 'Taku', '2021-11-28', 'Sabha'),
(12, 'FGGU', 'K872435', '734567988', 'Tasha', '2021-11-29', 'Genius');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(23);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int NOT NULL,
  `agent_name` varchar(255) DEFAULT NULL,
  `answer` int NOT NULL,
  `max_score` int NOT NULL,
  `qsn` varchar(255) DEFAULT NULL,
  `score` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `agent_name`, `answer`, `max_score`, `qsn`, `score`) VALUES
(2, 'Taku', 1, 1, 'Q2 Did the agent introduce him/ herself?', 1),
(3, 'Taku', 2, 1, 'Q5 Did the agent confirm or ask for the potential client\'s name?', 0),
(4, 'Taku', 1, 1, 'Q8 Did the agent mention the client\'s name at least 3 times?', 1),
(5, 'Taku', 1, 1, 'Q10 Did the agent correctly dispose the call?', 1),
(6, 'Taku', 3, 0, 'Q1 Did the agent professionally greet the client?', 0),
(7, 'Taku', 1, 1, 'Q9 Did the agent thank the client for his/ her time?', 1),
(8, 'Taku', 2, 1, 'Q6 Did the agent display knowledge of previous calls?', 0),
(9, 'Taku', 1, 1, 'Q7 Did the agent avoid the use of slang?', 1),
(10, 'Taku', 2, 1, 'Q4 Did the agent fully describe the company\'s product offering?', 0),
(11, 'Taku', 2, 1, 'Q4 Did the agent fully describe the company\'s product offering?', 0),
(13, 'Tasha', 1, 1, 'Q9 Did the agent thank the client for his/ her time?', 1),
(14, 'Tasha', 1, 1, 'Q8 Did the agent mention the client\'s name at least 3 times?', 1),
(15, 'Tasha', 1, 1, 'Q2 Did the agent introduce him/ herself?', 1),
(16, 'Tasha', 2, 1, 'Q6 Did the agent display knowledge of previous calls?', 0),
(17, 'Tasha', 2, 1, 'Q4 Did the agent fully describe the company\'s product offering?', 0),
(18, 'Tasha', 1, 1, 'Q3 Did the agent mention the company\'s name?', 1),
(19, 'Tasha', 2, 1, 'Q10 Did the agent correctly dispose the call?', 0),
(20, 'Tasha', 1, 1, 'Q1 Did the agent professionally greet the client?', 1),
(21, 'Tasha', 1, 1, 'Q7 Did the agent avoid the use of slang?', 1),
(22, 'Tasha', 1, 1, 'Q7 Did the agent avoid the use of slang?', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
