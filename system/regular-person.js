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
module.exports=function(Skriptonus){
  return class RegularPerson
  extends Skriptonus.BeingExistance
  {
    static get ALL(){
      RegularPerson.ALL=[];
      return RegularPerson.allExceptions;
    }
    static set ALL(item){
      if(
        !RegularPerson.hasOwnProperty("allExceptions")
      )RegularPerson.allExceptions=item;
    }
    constructor(){
      super();
      RegularPerson.ALL.push(this);
    }
    /*
    destructor(){
      RegularPerson.ALL.splice(
        RegularPerson.ALL.indexOf(this),
        1
      );
    }
    */
    get value(){
      return this.data;
    }
    set value(indata){
      this.data=indata;
    }
  };
}
