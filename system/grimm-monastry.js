module.exports=function(Skriptonus){
  return class GrimmMonastry
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
