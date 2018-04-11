import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {FormControl} from '@angular/forms';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css'],
	animations: [routerTransition()],
  	host: {'[@routerTransition]': ''}
})

export class ProductDetailComponent implements OnInit {
	myControl: FormControl = new FormControl();
	galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    options = [
	    {value: 'steak-0', viewValue: 'Steak'},
	    {value: 'pizza-1', viewValue: 'Pizza'},
	    {value: 'tacos-2', viewValue: 'Tacos'}
	   ];

 
    ngOnInit(): void {
 
        this.galleryOptions = [
            {
                width: '100%',
                height: '600px';
                thumbnailsColumns: 4,
                previewCloseOnClick: true, 
                previewCloseOnEsc: true,
                previewZoom: true,
                imageSwipe: true,
                thumbnailsSwipe: true,
                previewSwipe: true,
                arrowNextIcon: "fa fa-angle-right fa-2x",
                arrowPrevIcon: "fa fa-angle-left fa-2x",
                imageArrowsAutoHide: true, 
                thumbnailsArrowsAutoHide: true,
                imageInfinityMove: true,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',

                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/product-images/test4.jpeg',
                medium: 'assets/product-images/test3.jpeg',
                big: 'assets/product-images/test5.jpeg'
            },
            {
                small: 'assets/product-images/test2.jpg',
                medium: 'assets/product-images/test2.jpg',
                big: 'assets/product-images/test2.jpg'
            },
            {
                small: 'assets/product-images/test.jpg',
                medium: 'assets/product-images/test3.jpeg',
                big: 'assets/product-images/test.jpg'
            },
            {
                small: 'assets/product-images/test.jpg',
                medium: 'assets/product-images/test.jpg',
                big: 'assets/product-images/test.jpg'
            },
            {
                small: 'assets/product-images/test2.jpg',
                medium: 'assets/product-images/test3.jpeg',
                big: 'assets/product-images/test2.jpg'
            },
            {
                small: 'assets/product-images/test.jpg',
                medium: 'assets/product-images/test.jpg',
                big: 'assets/product-images/test.jpg'
            }
        ];
    }

}
