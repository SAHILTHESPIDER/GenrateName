

var firstName =[
   "sahil","abhshiek","pinki","Arjun","Aum"," Ishan","Krish","Moksh","Nitin","Parin","Rishi","Shankar",
   "Veer","surya","rohan","Aarya","Divya","Jaya","Lavanya","Kimaya","Saumya","Satya"," Zoya"   
];
var lastName =[
   "Gupta","Shani","Sheety","Singh","ram","Khattar","Kumar", "Lal","Sharma","Shan","Patel","Verma",
   "Malhotra","Roy","Chaudhary","Charan",
];
function getName()
{
   var randomName= firstName[Math.floor(Math.random()*firstName.length)]+''+lastName[Math.floor(Math.random()*lastName.length)];
   return randomName;
}
function nameQty()
{
   var userQty=document.querySelector('.qty').value;
   document.querySelector('.namelist').innerHTML='';
 
   if(userQty>10)
   {
      document.querySelector('.namelist').innerHTML='You can only genrate only 10 names';
   }
   else
   {
      for(var i=0 ; i<userQty;i++)
      {
      document.querySelector('.namelist').innerHTML += getName() +'<br>';
   }
   }
}
