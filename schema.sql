-- sqlite3 table schema
sqlite> select * from sqlite_master where name = 'result';
CREATE TABLE result (
id integer primary key autoincrement,
player text, game text, gameKind text, newsKind text, seq text,
q1 integer,
q2 integer,
q3 integer,
q4 integer,
q5 integer,
q6 integer,
q7 integer,
q8 integer,
q9 integer,
q10 integer,
q11 integer,
q12 integer,
q13 integer,
q14 integer,
q15 integer,
q16 integer,
q17 integer,
q18 integer,
s1 text,
year integer, month integer, day integer, hour integer, minute integer);

-- mysql survey_result db
CREATE TABLE result (
id int auto_increment,
player text, game text, gameKind text, newsKind text, seq text,
q1 int,
q2 int,
q3 int,
q4 int,
q5 int,
q6 int,
q7 int,
q8 int,
q9 int,
q10 int,
q11 int,
q12 int,
q13 int,
q14 int,
q15 int,
q16 int,
q17 int,
q18 int,
s1 text,
year int, month int, day int, hour int, minute int, primary key(id));


-- mysql path db
mysql> create table path(
    -> player text,
    -> event_name text,
    -> sport text,
    -> text_head text,
    -> text_body text,
    -> card text,
    -> movie text,
    -> id int auto_increment,
    -> primary key(id)
    -> );

mysql> 
insert into path (player, event_name, sport, text_head, text_body, card, movie) 
values('kim', '5000m', 'short track', 'kim won gold prize!!!', 'goooooooooooooooooood!!',
 '/short_track/5000m/kim', '/short_track/5000m/kim')

 insert into path (player, event_name, sport, text_head, text_body, card, movie) 
values('lee', '1000m', 'ski', 'lee won gold prize!!!', 'wooooooooooooo!!',
 '/ski/1000m/lee', '/ski/1000m/lee')

  insert into path (player, event_name, sport, text_head, text_body, card, movie) 
values('overall', 'mass', 'speed', 'park won 1st prize!!!', 'zooo moooooooooooo!!',
 '/speed/mass/overall', '/speed/mass/overall')