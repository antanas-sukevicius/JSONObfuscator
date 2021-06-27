const fs = require('fs');

module.exports.getUniqueStrings = function (arrayOfStrings) {
    return arrayOfStrings.filter(function (elem, pos) {
        return arrayOfStrings.indexOf(elem) == pos;
    })
}

module.exports.removeStartEndChar = function (arrayOfStrings) {
    arrayOfStrings.forEach((e, i) => {
        arrayOfStrings[i] = e.substring(1, e.length - 1)
    });

    return arrayOfStrings;
}

module.exports.encodeString = function (arr) {
    const stringsMap = new Map([]);

    arr.forEach(str => {
        stringCoded = str.split("").map(char => addZeros(char.charCodeAt(0).toString(16))).join("\\u");
        stringsMap.set(str, "\\" + stringCoded)
    }
    )
    return stringsMap;
}

module.exports.encodeJSON = function (JSONstring, codeMap) {
    for (let entry of codeMap.entries()) {
        let str = entry[0], strCoded = entry[1];
        JSONstring = JSONstring.replaceAll(`"${str}"`, `"${strCoded}"`)
    }

    return JSONstring;

}

module.exports.writeFile = function (filePath, str){
    try {
        fs.writeFileSync(filePath, str);
        return filePath;
    } catch (err) {
        return 0;
    }
}

module.exports.generateMappingFile = function (filePath, objMap){
    const strJSONMap = JSON.stringify(mapToObj(objMap));
    return module.exports.writeFile(filePath, strJSONMap)
}


mapToObj = function (map) {
    var obj = {}
    map.forEach(function (v, k) {
        obj[k] = v
    })
    return obj;
}

addZeros = function (str) { return ("0000" + str).slice(-4) }