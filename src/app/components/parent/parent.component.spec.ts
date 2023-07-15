import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { By } from '@angular/platform-browser';

fdescribe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment count', () => {
    const countElement = fixture.debugElement.query(By.css('.count'));
    const incrementBtnElement = fixture.debugElement.query(
      By.css('.increment')
    );
    incrementBtnElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(countElement.nativeElement.textContent).toBe('1');
  });

  it('should decrement count', () => {
    const countElement = fixture.debugElement.query(By.css('.count'));
    const decrementBtnElement = fixture.debugElement.query(
      By.css('.decrement')
    );
    decrementBtnElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(countElement.nativeElement.textContent).toBe('-1');
  });
});
