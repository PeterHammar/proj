"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let input = process.argv.slice(2);
console.log(input);
fs_1.default.readFile(path_1.default.resolve(__dirname, input[0]), (err, data) => {
    if (err)
        throw err;
    // console.log(JSON.parse(data.toString()));
    let schemaObj = JSON.parse(data.toString());
    // const baseName = schemaObj.id;
    // const baseIn = schemaObj.in;
    // const baseOut = schemaObj.out;
    console.log("data: ", data);
    let baseSchema = {};
    baseSchema.type = "object";
    baseSchema.properties = schemaObj.in.parameters;
    console.log("Type: ", baseSchema.type);
    console.log("Properties: ", baseSchema.properties);
    let schemeArr;
    let scenarios;
    let iteration = 0;
    for (const scenarioKey in schemaObj.scenarios) {
        console.log("Key: ", scenarioKey);
        console.log("Required: IN: ", (schemaObj.scenarios[scenarioKey].in));
        console.log("Out parameters: ", (schemaObj.scenarios[scenarioKey].out));
        //scenarios[iteration] = schemaObj.scenarios[scenarioKey].in
        iteration++;
    }
    // Schema
    // in
    // out
    // Scenarios
    // Vad är required och inte
    // let test : Schema;
    // test.in.parameters;
    // test.out.parameters;
    // test.scenarios;
    // console.log("Baseschema",baseSchema);
    // let baseData = JSON.stringify(baseSchema, null, 4);
    // fs.writeFile('Schema.txt', baseData, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been savZed!');
    // });
});
/*
-i
-o
-id ligger längst nere
*/ 
