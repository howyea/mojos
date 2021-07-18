export class Test {
    private str: string;
    public set(value: string) {
        this.str = value + ', first show';
    }
    public get() {
        return this.str;
    }
}