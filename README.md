# geneInsureCQM
web based call quality monitoring app with java springboot RESTful API in back-end, MySQL and Angular 12 in fronted 

Angular is in master branch
If the spring boot API is not running angular fronted illustrates just minimum functions without saving data to database
If API is running the angular front end captures (agent name, supervisor, call reference....) first and then go on to capture monitering questions and answers for that agent and lastly displays the table for answers, scores and max score

MySQL database and java springboot API are in the backEnd branch
Database configs/properties(database name,username, password) for Springboot API(CQM_backEnd) are in ../resources/application.properties
