# SomeMate


## DB
**1. 유저 정보를 저장하는 테이블 Users** <br>

**2. MBTI 및 궁합 정보를 저장하는 테이블** <br>


```sql
create database somemate;
use somemate;

create table mbti(
	my_mbti varchar(10) primary key,
  best_mbti varchar(10)
);

create table users(
    idx int primary key auto_increment,
    phone varchar(20) not null unique,
    `name` varchar(20) not null,
    `password` varchar(40) not null,
    mbti varchar(10) not null,
    foreign key(mbti) references mbti(my_mbti)
);

```
