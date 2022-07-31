1 - select * from warehouses where cities_id = 
(select cityid from cities where city = "Pune")

2 - select * from warehouses inner join cities on 
warehouses.cities_id = cities.cityid
where cities.city = "Pune";


3 - select * from Items inner join Order on Items.id = Order.id
inner join Customer on Customer.id = Order.CustomerId
where Customer.name = "Mr.Patil"


4 - select * from wearhouses WID = 
(select SID from stores
where stores =  (select MAX(STORES) FROM(WEARHOUSES))
