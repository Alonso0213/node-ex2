function Person(firstName, lastName, Email,) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Email= Email; 
  }

const Myinfo = new Person("Alonso", "Cupido","alonsocupido51@gmail.com");
console.log(Myinfo);
module.exports=Person