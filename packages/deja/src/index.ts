export class Test {
    private str: string;
    public set(value: string) {
        this.str = value;
    }
    public get() {
        return this.str;
    }
}