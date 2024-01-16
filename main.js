var div1 = document.createElement("div")
div1.className = 'demo'
document.body.appendChild(div1)

var can_drag = false
var lastX
var lastY
document.onmousedown = function (e) {
  lastX = e.clientX
  lastY = e.clientY
  can_drag = true
  // console.log(can_drag)
}
document.onmouseup = function () {
  can_drag = false
  // console.log(can_drag)
}

document.body.onmousemove = function (e) {
  // console.log('e.clientX, e.clientY')
  // console.log(e.clientX, e.clientY)
  if (can_drag === true) {
    var color = "#" + e.clientX + e.clientY
    div1.style.backgroundColor = color.substring(0, 7)
    var deltaX = e.clientX - lastX
    var deltaY = e.clientY - lastY
    var left = parseInt(div1.style.left) || 0
    var top = parseInt(div1.style.top) || 0
    div1.style.left = left + deltaX + 'px'
    div1.style.top = top + deltaY + 'px'
    lastX = e.clientX
    lastY = e.clientY
  }
}