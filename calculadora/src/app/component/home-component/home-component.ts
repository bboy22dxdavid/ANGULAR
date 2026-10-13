import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {

}
