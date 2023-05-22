window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
  
    let painting = false;
    let prevX = 0;
    let prevY = 0;
  
    function startPosition(e) {
      painting = true;
      draw(e);
    }
  
    function finishPosition() {
      painting = false;
      prevX = 0;
      prevY = 0;
    }
  
    function draw(e) {
      if (!painting) return;
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.strokeStyle = "black";
  
      if (prevX === 0 && prevY === 0) {
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
  
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI);
        ctx.fill();
      }
  
      prevX = e.offsetX;
      prevY = e.offsetY;
    }
  
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);
  });


  