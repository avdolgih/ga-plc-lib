export default class Var {

    private readonly subscribers: Array<() => void> = [];
    private val?: number;
    private handMode: boolean = false;
    private handVal: number = 0;

    public setHandMode(val: boolean) {
        if (this.handMode != val)
            this.changed();
    }

    public setHandVal(val: number) {
        if (this.handVal != val)
            this.changed();
    }

    public subscribe(callback: () => void) {
        this.subscribers.push(callback);
    }

    private changed() {
        for (let i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i]();
        }
    }
}