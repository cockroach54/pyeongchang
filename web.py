# all the imports
import sqlite3, json, jinja2, os, html
import datetime
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash, send_from_directory
from flask_cors import CORS, cross_origin # http://flask-cors.readthedocs.io/en/latest/
from contextlib import closing
from flaskext.mysql import MySQL
# for mongoDB
import pymongo
client = pymongo.MongoClient('mongodb://lsw:0000@ds241578.mlab.com:41578/pyeongchang')
db = client.pyeongchang
collection = db.survey  # survey backup
print('mongoDB connected...')

#-------sqlite3---------
# 라우팅 함수 내에서 선언

# ANGULAR SPA쓰므로 아래 설정 반드시 필요 
app = Flask(__name__, static_url_path='',
            static_folder='front/dist2',)
            # template_folder='templates')
CORS(app, support_credentials=True)
#-------mysql---------
mysql = MySQL()
# sungwoo local
# app.config['MYSQL_DATABASE_USER'] = 'guest'
# app.config['MYSQL_DATABASE_PASSWORD'] = '0000'
# app.config['MYSQL_DATABASE_DB'] = 'robot'
# app.config['MYSQL_DATABASE_HOST'] = 'localhost'

# real db
app.config['MYSQL_DATABASE_USER'] = 'lsw'
app.config['MYSQL_DATABASE_PASSWORD'] = 'lsw0504'
app.config['MYSQL_DATABASE_DB'] = 'olympic'
app.config['MYSQL_DATABASE_HOST'] = '10.0.1.163'
mysql.init_app(app)

# 이건 파이썬 템플릿 렌더링 위치만 변경. 지금은 앵귤러에서 다 하므로 렌더링 불필요 
# my_loader = jinja2.ChoiceLoader([
#     app.jinja_loader,
#     jinja2.FileSystemLoader('front/dist'),
# ])
# app.jinja_loader = my_loader

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path), 'favicon.png')

@app.route("/")
@app.route("/dashboard")
@app.route("/textNews")
@app.route("/cardNews")
@app.route("/movieNews")
def home():
    return send_from_directory(os.path.join(app.root_path, 'front/dist'), 'index.html')    

@app.route("/contents")
@app.route("/contents/<style>")
@app.route("/contents/<style>/<game>")
@app.route("/contents/<style>/<game>/<gameKind>")
def contents_style(style=None, game=None, gameKind=None):
    if game==None or gameKind==None: return 'please, Enter the correct URL like /contents/[news style]/[game]/[gameKind]'
    return send_from_directory(os.path.join(app.root_path, 'front/dist2'), 'news.html')      

@app.route("/survey", methods=['POST'])
@cross_origin(supports_credentials=True)
def survey():
    # body = json.loads(request.data.decode('utf-8'))
    body = request.form
    print(body)
    
    # body dict는 immutable이라 변경불가
    player = body['player']
    game = body['game']
    gameKind = body['gameKind']
    newsKind = body['newsKind']
    seq = body['seq']
    q1 = body['q1']
    q2 = body['q2']
    q3 = body['q3']
    q4 = body['q4']
    q5 = body['q5']
    q6 = body['q6']
    q7 = body['q7']
    q8 = body['q8']
    q9 = body['q9']
    q10 = body['q10']
    q11 = body['q11']
    q12 = body['q12']
    q13 = body['q13']
    q14 = body['q14']
    q15 = body['q15']
    q16 = body['q16']
    q17 = body['q17']
    q18 = body['q18']
    s1 = html.unescape(body['s1'])

    # --- date check
    dt = datetime.datetime.now()

    # --- sqlite3
    conn_s = sqlite3.connect('tmp/survey.db')
    cursor_s = conn_s.cursor()
    sql = "insert into result(player, game, gameKind, newsKind, seq, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,s1,year,month,day,hour,minute) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    cursor_s.execute(sql, [player, game, gameKind, newsKind, seq, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,s1,
        dt.year, dt.month, dt.day, dt.hour, dt.minute])
    conn_s.commit()
    conn_s.close()
    # --- mongodb
    saveMongo(player, game, gameKind, newsKind, seq, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,s1,
        dt.year, dt.month, dt.day, dt.hour, dt.minute)
    saveMySQL(player, game, gameKind, newsKind, seq, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,s1,
        dt.year, dt.month, dt.day, dt.hour, dt.minute)

    print(json.dumps(body))
    return json.dumps(body)
    # return send_from_directory(os.path.join(app.root_path), 'thank.html')        

# mongoDB 백업 함수
def saveMongo(player, game, gameKind, newsKind, seq, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,s1,
        yy, mm, dd, hh, m):
    collection.insert({
      'player':player,
      'game': game,
      'gameKind': gameKind,
      'newsKind': newsKind,
      'seq': seq,
      'q1': q1, 'q2': q2, 'q3': q3, 'q4': q5, 'q6': q6, 'q7': q7, 'q8': q8, 'q9': q9,
      'q10': q10, 'q11': q11, 'q12': q12, 'q13': q13, 'q14': q14, 'q15': q15, 'q16': q16, 'q17': q17, 'q17': q18,
      's1': s1,
      'year': yy, 'month': mm, 'day': dd, 'hour': hh, 'minute': m
    })
    print('Saved to mongoDB...')

