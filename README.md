# README #

This README would normally document whatever steps are necessary to get xpo-curator-api up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
    1. Pull Repo
    
    2. npm install 
        - Get dependencies
        
    3. npm start
        - To start development
        
* Deployment instructions

    1. Pull Repo (Jenkin)
    
    2. docker build dockerfile
    
    3. docker run -d -p ${PORT}:3000 -e MONGO_URI=${"mongo://ip/name__db"} -e NODE_ENV=${ENV} containerID
    
### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact