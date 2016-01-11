# sails_base
A bare-bones sails application extended to support:
* sass
* bourbon
* bitters
* session authentication
* default login screen

## Heroku Branch Setup
* __Heroku set remote__: ```$ heroku git:remote -a <heroku_repo_name>```
* __Heroku push__: ```$ heroku push origin master```

## Heroku Config Variables
* __ADMIN_EMAIL__: ```heroku config:set ADMIN_EMAIL=<ADMIN_EMAIL>```
* __ADMIN_PASSWORD__: ```heroku config:set ADMIN_PASSWORD=<ADMIN_PASSWORD>```
