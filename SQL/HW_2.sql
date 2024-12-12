create database oe;
use oe;

-- 1
select CUST_FIRST_NAME, CUST_LAST_NAME, ORDER_DATE 
from customers
join orders
on customers.CUSTOMER_ID = orders.CUSTOMER_ID;

-- 2
select ORDER_DATE, PRODUCT_DESCRIPTION
from orders
join order_items
on orders.ORDER_ID = order_items.ORDER_ID
join product_information as pr
on order_items.PRODUCT_ID = pr.PRODUCT_ID;

-- 3
select CUST_FIRST_NAME, CUST_LAST_NAME, ORDER_DATE, PRODUCT_DESCRIPTION, CATEGORY_NAME
from customers
join orders
on customers.CUSTOMER_ID = orders.CUSTOMER_ID
join order_items
on orders.ORDER_ID = order_items.ORDER_ID
join product_information as pr
on order_items.PRODUCT_ID = pr.PRODUCT_ID
join categories_tab as cat
on pr.CATEGORY_ID = cat.CATEGORY_ID;

-- 4
select PRODUCT_NAME, CATEGORY_DESCRIPTION, QUANTITY
from product_information as pr
join categories_tab as cat
on pr.CATEGORY_ID = cat.CATEGORY_ID
join order_items
on pr.PRODUCT_ID = order_items.PRODUCT_ID
where MIN_PRICE > 300;

-- 5
select CUST_FIRST_NAME, CUST_LAST_NAME, orders.ORDER_ID
from customers
join orders 
on customers.CUSTOMER_ID = orders.CUSTOMER_ID
join order_items
on orders.ORDER_ID = order_items.ORDER_ID
join product_information as pr
where GENDER = "M" and MARITAL_STATUS = "married" and LIST_PRICE > 550;

-- 6
select PRODUCT_NAME
from product_information as p
left join order_items as o
on p.PRODUCT_ID = o.PRODUCT_ID
where o.PRODUCT_ID is null;

select PRODUCT_NAME
from product_information 
where PRODUCT_ID not in ( select PRODUCT_ID from order_items);

-- 7
select CUST_FIRST_NAME, CUST_LAST_NAME
from customers
where CUSTOMER_ID not in (select CUSTOMER_ID from orders);

-- select * from product_information;
-- select * from customers;
-- select * from orders;







