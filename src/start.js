const Skriptonus = require('./skriptonus');
const path = require('path');

Skriptonus.genesisDependencies();
  Skriptonus.plantBearing(
    path.join(
      __dirname, 
      "seed-of-realm.json"
    )
  );
  //Skriptonus.enchantNature();
  Skriptonus.theBigBang()
