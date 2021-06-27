const { getUniqueStrings, removeStartEndChar, encodeString, encodeJSON, writeFile, generateMappingFile } = require('./func')
const defaultOutput_EncodedFileLocation = "./obfuscatedJSON.json"
const defaultOutput_DecodedFileLocation = "./obfuscatedJSON.json"
const dedfaultMapingFile = "./mapping.json"

/**
 * JSON Obfuscator.
 * @param {string} strJSON - JSON string to encode/obfuscate.
 * @param {string} [obfuscatedJSONFilePath] - Output obfuscated JSON file path.
 * @param {string} [mapingFile] - Output mapping file path.
 */
module.exports.encode = (strJSON, obfuscatedJSONFilePath = defaultOutput_EncodedFileLocation, mapingFile = dedfaultMapingFile) => {

    //Regex extracts strings in quotes
    const re = /"(.+?[^\\])"/g

    //Extracts strings.
    const stringsInJSON = strJSON.match(re);
    const uniqueStringsInJSON = getUniqueStrings(stringsInJSON);
    const uniqueStringsInJSON_noQuotes = removeStartEndChar(uniqueStringsInJSON);

    //Encodes JSON File.
    const encodeMap = encodeString(uniqueStringsInJSON_noQuotes);
    const encodedJSON = encodeJSON(strJSON, encodeMap);

    //Generates encoded and mapping falies.
    const encodedFileSaveStatus = (() => {return writeFile(obfuscatedJSONFilePath, encodedJSON) ? true : false})()
    const mappingFileSaveStatus = (() => {return generateMappingFile(mapingFile, encodeMap) ? true : false})()


    return {
        strEncodedJSON: encodedJSON,
        strReplacementMap: encodeMap,
        jsonFileSaveStatus: encodedFileSaveStatus,
        mappingFileSaveStatus: mappingFileSaveStatus
    };

}

/**
 * Obfuscated JSON decoder.
 * @param {string} strJSON - Obfuscate JSON string.
 * @param {string} strJSONMap - Mapping JSNO string.
 * @param {string} [decodedJSONFilePath] - Decoded JSON output file path.
 */
module.exports.decode = (strJSON, strJSONMap, decodedJSONFilePath = defaultOutput_DecodedFileLocation) => {

    objJSONMap = JSON.parse(strJSONMap)

    Object.keys(objJSONMap).forEach((key) => {
        strJSON = strJSON.replaceAll(`"${objJSONMap[key]}"`, `"${key}"`);
    })

    return {strDencodedJSON: strJSON,
            strSaveFileStatus: writeFile(decodedJSONFilePath, strJSON) ? true : false
    };
}





