import {Component, OnInit, ViewChild} from '@angular/core';
import {events} from './events'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private events: any
  private _selectedEvent: any;
  @ViewChild('eventTable') eventTable: any;
  
  constructor() { }

  ngOnInit() {
    this.events = events;
    this._selectedEvent = events.data[0];
  }

  onRowSelect(event) {}

  test() {
    console.log('test passed');
  }

  get selectedEvent() {
    return this._selectedEvent;
  }

  set selectedEvent(value: any) {
    if (value) {
      this._selectedEvent = value;
    } else {
      this.eventTable.selection = this._selectedEvent;
    }
  }

  cancelUnselect(event) {
    this.eventTable.selection = event.data;
  }
}
