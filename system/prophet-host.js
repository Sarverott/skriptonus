module.exports=function(Skriptonus){
  return class ProphetHost
  extends Skriptonus.RegularPerson
  {

    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
