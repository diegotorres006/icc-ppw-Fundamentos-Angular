import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styles: [`
    nav {
      background-color: darkblue;
      padding: 1rem;
      border-radius: 8px;

    }
    a {
      color: white;
      margin-right: 1rem;
      text-decoration: none;
    }
    a.active {
      color: yellow;
      font-weight: bold;
      text-decoration: underline;
    }
    a:hover {
      text-decoration: underline;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar { }