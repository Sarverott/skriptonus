const {EventEmitter, captureRejectionSymbol}=require('events');

module.exports=function(Skriptonus){
  return class FatumContinuum extends EventEmitter{
    constructor(subjectOfDestiny, exceptions={}){
      super({captureRejections:true});
      this.fateSubject=subjectOfDestiny;
      this.paradoxPrevention=exceptions;
    }
    [captureRejectionSymbol](err, event, ...args) {
      if(this.paradoxPrevention.hasOwnProperty("rejection"))
        this.paradoxPrevention.rejection(err, event, ...args);
    }
    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
