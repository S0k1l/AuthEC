import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './shared/auth.guard';
import { AdminOnlyComponent } from './authorizeDemo/admin-only/admin-only.component';
import { AdminOrTeacherComponent } from './authorizeDemo/admin-or-teacher/admin-or-teacher.component';
import { FemaleAbove21OnlyComponent } from './authorizeDemo/female-above-21-only/female-above-21-only.component';
import { FemaleTeacherOnlyComponent } from './authorizeDemo/female-teacher-only/female-teacher-only.component';
import { LibraryMemberOnlyComponent } from './authorizeDemo/library-member-only/library-member-only.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { claimReq } from './shared/utils/claimReq-utils';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'signup',
        component: RegistrationComponent,
      },
      {
        path: 'signin',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'admin-only',
        component: AdminOnlyComponent,
        data: { claimReq: claimReq.adminOnly },
      },
      {
        path: 'admin-or-teacher',
        component: AdminOrTeacherComponent,
        data: {
          claimReq: claimReq.adminOrTeacher,
        },
      },
      {
        path: 'female-above-21',
        component: FemaleAbove21OnlyComponent,
        data: {
          claimReq: claimReq.femaleAbove21,
        },
      },
      {
        path: 'female-teacher',
        component: FemaleTeacherOnlyComponent,
        data: {
          claimReq: claimReq.femaleTeacher,
        },
      },
      {
        path: 'library-member',
        component: LibraryMemberOnlyComponent,
        data: {
          claimReq: claimReq.hasLibraryId,
        },
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
      },
    ],
  },
];
