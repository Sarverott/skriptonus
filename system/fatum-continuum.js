module.exports=function(Skriptonus){
  return class FatumContinuum
  extends Skriptonus.FundamentalInformation{
    static get ALL(){
      FatumContinuum.ALL=[];
      return FatumContinuum.allExceptions;
    }
    static set ALL(item){
      if(
        !FatumContinuum.hasOwnProperty("allExceptions")
      )FatumContinuum.allExceptions=item;
    }
    constructor(){
      super();
      //this.name=Skriptonus.executeBaptism;
      FatumContinuum.ALL.push(this);
    }
    /*
    destructor(){
      FatumContinuum.ALL.splice(
        FatumContinuum.ALL.indexOf(this),
        1
      );
    }
    */
    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
