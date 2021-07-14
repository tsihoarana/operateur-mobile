import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeAppelPage } from './liste-appel.page';

describe('ListeAppelPage', () => {
  let component: ListeAppelPage;
  let fixture: ComponentFixture<ListeAppelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAppelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeAppelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
