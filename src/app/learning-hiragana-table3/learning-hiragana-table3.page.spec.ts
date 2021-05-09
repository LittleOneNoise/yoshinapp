import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningHiraganaTable3Page } from './learning-hiragana-table3.page';

describe('LearningHiraganaTable3Page', () => {
  let component: LearningHiraganaTable3Page;
  let fixture: ComponentFixture<LearningHiraganaTable3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningHiraganaTable3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningHiraganaTable3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
