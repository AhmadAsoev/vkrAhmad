create table posts
(
    id         int primary key auto_increment,
    content    text,
    created_at timestamp default current_timestamp
);

insert into posts (content) value ('Test content for your example!');