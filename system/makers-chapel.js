module.exports=function(Skriptonus){
  return class MakersChapel
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
