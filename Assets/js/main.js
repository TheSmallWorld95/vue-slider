var app = new Vue(
  {
    el: "#root",
    data: {
      images: [
        "../vue-slider/Assets/img/panorama1.png",
        "../vue-slider/Assets/img/panorama2.png",
        "../vue-slider/Assets/img/panorama3.png",
        "../vue-slider/Assets/img/panorama4.png",
        "../vue-slider/Assets/img/panorama5.png",
      ],
      index: 0,
      timer: "",
    },
    methods: {
      next: function () {
        if (this.index < this.images.length - 1) {
          this.index++
        } else {
          this.index = 0
        }
      },
      prev: function () {
        if (this.index <= 0) {
          this.index = this.images.length - 1
        } else {
          this.index--
        }
      },
      dotSelection: function(index) {
        this.index = index;
      },
      startRotation: function() {
        console.log(this.next);
        this.timer = setInterval(this.next, 3000);
      },
      stopRotation: function() {
        clearInterval(this.timer);
        this.timer = "";
      },
    }
  }
);
