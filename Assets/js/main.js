var app = new Vue(
  {
    el: "#root",
    data: {
      images: [
        "https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2016/07/30062143/CuronVenosta_TrentinoAltoAdige-1.png",
        "https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2016/07/30062141/RaddaInChianti_Toscana-1.png",
        "https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2016/07/30062141/CastelluccioDiNorcia_Umbria-1.png",
        "https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2016/07/30062141/Asolo_Treviso-1.png",
        "https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2016/07/30062140/Sperlonga_Lazio-1.png",
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
