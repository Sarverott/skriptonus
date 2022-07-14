module.exports=function(Skriptonus){
  return class LiaisonStigma
  extends Skriptonus.FundamentalInformation
  {

    memberPrinciple(item){
      return item instanceof Skriptonus.BeingExistance
    }
    invite(target){
      if(this.memberPrinciple(target)){
        if(this.members.includes(target))this.members.push(target);
        return true;
      }else{
        return false;
      }
    }
    relegate(target){
      if(this.members.includes(target)){
        this.members.splice(this.members.indexOf(target), 1);
        return true;
      }else{
        return false;
      }
    }
    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
