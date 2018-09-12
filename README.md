

``` bash
  	#1) See package.json 'dependencies' part. 
	"date-fns": "^1.29.0",
    "diacriticless": "^1.0.1",
    "install": "^0.12.1",
    "lodash.assign": "^4.2.0",
    "lodash.clone": "^4.5.0",
    "lodash.clonedeep": "^4.5.0",
    "lodash.filter": "^4.6.0",
    "lodash.foreach": "^4.5.0",
    "node-sass": "^4.9.3",
    "npm": "^6.4.1",
    "sass-loader": "^7.1.0",
    "vue": "^2.5.2",
    "vue-good-table": "v2.14.0"


  	#2) See src/main.js
	import VueGoodTablePlugin from './../vue-good-table-master/src/';
	import './../vue-good-table-master/dist/vue-good-table.css'
	Vue.use(VueGoodTablePlugin);


	#3) install dependencies
	npm install

	#4) serve with hot reload at localhost:8080
	npm run dev

```











