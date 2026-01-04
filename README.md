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
