var app = new Vue(
  {
    el: "#root",
    data: {
      images: [
        "../vue-slider/Assets/img/panorama1.jfif",
        "../vue-slider/Assets/img/panorama2.jfif",
        "../vue-slider/Assets/img/panorama3.jfif",
        "../vue-slider/Assets/img/panorama4.jfif",
        "../vue-slider/Assets/img/panorama5.jfif",
      ],
      index: 0,
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
    }
  }
);
