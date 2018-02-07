import sqlite3
 
conn = sqlite3.connect("tmp/robot.db")
 
cur = conn.cursor()
# sql = "select * from test where name=:name"
# cur.execute(sql, {"name":'lee'})
# cur.execute("select * from test")

sql = "select * from test where name=?"
cur.execute(sql, ['lee'])
rows = cur.fetchall()
for row in rows:
    print(row)
 
conn.close()