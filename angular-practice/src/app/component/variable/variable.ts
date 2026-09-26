import { Component } from '@angular/core';
import { UserService } from '../../user-service';

@Component({
  selector: 'app-variable',
  standalone: true,
  imports: [],
  templateUrl: './variable.html'
 
})
export class Variable {

  addName: string = '';

  constructor(private service: UserService) {
    this.addName = this.service.userName;
  }

}