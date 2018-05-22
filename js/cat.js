var slidePage = document.getElementsByClassName('slidePage')[0];
var moveWidth = slidePage.children[0].offsetWidth;
var num = slidePage.children.length - 1;
var leftBtn = document.getElementsByClassName('leftBtn')[0];
var rightBtn = document.getElementsByClassName('rightBtn')[0];
var slideList = document.getElementsByClassName('slideList')[0];
var oSpan = slideList.children;
var timer = null;
var lock = true;
var index = 0;
leftBtn.onclick = function () {
    autoMove('right->left');
}
rightBtn.onclick = function () {
    autoMove('left->right');
}
for(var i = 0 ; i < oSpan.length;i++){
    oSpan[i].innerHTML = i+1;
}
function changeIndex(index){
    for(var i = 0 ;i < oSpan.length;i++){
        oSpan[i].className = '';
    }
    oSpan[index].className ='active';
}

//点击序号显示相应导航图片
for(var i =0 ; i < oSpan.length;i++){
    (function(myIndex){
        oSpan[i].onclick = function(){
            lock=false;
            clearTimeout(timer);
            index = myIndex;
            startMove(slidePage,{left:-index * moveWidth},function(){
                lock = true;
                changeIndex(index);
                timer = setTimeout(autoMove,700);
            })
        }
    })(i)
}

function autoMove(direction) {
    if (lock) {
        clearTimeout(timer);
        lock = false;
        if (!direction || direction == 'left->right') { 
            index++;
            startMove(slidePage, {
                left: slidePage.offsetLeft - moveWidth
            }, function () {
               
                if (slidePage.offsetLeft == -num * moveWidth) {
                    slidePage.style.left = '0px';
                    index = 0;
                }
                changeIndex(index);
                lock = true;
                timer = setTimeout(autoMove, 700);
            })
        } else if (direction == 'right->left') {
            if (slidePage.offsetLeft == 0) {
                slidePage.style.left = -num * moveWidth + 'px';
                index = num;
            }
            index --;
            startMove(slidePage, {
                left: slidePage.offsetLeft + moveWidth
            }, function () {
                changeIndex(index);
                lock = true;
                timer = setTimeout(autoMove, 700);
            })
        }
    }



}
timer = setTimeout(autoMove, 700);