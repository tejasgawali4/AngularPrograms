import { Component, AfterViewInit, NgZone, ChangeDetectionStrategy, ViewChild, QueryList, ViewChildren } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@Component({
    selector: 'root',
    template: `
        <div class="container">    
            <div class="row">
                <h1 class="text-info">Communication</h1>
            </div>

            <!-- <list [personList]=pList></list> -->

            <div>
                <h3 class="alert alert-danger" *ngIf="message">{{message}}</h3>
                <counter [interval]=10 (onMax)="maxedOut($event)"></counter>
            </div>

            <!-- <div>
                <counter #c1></counter>
                <counter #c2></counter>
                <br/>
                <div class="col-md-2">
                    <button class="btn btn-warning btn-block" (click)="c1.reset()">Parent Reset</button>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-warning btn-block" (click)="p_reset(c1)">Parent Reset</button>
                </div>
            </div> -->

            <!--
                <counter></counter>
                <counter [interval]=10></counter>
            -->
        </div>
    `
})
export class RootComponent implements AfterViewInit {

    pList: Array<string>;
    message: string;

    // @ViewChild(CounterComponent)
    // counter: CounterComponent;

    // @ViewChild("c2")
    // counter: CounterComponent;

    @ViewChildren(CounterComponent)
    counters: QueryList<CounterComponent>;

    constructor() {
        this.pList = ["Manish", "Abhijeet", "Abhishek", "Ramakant", "Subodh"];
    }

    p_reset(cnt: CounterComponent) {
        cnt.reset();
    }

    ngAfterViewInit(): void {
        // this.counter.interval = 100;
        // for (const counter of this.counters.toArray()) {
        //     counter.interval = 50;
        // }
    }

    maxedOut(flag: boolean) {
        if (flag) {
            this.message = "Max click Reached, please reset...";
        } else {
            this.message = "";
        }
    }
}