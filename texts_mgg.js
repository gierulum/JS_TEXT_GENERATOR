
var cases = ['solutions', 'ideas', 'system'];
var casemove = document.getElementById('fliper');
var words = ['Business', 'Life', 'Development', 'IT'];
var words_count = words.length;
var wordframe = document.getElementById('txtgenjs');
var timer = document.getElementById('timetoken');
var interval = 0;
var t = 0;
var w_num = 0;
var fraze = 0;
var func_move;
var y = 0;
var full_word = '';
var act_word = '';
var word_parts = '';
var pause = 0;
var mouseclick;
var casenum = 0;
var cm = 0;
var o = 1;
var ss = 'A';

var resetRun = function(){
	casemove.classList.remove('flipermove');
}

document.getElementById('fliper').onclick = clickcount;

function clickcount(){
	var a = cases.length;
	if (a-1 > mouseclick){
		mouseclick++;	
	} else {
		mouseclick = 0;		
	}
	
	clicker(mouseclick);
	
	
}


function hidecase(id_class_var) {
	var timer_cm = setInterval(function(){
	if(cm <= -150){
				clearInterval(timer_cm);
				cm = 150;
				o = 0;
				
				
				
				id_class_var.textContent = cases[mouseclick];
			} else {
			o -= 0.1;	
			cm -=10;
			if (o < 0) { o = 0}
			id_class_var.style.opacity=o;
			id_class_var.style.transform = "translate3d(0," + cm + "%,0)";
			id_class_var.style.webkitTransform = "translate3d(0," + cm + "%,0)";
			}
	},40)
}

function unhidecase(id_class_var) {
	var timer_cm = setInterval(function(){
		if (cm > 0) {
			o += 0.1;	
			cm -=10;
			id_class_var.style.opacity=o;
			id_class_var.style.transform = "translate3d(0," + cm + "%,0)";
			id_class_var.style.webkitTransform = "translate3d(0," + cm + "%,0)";
			}
	},40)
}





function clicker(casenum){
		casemove.classList.add('flipermove');
		
		hidecase(casemove);
		//casemove.textContent 
		//casemove = cases[mouseclick];
		unhidecase(casemove);
		
		setTimeout(resetRun, 2000);
}


function para_symb(){
setInterval(function(){
y++;
}, 50);

if(y % 2){
return '|' ;//timer.innerHTML = "|";
}else {
return ' ' ;//timer.innerHTML = "";
}
}


function timerun(){
var word_num;
var char_num;

setInterval(function(){
t++;
text_gen(t);
timer.innerHTML = para_symb();
}, 150);
}


function text_gen(o){

//starting position:
if (act_word == ''){
    word_num = 0;
	pause = 10;
    act_word = words[word_num];
    full_word = act_word;
    char_num = 0;
    func_move = 'A';
} else if (char_num == 0 && func_move == 'R'){

//if last word on list - take zero number:	
	if (words_count == word_num+1){
		word_num = 0;		
	} else {
		word_num++;	
	}

//get word of current word from list:
	act_word = words[word_num];
	full_word = act_word;
	
//on each word generate default pause = 10;
	pause = 10;
}

    if (func_move == 'A'){
    
    word_parts = word_parts + full_word.substr(char_num, 1);
    char_num++;
    } else if (func_move == 'R'){
    
    word_parts = word_parts.substr(0, char_num); 
    
    }

//analyse side of move for function: remove characters or add;

        if (char_num == full_word.length && pause > 0) {
			pause--;
			func_move = 'P';

			
		} else if (char_num == full_word.length && func_move == 'P') {
            func_move = 'R';
    
		} else if (char_num == full_word.length && pause == 0) {
			
 		
		} else if (char_num == 0){
            func_move = 'A';
   
        }
			
		
		if (func_move == 'R') {
			char_num--;
		}
		
    wordframe.innerHTML = word_parts; 
}

timerun();
