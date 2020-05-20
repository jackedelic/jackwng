var TxtType = function (el, toRotate, period, toDelete) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
  this.toDelete = toDelete;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.toDelete && this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap blinking">' + this.txt + "</span>";

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.toDelete && this.isDeleting) {
    delta /= 2;
  }

  if (this.toDelete) {
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  } else {
    if (this.txt === fullTxt) {
      return;
    } else if (this.txt === "") {
      this.loopNum++;
      delta = 500;
    }
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};

function animate() {
  var r = document.getElementsByClassName("rotate-typewriter");
  for (var i = 0; i < r.length; i++) {
    var toRotate = r[i].getAttribute("data-type");
    var period = r[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(r[i], JSON.parse(toRotate), period, true);
    }
  }

  var nr = document.getElementsByClassName("typewriter");
  for (var i = 0; i < nr.length; i++) {
    var toRotate = nr[i].getAttribute("data-type");
    var period = nr[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(nr[i], JSON.parse(toRotate), period, false);
    }
  }
}
