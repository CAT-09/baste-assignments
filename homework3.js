/**Ashraf Rizk Menya
 * 
 * A definition for a function named tests that takes two parameters which
 * return the larger value between the two
 * 
 * 
 */

 function tests(test1,test2)
 {
 let greater = test1>test1?test1:test2
 return greater

 /**
  * A definition for a function named coursework that takes one parameter and also
  * function tests anlso invokes the parameters cs and the result of the test function
  *
  * 
  * 
 */
  function coursework(cswork)
  {
  let coursework = cswork + tests(80,80)
  
  console.log(coursework)
 return coursework
 
  }
 /**T
  * A defiition of a funtion named avg which takes the parameter a and invokes
   thecorsework function and returns the result as the division with the parameter
  * a 
  * 
  * 
 */
 function avg(a)
 {
 let avg =coursework(90)/a
 return avg
 
 }
 
 /**
  * A definition of a function named coursework that takes one parameter and invokes
   the avg function and returns the results as the product of the avg function and
   the parameter a divided by 100
  * 
 */
 function crsmark(a)
 {
 let exm = avg(2)*(a/100)
  return exm 
 }
 
 function exam(a)
 {
 let fexam = (60/100)*a
 return fexam
 
 }
 /**A definition of a function named final that takes no parameters and invokes the
   function exam and coursework,

  * returns the summattionmof the exam and cousrework functions with their parameters 
   respectively
  * 
 */
 function fnal()
 {
 let fmark = exam(75)+crsmark(40)
 console.log(fmark)
 
 }
 fnal()