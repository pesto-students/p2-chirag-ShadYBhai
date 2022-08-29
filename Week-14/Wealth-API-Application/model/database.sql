create table user_table (
	user_id int primary key,
    first_name varchar(30),
    last_name varchar(30),
    email varchar(30),
    password varchar(30)
);

create table assets(
    asset_id int primary key,
	asset_type varchar(30)
);

create table amount_type(
	amount_id int primary key,
    label boolean
);

create table transaction (
	trans_id int primary key,
	created date,	
	user_id int,
    asset_id int,
    amount int,
    amount_type_id int,
    foreign key(asset_id) references assets (asset_id),
    foreign key(amount_type_id) references amount_type(amount_id),
    foreign key(user_id) references user_table (user_id)	
)