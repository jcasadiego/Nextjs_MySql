-- MariaDB dump 10.19  Distrib 10.5.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: productos
-- ------------------------------------------------------
-- Server version	10.5.11-MariaDB-1:10.5.11+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Factura`
--

DROP TABLE IF EXISTS `Factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Factura` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(200) DEFAULT NULL,
  `Precio` decimal(15,2) DEFAULT NULL,
  `CantidadCompra` int(11) DEFAULT NULL,
  `Imagen` varchar(500) DEFAULT NULL,
  `TotalPago` decimal(15,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Factura`
--

LOCK TABLES `Factura` WRITE;
/*!40000 ALTER TABLE `Factura` DISABLE KEYS */;
/*!40000 ALTER TABLE `Factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Frutas`
--

DROP TABLE IF EXISTS `Frutas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Frutas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(200) DEFAULT NULL,
  `Precio` decimal(15,2) DEFAULT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `Imagen` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Frutas`
--

LOCK TABLES `Frutas` WRITE;
/*!40000 ALTER TABLE `Frutas` DISABLE KEYS */;
INSERT INTO `Frutas` VALUES (1,'Bananas',1.20,17,'photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),(2,'Fresas',2.00,65,'photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),(3,'Durazno',2.50,23,'photos/8754410/pexels-photo-8754410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),(4,'Manzanas',1.00,20,'photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
/*!40000 ALTER TABLE `Frutas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Verduras`
--

DROP TABLE IF EXISTS `Verduras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Verduras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(200) DEFAULT NULL,
  `Precio` decimal(15,2) DEFAULT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `Imagen` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Verduras`
--

LOCK TABLES `Verduras` WRITE;
/*!40000 ALTER TABLE `Verduras` DISABLE KEYS */;
INSERT INTO `Verduras` VALUES (1,'Aguacates',3.30,10,'photos/3029520/pexels-photo-3029520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),(2,'Lechuga',2.30,15,'photos/102123/pexels-photo-102123.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),(3,'Tomates',1.40,8,'photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'),(4,'Cebollas',3.00,7,'photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
/*!40000 ALTER TABLE `Verduras` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-15 17:47:17
