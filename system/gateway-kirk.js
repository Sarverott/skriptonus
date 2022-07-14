module.exports=function(Skriptonus){
  return class GatewayKirk
  extends Skriptonus.ArchitectonicStructure
  {

    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
