const Skriptonus=require('./skriptonus');
const repl=require("repl");
const fs = require('fs');
if(require.main===module){
  //console.log(listElementalCapableElements("skriptonus.js", "seed-of-skriptonus.js", "fatum-consequencion.js"));
  Skriptonus.plantBearing("./seed-of-skriptonus.json");
  Skriptonus.enchantNature();
  Skriptonus.theBigBang();
  const promptConfig={
    prompt:'#~skriptonus_prompt~> '
  };
  const prompt=new repl.REPLServer(promptConfig);
  Object.assign(prompt.context, {
    SKRIPTONUS:Skriptonus,
    UNIVERSE:Skriptonus.universe,
    SCRIBES:Skriptonus.nameChronicle,
    //PEOPLE:Skriptonus.universe.
  });
  Object.defineProperty(prompt.context, "help", {
    get(){
      console.log(...Object.keys(prompt.context).map((item)=>item+'\n'));
    }
  });
  //console.log(repl.setupHistory)
  prompt.setupHistory("./logs/repl-history.txt", function(){})
  /*
  if(fs.existsSync('./logs/repl-history.json')){

  }else{

  }
  */
}else{
  module.exports=Skriptonus;
}
