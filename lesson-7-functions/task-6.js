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

const securedSelfIntroduce = me.introduce.bind(me);
setTimeout(securedSelfIntroduce, 1000);

const securedSelfPrognose = me.prognose.bind(me);
setTimeout(securedSelfPrognose, 2000);

const securedSelfDescribeMyProfession = me.describeMyProfession.bind(me);
setTimeout(securedSelfDescribeMyProfession, 3000);
