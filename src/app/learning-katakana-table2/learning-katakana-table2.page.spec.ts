import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTable2Page } from './learning-katakana-table2.page';

describe('LearningKatakanaTable2Page', () => {
  let component: LearningKatakanaTable2Page;
  let fixture: ComponentFixture<LearningKatakanaTable2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningKatakanaTable2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningKatakanaTable2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
