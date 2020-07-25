# Validator Abstract

Validation of requests in Node.

## Installation
Installing with *npm*

``npm i validator-abstract``  

Installing with *yarn*  

``yarn add validator-abstract``

## Getting Started

1: Create json file for your request.

```
{
  "name": "required",
  "email": "required|email",
  "age": "min:18"
}
```

2: Create Validator class specifying the file path.

```
export class DemoValidator extends ValidatorAbstract {
  protected getRulesFile(): string {
    return "demo.json";
  }
}
```

3: Call Validate function on Validator instance.

```
new DemoValidator().validate(req.body);
```
