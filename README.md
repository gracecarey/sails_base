# sails_base
A bare-bones sails application extended to support:
* heroku environment integration
* sass
* bourbon
* bitters
* session authentication
* default login screen

## Heroku Setup
* __Heroku set to existing remote__: ```$ heroku git:remote -a <heroku_repo_name>```

## Heroku Config Variables
* __ADMIN_EMAIL__: ```heroku config:set ADMIN_EMAIL=<ADMIN_EMAIL>```
* __ADMIN_PASSWORD__: ```heroku config:set ADMIN_PASSWORD=<ADMIN_PASSWORD>```
* __SESSION_SECRET___: ```heroku config:set SESSION_SECRET=<new_session_secret>```

## Generate new session secret
* __Python shell__: ```$ python```
* __Print new hash__:

```
import random
print "new_session_secret: %032x" % random.getrandbits(128)
```
