document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext('2d');
    var x = 450;
    var y = 425;
    
    var yellow1 = "rgb(247, 205, 52)";
    var yellow2 = "rgb(250, 184, 27)";
    var red1 = "rgb(220, 40, 40)";
    var red2 = "rgb(200, 30, 30)";
    var black = "rgb(63, 60, 60)";
    var white = "rgb(250, 245, 245)";
    var orange1 = "rgb(245, 134, 49)";
    var orange2 = "rgb(245, 154, 49)";
    var red3 = "rgb(180, 30, 30)";
    
    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }
    
    var r = 0;
    
    context.fillStyle = white;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    r = 340;
    for (var i = 0 + 5; i < 360 + 5; i = i + 10) {
        var newx = r * Math.cos(toRadians(i)) + x;
        var newy = r * Math.sin(toRadians(i)) + y;
        
        context.beginPath();
        context.arc(newx, newy, 35, 0, 2 * Math.PI, true);
        context.fillStyle = yellow1;
        context.fill();
        
        context.beginPath();
        context.arc(newx, newy, 25, 0, 2 * Math.PI, true);
        context.fillStyle = orange1;
        context.fill();
        
        context.beginPath();
        context.arc(newx, newy, 18, 0, 2 * Math.PI, true);
        context.fillStyle = red1;
        context.fill();
        
        context.beginPath();
        context.arc(newx, newy, 10, 0, 2 * Math.PI, true);
        context.fillStyle = red3;
        context.fill();
        
        var x1 = r * Math.cos(toRadians(i)) + x;
        var y1 = r * Math.sin(toRadians(i)) + y;
        var x2 = r * Math.cos(toRadians(i + 90)) + x;
        var y2 = r * Math.sin(toRadians(i + 90)) + y;
        var x3 = r * Math.cos(toRadians(i + 180)) + x;
        var y3 = r * Math.sin(toRadians(i + 180)) + y;
        var x4 = r * Math.cos(toRadians(i + 270)) + x;
        var y4 = r * Math.sin(toRadians(i + 270)) + y;
        
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x4, y4);
        context.closePath();
        context.strokeStyle = black;
        context.lineWidth = 2;
        context.stroke();
        context.fillStyle = white;
        context.fill();
    }
    
    r = 320;
    for (var i = 0; i < 360; i = i + 10) {
        var x1 = r * Math.cos(toRadians(i)) + x;
        var y1 = r * Math.sin(toRadians(i)) + y;
        var x2 = r * Math.cos(toRadians(i + 90)) + x;
        var y2 = r * Math.sin(toRadians(i + 90)) + y;
        var x3 = r * Math.cos(toRadians(i + 180)) + x;
        var y3 = r * Math.sin(toRadians(i + 180)) + y;
        var x4 = r * Math.cos(toRadians(i + 270)) + x;
        var y4 = r * Math.sin(toRadians(i + 270)) + y;
        
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x4, y4);
        context.closePath();
        context.strokeStyle = black;
        context.lineWidth = 2;
        context.stroke();
        context.fillStyle = yellow1;
        context.fill();
    }
    
    r = 300;
    for (var i = 0 + 5; i < 360 + 5; i = i + 10) {
        var x1 = r * Math.cos(toRadians(i)) + x;
        var y1 = r * Math.sin(toRadians(i)) + y;
        var x2 = r * Math.cos(toRadians(i + 90)) + x;
        var y2 = r * Math.sin(toRadians(i + 90)) + y;
        var x3 = r * Math.cos(toRadians(i + 180)) + x;
        var y3 = r * Math.sin(toRadians(i + 180)) + y;
        var x4 = r * Math.cos(toRadians(i + 270)) + x;
        var y4 = r * Math.sin(toRadians(i + 270)) + y;
        
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x4, y4);
        context.closePath();
        context.strokeStyle = black;
        context.lineWidth = 2;
        context.stroke();
        context.fillStyle = yellow2;
        context.fill();
    }
    
    r = 280;
    for (var i = 0; i < 360; i = i + 10) {
        var x1 = r * Math.cos(toRadians(i)) + x;
        var y1 = r * Math.sin(toRadians(i)) + y;
        var x2 = r * Math.cos(toRadians(i + 90)) + x;
        var y2 = r * Math.sin(toRadians(i + 90)) + y;
        var x3 = r * Math.cos(toRadians(i + 180)) + x;
        var y3 = r * Math.sin(toRadians(i + 180)) + y;
        var x4 = r * Math.cos(toRadians(i + 270)) + x;
        var y4 = r * Math.sin(toRadians(i + 270)) + y;
        
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x4, y4);
        context.closePath();
        context.strokeStyle = black;
        context.lineWidth = 2;
        context.stroke();
        context.fillStyle = orange1;
        context.fill();
    }
    
    r = 260;
    for (var i = 0 + 5; i < 360 + 5; i = i + 10) {
        var x1 = r * Math.cos(toRadians(i)) + x;
        var y1 = r * Math.sin(toRadians(i)) + y;
        var x2 = r * Math.cos(toRadians(i + 90)) + x;
        var y2 = r * Math.sin(toRadians(i + 90)) + y;
        var x3 = r * Math.cos(toRadians(i + 180)) + x;
        var y3 = r * Math.sin(toRadians(i + 180)) + y;
        var x4 = r * Math.cos(toRadians(i + 270)) + x;
        var y4 = r * Math.sin(toRadians(i + 270)) + y;
        
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x4, y4);
        context.closePath();
        context.strokeStyle = black;
        context.lineWidth = 2;
        context.stroke();
        context.fillStyle = red1;
        context.fill();
    }
    
    r = 230;
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, true);
    context.fillStyle = red1;
    context.fill();
    
    for (var i = 0; i < 360; i = i + 5) {
        var newx = r * Math.cos(toRadians(i)) + x;
        var newy = r * Math.sin(toRadians(i)) + y;
        context.beginPath();
        context.arc(newx, newy, 10, 0, 2 * Math.PI, true);
        context.fillStyle = red3;
        context.fill();
    }
    
    for (var i = 0; i < 360; i = i + 5) {
        var newx = (r - 5) * Math.cos(toRadians(i)) + x;
        var newy = (r - 5) * Math.sin(toRadians(i)) + y;
        context.beginPath();
        context.arc(newx, newy, 4, 0, 2 * Math.PI, true);
        context.fillStyle = yellow1;
        context.fill();
    }
    
    r = 150;
    var small_r = 55;
    for (var i = 0; i < 8; i++) {
        var newx = r * Math.cos(toRadians(45 * i)) + x;
        var newy = r * Math.sin(toRadians(45 * i)) + y;
        context.beginPath();
        context.arc(newx, newy, small_r, 0, 2 * Math.PI, true);
        context.fillStyle = orange1;
        context.fill();
        
        for (var j = 0; j < 360; j = j + 10) {
            var xx = small_r * Math.cos(toRadians(j)) + newx;
            var yy = small_r * Math.sin(toRadians(j)) + newy;
            context.beginPath();
            context.arc(xx, yy, 10, 0, 2 * Math.PI, true);
            context.fillStyle = yellow1;
            context.fill();
        }
    }
    
    for (var i = 0; i < 8; i++) {
        var newx = r * Math.cos(toRadians(45 * i)) + x;
        var newy = r * Math.sin(toRadians(45 * i)) + y;
        
        for (var j = 0; j < 360; j = j + 10) {
            var xx = small_r * Math.cos(toRadians(j)) + newx;
            var yy = small_r * Math.sin(toRadians(j)) + newy;
            context.beginPath();
            context.arc(xx, yy, 6, 0, 2 * Math.PI, true);
            context.fillStyle = yellow2;
            context.fill();
        }
        
        for (var j = 0; j < 360; j = j + 10) {
            var xx = (small_r - 10) * Math.cos(toRadians(j)) + newx;
            var yy = (small_r - 10) * Math.sin(toRadians(j)) + newy;
            context.beginPath();
            context.arc(xx, yy, 3, 0, 2 * Math.PI, true);
            context.fillStyle = red2;
            context.fill();
        }
    }
    
    r = 130;
    var small_r = 33;
    for (var i = 0; i < 8; i++) {
        var newx = r * Math.cos(toRadians(45 * i)) + x;
        var newy = r * Math.sin(toRadians(45 * i)) + y;
        context.beginPath();
        context.arc(newx, newy, small_r, 0, 2 * Math.PI, true);
        context.fillStyle = white;
        context.fill();
        
        for (var j = 0; j < 360; j = j + 10) {
            var xx = small_r * Math.cos(toRadians(j)) + newx;
            var yy = small_r * Math.sin(toRadians(j)) + newy;
            context.beginPath();
            context.arc(xx, yy, 5, 0, 2 * Math.PI, true);
            context.fillStyle = white;
            context.fill();
        }
        
        for (var j = 0; j < 360; j = j + 10) {
            var xx = (small_r - 5) * Math.cos(toRadians(j)) + newx;
            var yy = (small_r - 5) * Math.sin(toRadians(j)) + newy;
            context.beginPath();
            context.arc(xx, yy, 4, 0, 2 * Math.PI, true);
            context.fillStyle = yellow2;
            context.fill();
        }
        
        for (var j = 0; j < 360; j = j + 10) {
            var xx = (small_r - 8) * Math.cos(toRadians(j)) + newx;
            var yy = (small_r - 8) * Math.sin(toRadians(j)) + newy;
            context.beginPath();
            context.arc(xx, yy, 2, 0, 2 * Math.PI, true);
            context.fillStyle = red2;
            context.fill();
        }
    }
    
    r = 110;
    var small_r = 20;
    for (var i = 0; i < 8; i++) {
        var newx = r * Math.cos(toRadians(45 * i)) + x;
        var newy = r * Math.sin(toRadians(45 * i)) + y;
        context.beginPath();
        context.arc(newx, newy, small_r + 5, 0, 2 * Math.PI, true);
        context.fillStyle = red3;
        context.fill();
        
        context.beginPath();
        context.arc(newx, newy, small_r, 0, 2 * Math.PI, true);
        context.fillStyle = red2;
        context.fill();
    }
    
    r = 95;
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, true);
    context.fillStyle = red3;
    context.fill();
    
    for (var i = 0; i < 360; i = i + 10) {
        var newx = (r + 10) * Math.cos(toRadians(i)) + x;
        var newy = (r + 10) * Math.sin(toRadians(i)) + y;
        context.beginPath();
        context.arc(newx, newy, 5, 0, 2 * Math.PI, true);
        context.fillStyle = red2;
        context.fill();
    }
    
    var f = true;
    for (var i = 0; i < 360; i = i + 10) {
        var newx = r * Math.cos(toRadians(i)) + x;
        var newy = r * Math.sin(toRadians(i)) + y;
        context.beginPath();
        context.arc(newx, newy, 9, 0, 2 * Math.PI, true);
        if (f == true) {
            context.fillStyle = yellow1;
            f = false;
        } else {
            context.fillStyle = orange1;
            f = true;
        }
        context.fill();
    }
    
    context.beginPath();
    context.arc(x, y, 55, 0, 2 * Math.PI, true);
    context.fillStyle = white;
    context.fill();
    
    r = 60;
    for (var i = 0; i < 360; i = i + 10) {
        var newx = r * Math.cos(toRadians(i)) + x;
        var newy = r * Math.sin(toRadians(i)) + y;
        context.beginPath();
        context.arc(newx, newy, 10, 0, 2 * Math.PI, true);
        context.fillStyle = yellow1;
        context.fill();
    }
    
    for (var i = 0; i < 6; i++) {
        var newx = r * Math.cos(toRadians(60 * i)) + x;
        var newy = r * Math.sin(toRadians(60 * i)) + y;
        context.beginPath();
        context.arc(newx, newy, 15, 0, 2 * Math.PI, true);
        context.fillStyle = orange1;
        context.fill();
    }
    
    context.beginPath();
    context.arc(x, y, 30, 0, 2 * Math.PI, true);
    context.fillStyle = red2;
    context.fill();
    
    r = 33;
    for (var i = 0; i < 360; i = i + 20) {
        var newx = r * Math.cos(toRadians(i)) + x;
        var newy = r * Math.sin(toRadians(i)) + y;
        context.beginPath();
        context.arc(newx, newy, 8, 0, 2 * Math.PI, true);
        context.fillStyle = yellow1;
        context.fill();
    }
    
    context.beginPath();
    context.arc(x, y, 15, 0, 2 * Math.PI, true);
    context.fillStyle = yellow1;
    context.fill();
});