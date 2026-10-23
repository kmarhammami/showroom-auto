import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeachBar } from './seach-bar';

describe('SeachBar', () => {
  let component: SeachBar;
  let fixture: ComponentFixture<SeachBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeachBar],
    }).compileComponents();

    fixture = TestBed.createComponent(SeachBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
