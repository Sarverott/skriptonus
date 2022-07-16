/*
  SKRIPTONUS - application core system, for code poets, fans of darkness and very futuristic projects, initially target skeleton for Anubis project
  Copyright (C) 2022 Sett Sarverott

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
const vm=require("vm");
const fs=require("fs");
const path=require("path")
const {EventEmitter, captureRejectionSymbol}=require('events');
//const FatumConsequencion=require("./fatum-consequencion.js");

//global.creationPhillars=new FatumConsequencion();

function loadJson(filepath){
  return JSON.parse(fs.readFileSync(filepath));
}
function saveJson(filepath, context){
  fs.writeFileSync(filepath, JSON.stringify(context))
}
class Skriptonus extends EventEmitter{
  constructor(){
    super();
  }
  
  deployFilesystemWatch(){
    var tmpThis=this;
    this.watcherEditResponse=false;
    this.watcher=fs.watch(
      this.mountpath,
      this.watchsetup,
      function(eventType, filename){
        //tmpThis.act()
      }
    );
  }
  static elementalDraft(draftname){
    return Skriptonus.draftToSpellname(path.basename(draftname, ".js"))
  }
  static theBigBang(){
    Skriptonus.universe=new Skriptonus.AbsolutFormula();
    //return Skriptonus.UNIVERSE;
  }
  static invokationEnchantment(
    draftName,
    baseDepend=false,
    behavioralGenotype='//behavioral genotype'
  ){
    var extender=baseDepend?` extends Skriptonus.${draftToSpellname(baseDepend)}`:'';
    return `
      module.exports=function(Skriptonus){
        return class ${draftToSpellname(draftName)}${extender}{
          ${behavioralGenotype}
        };
      }
    `
    return content;
  }
  static draftToSpellname(draftname){
    return draftname
      .split("-")
      .map((i)=>i[0].toUpperCase()+i.substr(1).toLowerCase())
      .join("");
  }
  static loadPhillarsPaths(){
    return fs.readdirSync(
      Skriptonus.basecodeDir,
      //module.path,
      {withFileTypes:true}
    ).filter(
      (d)=>d.isFile()
    ).filter(
      (d)=>d.name[0]!='.'
      &&
      path.extname(d.name)==".js"
    ).filter(
      (d)=>!Skriptonus.excludedFromBasecode.includes(d.name)
    ).map(
      (d)=>d.name
    );
  }
  static enchantNature(){
    //Skriptonus.RELM=vm.createContext(new Skriptonus());
    for(var item of Skriptonus.loadPhillarsPaths()){
      Skriptonus.draftEnchantment(item);
      //yield item;
    }
  }
  static draftEnchantment(draftname){
    if(!Skriptonus.hasOwnProperty("phillars"))Skriptonus.phillars={}
    Object.defineProperty(
      Skriptonus,
      Skriptonus.elementalDraft(draftname),
      {
        get(){
          if(
            !Skriptonus.phillars.hasOwnProperty(
              Skriptonus.elementalDraft(draftname)
            )
          )Skriptonus.phillars[
            Skriptonus.elementalDraft(draftname)
          ]=require(
            path.join(
              __dirname,
              Skriptonus.basecodeDir,
              draftname
            )
          )(Skriptonus);
          return Skriptonus.phillars[
            Skriptonus.elementalDraft(draftname)
          ];
        }
      }
    );
  }
  static plantBearing(seedOfSkriptonus){
    Object.assign(Skriptonus, loadJson(seedOfSkriptonus));
    //={};
    //console.log(Skriptonus);
    Skriptonus.nameChronicle=[];
    Skriptonus.universe=null;
  }
  static set throwExcommunication(name){
    if(Skriptonus.nameChronicle.includes(name)){
      Skriptonus.nameChronicle.splice(
        Skriptonus.nameChronicle.indexOf(name), 1
      );
    }
    //Skriptonus.universe.emit("skriptonus-orders", name, "to vanish from existence");
  }
  static set executeBaptism(customName){

  }
  static get executeBaptism(){
    var tmpname="";
    while(tmpname==""||Skriptonus.nameChronicle.includes(tmpname)){
      tmpname=""
      var tmpnamelength=Math.random()*Skriptonus.namelength;
      for(var i=0;i<tmpnamelength;i++){
        tmpname+=Skriptonus.namebase.split("-")[
          Math.floor(
            Math.random()*Skriptonus.namebase.split("-").length
          )
        ]
      }
    }
    Skriptonus.nameChronicle.push(tmpname);
    return tmpname;
  }
}
//Skriptonus.plantBearing("./seed-of-skriptonus.json")
module.exports=Skriptonus;
