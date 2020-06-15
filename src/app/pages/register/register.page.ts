import { Component, OnInit, ViewChild } from "@angular/core";
import { Storage } from "@ionic/storage";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
import { UserService } from "src/app/services/user/user.service";
import { UtilService } from "src/app/services/util/util.service";
import { FlashProvider } from "../../providers/flash/flash.provider";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private storage: Storage,
    private auth: AuthService,
    private userService: UserService,
    private util: UtilService,
    private fb: FormBuilder,
    private router: Router,
    private flashProvider: FlashProvider
  ) {}

  createFrom(): void {
    this.registerForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.required],
      name: ["", Validators.required],
    });
  }

  createAccount(): void {
    console.log("form", this.registerForm.value);
    let email: string = this.registerForm.value["email"];
    let msg: string = `Created account for: <b>${email}</b>`;
    console.log(msg);
    this.auth.createAccount(this.registerForm.value).then(
      (data) => {
        console.log("uid account: ", data.user.uid);
        this.auth.logout();

        // store in db
        this.storage.set("uid", JSON.stringify(data.user.uid));
        this.userService
          .createUser(this.registerForm.value)
          .then(() => this.flashProvider.show(msg, 3000));
      },
      (reason) => {
        this.flashProvider.show(reason, 3000);
      }
    );
  }

  ngOnInit() {
    this.createFrom();
  }
}
