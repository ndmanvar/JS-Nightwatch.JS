# Changes to be made (reference Sauce Account)

```
	export SAUCE_USERNAME=your_username
	export SAUCE_ACCESS_KEY=your_access_key
```

# Setup
install bundler:
```
	npm install nightwatch
	npm install nodeunit -g
```

# Running tests
to run tests:
```
	./node_modules/.bin/nightwatch -e chrome,firefox,internet_explorer_10,android_s4_emulator,iphone_6_simulator tests

```
