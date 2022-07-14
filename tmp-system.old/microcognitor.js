const MICROCOGNITORS={};

class Microcognitor{
  constructor(name, ...args){
    this.name=""
    this.active=true;
    this.autonomer=NULL;
    this.logs=[];
    //this.memory={};
    //this.coalStone={};
    //this.person=
  }
  //active
  off(){
    this.active=false;
  }
  on(){
    this.active=true;
  }
  //data
  save(state){
    //var state=JSON.stringify(this);
    return state
  }
  load(state){

  }
  //
  debug(){
    console.log("\t", );
    for(var i in this.logs){
      console.log("\t\t", this.logs[i]);
    }
  }
  loop(){

  }
  run(){

  }
}
function createMind(){

}
