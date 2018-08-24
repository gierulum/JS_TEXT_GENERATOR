//my topic to create script - working close to >> https://www.youtube.com/watch?v=E1vRTPgLydc

var left_img = document.getElementById('shuffle_field');

//password:

var symbols = ["D","A","F","T","C","O","D","E" ];

var symbols_length = symbols.length;

var doc_params_nums = [1,2,3,4,5,6,7,8];

var doc_param_succes = [0,0,0,0,0,0,0,0];

var doc_par_s;

var func_fin =0;

var span_num;

var all_stuff;

var length_doc_params = doc_params_nums.length;

var number;

var checker = 0;

var id_name;

var span_num;

var letter_space =0;

var letter_spac;


 

function doc_param_get(){

             

                                                               setInterval(function(){

                letter_spac = document.getElementById('shuffle_p');

                letter_space = letter_space +  0.1;

                letter_spac.style.letterSpacing =  letter_space + 'px';

                                                                               span_num = random_span();

                                                              

                                                               if (doc_param_succes[span_num] == 0){

                                                                               doc_param_change(span_num);            

                                                                               console.log(span_num);

                                                               }

                                                               else if (doc_param_succes[span_num] == 1 && func_fin !== 0){

                                                                               while (doc_param_succes[span_num] == 1){

                                                                                              span_num = random_span();

                                                                               }

                                                               }

                                                              

                //console.log(span_num);        

                

                }, 50);

}

 


 

function doc_param_change(span_n){

 

                doc_par_s = doc_param_succes[span_n];

 

                checker = random_number();

 

                if(checker == 9 && doc_par_s == 0){

                               id_name = span_n;

                               var change_attr = document.getElementById( id_name );

                               change_attr.innerHTML = symbols[span_n];

                               doc_param_succes[span_n] = 1;

             

                all_stuff = '';

                for (o=0; o < doc_param_succes.length; o++){

                               all_stuff = all_stuff + doc_param_succes[o];

 

                }

                if (all_stuff == "11111111"){

                               func_fin = 1;

                                                                                                                 letter_spac.style.letterSpacing =  0 + 'px';

                                                                                                                 letter_space = 0;

                //chancge func_fin to = 1 if want to run function all the time                              

 

                }

                } else if (doc_par_s == 1){

                         

 

                             

 

                } else if (checker < 9){

                               id_name = span_n;

                               var change_attr = document.getElementById( id_name );

                               change_attr.innerHTML = checker;

 

                } else {

 

                }

}

 


 

                function random_number(){

                               number = Math.floor(Math.random() * (symbols_length+2));

                               return number;

                               }

                             

 

                function random_span(){          

 

                            var random_span_num;//= Math.floor(Math.random() * (symbols_length));

                            var sss = 0;  

                            

                            //var table_val;              

                            

                            //do {

                           

                                                          random_span_num = Math.floor(Math.random() * (symbols_length));

                              sss = doc_param_succes[random_span_num];

                              //console.log(random_span_num);

                              //console.log(sss);   

                            //}                    

                               //while(sss != 0)  //&& all_stuff != "11111111"){

                            

 

 

 

                               //table_val = doc_param_succes[random_span_num];

 

 

                             

 

                             

 

 

                                               if (func_fin == 1){

                                                               func_fin = 0;

                                                               for (w = 0; w < doc_param_succes.length; w ++){

                                                                               doc_param_succes[w] = 0;

                                                                               var change_attr = document.getElementById( w );

                                                                               change_attr.innerHTML = 0;

                                               }

 

                               }

 

                                               else if (doc_param_succes[random_span_num] == 1){

                                                               random_span_num = random_span_num; //Math.floor(Math.random() * (symbols_length-1)+1);

                                               } else {

                                                               random_span_num = random_span_num;

 

                                                               }

 

                                               random_span_num = random_span_num;

                                               return random_span_num;

                }

