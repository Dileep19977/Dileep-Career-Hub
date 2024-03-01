import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  announceList: Array<String> = ['Test', 'Temp' ];
  missionService: MissionService;
  aList: String[] = ['Test', 'TempTest1', 'Carrier'];
  changeList: String[];

  constructor(missionService: MissionService) {
    this.changeList = this.aList
    this.missionService = missionService;
    missionService.missionAnnounced$.subscribe((a) => {
      this.announceList.push(a);
    });
  }
 
  onChange(a) {
    this.changeList = this.aList
    if(a === null || a=== '')
    {
      this.changeList = this.aList
    }
    console.log('came to on change');
    this.changeList = this.aList.filter((aa) => {
      return aa.includes(a);
    });
  }

  ngOnInit() {
    console.log('came to ngoninti');
  }

  addItem(a) {
    console.log('acc output ', a);
    this.missionService.announceMission(a);
  }

  announce(a) {
    console.log('button clicked, it updates announcements', a);
    this.missionService.announceMission(a);
    this.announceList.push(a);

  }
}
