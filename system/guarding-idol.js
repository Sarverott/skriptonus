module.exports=function(Skriptonus){
  return class GuardingIdol
  extends Skriptonus.DemonicEntity
  {

    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
