class Slider {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
 
    showSliderWidth() {
        console.log(this.width);
    }
}
 
const slider = new Slider('500px', '150px');
 
slider.showSliderWidth();