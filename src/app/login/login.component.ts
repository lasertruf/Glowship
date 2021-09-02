import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errmsg !: string ;
  passwordfg !: FormGroup;
  emailfg !: FormGroup;
  isLogin : boolean = false;
  checkEmailError: any ;
  checkPasswordError: any ;
  forgotPasswordVar : boolean = false;
  resetPassword : boolean = false;
 
emailFormControl = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50) ]);
passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8) ]);

  constructor(public fb : FormBuilder) { }

  ngOnInit(): void {

   this.emailfg = this.fb.group({

      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
  
    });

    this.passwordfg = this.fb.group({

      password: ['', [Validators.required, Validators.minLength(8)]],
  
    });
  
     
    this.checkEmailError = (controlName: string, errorName: string) => {
      return this.emailfg.controls[controlName].hasError(errorName);
    }
  
  }


onContinue(){

  console.log(this.emailfg);
  

if(this.emailfg.invalid)
{
console.log("invalid");
}
else if(this.emailfg.valid){

   
    if(this.emailfg.value.email=='admin@admin'){

      console.log("admin");
      this.isLogin=true;
      
    }


}

}

onSubmit(){
  console.log("submitted");
  
}

onForgotPassword(){
  console.log("Forgot");
  // this.forgotPasswordVar=true;
this.isLogin=false;

  if(this.emailfg.controls['email'].hasError('required')){
          this.errmsg=" Please enter your email above to reset the password "
            
  }
  else  if(this.emailfg.controls['email'].hasError('email')){
    this.errmsg=" Please enter a valid email above to reset the password "
      
}
else  if(this.emailfg.controls['email'].hasError('maxlength')){

  this.errmsg=" Email should be less than 50 characters "
    
}

else if(this.emailfg.valid){
       this.resetPassword = true;
}
  
}


}
