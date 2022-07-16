module.exports=function(Skriptonus){
  return class InquisitionGuild
  extends Skriptonus.LiaisonStigma
  {
    
    memberPrinciple(item){
      return item instanceof Skriptonus.BeingExistance
    }
    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
