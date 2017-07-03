import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogstreamComponent } from './logstream.component';

describe('LogstreamComponent', () => {
  let component: LogstreamComponent;
  let fixture: ComponentFixture<LogstreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogstreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
