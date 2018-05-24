-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 24 mai 2018 à 07:50
-- Version du serveur :  5.6.38
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `babyfoot`
--

-- --------------------------------------------------------

--
-- Structure de la table `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `createdAt` bigint(20) DEFAULT NULL,
  `fromModel` varchar(255) DEFAULT NULL,
  `originalRecord` longtext,
  `originalRecordId` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `babyfoot`
--

CREATE TABLE `babyfoot` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `place` varchar(255) DEFAULT NULL,
  `max_players` double DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `babyfoot`
--

INSERT INTO `babyfoot` (`createdAt`, `updatedAt`, `id`, `place`, `max_players`, `state`) VALUES
(1526563860547, 1526640270933, 1, 'Chartrons, Bordeaux, France', 4, 'free');

-- --------------------------------------------------------

--
-- Structure de la table `match`
--

CREATE TABLE `match` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `duration` double DEFAULT NULL,
  `played` tinyint(1) DEFAULT NULL,
  `inUse` tinyint(1) DEFAULT NULL,
  `redScore` double DEFAULT NULL,
  `blueScore` double DEFAULT NULL,
  `babyfoot` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `match`
--

INSERT INTO `match` (`createdAt`, `updatedAt`, `id`, `duration`, `played`, `inUse`, `redScore`, `blueScore`, `babyfoot`) VALUES
(1524817220267, 1524822741086, 3, 0, 0, 0, 0, 0, 6);

-- --------------------------------------------------------

--
-- Structure de la table `match_bluePlayers__user_blueMatches`
--

CREATE TABLE `match_bluePlayers__user_blueMatches` (
  `id` int(11) NOT NULL,
  `match_bluePlayers` int(11) DEFAULT NULL,
  `user_blueMatches` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `match_bluePlayers__user_blueMatches`
--

INSERT INTO `match_bluePlayers__user_blueMatches` (`id`, `match_bluePlayers`, `user_blueMatches`) VALUES
(6, 3, 17),
(7, 3, 18),
(8, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `match_redPlayers__user_redMatches`
--

CREATE TABLE `match_redPlayers__user_redMatches` (
  `id` int(11) NOT NULL,
  `match_redPlayers` int(11) DEFAULT NULL,
  `user_redMatches` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `match_redPlayers__user_redMatches`
--

INSERT INTO `match_redPlayers__user_redMatches` (`id`, `match_redPlayers`, `user_redMatches`) VALUES
(6, 3, 19),
(7, 3, 16);

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`createdAt`, `updatedAt`, `id`, `text`, `user`) VALUES
(1524747856035, 1524747856035, 1, 'Salut', 7),
(1524747910914, 1524747910914, 2, 'bonjour', 18),
(1524747926458, 1524747926458, 3, 'sa va ?????', 18),
(1524747945436, 1524747945436, 4, '<b>Bonjour</b>', 7),
(1524748002558, 1524748002558, 5, '<img src=\"https://i.imgur.com/dTkdWwP.gif\" />', 7),
(1524748367357, 1524748367357, 6, 'test', 18),
(1524748380760, 1524748380760, 7, 'autre test', 10),
(1524751455636, 1524751455636, 8, 'sqd', 15),
(1524751465554, 1524751465554, 9, 'quelque chose ne va pas ', 15),
(1524751468799, 1524751468799, 10, 'je crois', 15),
(1524751474254, 1524751474254, 11, 'Surement', 14);

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `date` double DEFAULT NULL,
  `babyfoot` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `team`
--

INSERT INTO `team` (`createdAt`, `updatedAt`, `id`, `name`, `owner`) VALUES
(1525427181831, 1525427245353, 1, 'premier degré', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `createdAt` bigint(20) DEFAULT NULL,
  `updatedAt` bigint(20) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `birthDate` double DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `team` int(11) DEFAULT NULL,
  `currentBabyFoot` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`createdAt`, `updatedAt`, `id`, `username`, `password`, `email`, `name`, `firstname`, `birthDate`, `sex`, `team`, `currentBabyFoot`) VALUES
(1524747811488, 1526567227898, 1, 'hnother0', '$2a$10$/jleMqZhZkoAoPcdy5zP2uVtVRgnRywcKvnzmOl0EzR07AAdDgfOO', 'hnother0@vinaora.com', 'Bolt', 'Hussein', 0, 'male', 1, NULL),
(1524747811723, 1526567227898, 2, 'amuddicliffe1', '$2a$10$BB42z49kDXUJZw18KZ9H/uBczw9yxsmjkImohMvkzFnESOun5W4GC', 'amuddicliffe1@sbwire.com', 'Muddicliffe', 'Abe', 0, 'male', NULL, NULL),
(1524747811942, 1524821047387, 3, 'nfabler2', '$2a$10$ojgcZ/BEEm1itqKAMexkme6XUIEIyOf3KPvrIP1rm9YOOtdb7yK.m', 'nfabler2@addthis.com', 'Fabler', 'Nat', 0, 'male', NULL, NULL),
(1524747812175, 1524815034604, 4, 'rpaske3', '$2a$10$xSfyFiJ4CGVz8W7eKY.d4OeSa35rdAAnSafgVpLIp2T46dBV5bjbq', 'paske.risa@hotmail.fr', 'Paske', 'Risa', 0, 'female', NULL, NULL),
(1524747812417, 1524747812417, 5, 'rtwiname4', '$2a$10$1S69y5whBIx4Njpv6OCxOeHINxaA7vKR7d5G13PSXqHQUq1wngYVq', 'rtwiname4@tinypic.com', 'Twiname', 'Raffarty', 0, 'male', NULL, NULL),
(1524747812662, 1524747812662, 6, 'kwylie5', '$2a$10$garmVthAlCOJ6LH8zRp3nOasAk1HWkWaozx4l68EoahiuE10VmZxK', 'kwylie5@google.ca', 'Wylie', 'Kerianne', 0, 'female', NULL, NULL),
(1524747812893, 1524747812893, 7, 'sartrick6', '$2a$10$VrXZkSQSVy/9Xoq4fDLXi.PAn/8y2irCIURhoob8QahsY9imehMM2', 'sartrick6@topsy.com', 'Artrick', 'Sonnnie', 0, 'female', NULL, NULL),
(1524747813144, 1524747813144, 8, 'acornfoot7', '$2a$10$wvCqEltYct7mDZ9bsyqn/eUtIYXua1t43wk1Yo1SbBKPMj48seAqK', 'acornfoot7@nifty.com', 'Cornfoot', 'Ashton', 0, 'male', NULL, NULL),
(1524747813393, 1524747813393, 9, 'ichagg8', '$2a$10$T0zboTcM81iYtpva4AFwmec0IxBLcDSzLNSjzoJqegT4Xk7FKyULO', 'ichagg8@arizona.edu', 'Chagg', 'Ianthe', 0, 'female', NULL, NULL),
(1524747813648, 1524747813648, 10, 'fandriesse9', '$2a$10$KUwZn0GFt27O7rH1w1.Q4eNhgzwyKhLwdsSTV7SB/Ob9Hya3nVvsK', 'fandriesse9@privacy.gov.au', 'Andriesse', 'Ferdy', 0, 'male', NULL, NULL),
(1524747813956, 1524747813956, 11, 'blanglandsa', '$2a$10$oMzIlsrtM.101mtMsr7XYuRgsJtXbDI9xLgAx3wMjJNW3CZnYwXSK', 'blanglandsa@businesswire.com', 'Langlands', 'Blondie', 0, 'female', NULL, NULL),
(1524747814205, 1524747814205, 12, 'jcordeaub', '$2a$10$GroWtm5x0sS5CC4MnpHDFeY7ZlD7YtgK5z/F2Wn0Ip/KyDX42fVwS', 'jcordeaub@un.org', 'Cordeau', 'Jocelyne', 0, 'female', NULL, NULL),
(1524747814459, 1526565022297, 13, 'dbullivantc', '$2a$10$QCeG4Ziwc0NAi/M7d5O35.RbY/FfIyRA0m6gROgWd9HjmVpusfyvS', 'dbullivantc@google.es', 'Bullivant', 'Donaugh', 0, 'male', NULL, NULL),
(1524747814713, 1526565457830, 14, 'aeyteld', '$2a$10$ANYLiZ2OAKqsAql0Wx/m..6dy9OjawRmmx0bPWtCWAhK3rSVLjone', 'aeyteld@cargocollective.com', 'Eytel', 'Arron', 0, 'male', NULL, NULL),
(1524747814970, 1524747814970, 15, 'aburgoine', '$2a$10$eKHolJFZfICJ1Gc5BIR5Lu3XM0R8JUk5QkM5.9NmGTjThCblhGflC', 'aburgoine@bigcartel.com', 'Burgoin', 'Antonino', 0, 'male', NULL, NULL),
(1524747815223, 1524747815223, 16, 'ljirkaf', '$2a$10$kAn8Cj7/c01ziJ7CiGr4/ugusiar0rZiSQX8SppXallWAtk2WG/p6', 'ljirkaf@webeden.co.uk', 'Jirka', 'Lew', 0, 'male', NULL, NULL),
(1524747815478, 1524747815478, 17, 'mquernelg', '$2a$10$7/g4DLQLEvM6ekg6n8F7q.i8t0aEbqyMmvcJGdCaVvgeHYc6uX.hO', 'mquernelg@myspace.com', 'Quernel', 'Myrta', 0, 'female', NULL, NULL),
(1524747815731, 1524747815731, 18, 'sgarfirthh', '$2a$10$Tw0nHAlIv8yCn/yZvhFb5.eiJFKNa1ePfAKc4zRFV/h5fSFQGozfe', 'sgarfirthh@altervista.org', 'Garfirth', 'Saw', 0, 'male', NULL, NULL),
(1524747816040, 1524747816040, 19, 'kshoremani', '$2a$10$BjymVGwqrPulQICEfhrJceQuy1HJnbdwRj2bDos.vQciuahVjnx5O', 'kshoremani@howstuffworks.com', 'Shoreman', 'Kaspar', 0, 'male', NULL, NULL),
(1524747816304, 1524747816304, 20, 'yharrodj', '$2a$10$z3QMd6lJQmmyoGlj8c7fwuV/0CoLBmcdC5rnKKGE44eYxH8tVtkEC', 'yharrodj@tmall.com', 'Harrod', 'Yvette', 0, 'female', NULL, NULL),
(1525438293142, 1526640270959, 22, 'demorite', '$2a$10$.VKBdDo562iyi9yNUkqUzeqCz3iA6Y5Ha3lIf/0oOeorF2icEnMhW', 'dylan3396@hotmail.fr', 'Chamoulaud', 'Dylan', 0, 'male', 1, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `archive`
--
ALTER TABLE `archive`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `babyfoot`
--
ALTER TABLE `babyfoot`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `match`
--
ALTER TABLE `match`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `match_bluePlayers__user_blueMatches`
--
ALTER TABLE `match_bluePlayers__user_blueMatches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `match_redPlayers__user_redMatches`
--
ALTER TABLE `match_redPlayers__user_redMatches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `archive`
--
ALTER TABLE `archive`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `babyfoot`
--
ALTER TABLE `babyfoot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `match`
--
ALTER TABLE `match`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `match_bluePlayers__user_blueMatches`
--
ALTER TABLE `match_bluePlayers__user_blueMatches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `match_redPlayers__user_redMatches`
--
ALTER TABLE `match_redPlayers__user_redMatches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
