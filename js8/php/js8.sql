-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 29 2021 г., 13:06
-- Версия сервера: 10.4.18-MariaDB
-- Версия PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `js8`
--

-- --------------------------------------------------------

--
-- Структура таблицы `js8`
--

CREATE TABLE `js8` (
  `id` int(11) NOT NULL,
  `question` varchar(100) NOT NULL,
  `a1` varchar(100) NOT NULL,
  `a2` varchar(100) NOT NULL,
  `answer` varchar(100) NOT NULL,
  `right_answer` int(11) NOT NULL,
  `n_quiz` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `js8`
--

INSERT INTO `js8` (`id`, `question`, `a1`, `a2`, `answer`, `right_answer`, `n_quiz`) VALUES
(1, '1. Americans call them French fries, the British call them chips.', 'True', 'False', 'In England, what we in America refer to as chips are called crisps.', 1, 1),
(2, '2. Americans call it cotton candy, the British call it candyfloss.', 'True', 'False', 'Fun fact: In Australia they call cotton candy \'fairy floss\'.', 1, 1),
(3, '3. Americans call it a clothespin, the British call it a nipper.', 'True', 'False', 'The British do have a different name for it, though! They generally call it a clothes peg.', 2, 1),
(4, '4. On a car, Americans call it the hood, the British call it the bonnet.', 'True', 'False', 'The British will also use bonnet to mean a hat (as we use it).', 1, 1),
(5, '5. Americans call it a pacifier, the British call it a dummy.', 'True', 'False', '¯\\_(´´)_/¯', 1, 1),
(6, '6. Americans call them flip-flops, the British call them flats.', 'True', 'False', 'The British also call them flip-flops, but sometimes thongs.', 2, 1),
(7, '7. On ice cream, Americans call them sprinkles, the British call them hundreds and thousands.', 'True', 'False', 'Seems like a mouthful (Do you want more hundreds and thousands on your froyo?), but who am I to crit', 1, 1),
(8, '8. Americans call them mints, the British call them jezzies.', 'True', 'False', 'They call them mints too. \'Jezzies\' sort of sounds like something they\'d say, though, right? \'Aye, l', 2, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `js8`
--
ALTER TABLE `js8`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `js8`
--
ALTER TABLE `js8`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
