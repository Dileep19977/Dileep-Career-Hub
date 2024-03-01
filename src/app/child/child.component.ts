import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { pairwise, startWith } from 'rxjs/operators';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input('announceLst') anc = '';
  @Output() accOutput = new EventEmitter();
  constructor(missionService: MissionService) {
    missionService.missionAnnounced$
      .pipe(startWith(null), pairwise())
      .subscribe(([previousState, currentState]) => {
        if (previousState !== null) {
          console.log('Error: Already notified, Notification cannot be done');
        } else {
          this.anc = currentState;

          console.log('Current State:', currentState);
        }
      });
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes.anc) {
      console.log('Input value changed:', changes.anc.currentValue);
      // Perform actions based on the new input value
    }
  }
  ngOnInit() {}

  accc() {
    this.accOutput.emit('Sent the notification to parent');
  }
}
