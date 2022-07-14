const fs=require("fs"),path=require("path");

const namespaceTools={
(kebabCase)
  =>
  kebabCase.split("-").map((i)=>i[0].toUpperCase()+i.substr(1).toLowerCase()).join("");
  }
}
function pascalCamelcase(kebabCase){
  return kebabCase.split("-").map((i)=>i[0].toUpperCase()+i.substr(1).toLowerCase()).join("");
}
function fileArrayToElementalDictionary(fileArr){
  var output={};
  fileArr.forEach((item)=>{
    var name=path.basename(item, '.js');
    output[pascalCamelcase(name)]=item;
  });
  return output;
}
function listPhillarDefiningSpells(...excludedFiles){

}
var SEED={
  PATH:"seed-of-skriptonus.json"
}

module.exports={
  fileArrayToElementalDictionary,
  readJSON,
  writeJSON,
  SEED,
  listElementalCapableElements,
  get SEED_FILE(){
    //SEED.DATA=readJSON(SEED.PATH);
    return readJSON(SEED.PATH);
  },
  set SEED_FILE(data){
    writeJSON(SEED.PATH, data);
  }
}
