import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: "",
          },
        ],
      },
      {
        path: "tab2",
        children: [
          {
            path: "",
            loadChildren: "",
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: "",
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
