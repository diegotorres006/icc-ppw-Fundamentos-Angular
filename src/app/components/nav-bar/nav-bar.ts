import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styles:[`
       
       nav{
        background-color: rgba(114, 153, 17, 1);
        padding: 1rem;
       }

       a{

        color: white;
        margin-right: lrem;
        text-decoration: none

       }
       a.active{
         color: yellow;
         text-decoration: underline;
         text-decoration-color: red; 
       }


       a:hover{
        text-decoration: underline;
       }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar { }
