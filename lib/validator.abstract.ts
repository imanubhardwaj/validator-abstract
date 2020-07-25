import fs from "fs";
import Validator from "validatorjs";
import appRootPath from "app-root-path";

export abstract class ValidatorAbstract {
  protected abstract getRulesFile(): string;

  protected abstract getRulesFolder?(): string;

  validate(data: Object) {
    let ruleFilePath = `${appRootPath}/`;
    const rulesFolder = this.getRulesFolder && this.getRulesFolder();
    if (rulesFolder) {
      ruleFilePath += `${rulesFolder}/`;
    }
    ruleFilePath += this.getRulesFile();
    const rules = JSON.parse(fs.readFileSync(ruleFilePath, "utf8"));
    const result = new Validator(data, rules);
    if (result.fails()) {
      const {errors} = result;
      throw Object.keys(errors.errors).map(key => ({key, message: errors.get(key).join(" ")}));
    }
  }
}
