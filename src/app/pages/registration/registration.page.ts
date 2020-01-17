import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  private form: FormGroup;

  file:any;

  firstname;
  lastname;


  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      photo: new FormControl('')
    });
  }
  ngOnInit() {
  }

  getPhoto(event){
    this.file= event.target.files[0];

  }

  register() {
    if (this.form.valid) {
      try {
        this.firstname = this.form.value.firstname.charAt(0).toUpperCase() + this.form.value.firstname.slice(1);
        this.lastname= this.form.value.lastname.charAt(0).toUpperCase() + this.form.value.lastname.slice(1);

        this.authService.register(this.form.value.email,this.form.value.password,
          this.form.value.cpassword, this.firstname, this.lastname,this.file);
        // localStorage.setItem('nome', this.form.value.firstname);
        // localStorage.setItem('cognome', this.form.value.lastname);
        // localStorage.setItem('email', this.form.value.email);
      } catch (error) {
        console.log(error)
      }


    }

  }

}