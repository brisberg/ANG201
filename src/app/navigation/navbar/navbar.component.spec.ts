import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created with initial state', () => {
    expect(component).toBeTruthy();
    expect(component.state).toEqual('Left');
  });

  it('should set the state', () => {
    component.setState('foobar');
    fixture.detectChanges();
    expect(component.state).toEqual('foobar');
  });

  it('should display the state', () => {
    const labelEl = fixture.debugElement.query(By.css('label'));
    expect(labelEl.nativeElement.innerHTML).toBe('Left');
    component.setState('foobar');
    fixture.detectChanges();
    expect(labelEl.nativeElement.innerHTML).toBe('foobar');
  });
});
