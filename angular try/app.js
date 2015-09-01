angular.module('myapp',[])
		.controller('SimpleController', function(){
			var dirList = this;
            dirList.toggle=false;
			//console.log("aaa");
			dirList.customers=[
		  		{firstname:'rajan',country:'India',age:22,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_1_0001.jpg'},
		  		{firstname:'konar',country:'UAE',age:35,img:'http://www.ufunk.net/wp-content/uploads/2011/11/8-bit-pixelated-heroes-14.jpg'},
		  		{firstname:'raja',country:'USA',age:30,img:'http://www.ufunk.net/wp-content/uploads/2011/11/8-bit-pixelated-heroes-10.jpg'},
		  		{firstname:'raj',country:'UK',age:33,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_1_0001.jpg'},
		  		{firstname:'ravi',country:'India',age:30,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_1_0001.jpg'},
		  		{firstname:'sarfaraz',country:'India',age:30,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_3_0001.jpg'},
		  		{firstname:'satish',country:'India',age:34,img:'http://www.ufunk.net/wp-content/uploads/2011/11/8-bit-pixelated-heroes-10.jpg'},
		  		{firstname:'ranjit',country:'India',age:30,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_1_0001.jpg'},
		  		{firstname:'ashish',country:'Canada',age:36,img:'http://www.ufunk.net/wp-content/uploads/2011/11/8-bit-pixelated-heroes-10.jpg'},
		  		{firstname:'shanu',country:'Brazil',age:37,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_1_0001.jpg'},
		  		{firstname:'muzzu',country:'Norway',age:20,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_1_0001.jpg'},
		  		{firstname:'vijay',country:'India',age:24,img:'http://www.ufunk.net/wp-content/uploads/2011/11/8-bit-pixelated-heroes-10.jpg'},
		  		{firstname:'vinay',country:'India',age:30,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_3_0001.jpg'},
		  		{firstname:'abhas',country:'Iran',age:30,img:'http://www.ufunk.net/wp-content/uploads/2011/11/8-bit-pixelated-heroes-10.jpg'},
		  		{firstname:'raju',country:'India',age:20,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_1_0001.jpg'},
		  		{firstname:'amol',country:'South Africa',age:30,img:'http://gadgetsin.com/uploads/2011/11/8_bit_superheroes_3_0001.jpg'}
	  		];
	  		dirList.AddPersons = function(){
	  			if(dirList.enterName!=null && dirList.enterCountry!=null && dirList.enterAge!=null){
		  			dirList.customers.push({firstname:dirList.enterName,country:dirList.enterCountry,age:dirList.enterAge});
		  			dirList.enterName=null;
		  			dirList.enterCountry=null;
                    dirList.enterAge=null;
		  		}
		  		else{
		  			alert("Enter all the fields!");
		  		}
		  	}
		});