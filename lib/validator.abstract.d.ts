export declare abstract class ValidatorAbstract {
    protected abstract getRulesFile(): string;
    protected abstract getRulesFolder?(): string;
    validate(data: Object): void;
}
