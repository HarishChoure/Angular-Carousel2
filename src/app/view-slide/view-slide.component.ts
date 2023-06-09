import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {  FormGroup, FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-view-slide',
  templateUrl: './view-slide.component.html',
  styleUrls: ['./view-slide.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ViewSlideComponent {
  imgForm!: FormGroup;
  //Image Array It store 3-default image
  images: any[] = [
    {
      imgUrl: '../assets/pexels-khirod-behera-2462023.jpg',
      imgCapt: 'First Slide',
    },
    { imgUrl: '../assets/hanuman.jpg', imgCapt: 'Second Slide' },
    {
      imgUrl: '../assets/pexels-yurii-hlei-1545743.jpg',
      imgCapt: 'Third Slide',
    },
  ];
  //bootstrap slider pre-define code
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  //reactive form data validate and store
  ngOnInit(): void {
    this.imgForm = new FormGroup({
      imgUrl: new FormControl('',Validators.required),
      imgCapt: new FormControl('',Validators.required),
    });
  }
  //onSubmit function for adding new slide to the slider
  onSubmit() {
    const newImg = this.imgForm.value;
    const newImgObj = {
      imgUrl: newImg.imgUrl,
      imgCapt: newImg.imgCapt,
    };
    this.images.push(newImgObj);
  }
  //Delete function to delete slide
  onDelete(index: number) {
    this.images.splice(index, 1);
  }
}