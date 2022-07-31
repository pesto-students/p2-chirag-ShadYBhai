create database wearhouse;

use wearhouse;

create table cities(
	CID INT PRIMARY KEY,
	CITY CHAR(20),
	STATE CHAR(20)
);

create table wearhouses(
	wearhouse_id integer,
	CID char(20) references cities(CID),
	WID INTEGER PRIMARY KEY,
	WNAME CHAR(30),
	STATE CHAR(20),
	LOCATION CHAR(20)
);

CREATE TABLE items (
	ITEMNO INTEGER,
    STOREID int references stores(STOREID),
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5,2),
    PRIMARY key(ITEMNO)
);

create table stores (
	STOREID INTEGER,
    STORE_NAME CHAR(20),
    items_item int references items(ITEMNO),
    WID INT references wearhouses(WID),
    LOCATION_CITY CHAR(20),
    primary KEY (STOREID)
);

CREATE TABLE customers (
	CNO INTEGER primary KEY,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20)
);

CREATE TABLE orders (
	ONO INT PRIMARY KEY,
    ORDERDATE DATE,
    CNO INT references customers(CNO)
)
