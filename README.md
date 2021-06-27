# JSON Obfuscator

#### Tool encodes and decodes JSON string.


## Usage

Usage example: **"node index.js"**

### Encode:
```js 
//Saves encoded file, generates mapping files and gives an output object.
const objCodedJSON = JSONObfuscator.encode(strJSON, obfuscatedJSONFilePath, mappingJSON)

objCodedJSON = {
        strEncodedJSON: encodedJSON,
        strReplacementMap: encodeMap,
        jsonFileSaveStatus: encodedFileSaveStatus,
        mappingFileSaveStatus: mappingFileSaveStatus
    }
```
- **strJSON** - JSON string to obfuscate.
- **obfuscatedJSONFilePath** - Optional, on default saves file no current directory "./obfuscatedJSON.json".
- **mappingJSON** - Optional, on default saves file on current directory "./mapping.json".

#
### Decode:
```js 
//Saves decoded JSON, gives an ouput object.
const objDecodedJSON = JSONObfuscator.decode(obfuscatedJSON, mappingJSON, decodedJSONFilePath);

objDecodedJSON = {
        strDencodedJSON: strJSON,
        strSaveFileStatus: fileSaveStatus
    }
```
- **obfuscatedJSON** - JSON string to decode.
- **mappingJSON** - Mapping json string.
- **decodedJSONFilePath** - Optional, on default saves file on current directory "./decodedJSON.json".