console.log('hello');
//create nav array
var garageNav=[
  home={
  title: 'Welcome to the home page',
  firstThing:{Heading:'first subheading',content:'some awesome content'},
  secondThing:{Heading:'first subheading',content:'some awesome content'}
  },//home
about={
  title: 'Welcome to the about page',
  firstThing:{Heading:'first subheading',content:'some awesome content'},
  secondThing:{Heading:'first subheading',content:'some awesome content'}
  },//about
contact={
  title: 'Welcome to the contact page',
  firstThing:{Heading:'first subheading',content:'some awesome content'},
  secondThing:{Heading:'first subheading',content:'some awesome content'}
  }//contact
];//garageNav


console.log(garageNav);
//create an object for each page

//onclick function that stages info for concat
      //nav first
$('#home').on('click',function(){});
$('#about').on('click',function(){});
$('#contact').on('click',function(){});



//concat info to dom


$('document').ready(function() {
  console.log('in doc ready');
  $('#butt').on('click', function(){

   var car=  {
   year:$('#year').val(),
   make:$('#make').val(),
   model:$('#model').val(),
   pic:$('#pic').val()
};//car
garage.push(car);
  console.log(garage);






    });//end onclick



});//end document.ready
