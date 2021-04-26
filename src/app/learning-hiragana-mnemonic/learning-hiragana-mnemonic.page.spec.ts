import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearningHiraganaMnemonicPage } from './learning-hiragana-mnemonic.page';

describe('LearningHiraganaMnemonicPage', () => {
  let component: LearningHiraganaMnemonicPage;
  let fixture: ComponentFixture<LearningHiraganaMnemonicPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningHiraganaMnemonicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningHiraganaMnemonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
