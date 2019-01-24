
console.log("=============== beggining of refactor ===============");
console.log(" ");
function GameObject(attributes){          // creates parent prototype.
    this.createdAt = attributes.createdAt;     
    this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function(){
return `${this.name} was removed from the game...`
};    




function CharacterStats(attributes){    
GameObject.call(this, attributes);     

this.healthPoints = attributes.healthPoints;     
this.name = attributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);  

CharacterStats.prototype.takeDamage = function(){                
return `${this.name} took damage.`
};








function Humanoid(attributes){     
CharacterStats.call(this, attributes);     

this.team = attributes.team;
this.weapons = attributes.weapons;
this.language = attributes.language;
}


Humanoid.prototype = Object.create(CharacterStats.prototype);   
Humanoid.prototype.greet = function(){                
return `${this.name} offers a greeting in ${this.language}.`
};

Humanoid.prototype.rollDice = function() { 
let rollDice = Math.round(Math.random()*this.healthPoints);
return rollDice;
}














const mage = new Humanoid({
createdAt: new Date(),

dimensions: {
  length: 2,
  width: 1,
  height: 1,
},

healthPoints: 5,

name: 'Bruce',

team: 'Mage Guild',

weapons: [
  'Staff of Shamalama',
],

language: 'Common Tongue',
});



const swordsman = new Humanoid({
createdAt: new Date(),

dimensions: {
  length: 2,
  width: 2,
  height: 2,
},

healthPoints: 15,

name: 'Sir Mustachio',

team: 'The Round Table',

weapons: [
  'Giant Sword',
  'Shield',
],

language: 'Common Tongue',
});



const archer = new Humanoid({
createdAt: new Date(),

dimensions: {
  length: 1,
  width: 2,
  height: 4,
},

healthPoints: 10,

name: 'Lilith',

team: 'Forest Kingdom',

weapons: [
  'Bow',
  'Dagger',
],

language: 'Elvish',
});















console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(" ");
console.log(" ");
console.log("=============== end of refactor ===============");
console.log(" ");

