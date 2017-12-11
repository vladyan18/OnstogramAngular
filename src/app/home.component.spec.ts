/**
 * Created by Владислав on 11.12.2017.
 */
import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HttpClientModule }   from '@angular/common/http';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        HomeComponent,
        AppNavbarComponent
      ],
      providers: [
        HttpClientModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Should get posts', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    app.getPosts();

    expect(app.posts.length).toBeGreaterThan(0);
  });
});
