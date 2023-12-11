import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { ServerComponent } from './server/server.component';
import { SuccessComponent } from './success/success.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ServerComponent,SuccessComponent,ErrorComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'starter';
}
