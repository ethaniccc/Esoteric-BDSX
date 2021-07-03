import { PlayerData } from "../data/PlayerData";

export abstract class Check {

    public violations: number = 0;
    public buffer: number = 0;

    constructor(
        public name: string,
        public type: string,
        public description: string,
        public data: PlayerData
    ){}

    public abstract init(): void;

    public flag(suppress: boolean = false): void {
        if (suppress) {
            // TODO: Reverting movement.
        }
        ++this.violations;
        this.data.sendMessage("[" + this.name + " (" + this.type + ")] " + "vl=" + this.violations);
    }

    public reward(amount: number = 0.01): void {
        this.violations = Math.max(this.violations - amount, 0);
    }

}