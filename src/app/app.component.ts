import { Component , Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for bindin both ways 
import { ClockAppComponent } from './clock-app/clock-app.component' ;
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HomeComponent , FormsModule , ClockAppComponent ,RouterLinkActive , RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  person = {
    name: "Skies",
    age: 23
  };

  yell(e:any){
    alert("I am yelling !");
  }

  constructor(private logger: LoggingService) { }

}
