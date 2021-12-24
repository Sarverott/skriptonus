/*
  Skriptonus
  part of Anubis System
  Sett Sarverott 2019
*/
try{
  const Cult=require("./cult.js");
  const Person=require("./person.js");
}catch(e){
  null;
}

class DemonicBeing extends Person{
  specialization(...args){
    this.listeners
    this.temple=null;
    this.seniorDomain=null;
    this.wasalsCourt=null;
    //this.setupEnviroment(args);
    if(args.length>0){
      args.shift().add(this);
    }
    if(args.length>0){
      var x=args.shift();
      if(){

      }
      this.wasalsCourt=args.shift();
    }else{

    }
  }
  setSeniorDomain(hook){
    if(hook instanceof Cult&&hook.changeFounder){

    }else{

    }
  }
  setWasalsCourt(hook){

  }
  get getAllmightDomain(){
    if(this.seniorDomain===null){
      return this;
    }else{
      if(!this.seniorDomain instanceof Cult){
        throw "SENIOR_DOMAIN_IS_NOT_A_CULT";
      }else if(!this.seniorDomain.founder instanceof DemonicBeing){
        throw "SENIOR_IS_NOT_A_DEMON";
      }else{
        return this.seniorDomain.founder.getAllmightDomain;
      }
    }
  }

  setInquisitor(priest=null){
    if(!(priest instanceof Person)){
      throw "NON_PERSON_INQUISITOR";
    }
    this.inquisitor=priest;
  }
  invitation(cult){
    if(this.seniorDomain==null&&cult instanceof Cult){
      this.seniorDomain=cult;
      return true;
    }else{
      return false;
    }
  }
  // setupEnviroment(...args){
  //   for(var i in args){
  //     if(args[i] instanceof DemonicBeing){
  //       if(this.senior!==null){
  //         this.senior=args[i];
  //       }else{
  //         throw "TO_MANY_SENIORS";
  //       }
  //     }else if(args[i] instanceof Array){
  //       while(args[i].length!==0){
  //         var hook=args[i].pop();
  //         if(hook instanceof DemonicBeing){
  //           this.wasals.push(hook);
  //         }else{
  //           throw "NON_DEMONIC_FALLOWER";
  //         }
  //       }
  //     }else if(args[i] instanceof Preacher){
  //       if(this.inquisitor!==null){
  //         this.inquisitor=args[i];
  //       }else{
  //         throw "TO_MANY_INQUISITORS";
  //       }
  //     }
  //   }
  // }
}

try{
  module.exports=DemonicBeing;
}catch(e){
  null;
}
