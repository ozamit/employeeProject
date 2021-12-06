import { Component, OnInit } from '@angular/core';
import { socialbuttons } from '../socialbuttons';
import { socialbtns } from '../list_socialbuttons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright = "Copyright © Amit Oz";
  socialicons = socialbtns;

  constructor() { }

  ngOnInit(): void {
  }

}
