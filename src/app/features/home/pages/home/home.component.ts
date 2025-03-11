import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  ngOnInit(): void {
    const pageTitle = 'Space Tourism';
    const imageUrl = `${this.document.location.origin}/assets/images/home/background-home-desktop.jpg`;
    const description =
      'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og:title',
      content: pageTitle,
    });
    this.meta.updateTag({
      name: 'og:description',
      content: description,
    });
    this.meta.updateTag({
      name: 'og:image',
      content: imageUrl,
    });
    this.meta.updateTag({
      name: 'og:image:width',
      content: '1200',
    });
    this.meta.updateTag({
      name: 'og:image:height',
      content: '600',
    });
  }
}
