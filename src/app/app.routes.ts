import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'my-finance', loadChildren:()=>import('./my-finance/my-finance.module').then(m=> m.MyFinanceModule)}
];
