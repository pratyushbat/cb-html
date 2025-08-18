mysql -u root -p


create database mytestdb;
use mytestdb

create user myuser identified by 'mypass';

use mytestdb;

 GRANT ALL PRIVILEGES ON mytestdb.*  to myuser;

flush privileges;
exit;



mysql -u myuser -p

use mytestdb
create table test1( id INTEGER PRIMARY KEY,data VARCHAR(40));