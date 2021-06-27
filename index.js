const JSONObfuscator = require("./tools/JSONObfuscator/JSONObfuscator")
const fs = require('fs');
const inputJSONFilePath = "./data.json"

//Get JSNO file data.
const data = fs.readFileSync(inputJSONFilePath).toString();

//Encode example
const objCodedJSON = JSONObfuscator.encode(data);
console.log(objCodedJSON.strEncodedJSON)

//Decode Example
const mappingJSON = fs.readFileSync("./mapping.json").toString();
const obfuscatedJSON = fs.readFileSync("./obfuscatedJSON.json").toString();
const objDecodedJSON = JSONObfuscator.decode(obfuscatedJSON, mappingJSON);


console.log(objDecodedJSON.strDencodedJSON)




