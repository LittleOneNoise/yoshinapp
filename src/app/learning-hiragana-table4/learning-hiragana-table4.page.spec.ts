import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningHiraganaTable4Page } from './learning-hiragana-table4.page';

describe('LearningHiraganaTable4Page', () => {
  let component: LearningHiraganaTable4Page;
  let fixture: ComponentFixture<LearningHiraganaTable4Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningHiraganaTable4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningHiraganaTable4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
