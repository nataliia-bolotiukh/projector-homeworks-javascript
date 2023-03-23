const me = {
  name: "Nataliia",
  residency: "Warszawa",
  gender: "female",
  age: 30,
  pet: "dogs",
  position: "front-end developer👩‍💻",
  preferProgramingLanguages: "JavaScript",
  introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  prognose() {
    console.log(
      `I love ${this.pet} and dream of having a Welsh Corgi Cardigan🐶`
    );
  },
  describeMyProfession() {
    console.log(
      `I learn ${this.preferProgramingLanguages} and I want to become a ${this.position}`
    );
  },
};
me.introduce();
me.prognose();
me.describeMyProfession();
