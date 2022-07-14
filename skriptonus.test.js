const Skriptonus = require('./skriptonus.js');
//const toolkit =  require('./skriptonus.toolkit.js');
const vm=require("vm")

/*
test('JSON get seed', () => {
  console.log(toolkit.SEED_FILE);
  expect(toolkit.SEED_FILE).toBeTruthy();
});
test('display potentially elemental-ish scriptFiles without exceptional rejection', () => {
  var d=toolkit.listElementalCapableElements();
  console.log(d);
  expect(d).toBeTruthy();
});
test('display elemental only', () => {
  var d=toolkit.listElementalCapableElements(
    "skriptonus.js",
    "skriptonus.test.js",
    "skriptonus.toolkit.js",
    "fatum-consequencion.js"
  );
  console.log(d);
  expect(d).toBeTruthy();
});
test('prepare json', () => {
  var s=toolkit.SEED_FILE;
  var d=toolkit.listElementalCapableElements(
    "skriptonus.js",
    "skriptonus.test.js",
    "skriptonus.toolkit.js",
    "fatum-consequencion.js"
  );
  s.elementalDrafts=toolkit.fileArrayToElementalDictionary(d);
  toolkit.SEED_FILE=s
  console.log(toolkit.SEED_FILE);
  expect(toolkit.SEED_FILE).toBeTruthy();
});

test('try to get one of elemental files', () => {
  skriptonus.defineBearing(toolkit.SEED_FILE);
  var check=skriptonus.invokeSpell( toolkit.SEED_FILE.elementalDrafts["FundamentalInformation"]);
  console.log(check)
  expect(check).toBeTruthy();
});
*/

//var secret="its a sikret"

//function hi(){console.log(secret)}
/*
test('try to get one of elemental files', () => {
  var tmpcon=vm.createContext({eta:"cos", hi});
  var tmp=new vm.Script("hi()", { filename: 'myfile.vm' });
  tmp.runInContext(tmpcon);
  console.log(tmpcon);
  expect(tmpcon.eta).toBe(0);
});
*/

test('try to get one of elemental files', () => {
  /*Skriptonus.defineBearing({elementalDrafts:toolkit.fileArrayToElementalDictionary([
    "fundamental-information.js",
    "being-existance.js",
    "regular-person.js"
  ])});

  Skriptonus.enchantNature();
  */
  //var spell="inmagine('it')", { filename: 'myfile.vm' });

  //spell.runInContext(Skriptonus.RELM);

  //console.log(Skriptonus.RELM);
  //expect(Skriptonus.RELM).toBeTruthy();
  //console.log(Skriptonus);
  //Skriptonus.enchantNature();
  //console.log(Skriptonus);
  //var check=new Skriptonus;
  //console.log(check);
  //expect(check).toBeTruthy();
  console.log(Skriptonus);
  expect(Skriptonus).toBeTruthy();
});
