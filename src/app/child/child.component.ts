import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() public sData: string;

  @Input() public bShowless: boolean;

  public bShowData: string = '';

  constructor(private oCD: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.bShowData = this.bShowless ? this.sData.slice(0,100) : this.sData;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if(!changes) return;

    if(!!changes.bShowless && changes.bShowless.isFirstChange() === false) {
      this.bShowData = this.bShowless ? this.sData.slice(0,100) : this.sData;
    }
    this.oCD.detectChanges();
  }

}
