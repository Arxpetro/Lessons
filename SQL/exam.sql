-- 1
create database tasks;
use tasks;

-- 2
create table store (
	id int primary key auto_increment,
    title varchar(128) not null,
    price int,
    quantity int
);

-- 3
insert into store(title, price, quantity) values('Skirt',120,  10);
insert into store(title, price, quantity) values('Shirt', 55, 4);
insert into store(title, price, quantity) values('Jeanse', 135,  15);

select * from store;

-- 4
select * from store 
where price > 100;

-- 5
select * from store
where title like 'S%';

-- 6
SET SQL_SAFE_UPDATES = 0;

update store
set quantity = quantity + 5
where title = 'Jeanse';

-- 7
alter table store
add column quality int;

-- 8
update store
set quality = case
				when price > 100 then 5
				else 4
			   end;

-- 9
delete from store 
where quantity < 10;

-- 10
drop table store;

-- 11
drop database tasks;

-- 12
drop database shop;
CREATE DATABASE shop;

USE shop;

CREATE TABLE SELLERS(
       SELL_ID    INTEGER, 
       SNAME   VARCHAR(20), 
       CITY    VARCHAR(20), 
       COMM    NUMERIC(2, 2),
             BOSS_ID  INTEGER
);
                                            
CREATE TABLE CUSTOMERS(
       CUST_ID    INTEGER, 
       CNAME   VARCHAR(20), 
       CITY    VARCHAR(20), 
       RATING  INTEGER
);

CREATE TABLE ORDERS(
       ORDER_ID  INTEGER, 
       AMT     NUMERIC(7,2), 
       ODATE   DATE, 
       CUST_ID    INTEGER,
       SELL_ID    INTEGER 
);

INSERT INTO SELLERS VALUES(201,'Олег','Москва',0.12,202);
INSERT INTO SELLERS VALUES(202,'Лев','Сочи',0.13,204);
INSERT INTO SELLERS VALUES(203,'Арсений','Владимир',0.10,204);
INSERT INTO SELLERS VALUES(204,'Екатерина','Москва',0.11,205);
INSERT INTO SELLERS VALUES(205,'Леонид ','Казань',0.15,NULL);


INSERT INTO CUSTOMERS VALUES(301,'Андрей','Москва',100);
INSERT INTO CUSTOMERS VALUES(302,'Михаил','Тула',200);
INSERT INTO CUSTOMERS VALUES(303,'Иван','Сочи',200);
INSERT INTO CUSTOMERS VALUES(304,'Дмитрий','Ярославль',300);
INSERT INTO CUSTOMERS VALUES(305,'Руслан','Москва',100);
INSERT INTO CUSTOMERS VALUES(306,'Артём','Тула',100);
INSERT INTO CUSTOMERS VALUES(307,'Юлия','Сочи',300);


INSERT INTO ORDERS VALUES(101,18.69,'2022-03-10',308,207);
INSERT INTO ORDERS VALUES(102,5900.1,'2022-03-10',307,204);
INSERT INTO ORDERS VALUES(103,767.19,'2022-03-10',301,201);
INSERT INTO ORDERS VALUES(104,5160.45,'2022-03-10',303,202);
INSERT INTO ORDERS VALUES(105,1098.16,'2022-03-10',308,207);
INSERT INTO ORDERS VALUES(106,75.75,'2022-04-10',304,202); 
INSERT INTO ORDERS VALUES(107,4723,'2022-05-10',306,201);
INSERT INTO ORDERS VALUES(108,1713.23,'2022-04-10',302,203);
INSERT INTO ORDERS VALUES(109,1309.95,'2022-06-10',304,203);
INSERT INTO ORDERS VALUES(110,9891.88,'2022-06-10',306,201);

-- 13
select * from sellers
where SNAME like 'Л%';

-- 14
select * from customers
where RATING > 100 and CITY = "Тула";

-- 15
select * from sellers 
where COMM >= 0.1 and COMM <= 0.15;
 
-- 16
select * from orders
where AMT > 1000 and ODATE > '2022-04-01';

-- 17
select * from sellers
where CITY = "Москва"
order by -SELL_ID;

-- 18
select * from orders
where CUST_ID = 304
order by -AMT;

-- 19
select CNAME, SNAME, customers.CITY, sellers.CITY from customers
join sellers 
on customers.CITY = sellers.CITY;

-- 20 
select * from orders
where month(orders.ODATE)= '03';

-- 21
select CNAME, AMT, customers.CUST_ID from customers
join orders
on customers.CUST_ID = orders.CUST_ID
where year(orders.ODATE) = '2022' and month(orders.ODATE) = '04';

-- 22
select CNAME, SNAME from customers as c
join orders as o
on c.CUST_ID = o.CUST_ID
join sellers as s
on o.SELL_ID = s.SELL_ID;

-- 23
select SNAME, c.CITY from sellers as s
join orders as o
on s.SELL_ID = o.SELL_ID
join customers as c
on o.CUST_ID = c.CUST_ID;

-- 24
select CNAME, SNAME from customers as c
join orders as o
on c.CUST_ID = o.CUST_ID
join sellers as s
on o.SELL_ID = s.SELL_ID;

-- 25
select SNAME from sellers
where SELL_ID not in (select SELL_ID from orders);

-- 26
select CNAME, AMT from customers
join orders
on customers.CUST_ID = orders.CUST_ID;

-- 27
select CNAME, SNAME from customers as c
left join orders as o
on c.CUST_ID = o.CUST_ID
left join sellers as s
on o.SELL_ID= s.SELL_ID;

-- 28
select distinct(SNAME) from sellers as s
join orders as o
on s.SELL_ID = o.SELL_ID
join customers as c
on o.CUST_ID = c.CUST_ID
where c.CITY = 'Тула';

-- 29
select distinct(CNAME) , AMT from customers as c
join orders as o
on c.CUST_ID = o.CUST_ID
where AMT > 5000;

-- 30
select CNAME, SNAME, ODATE from customers as c
join orders as o
on c.CUST_ID = o.CUST_ID
join sellers as s
on o.SELL_ID = s.SELL_ID
where year(o.ODATE) = '2022' and month(o.ODATE) = '06';


select * from orders order by SELL_ID;
select * from customers;
select * from sellers;











