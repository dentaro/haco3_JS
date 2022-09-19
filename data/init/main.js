counter = 0
modetitle = 0;
modegame = 1;
modeover = 2;
mode = modetitle;
bx=42
by=33
sx=0
sy=0
prebx = 0;
preby = 0;
scene = 0;//引数に意味はない
firstF = true;
// scenemap = 0;
MapReadF = true ;
setup = function(){
}
loop = function(){
    game()
    // if (mode == modetitle)title()
    // else if(mode == modegame)game()
    // else if(mode == modeover)over()
    // counter++
}
title = function(){
    // if( btn(2) == true ){
    //     mode = modegame;
    // }
}
over = function(){
    color(2)
    fillrect(0,0,128,128)
    color(7)
    text("ゲームオーバー",32, 52)
    if( btn(2) == true )mode = modetitle
}
game = function(){
    if(MapReadF == true){
        drawmap(0);//config読み込み~表示まで,引数関係なし
        MapReadF = false;
    }

    if( btn(0) == true )bx--
    if( btn(1) == true )bx++
    if( btn(2) == true )by--
    if( btn(3) == true )by++

    if(bx<0)bx = 256
    if(by<0)by = 256

    sx = (bx + 8)%256//キャラの位置を割り出す//画面左上の内部処理と一致させている
    sy = (by + 7)%256

    if(scene == 0){
        if(sx == 40 && sy == 40){//街を出たら
            scene = 1;
            mapno(1);//congig書き込み、表示、データ読み込みまで
        }
    }else if(scene == 1){
        if(sx == 42 && sy == 42){//街を出たら
            scene = 0;
            mapno(0);//congig書き込み、表示、データ読み込みまで
        }
    }

    // switch (scene){
    //     case 0:
    //         if(sx == 40 && sy == 40){//街を出たら
    //             scene = 1;
    //             mapno(1);//congig書き込み、表示、データ読み込みまで
    //         }
    //         break;
    //     case 1:
    //         if(sx == 42 && sy == 42){//街を出たら
    //             scene = 0;
    //             mapno(0);//congig書き込み、表示、データ読み込みまで
    //         }
    //         break;
    // }

    //マップを描画
    if(prebx != bx||preby != by){
        
        bg(bx,by,128,128);
        spr(64,56,8,8,0,0)
        prebx = bx;
        preby = by;
    }

    if(firstF == true){
        color(1);
        fillrect(0,0,30,30);
        firstF = false;
    }
    // scene = -1;
}


