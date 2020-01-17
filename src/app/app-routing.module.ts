import { LoggedGuard } from './guards/logged.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'chat',
    loadChildren: './pages/chat/chat.module#ChatPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'stato',
    loadChildren: './pages/stato/stato.module#StatoPageModule'
  },
  {
    path: 'utenti',
    loadChildren: './pages/utenti/utenti.module#UtentiPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule',
    canActivate: [LoggedGuard]

  },
  {
    path: 'user-chat', loadChildren: './pages/user-chat/user-chat.module#UserChatPageModule'
  },
  {
    path: 'add-friend-modal', loadChildren: './pages/add-friend-modal/add-friend-modal.module#AddFriendModalPageModule'

  },
  {
    path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule'
  },
  {
    path: 'options-popover', loadChildren: './pages/options-popover/options-popover.module#OptionsPopoverPageModule'
  },
  {
    path: 'photo-modal', loadChildren: './pages/photo-modal/photo-modal.module#PhotoModalPageModule'
  },
  {
    path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule',
    canActivate: [LoggedGuard, AuthGuard]

  },

  {
    path: 'details-modal', loadChildren: './pages/details-modal/details-modal.module#DetailsModalPageModule'
  },
  {
    path: 'home/gruppi', loadChildren: './pages/gruppi/gruppi.module#GruppiPageModule'
  },
  {
    path: 'group-modal', loadChildren: './pages/group-modal/group-modal.module#GroupModalPageModule'
  },
  {
    path: 'group-chat', loadChildren: './pages/group-chat/group-chat.module#GroupChatPageModule'
  },
  {
    path: 'details-group-modal', loadChildren: './pages/details-group-modal/details-group-modal.module#DetailsGroupModalPageModule'
  },
  {
    path: 'edit-modal', loadChildren: './pages/edit-modal/edit-modal.module#EditModalPageModule'
  },
  {
    path: 'info-chat-modal', loadChildren: './pages/info-chat-modal/info-chat-modal.module#InfoChatModalPageModule'
  },
  {
    path: 'chat-options-modal', loadChildren: './pages/chat-options-modal/chat-options-modal.module#ChatOptionsModalPageModule'
  },
  {
    path: 'backgrounds-slides-modal', loadChildren: './pages/backgrounds-slides-modal/backgrounds-slides-modal.module#BackgroundsSlidesModalPageModule'
  },
  {
    path: 'status-photo-modal', loadChildren: './pages/status-photo-modal/status-photo-modal.module#StatusPhotoModalPageModule'
  },
  { path: 'edit-font-size-popover', loadChildren: './pages/edit-font-size-popover/edit-font-size-popover.module#EditFontSizePopoverPageModule' },
  { path: 'privacy-modal', loadChildren: './pages/privacy-modal/privacy-modal.module#PrivacyModalPageModule' },
  { path: 'double-check-popover', loadChildren: './pages/double-check-popover/double-check-popover.module#DoubleCheckPopoverPageModule' },
  { path: 'last-access-popover', loadChildren: './pages/last-access-popover/last-access-popover.module#LastAccessPopoverPageModule' },
  { path: 'photo-visibility-popover', loadChildren: './pages/photo-visibility-popover/photo-visibility-popover.module#PhotoVisibilityPopoverPageModule' },
  { path: 'status-visibility-popover', loadChildren: './pages/status-visibility-popover/status-visibility-popover.module#StatusVisibilityPopoverPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
