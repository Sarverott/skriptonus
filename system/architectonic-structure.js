module.exports=function(Skriptonus){
  return class ArchitectonicStructure
  extends Skriptonus.DivineArtifact
  {

    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
