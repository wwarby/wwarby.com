import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloaderService {

  private readonly images: string[] = [];

  constructor() { }

  preloadImage(url: string) {
    if (this.images.indexOf(url.toLowerCase()) !== -1) { return; }
    const image = new Image();
    image.src = url;
    this.images.push(url.toLowerCase());
  }
}
