import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolWatchlistComponent } from './symbol-watchlist.component';

describe('SymbolWatchlistComponent', () => {
  let component: SymbolWatchlistComponent;
  let fixture: ComponentFixture<SymbolWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
