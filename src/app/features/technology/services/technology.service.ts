import { Injectable, signal } from '@angular/core';
import {
  TechLinkInterface,
  TechnologyInterface,
} from '../types/technology.interface';
import { Observable } from 'rxjs';
import { TechnologyEnum } from '../types/technology.enum';

@Injectable({ providedIn: 'root' })
export class TechnologyService {
  private technologies: TechnologyInterface[] = [
    {
      name: 'Launch vehicle',
      images: {
        portrait: '/assets/images/technology/image-launch-vehicle-portrait.jpg',
        landscape:
          '/assets/images/technology/image-launch-vehicle-landscape.jpg',
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: 'Spaceport',
      images: {
        portrait: '/assets/images/technology/image-spaceport-portrait.jpg',
        landscape: '/assets/images/technology/image-spaceport-landscape.jpg',
      },
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
      name: 'Space capsule',
      images: {
        portrait: '/assets/images/technology/image-space-capsule-portrait.jpg',
        landscape:
          '/assets/images/technology/image-space-capsule-landscape.jpg',
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  private techMap: Map<string, string> = new Map([
    ['launch', 'Launch vehicle'],
    ['spaceport', 'Spaceport'],
    ['capsule', 'Space capsule'],
  ]);

  getTechnology(techName: string): Observable<TechnologyInterface> {
    return new Observable((subscriber) => {
      const technology = this.technologies.find(
        (tech) => tech.name === this.techMap.get(techName)
      )!;
      subscriber.next(technology);
    });
  }

  getPaths(): TechLinkInterface[] {
    return Object.keys(TechnologyEnum).map((tech) => {
      const link: TechLinkInterface = {
        path: tech,
        isActive: signal(false),
      };
      return link;
    });
  }
}
