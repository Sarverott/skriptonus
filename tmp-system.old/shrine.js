/*
  Skriptonus
  part of Anubis System
  Sett Sarverott 2019
*/
/*
try{
  const Cult=require("./cult.js");
  const Preacher=require("./preacher.js");
}catch(e){
  null;
}
*/
var

class Shrine{
  constructor(name=null){
    if(name==null||!name instanceof String){
      throw "SHRINE_WITHOUT_NAME";
    }
    this.inquisitors=new Cult(
      "Inquisition of "+name,
      this,
      function(value){
        return value instanceof Preacher;
      }
    );
    this.name=name;
    this.priests=[];
  }
  registPriest(priest){
    if(priest instanceof Preacher){
      this.priests.push(priest);
      return this;
    }else{
      return null;
    }
  }
}

try{
  module.exports=Shrine;
}catch(e){
  null;
}
