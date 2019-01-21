NODEMON 	:= 		node_modules/.bin/nodemon
WEBPACK 	:= 		node_modules/.bin/webpack

clean-deps: clean-lockfile clean-node_modules

clean-lockfile: 
	rm -rf package-lock.json

clean-node_modules: 
	rm -rf node_modules

deps:
	npm i

dev:
	$(WEBPACK) --config ./build/webpack.dev.js -w --colors --progress

init:
	nvm init

prod: deps prod-bundle
	NODE_ENV='production' node ./web-server/server.js

prod-bundle:
	$(WEBPACK) --config ./build/webpack.prod.js --colors --env.production

server:
	$(NODEMON) ./web-server/server.js
