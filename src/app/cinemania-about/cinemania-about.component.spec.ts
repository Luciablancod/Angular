import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaniaAboutComponent } from './cinemania-about.component';

describe('CinemaniaAboutComponent', () => {
  let component: CinemaniaAboutComponent;
  let fixture: ComponentFixture<CinemaniaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaniaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaniaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
