const {ValidatorAbstract} = require("../lib/validator.abstract");

const data = {
    name: 'John',
    email: 'johndoe@gmail.com',
    age: 2
};

class DemoValidator extends ValidatorAbstract {
    getRulesFolder() { /* This method can be omitted if the folder path is included in getRulesFile method */
        return "example/rules";
    }

    getRulesFile() {
        return "demo.json";
    }
}

const demoValidator = new DemoValidator();

try {
    demoValidator.validate(data);
} catch (e) {
    console.error(e);
}
