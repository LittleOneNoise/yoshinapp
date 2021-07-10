import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTable4Page } from './learning-katakana-table4.page';

describe('LearningKatakanaTable4Page', () => {
  let component: LearningKatakanaTable4Page;
  let fixture: ComponentFixture<LearningKatakanaTable4Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningKatakanaTable4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningKatakanaTable4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
