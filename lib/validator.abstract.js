"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorAbstract = void 0;
var fs_1 = __importDefault(require("fs"));
var validatorjs_1 = __importDefault(require("validatorjs"));
var app_root_path_1 = __importDefault(require("app-root-path"));
var ValidatorAbstract = /** @class */ (function () {
    function ValidatorAbstract() {
    }
    ValidatorAbstract.prototype.validate = function (data) {
        var ruleFilePath = app_root_path_1.default + "/";
        var rulesFolder = this.getRulesFolder && this.getRulesFolder();
        if (rulesFolder) {
            ruleFilePath += rulesFolder + "/";
        }
        ruleFilePath += this.getRulesFile();
        var rules = JSON.parse(fs_1.default.readFileSync(ruleFilePath, "utf8"));
        var result = new validatorjs_1.default(data, rules);
        if (result.fails()) {
            var errors_1 = result.errors;
            throw {
                statusCode: 422,
                message: "Validation failed.",
                errorCode: 2,
                meta: Object.keys(errors_1.errors).map(function (key) { return ({ key: key, message: errors_1.get(key).join(" ") }); })
            };
        }
    };
    return ValidatorAbstract;
}());
exports.ValidatorAbstract = ValidatorAbstract;
