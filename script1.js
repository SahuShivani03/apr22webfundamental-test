alert('Hello');

//1- In how many types can we create functions? State the  difference between those types bygiving examples*
//Question 1: In how many types can we create functions?    State the difference between those types by giving examples

//Answer : 

// //There are 3 ways of writing a function in JavaScript:

//     1. Function Declaration
//     2. Function Expression
//     3. Arrow Function

//  1. Function Declaration
//         It is the traditional way to define a function. It is somehow similar to the way we define a function in other programming languages. We start declaring using the keyword “function”. Then we write the function name and then parameters.
//         After defining a function, we call it whenever the function is required.
//             Eg : 
                    // // Function declaration
                    // function variableName() {
                    //     //code body
                    // }
                    // // Calling function
                    // variableName();

//  2. Function Expression
//         Such functions define a function using a variable and store the returned value in that variable.
//         Here, the whole function is an expression and the returned value is stored in the variable. We use the variable name to call the function.
//             Eg : 
// let  variableName = function (){
//     //codebody
//     }
// variableName()

//  3. Arrow Function  
//         Such functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code. Here we do not use the “function” keyword and use the arrow symbol.
//         This shortens the code to a single line compared to other approaches. In a single line of code, the function returns implicitly.
//             Eg : 
                    // Single line of code
                //    let addition =1;
                //     let addtion = (a, b) => a + b;
                    
                //     console.log(addition(3, 2));

                    
                //     // Multiple line of code
                //     const great = (a, b) => {
                //         if (a > b)
                //             return "a is greater";
                //         else
                //             return "b is greater";
                //     }
                    
                //     console.log(great(3,5));
                    


// In 4 type we can create functions
//    1. Function with no arguments and no return value
//    2. Function with no arguments and a return value
//    3. Function with arguments and no return value
//    4. Function with arguments and a return value


//  1. Function with no arguments and no return value : 
//         Such functions can either be used to display information or they are completely dependent on user inputs.
//             Eg : 
// function CheckBrowser()  // function definition
//                     {
//                         if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Opera]';
//                             console.log(msg);
//                          } 
//                         else if(navigator.userAgent.indexOf("Safari") != -1) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Safari]';
//                             console.log(msg);
//                          } 
//                         else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Internet Explorer]';
//                             console.log(msg);
//                          } 
//                         else if(navigator.userAgent.indexOf("Chrome") != -1  || navigator.userAgent.indexOf("Firefox") != -1) 
//                          {
//                               console.log('continue your work');
//                          }
//                         else 
//                          {
//                             console.log('Unknown');
//                          }
//                     }
                 
                //  CheckBrowser() //function call


//  2. Function with no arguments and a return value :
//         Such functions will get the result from function which will use user input or system data.
//             Eg :
            //  function CheckBrowser()  // function definition
            //         {
            //             if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
            //              {
            //                 let msg = 'Please open this site in chrome or firefox [you opened in Opera]';
            //                 return msg;
            //              } 
            //             else if(navigator.userAgent.indexOf("Safari") != -1) 
            //              {
            //                 let msg = 'Please open this site in chrome or firefox [you opened in Safari]';
            //                 return msg;
            //              } 
            //             else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) 
            //              {
            //                 let msg = 'Please open this site in chrome or firefox [you opened in Internet Explorer]';
            //                 return msg;
            //              } 
            //             else if(navigator.userAgent.indexOf("Chrome") != -1  || navigator.userAgent.indexOf("Firefox") != -1) 
            //              {
            //                  return 'continue your work';
            //              }
            //             else 
            //              {
            //                 return 'Unknown';
            //              }
            //         }
                
            //     function buttonclick()
            //     {
            //       let browsermsg =   CheckBrowser() //function call
            //       if(browsermsg == 'continue your work') 
            //       {
            //           submitform();
            //       }
            //       else
            //       {
            //           alert(browsermsg);
            //       }
            //     }


//  3. Function with arguments and no return value :
//         Such functions will give arguments, but it will not be returning anything.
//             Eg :
//              function CheckBrowser(useragent)  // function definition
//                     {
//                         if((useragent.indexOf("Opera") || useragent.indexOf('OPR')) != -1 ) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Opera]';
//                             console.log(msg);
//                          } 
//                         else if(useragent.indexOf("Safari") != -1) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Safari]';
//                             console.log(msg);
//                          } 
//                         else if((useragent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Internet Explorer]';
//                             console.log(msg);
//                          } 
//                         else if(useragent.indexOf("Chrome") != -1  || useragent.indexOf("Firefox") != -1) 
//                          {
//                               console.log('continue your work');
//                          }
//                         else 
//                          {
//                             console.log('Unknown');
//                          }
//                     }
                 
//                  CheckBrowser(navigator.userAgent) //function call

// //  4. Function with arguments and a return value :
// //         This is the best type, as this makes the function completely independent of inputs and outputs, and only the logic is defined inside the function body.
// //             Eg :
//             function CheckBrowser(useragent)  // function definition
//                     {
//                         if((useragent.indexOf("Opera") || useragent.indexOf('OPR')) != -1 ) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Opera]';
//                             return (msg);
//                          } 
//                         else if(useragent.indexOf("Safari") != -1) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Safari]';
//                             return (msg);
//                          } 
//                         else if((useragent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) 
//                          {
//                             let msg = 'Please open this site in chrome or firefox [you opened in Internet Explorer]';
//                             return (msg);
//                          } 
//                         else if(useragent.indexOf("Chrome") != -1  || useragent.indexOf("Firefox") != -1) 
//                          {
//                               return ('continue your work');
//                          }
//                         else 
//                          {
//                             return ('Unknown');
//                          }
//                     }
                
//                 function buttonclick()
//                 {
//                   let browsermsg =   CheckBrowser(navigator.userAgent) //function call
//                   if(browsermsg == 'continue your work') 
//                   {
//                       submitform();
//                   }
//                   else
//                   {
//                       alert(browsermsg);
//                   }
//                 }




























