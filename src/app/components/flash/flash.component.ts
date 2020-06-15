import { Component, OnInit } from "@angular/core";

import { trigger, style, animate, transition } from "@angular/animations";
import { FlashProvider } from "../../providers/flash/flash.provider";

@Component({
  selector: "flash",
  templateUrl: "./flash.component.html",
  styleUrls: ["./flash.component.scss"],
  animations: [
    trigger("messageState", [
      transition("void => *", [
        style({ transform: "translateY(-100%)" }),
        animate("200ms ease-out"),
      ]),
      transition("* => void", [
        animate("200ms ease-in", style({ opacity: "0" })),
      ]),
    ]),
  ],
})
export class FlashComponent implements OnInit {
  message: string = "";
  active: boolean = false;

  constructor(private flashProvider: FlashProvider) {
    this.flashProvider.show = this.show.bind(this);
    this.flashProvider.hide = this.hide.bind(this);
  }

  show(message, duration) {
    console.log("Showing the flash notification");
    this.message = message;
    this.active = true;

    setTimeout(() => {
      console.log("Hidding the flash notification");
      this.active = false;
    }, duration);
  }

  hide() {
    this.active = false;
  }

  ngOnInit() {}
}
