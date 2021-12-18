import { Component, EventEmitter, Input, Output } from "@angular/core";
import { reduce } from "rxjs";

@Component({
  selector:'event-thumbnail',
  templateUrl:'./event-thumbnail.component.html',
  styleUrls:['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {

  @Input() event: any;
  @Input() persona : any;

getStartTimeClass(){
  if(this.event && this.event.time === '10:00 am')
  return {color:'red', 'font-weight': 'bold'}
  return {};
}

}
