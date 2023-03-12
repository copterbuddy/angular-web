import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../../../service/auth-service/auth-service.service';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent,SidebarComponent],
      providers: [
        {
          provide: AuthServiceService,
          useValue: {
            login: () => of({}),
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method with correct params when form is submitted', () => {
    spyOn(authService, 'login').and.callThrough();

    const email = 'test@example.com';
    const password = 'password123';

    component.loginForm.setValue({
      email,
      password,
    });

    component.onSubmit();

    expect(authService.login).toHaveBeenCalledOnceWith(email, password);
  });

});
