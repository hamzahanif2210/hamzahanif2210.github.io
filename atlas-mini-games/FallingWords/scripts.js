'use strict'

var blocklist = [];         // list of blocks on screen
var count = 0;              // number of blocks has appeared
var n = 8;                  // max number of blocks on screen
var subcount = 0;
var correctword = 0;        // number of words typed correctly
var incorrectword = 0;      // _____________________ incorrectly
var score = 0;              
var over = true;            // check whether the game is over
var inputupdate;            // interval to check input word
var checkstate;             // interval to check game state (lost?)
var cr;                     // interval to create blocks
var mainbuttap = false;     // check click events of buttons on main screen
var opbuttap = false;       // check click events of buttons on OPTION screen
var smbuttap = false;       // check click events of buttons on OPTION/SOUND screen
var bgnum = 1;              // background
var maxbg = 6;              // max number of background
var blockcolorlist = [["#AEB9D4", "#D4ACA3", "#D4C5A3", "#AED4C6", "#688187", "#D4A3B6", "#D4CFA3", "#87856F"], ["#F2B177", "#83F28B", "#6A518A", "#F25E95", "#A64C38", "#C7F283", "#D69495", "#8A6666"], ["#C0D6B4", "#BFC1D6", "#D4C5A3", "#D6CA9F", "#8A895F", "#BFCDD6", "#D4CFA3", "#87856F"], ["#B5BFA8", "#8C97BF", "#B88CBF", "#BFB495", "#737154", "#8CB2BF", "#BF8C99", "#735A60"], ["#416634", "#393A66", "#66255F", "#665A2A", "#AFB340", "#395266", "#662725", "#B34D49"], ["#E1E6F2", "#F2DBD5", "#F2EAD5", "#DAF2EA", "#92A2A6", "#F2D5DF", "#F2F0D5", "#A6A495"]]
                            // list of word block colors: blockcolorlist[i] is list of colors that will be
                            // applied to the theme with background number i
var soundon = true;         
var musicon = true;

/* main functions */

// choose language (English/ Vietnamese)

function chooselang() {
    document.getElementById("playButton").style.display = "none";
    document.getElementById("guideButton").style.display = "none";
    document.getElementById("optionButton").style.display = "none";
    document.getElementById("chooselanguage").style.display = "block";
}

// main function

function play() {

// reset

    blocklist = [];
    count = 0;
    n = 8;
    subcount = 0;
    correctword = 0;
    incorrectword = 0;
    score = 0;
    over = false;
    document.getElementById('typetext').value = "";
    document.getElementById("gameover").style.display = "none";
    $('#correct').text("Words: 0");
    $('#incorrect').text("Mistakes: 0"); 
    $('#correctnum').text("Words: 0");
    $('#incorrectnum').text("Mistakes: 0");
    $('.block').remove();

// choose language and start

    var plgrd = document.getElementById("playground");
    var scbar = document.getElementById("scorebar");
    document.getElementById("chooselanguage").style.display = "none";
    plgrd.style.display = "block";
    scbar.style.display = "block";
    scbar.style.animation = "boxout 1s linear 0s";
    document.getElementById("typetext").focus();
    start();
}

// get random color of blocks and random words

function randomCaW() {
    var colornum = Math.floor(Math.random() * 7.9);
    var color;
    switch (colornum) {
        case 0: color = blockcolorlist[bgnum-1][0]; break;
        case 1: color = blockcolorlist[bgnum-1][1]; break;
        case 2: color = blockcolorlist[bgnum-1][2]; break;
        case 3: color = blockcolorlist[bgnum-1][3]; break;
        case 4: color = blockcolorlist[bgnum-1][4]; break;
        case 5: color = blockcolorlist[bgnum-1][5]; break;
        case 6: color = blockcolorlist[bgnum-1][6]; break;
        case 7: color = blockcolorlist[bgnum-1][7]; break;
    }
    var wordnum = Math.floor(Math.random()*wlist.length);
    var word = wlist[wordnum];
    var ans = [];
    ans.push(color);
    ans.push(word);
    return ans;
}

// start game

