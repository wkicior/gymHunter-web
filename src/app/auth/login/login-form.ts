import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

export class LoginFailedErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control && control.dirty && (!control.valid || !control.parent.valid)
  }
}

export class LogInForm extends FormGroup {
  loginFailedErrorStateMatcher = new LoginFailedErrorStateMatcher();
  constructor() {
    super({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('')
    });
  }
}
