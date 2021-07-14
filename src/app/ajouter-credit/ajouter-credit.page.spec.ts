import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterCreditPage } from './ajouter-credit.page';

describe('AjouterCreditPage', () => {
  let component: AjouterCreditPage;
  let fixture: ComponentFixture<AjouterCreditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCreditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterCreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