function start() {
    createblock(8);            
    
// first create 8 blocks,
// then start the interval to check input words.
// If player press spacebar, get the input word.
// If the input word match any of words in blocklist, remove block and the word in blocklist,
// add to score the length of the right word.
// If it does not match any words, decrease the score by half of the length of the input word.

    inputupdate = setInterval(function() {
        var text = document.getElementById("typetext");
        var check;
        if (text.value[text.value.length-1] == " ") {
            check = text.value.slice(0, text.value.length-1);
            var bl = document.getElementsByClassName("block");
            for (var i = 0; i < bl.length; i ++) {
                if (blocklist[i] == check) {
                    bl[i].remove();
                    blocklist.splice(i, 1);
                    subcount --;
                    correctword ++;
                    score += check.length;
                    check = "0";
                    $('#blocksound')[0].play();
                    break;
                }
            }
            if (check != "0" && check != "") {
                incorrectword ++; 
                score -= Math.floor(check.length/2);
            }

// display the number of right words and wrong words

            $('#correct').text("Words: " + String(correctword));
            $('#incorrect').text("Mistakes: " + String(incorrectword)); 
            $('#correctnum').text("Words: " + String(correctword));
            $('#incorrectnum').text("Mistakes: " + String(incorrectword)); 
            text.value = "";
        }
    }, 1)

// start the interval to check whether the game is over
// if yes, display the board to show the result, button to play again and button to be back to main menu

    checkstate = setInterval(function() {
        var bl = document.getElementsByClassName("block");
        var gameoverboard = document.getElementById("gameover");
        var scoreshow = document.getElementById("score");
        if (bl[0].offsetTop == "-50" && over == false) {
            $('.block').css('animation-play-state', 'paused');
            gameoverboard.style.display = "block";
            $('#scorebar').css({'animation': 'boxin 0.5s linear 0s', 'animation-fill-mode': 'forwards'});
            if (score < 0) score = 0;
            scoreshow.innerText = String(score);
            clearInterval(cr);
            clearInterval(inputupdate);
            over = true;
            $('#playagain').hover(function() {
                $('#mainmenu').css({'font-size': '0px', 'width': '40px'});
                $('#playagain').css('width', '280px');
            }, function() {
                $('#mainmenu').css({'font-size': '20px', 'width': '160px'});
                $('#playagain').css('width', '160px');
            })
            $('#mainmenu').hover(function() {
                $('#playagain').css({'font-size': '0px', 'width': '40px'});
                $('#mainmenu').css('width', '280px');
            }, function() {
                $('#playagain').css({'font-size': '20px', 'width': '160px'});
                $('#mainmenu').css('width', '160px');
            })
        }
    }, 1)
}

// function to create a block with random color and random word

function createbl() {
    var caw = randomCaW();
    var block = document.createElement("div");
    var blocktext = document.createElement("p");
    block.className = "block";
    block.setAttribute('id', 'block' + String(count+1));
    block.style.backgroundColor = caw[0];
    blocktext.className = "blocktext";
    blocktext.innerText = caw[1];
    blocklist.push(caw[1]);
    block.appendChild(blocktext);
    var block_x = Math.floor(Math.random() * 7.9);
    block.style.left = String(6.25 + 12.5*block_x) + "%";
    var plg = document.getElementById("playground");
    plg.appendChild(block);
}

// function to start an interval to check the number of block on screen
// if there are less than 8 blocks, create until there are 8

function createblock(x) {
    var subtimer = 0;
    cr = setInterval(function() {
        if (subcount < x) {
            if (subtimer == 120) {
                createbl();
                count ++;
                subcount ++;
                subtimer = 0;
            }
        }
        else {
            var bl = document.getElementsByClassName('block');
            bl[0].remove();
            blocklist.shift();
            subcount --;
        }
        subtimer ++;
    }, 10);
}

// if you press the main menu button when the game is over

function mainmenu() {
    document.getElementById("playButton").style.display = "block";
    document.getElementById("guideButton").style.display = "block";
    document.getElementById("optionButton").style.display = "block";
    document.getElementById("playground").style.display = "none";
    document.getElementById("gameover").style.display = "none";
}

/************************************************************************************/
/* main screen */

