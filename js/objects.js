const user = {
    name: "ram",
    sec: "a2",
    roll_no: 1,
    gpa: 3.65,
    greet = () => {
        //this
        console.log("hello world!");
    }
};


// entries(), fromentries()

const user1 = Object.create(user);

const obj1 = { a: "1", b: "2" };
const obj2 = { a: "4", c: "3" };

const result = Object.assign({}, obj1, obj2);
const result = Object.assign(obj1, obj2);

const obj = {
    property1: false,
    property2: false,
}

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true, // update garna milne ki namilne define gareko
    configurable: true, // delete garna milne ki namilne define gareko
    enumerable: true, // loop/iterate garda access garna milne ki namilne define gareko
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});



// const user = [["name", "ram"], ["sec", "a2"], ]

//destructuring
const { name, sec, roll_no, gpa} = user;

//accessing values
const name = user.name;
console.log(name);

const section = user.section;
console.log(section);

const roll_no = user.roll_no;
console.log(roll_no);

const gpa = user.gpa;
console.log(gpa);

//updating values
user.name = "hari";
console.log(user.name);

// delete user.name;


user.greet();


