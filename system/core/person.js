/*
  Skriptonus
  part of Anubis System
  Sett Sarverott 2019
*/
class Person{
  constructor(...args){
    if(args.length<1){
      throw "NO_NAME_GIVEN";
    }
    var name=args.shift();
    if(name==null||!(name instanceof String)){
      throw "FIRST_ARG_HAVE_TO_BE_STRING";
    }
    this.functs={};
    this.name=name;
    this.stats={
      active:true
    };
    this.specialisation(...args);
  }
  specialisation(){}
  on(title, funct){
    if(
      !this.functs.hasOwnProperty(title)
      ||
      this.functs[title]==null
      ||
      !this.functs[title] instanceof Array
    ){
      this.functs[title]=[];
    }
    this.functs[title].push(funct);
  }
  off(title){
    this.functs[title]=null;
  }
  send(...args){
    var title=args.shift();
    if(this.functs.hasOwnProperty(title)){
      if(this.functs[title] instanceof Array){
        args.unshift(this);
        var functs=this.functs[title];
        for(var i in functs){
          var tmp=async function(){
            functs[i](...args);
          };
          return tmp();
        }
      }
    }
  }
  setup(){}
  loop(){}
}

try{
  module.exports=Person;
}catch(e){
  null;
}