function guide() {
    if (!mainbuttap) {
        $('#playButton').css('display', 'none');
        $('#optionButton').css('display', 'none');
        $('#guideButton').css('animation', 'mainbut 0.5s 1 both');
        document.getElementById('guidecontent').style.display = "block";
    }
    else {
        $('#playButton').css('display', 'block');
        $('#optionButton').css('display', 'block');
        $('#guideButton').css({'animation-direction': 'reverse', 'animation': ''});
        document.getElementById('guidecontent').style.display = "none";
    }
    mainbuttap = !mainbuttap;
}

function option() {
    if (!mainbuttap) {
        $('#playButton').css('display', 'none');
        $('#guideButton').css('display', 'none');
        $('#optionButton').css('animation', 'mainbut 0.5s 1 both');
        document.getElementById("changebackground").style.display = "block";
        document.getElementById("sound").style.display = "block";
    }
    else {
        $('#playButton').css('display', 'block');
        $('#guideButton').css('display', 'block');
        $('#optionButton').css({'animation-direction': 'reverse', 'animation': ''});
        $('.optionbutton').hide();
        opbuttap = false;
        smbuttap = false;
    }
    mainbuttap = !mainbuttap;
}

function changebackground() {
    if (!opbuttap) {
        document.getElementById("next").style.display = "block";
        document.getElementById("previous").style.display = "block";
    }
    else {
        document.getElementById("next").style.display = "none";
        document.getElementById("previous").style.display = "none";
    }
    opbuttap = !opbuttap;
}

function choosebg(x) {
    if (x == 1) {
        bgnum ++;
        if (bgnum > maxbg) bgnum = 1;
    }
    if (x == -1) {
        bgnum --;
        if (bgnum < 1) bgnum = maxbg;
    }
    document.body.background = ".\\Resources\\Background\\" + String(bgnum) + ".png";
    document.getElementById('blocksound').setAttribute('src', 'Resources/Sound/blocksound' + String(bgnum) +'.mp3');
    document.getElementById('bgmusic').setAttribute('src', 'Resources/Sound/bgmusic' + String(bgnum) +'.mp3');
    document.getElementById('bgmusic').volume = 0.6;
    if (musicon) $('#bgmusic')[0].play();
}

function sound() {
    if (!smbuttap) {
        document.getElementById("soundbut").style.display = "block";
        document.getElementById("musicbut").style.display = "block";
    }
    else {
        document.getElementById("soundbut").style.display = "none";
        document.getElementById("musicbut").style.display = "none";
    }
    smbuttap = !smbuttap;
}

function sandm(x) {
    if (x == 1) {
        soundon = !soundon;
        if (soundon) {
            document.getElementById('soundbut').innerHTML = "SOUND: ON";
            document.getElementById('blocksound').volume = 1.0;
            document.getElementById('buttonhover').volume = 1.0;
            document.getElementById('buttonclick').volume = 1.0;
        }
        else {
            document.getElementById('soundbut').innerHTML = "SOUND: OFF";
            document.getElementById('blocksound').volume = 0;
            document.getElementById('buttonhover').volume = 0;
            document.getElementById('buttonclick').volume = 0;
        }
    }
    if (x == -1) {
        musicon = !musicon;
        if (musicon) {
            document.getElementById('musicbut').innerHTML = "MUSIC: ON";
            document.getElementById('bgmusic').volume = 0.6;
            $('#bgmusic')[0].play();
        }
        else {
            document.getElementById('musicbut').innerHTML = "MUSIC: OFF";
            document.getElementById('bgmusic').volume = 0;
        }
    }
}

/************************************************************************************/
/* sound and music */

$(document).ready(function() {
    $('.mainbutton').hover(function() {
        $('#buttonhover')[0].play();
    });
    $('.optionbutton').hover(function() {
        $('#buttonhover')[0].play();
    });
    $('.langbut').hover(function() {
        $('#buttonhover')[0].play();
    });
    $('.gameoverbutton').hover(function() {
        $('#buttonhover')[0].play();
    });

    $('.mainbutton').click(function() {
        $('#buttonclick')[0].play();
    });
    $('.optionbutton').click(function() {
        $('#buttonclick')[0].play();
    });
    $('.langbut').click(function() {
        $('#buttonclick')[0].play();
    });
    $('.gameoverbutton').click(function() {
        $('#buttonclick')[0].play();
    });
});