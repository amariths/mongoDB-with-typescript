# Nedan är en guide på vad vissa delar gör.

Importerar express och använder Request (Begäran/Frågan) samt Respons (Svar tillbaka) funktionaliteten:
<img width="442" alt="image" src="https://user-images.githubusercontent.com/81353827/236644208-622f04f8-b0c7-42a4-859c-35716eb181a9.png">
OBS: går även att skriva import express from express och bara använda req, res

Importerar connect funktionaliteten från mongoose biblioteket:
<img width="276" alt="image" src="https://user-images.githubusercontent.com/81353827/236644244-9b99ee16-b378-403a-bcc4-712ddfdb1fd2.png">

Skapar en express-applikation:
<img width="170" alt="image" src="https://user-images.githubusercontent.com/81353827/236644273-deef9d8c-66b9-45fb-892c-c642cc759b61.png">

Ett middleware är en metod för att använda (use), här använder vi:

- json:
<img width="115" alt="image" src="https://user-images.githubusercontent.com/81353827/236644378-35a1c724-f001-4fff-9ef7-a06ec52c5b63.png">

- En routerfil (en fil där vi lägger olika rutter på vår sida), i detta fallet en routerfil som kallas carrouter:
<img width="602" alt="image" src="https://user-images.githubusercontent.com/81353827/236644457-807f7632-79ca-49b1-acfb-3b91b6986708.png">

Vi bestämmer vilken port som vår server ska använda (OBS: en server port är inte densamma som en databas port) tillika så är en server är inte samma sak som en databas.
En databas innehåller data, en server hanterar olika paket som skickas i nätverk (En dator kan vara både server och databas i ett):
<img width="134" alt="image" src="https://user-images.githubusercontent.com/81353827/236644557-533ced67-35ca-4a9f-a8c7-1b5e31705430.png">

Förutom att man importerar express och annat som berättar hur servern ska "arbeta" så behöver man även starta servern och be den lyssna på "trafiken":
<img width="422" alt="image" src="https://user-images.githubusercontent.com/81353827/236644694-fa478529-0ef7-41e8-bacb-8ed3a1dc9a06.png">




