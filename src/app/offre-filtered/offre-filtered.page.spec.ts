import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffreFilteredPage } from './offre-filtered.page';

describe('OffreFilteredPage', () => {
  let component: OffreFilteredPage;
  let fixture: ComponentFixture<OffreFilteredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreFilteredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffreFilteredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