def saveMySQL(player, game, gameKind, newsKind, seq, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,s1,
        yy, mm, dd, hh, m):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("insert into result(player, game, gameKind, newsKind, seq, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,s1, \
        year, month, day, hour, minute) values('"+player+"','"+game+"','"+gameKind+"','"+newsKind+"', '"+seq+"', "+q1+", "+q2+", "+q3+", "+q4+",\
            "+q5+", "+q6+", "+q7+", "+q8+", "+q9+", "+q10+", "+q11+", "+q12+", "+q13+", "+q14+", "+q15+", "+q16+", "+q17+", "+q18+", '"+s1+"', \
            "+str(yy)+", "+str(mm)+", "+str(dd)+", "+str(hh)+", "+str(m)+")")
    conn.commit()
    conn.close()
    print('Saved to MySQL...')
    
# --------------- api 
@app.route("/api/path")
def getPath():
    player = request.args.get('player')
    game = request.args.get('game')
    gameKind = request.args.get('gameKind')

    # --- mysql
    cursor = mysql.connect().cursor()
    query = "select * from path where player='%s' and sport='%s' and event_name='%s'"%(player, game, gameKind)
    # select component에서 목록 가져오기
    if player=='allList': query = "select player, nation, rank from path where sport='%s' and event_name='%s'"%(game, gameKind)
    cursor.execute(query) 
    # 문자 변수는 반드시 ' ' 로 감싸야함
    data = cursor.fetchall() # 튜플로 들어옴

    print(query, data)
    if data is None:
        return "query is wrong...."
    else:
        return json.dumps(data)

# 뉴스 자료용 스태틱파일 제공 
@app.route("/newsdata/<path:file_path>")
def sendNews(file_path):
    file_path = file_path.split('/')
    file_name = file_path[-1]
    pre_path = '/'.join(file_path[:-1])
    pre_path = '../../DropBox/olympic/'+pre_path # 실제 리눅스 서버에선 이부분 빠져야함
    # pre_path = 'C:\\Users\\LSW\\Dropbox\\olympic\\'+pre_path # 실제 리눅스 서버에선 이부분 빠져야함
    # pre_path = 'newsdata/'+pre_path # 실제 리눅스 서버에선 이부분 빠져야함
    print(pre_path, file_name)
    return send_from_directory(os.path.join(app.root_path, pre_path), file_name)      

# 패스에서 로컬 파일리스트 받아오기
@app.route("/api/filelist")
def getFileList():
    game = request.args.get('game')
    gameKind = request.args.get('gameKind')
    player = request.args.get('player')
    isCard = request.args.get('isCard')
    path = '../../DropBox/olympic/'+game+'/'+gameKind+'/'+player
    # path = 'C:\\Users\\LSW\\Dropbox\\olympic\\'+game+'\\'+gameKind+'\\'+player
    # path = 'newsdata/'+game+'/'+gameKind+'/'+player

    filelist = []
    extension = '.png' # 파일 확장자
    if isCard == 'movie':  extension='.mp4'
    for file in os.listdir(path):
        if file.endswith(extension):
            filelist.append(file)
    print(path, filelist)
    return json.dumps(filelist)


# ---------------여기부터는 테스트용
@app.route("/auth")
def auth():
    # name = request.args.get('name')

    # # --- sqlite3
    # cursor_s = sqlite3.connect('tmp/robot.db').cursor()
    # sql = "SELECT * from test where name = ?"
    # cursor_s.execute(sql, [name])
    # data_s = cursor_s.fetchall() # 리스트로 들어옴

    # --- mysql
    cursor = mysql.connect().cursor()
    cursor.execute("SELECT * from path") # 문자 변수는 반드시 ' ' 로 감싸야함
    data = cursor.fetchall() # 튜플로 들어옴

    # print(type(data), data, data_s)
    if data is None:
        return "Name is wrong"
    else:
        return json.dumps(data)

@app.route("/insert")
def insert():
    name = request.args.get('name')
    age = request.args.get('age')
    # age = int(age)    

    # --- sqlite3
    conn_s = sqlite3.connect('tmp/robot.db')
    cursor_s = conn_s.cursor()
    sql = "insert into test(name, age) values(?, ?)"
    cursor_s.execute(sql, [name, age])
    conn_s.commit()
    data_s = cursor_s.fetchall() # 리스트로 들어옴
    conn_s.close()

    # --- mysql
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("insert into test(name, age) values('"+name+"', "+age+")")
    conn.commit()
    conn.close()

    return 'Data well saved:'+name+', '+age

# ---------------가상주소 리다이렉션용
# @app.route("/contents/<style>")
# def contents_style(style):
#     print('contents loaded:', style)
#     return send_from_directory(os.path.join(app.root_path, 'front/dist2'), 'news.html')    


# SPA prge refresh문제 해결용
@app.errorhandler(404)
def page_not_found(e):
    # return send_from_directory(os.path.join(app.root_path, 'front/dist'), 'index.html')    
    return "죄송합니다. 요청하신 페이지를 찾을수 없습니다.(Error: 404)"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) # 이건 내부, 외부 한번에
    # app.run(debug=True, host='10.0.1.21', port=5000)
    # app.run(debug=True, host='127.0.0.1', port=5000)
    # app.run(debug=True)
