import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { timeInterval } from 'rxjs';
import { TypeWriter } from './typeWriter';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-blog-page';
  @ViewChild('typeWriter') typeWriter!: ElementRef;
  el = document.getElementById('typeWriter');

  myData: string[] = [
    'A Web Devloper.',
    'A UI/UX Designer.',
    'A Software Engineer'];
  currentData = '';

  ngOnInit() {}
  ngAfterViewInit() {
    console.log('hi', this.typeWriter.nativeElement.innerHTML);
    new TypeWriter(this.typeWriter, this.myData, 2000).tick();
  }
}
