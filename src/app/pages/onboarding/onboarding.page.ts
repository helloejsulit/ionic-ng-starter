import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-onboarding",
  templateUrl: "./onboarding.page.html",
  styleUrls: ["./onboarding.page.scss"],
})
export class OnboardingPage implements OnInit {
  showSkip = true;

  constructor(
    private menu: MenuController,
    public router: Router // public storage: Storage --- add storage service here (pouchDb)
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  startApp() {
    this.router
      .navigateByUrl("/app/tabs/tab1", { replaceUrl: true })
      .then(() => console.log("save onboarding data to storage"));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then((isEnd) => {
      this.showSkip = !isEnd;
    });
  }
}
