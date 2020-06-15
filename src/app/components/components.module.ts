import { NgModule } from "@angular/core";
import { FlashComponent } from "./flash/flash.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [FlashComponent],
  entryComponents: [FlashComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  exports: [FlashComponent],
})
export class ComponentsModule {}
