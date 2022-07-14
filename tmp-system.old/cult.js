/*
  Skriptonus
  part of Anubis System
  Sett Sarverott 2019
*/
const Person=require("./person.js");

class Cult{
  constructor(
    name=null,
    founder=null,
    extraCondition=function(){
      return true;
    }
  ){
    if(name==null||!name instanceof String){
      throw "COMMUNITY_WITHOUT_NAME";
    }
    if(founder==null){
      throw "COMMUNITY_WITHOUT_FOUNDER";
    }
    this.name=name;
    this.founder=founder;
    this.members=[];
    var tmpThis=this;
    this.find={
      byName:function(name){
        var result=[];
        tmpThis.members.forEach(function(person){
          if(person.name==name){
            result.push(person);
          }
        })
        return result;
      },
      byId:function(id){
        var result=[];
        tmpThis.members.forEach(function(person, index){
          if(person.name==name){
            result.push([person, index]);
          }
        })
        return result;
      },
      id:function(wanted){
        var result=[];
        tmpThis.members.forEach(function(person, index){
          if(person==wanted){
            result.push(index);
          }
        })
        return result;
      }
    };
    this.extraCondition=extraCondition;
  }
  add(...members){
    var tmpThis=this;
    if(
      typeof(
        members.find(
          function(value){
            return (
              !(
                value instanceof Person
              )||!(
                tmpThis.extraCondition(value)
              )
            );
          }
        )
      )
      !=
      "undefined"
    ){
      throw "NON_ALLOWED_MEMBER_REFUSED";
    }
    members=members.filter(function(value){
      return value.invitation(tmpThis);
    });
    this.members=this.members.concat(members);
  }
  remove(...members){
    this.members=this.members.filter(function(value){
      return members.includes(value);
    });
  }
}

module.exports=Cult;
