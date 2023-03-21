//1. Import area
const curl = require('curl');
var fs = require('fs');

const jsdom = require("jsdom");

console.log('Hello');
options={};


// html string
//const htmlStr = "<h1>Hello World!</h1>";
 
    // make a new parser


curl.get('https://www.flipkart.com/search?q=tv&page=0', options, function(err, response, body) {
   // console.log('err--->',err);
    //console.log('response--->',response);
    console.log('body--->',typeof body); //.querySelector('div._30jeq3._1_WHN1')
    // html string
    const dom = new jsdom.JSDOM(body);
    console.log(dom.window.document.querySelector("div._30jeq3._1_WHN1").textContent); // 'Hello world'
   

    // convert html string into
    
    /* fs.appendFile('./index.html', body, function (err) {
        if (err) throw err;
        console.log('Saved!');
    }); */
});