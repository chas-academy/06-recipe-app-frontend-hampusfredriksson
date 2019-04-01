import { Component, OnInit } from '@angular/core'
import { CallsService } from 'src/app/calls.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private saveRecipe: CallsService) {}

  ngOnInit() {}
}
// CHANGE PROFILE TO LISTS WHEN DONE WITH OTHER SHIT
