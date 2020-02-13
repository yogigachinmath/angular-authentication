import { Component, OnDestroy, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import { UserStatusService } from './services/user-status.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'awesome';
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  currentPath: string;
  remember: boolean;

   constructor(private idle: Idle, private keepalive: Keepalive,
               private router: Router,
               private userstatus: UserStatusService,
               private authService: AuthService,
    ) {



    // idle.setIdle(5);
    // idle.setTimeout(5);
    // idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    // idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    // idle.onTimeout.subscribe(() => {
    //   this.idleState = 'Timed out!';
    //   this.timedOut = true;
    //   localStorage.removeItem('currentUser');
    //   this.navigate();
    // });
    // idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    // idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // this.reset();
  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  navigate() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    // console.log('app constructor')
    // this.userstatus.checkUserStatus().subscribe( res => {
    //   this.authService.isLogged = true;
    //  console.log(this.authService.isLogged);
    // });
  }
}
