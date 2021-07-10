import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTable3Page } from './learning-katakana-table3.page';

describe('LearningKatakanaTable3Page', () => {
  let component: LearningKatakanaTable3Page;
  let fixture: ComponentFixture<LearningKatakanaTable3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningKatakanaTable3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningKatakanaTable3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
