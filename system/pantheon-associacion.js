
module.exports=function(Skriptonus){
  return class PantheonAssociacion
  extends Skriptonus.LiaisonStigma
  {
    memberPrinciple(item){
      return item instanceof Skriptonus.DemonicEntity
    }
    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
