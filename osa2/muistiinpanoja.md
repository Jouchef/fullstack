#Axios käyttöönotto
0. ```Siirry projektin juurikansioon```
1. ```npm install axios```
2. ```npm install json-server --save-dev``` JSON server kehityksenaikaiseksi
3. Lisää package.json scripts: ```"server": "json-server -p3001 --watch db.json"```
4. Käynnistä serveri: ```npm run server```


#Uuden React projektin luominen
1. ```npm create vite@latest projektinNimi -- --template react```
2. ```cd projektinNimi```
3. ```npm install```
4. ```npm run dev```

#Vitessä env muuttujat
1. käynnistäessä: ```export VITE_API_KEY=AVAINTÄHÄN && npm run dev```
2. muuttujan nimen pitää alkaa "VITE_"