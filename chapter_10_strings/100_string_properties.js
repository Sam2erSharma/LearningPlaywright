//String Properties & Basic Access

let str = "Hello, World!";

//Length property
console.log(str.length);//13

//Accessing characters or by Index
console.log(str[0]);//H
console.log(str[1]);//e
console.log(str[2]);//l
console.log(str[3]);//l
console.log(str[4]);//o
console.log(str[5]);//,
console.log(str[6]);// 
console.log(str[7]);//W
console.log(str[8]);//o
console.log(str[9]);//r
console.log(str[10]);//l
console.log(str[11]);//d
console.log(str[12]);//!
console.log(str[13]);//undefined
console.log(str.at[-5]);//o //at() method is used to access characters from the end of the string

//Accessing characters using charAt()
//charAt() method returns the character at the specified index
console.log(str.charAt(0));//H
console.log(str.charAt(1));//e
console.log(str.charAt(2));//l
console.log(str.charAt(3));//l
console.log(str.charAt(4));//o
console.log(str.charAt(5));//,
console.log(str.charAt(6));// 
console.log(str.charAt(7));//W
console.log(str.charAt(8));//o
console.log(str.charAt(9));//r
console.log(str.charAt(10));//l
console.log(str.charAt(11));//d
console.log(str.charAt(12));//!
console.log(str.charAt(13));//undefined

//charCodeAt() method returns the Unicode value of the character at the specified index
console.log(str.charCodeAt(0));//72
console.log(str.charCodeAt(1));//101
console.log(str.charCodeAt(2));//108
console.log(str.charCodeAt(3));//108
console.log(str.charCodeAt(4));//111
console.log(str.charCodeAt(5));//44
console.log(str.charCodeAt(6));//32
console.log(str.charCodeAt(7));//87
console.log(str.charCodeAt(8));//111
console.log(str.charCodeAt(9));//114
console.log(str.charCodeAt(10));//108
console.log(str.charCodeAt(11));//100
console.log(str.charCodeAt(12));//33
console.log(str.charCodeAt(13));//NaN