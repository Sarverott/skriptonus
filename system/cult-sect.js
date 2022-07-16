module.exports=function(Skriptonus){
  return class CultSect
  extends Skriptonus.LiaisonStigma
  {
    
    memberPrinciple(item){
      return item instanceof Skriptonus.RegularPerson
    }
    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
