# Backendhootly

#How to innitized typescript project:

Type commands as follows in terminal

#Step 1) Initize empty javascript project - creates a empty package.json
npm init -y

#Step 2) Install typescript, -d means dev dependancy 
npm install -d typescript 

#Step 3) Create a tsconfig.json 
npx tsc --init

#step 4) Change the rootDr and outDr

a) Navigate to tsconfig.json file

b) keep as follows: Always when you start a new typescript project
"rootDir": "./src",
"outDir": "./dist",


#Starting a backend

1) Install express
npm install express

2) Install types for express
npm install -D @types/express

also you can use @types-config

3) if facing issues with express still navigate to packtage.json file and add  "type": "module",

To run Typescript project add below command in package.json 
"build": "tsc -b",
"start": "node dist/index.js",
"dev": "npm run build && npm run start"
