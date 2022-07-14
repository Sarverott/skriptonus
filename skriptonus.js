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

//const FatumConsequencion=require("./fatum-consequencion.js");

//global.creationPhillars=new FatumConsequencion();


class Skriptonus{
  //static ;
  constructor(){
    //Object.assign(this, seedOfSkriptonus);
    //if(Skriptonus.UNIVERSE !== null)delete Skriptonus.UNIVERSE;
    //Skriptonus.UNIVERSE=this;
    //this.UNIVERSE=this;
    //this.FATUM=new Skriptonus.FatumConsequencion();
    //this.nameChronicle={};
    this.caseTool=
    this.spell=null;
    this.summonChain=[];
    //this.enchantment="the-makers-book";
  }
  inmagine(className){
    this.spell={
      name:className,
      type:"proto",
      properties:{},
      methods:{}
    }
  }
  asGrain(){
    this.summonChain.push(this.spell);
  }
  rootedIn(extendName){
    this.spell.root=extendName;
  }
  draftBy(constructFunct){
    this.spell.draft=constructFunct;
  }
  itHas(label, value, config={}){
    this.spell.property[label]=Object.assign(config, {value});
  }
  itCan(label, operation){
    this.spell.methods[label]=operation;
  }
  invoke(){
    this.summonChain.push(this.spell);
    this.spell=null;
  }
  static elementalDraft(draftname){
    return Skriptonus.draftToSpellname(path.basename(draftname, ".js"))
  }
  static theBigBang(){

  }
  static invokationEnchantment(
    draftName,
    baseDepend=false,
    behavioralGenotype='//behavioral genotype'
  ){
    var extender=baseDepend?`
    extends Skriptonus.${draftToSpellname(baseDepend)}`:'';
    return `
  module.exports=function(Skriptonus){
    return class ${draftToSpellname(draftName)}${extender}
    {
      ${behavioralGenotype}
      get value(){
        return this.data;
      }
      set value(indata){
        this.data=indata;
      }
    };
  }
    `

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
    Skriptonus.loadPhillarsPaths().forEach(
      function(item){
        Skriptonus.draftEnchantment(item)
      }
    );
  }
  static draftEnchantment(draftname){
    //console.log(draftname)
    Object.defineProperty(
      Skriptonus,
      Skriptonus.elementalDraft(draftname),
      {
        get:function(){
          return require(path.join(__dirname, Skriptonus.basecodeDir, draftname))(Skriptonus)
        }
      }
    );
  }
  static plantBearing(seedOfSkriptonus){
    Object.assign(Skriptonus, JSON.parse(
      fs.readFileSync(seedOfSkriptonus)
    ));
    //Skriptonus.phillars={};
    //console.log(Skriptonus);
    Skriptonus.UNIVERSE=null;
    Skriptonus.enchantNature();
  }
  /*
  static manufactureAppellation(){
    Skriptonus.elementals={};

  }*/
  static get executeBaptism(){

    return "JAN KOWALSKI"
  }
}
//Skriptonus.plantBearing("./seed-of-skriptonus.json")

if(require.main===module){
  //console.log(listElementalCapableElements("skriptonus.js", "seed-of-skriptonus.js", "fatum-consequencion.js"));
  //Skriptonus.defineBearing(require());
//  Skriptonus.manufactureAppellation()
  Skriptonus.plantBearing("./seed-of-skriptonus.json")
  //var testworld=new Skriptonus();
  console.log(Skriptonus);
  console.log(Skriptonus.FundamentalInformation);
  console.log(new Skriptonus.BeingExistance());
}else{
  module.exports=Skriptonus;
}
/*
class const DRAFT={
  set LECTURER(realSystem){
    DRAFT.UNIVERSE=realSystem.UNIVERSE;
    DRAFT.REALITY=realSystem;
    Object.seal(DRAFT);
  },
  get INVOKATION(){
    if(!Object.isSealed(DRAFT))throw "NOT_LECTURED_DRAFT_CAN_NOT_BE_INVOKED";
    return

  }
}

*/
