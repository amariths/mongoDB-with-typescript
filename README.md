[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/k4AJpgNF)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11109605&assignment_repo_type=AssignmentRepo)
# Uppgift Del 3 av kursen fullstack. 
# Skapa en MERN applikation
# Deadline är den 14 Maj kl 23:59
# Maxbetyg på denna inlämning är betyget G.

Ni ska nu bygga ett REST-api med hjälp av Typescript, ExpressJS, MongoDB och Mongoose.
Första stegen följer ni anvisningarna, det är viktigt att ni gör detta nogrannt, därefter kommer ett uppdrag till er i slutet.
Glöm EJ att använda insomnia för att kolla så era end-points fungerar

##Resources
1. Avancera
- MongoDB Introduktion: https://avancera.app/courses/4b4f84f4-66dd-4c67-9170-6b312c4c2d1f/a05dfad2-d81d-4366-be01-73f45f883ac3
- MongoDB med Node: https://avancera.app/courses/4b4f84f4-66dd-4c67-9170-6b312c4c2d1f/d610ff86-2f5d-4f42-80b4-e091ae4eede4
- Mongoose: https://avancera.app/courses/4b4f84f4-66dd-4c67-9170-6b312c4c2d1f/97896111-0517-47f0-ac16-44cd6059659b

2. Mongoose
- https://mongoosejs.com/
- https://mongoosejs.com/docs/queries.html

3. MDN
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose


## Prerequisites

Innan ni starta behöver ni:

- MongoDB installerat
- MongoDB-Compass installerat
- NodeJS installerat
- VSCode
- Insomnia

## Stackens komponenter

Ni använder er av följande komponenter:

- __TypeScript__ är programmeringsspråket ni använder er av.

- __Node.JS__ är en runtime som kör er kod
- __MongoDB__ är databasen där ni lagrar data som postas in via api:et
- __Mongoose__ är ett npm-paket ni använder för att ansluta och skicka frågor till databasen.

## Sätta upp TS-miljön

1. Skapa ett repo på github inkl en readme fil och öppna den med github desktop och sedan öppna med VSCode, starta terminalen och skriv:

> ```npm init```

2. Stega igenom guiden för att sätta upp npm
3. Installera *TypeScript*, *ts-node* och *nodemon*:

> ```npm i typescript ts-node```

> ```npm i nodemon --save-dev```

4. Generera *tsconfig.json*

> ```npx tsc --init```

## Sätta upp Express.js

1. Installera express med typings

> ```npm i express @types/express```


2. Skapa server.ts och lägg in grundkoden för en express-server:
OBS ange inte som bilden utan ange port 8000.

![Code](/img/code1.png?raw=true "Code")

3. Lägg till start-script i package.json

```json
"start": "nodemon server.ts"
```

4. Testa starta appen och surfa till http://localhost:8000

>```npm start```

## Skapa en router

Vi ska nu lägga till CRUD-operationer för entiteten *animal*. För att kunna separera logiken i appen skapar vi en egen router för animal.

1. Skapa routes/animal.ts

![Code](/img/code2.png?raw=true "Code")

2. Importera animal-routern i server.ts och registrera i express-appen

```typescript
import animalRouter from './routes/animal';
```

...

```typescript
app.use('/animal', animalRouter)
```

## Sätta upp anslutning till Mongoose

1. Installera mongoose och typings

>```npm i mongoose @types/mongoose```

2. Skapa en anslutning till Mongoose i server.ts. Se till att URI:n matchar din databas. Databasnamnet står sist, i nedan exemplet nedan visar jag mitt expempel på hur det ska ska skapas.
VIKTIGT: I er inlämning ska namnet vara ert förnamn och första bokstaven i ert efternamn precis som nedan, ni behöver EJ skapa en databas i terminalen innan, denna applikation löser det åt oss:

```typescript
import { connect } from 'mongoose';
connect('mongodb://localhost:27017/richardc')
```


## Skapa interface och schema för animal

1. Lägg till en mapp 'db' som innehåller all databas-logik
2. I db, lägg till en mapp 'models' som innehåller modeller för alla entiteter (collections)
3. Skapa db/models/animal.ts och lägg in interface, schema och model för animal:

![Code](/img/code3.png?raw=true "Code")

## Skapa en addAnimal-funktion

Nu när vi har modellen är vi redo att skapa funktionen som lägger till ett animal i databasen

1. Skapa db/animalCrud.ts och lägg till en createAnimal-fuktion som använder sig av Animal-modellen vi har skapat

![Code](/img/code4.png?raw=true "Code")

## Skapa en route for POST /animal

1. I routes/animal.ts lägger vi till en ny route för POST som anropar createAnimal från db/animalCrud.ts och returnerar det skapade djuret:

![Code](/img/code5.png?raw=true "Code")


##Glöm ej alla importer....kika på lektionen igen om något är oklart.

## Testa koden
Använd en Rest-klient t.ex. Insomnia för att testa post-endpointen (http://localhost:8000/animal/)

> ```POST /animal```

```json
{
	"name": "Bo",
	"type": "Ko",
	"isMammal": true,
	"numberOfLegs": 2
}
```

# Ert uppdrag!

Nu har vi gått igenom hur man sätter upp alla komponenter och skapar en POST-endpoint. Nu återstår att skapa ytterligare endpoints.
TIPS: Glöm ej att ni både ska ha kod i CRUD filen, i routern och i server.ts filen för att detta ska fungera.

>```GET /animals/:id```
>```GET /animals```
>```PUT /animals```
>```DELETE /animals```
 
Ta hjälp av föreläsningsanteckningarna och Mongoose-dokumentationen för queries (https://mongoosejs.com/docs/queries.html).

#När ni anser att ni är klara då pushar ni upp repot.

## Refaktorering - Extra utmaning för den som önskar!

När ni gjort endpoints för alla CRUD-operationer och koden fungerar är det dags för förbättringar och refaktorisering. Här kommer förslag på saker att göra:

- Bryt ut konfigurerbara värden (t.ex. Connection URI) i en .env-fil och läs in med hjälp av dotenv (https://www.npmjs.com/package/dotenv)
- Lägg till validering av input-data. Använd t.ex. express-validator (https://express-validator.github.io/docs/).
- Se till att rätt statuskoder returneras beroende på metod och utfall.
