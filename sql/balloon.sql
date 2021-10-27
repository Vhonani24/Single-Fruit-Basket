create table valid_color (
id serial not null primary key, 
color_name text,
 count integer
);

 create table invalid_color (
id serial not null primary key, 
color_name text,
 count integer
);




insert into valid_color(color_name,count) values('Orange',1);
insert into valid_color(color_name,count) values('Purple',1);
insert into valid_color(color_name,count) values('Lime',1);
