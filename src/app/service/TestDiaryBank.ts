import { State } from "./State";

export class TestDiaryBank {
    name: string;
    state : State;

    constructor(_name: string, _failAmount: number, _successAmount){
        this.name = _name;
        this.state = new State(_failAmount, _successAmount);
    }
}