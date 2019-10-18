//获取num范围内的随机数,切部位nothis数
function getRandNo(num, not_in_arr) {
    var rand = 0;
    while (1) {
        rand = Math.floor(Math.random() * 100 + 1) % num;
        if (!inArray(not_in_arr, rand)) {
            break;
        }
    }
    return rand;
}

//判断是否在数组中
function inArray(arr, val) {
    var ret = false, i = 0, len = arr.length;
    for (; i < len; i++) {
        if (arr[i] == val) { // 必须用强类型校验
            ret = true;
            break;
        }
    }
    return ret;
}

//各类移动方法
function move_left(sprite, distance) {
    return cc.p(sprite.x - distance, sprite.y);
}
function move_right(sprite, distance) {
    return cc.p(sprite.x + distance, sprite.y);
}
function move_up(sprite, distance) {
    return cc.p(sprite.x, sprite.y + distance);
}
function move_down(sprite, distance) {
    return cc.p(sprite.x, sprite.y - distance);
}
