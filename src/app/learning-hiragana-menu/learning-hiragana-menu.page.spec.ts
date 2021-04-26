import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningHiraganaMenuPage } from './learning-hiragana-menu.page';

describe('LearningHiraganaMenuPage', () => {
  let component: LearningHiraganaMenuPage;
  let fixture: ComponentFixture<LearningHiraganaMenuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningHiraganaMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningHiraganaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
