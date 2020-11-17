
let canvas_mouse_event = false;
let oldX = 0;
let oldY = 0;
let bold_line = 3;
let color = "#cccccc"
var changecolor

const canvas = $("#canvas")[0];
const ctx = canvas.getContext("2d");

$(canvas).on("mousedown", function (e) {
  // console.log(e);
  oldX = e.offsetX;
  oldY = e.offsetY;
  canvas_mouse_event = true;
});


$(canvas).on("mousemove", function (e) {

  if (canvas_mouse_event == true) {
    const px = e.offsetX;
    const py = e.offsetY;
    ctx.strokeStyle = color;
    ctx.lineWidth = bold_line;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(oldX, oldY);
    ctx.lineTo(px, py);
    ctx.stroke();
    oldX = px;
    oldY = py;
  }
})

$(canvas).on("mouseup", function () {
  canvas_mouse_event = false;
})

$("#clear_btn").on("click", function () {

  ctx.beginPath();
  ctx.clearRect(0, 0, 600, 600);
});



var val = document.getElementById("color").value;
$('#color').change(function () {

  console.log($('#color').val());
  color = $('#color').val()

});

// var R = document.getElementById("#range").valueAsNumber;
// $('#range').change(function () {

//   console.log($(R).val());
//   bold_line = $(R).val()

// });






