/*
  Skriptonus
  part of Anubis System
  Sett Sarverott 2019
*/
try{
  const Cult=require("./cult.js");
  const Person=require("./person.js");
  const Shrine=require("./shrine.js");
}catch(e){
  null;
}

class Preacher extends Person{
  invitation(cult){
    if(this.prophetDomain==null&&cult instanceof Cult){
      this.prophetDomain=cult;
      return true;
    }else{
      return false;
    }
  }
  createCult(){
    this.studentsCourt=new Cult(
      "Disciples of "+this.name,
      this
    );
  }
  registTemple(temple=null){
    if(temple==null||!(temple instanceof Shrine)){
      throw "NO_TEMPLE_GIVEN";
    }
    this.temple=temple.registPriest(this);
  }
  specialisation(){
    this.temple=null;
    this.prophetDomain=null;
    this.studentsCourt=null;
  }
}

try{
  module.exports=Preacher;
}catch(e){
  null;
}
