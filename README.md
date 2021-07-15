# Tienda de Viveres

Este proyecto se realizo con la idea de levantar lo que podria ser una tienda de compras en linea, se podria adaptar a cualquier esquema, se utilizo Nodejs y MySql para el backend y Reactjs para el frontend, usando el framework web de Nextjs, en la aplicación se realiza un CRUD basico de viveres. 

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Este script fue desarrollado y probado usando:_

```
nodejs >= 14.16.1
npm >= 7.17.0
DataBase SQL:
MariaDB Current Version: 10.5.11
```

### Instalación 🔧

_Clone the repository: _

_git clone _
_cd _

_Cree su Database con los siguientes script, dentro de su consola de su manejador de bases de datos: _

```
CREATE productos;
```
_Entre en el archivo productos.sql ubicado en "nextjs-mysql/database" copie y pegue los script adentro del archivo, ejecutelos para crear las tables con su contenido de prueba_

_O copie y pegue los siguientes script: _

```
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
```

_Edite el archivo ".env.local" para configurar variables locales que permiten la conexión a su base de datos. Ingrese sus datos de mysql_host, mysql_database, mysql_username, mysql_password _

_Aqui tienes un ejemplo:_

```
MYSQL_HOST = localhost
MYSQL_DATABASE = productos
MYSQL_USERNAME = jose
MYSQL_PASSWORD = claxxx
```

_Nota: Si alguno de estos datos son incorrectos, dara error al intentar hacer la conexión a la base de datos_

_Install all node modules. _

```
npm install 
```

_Si todo lo anterior esta bien, solamente ejecute el siguiente script para levantar el proyecto en modo desarrollo_

```
npm run dev
```
_Entre en su navegador a la siguiente dirección: 

`http://localhost:3000/`

Podra navegar en las siguientes paginas: 

`http://localhost:3000/frutas`
`http://localhost:3000/verduras`
`http://localhost:3000/factura`

Haga su pedidos dentro del catalogo de productos de "frutas" y/ó "verduras", y luego veo su pedido final en factura.

## Construido con 🛠️

_Herramientas utilizadas para crear el proyecto_

* [Nextjs](https://nextjs.org/docs/getting-started) - El framework web usado
* [Reactjs](https://es.reactjs.org/docs/getting-started.html) - biblioteca Javascript para crear interfaces de usuario