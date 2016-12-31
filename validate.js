function validate(form)
{
	var name= form.elements.namedItem("fullname");
	var password = form.elements.namedItem("password");
	var age= form.elements.namedItem("age");
	var email=form.elements.namedItem("email");
	var phone=form.elements.namedItem("phone");
	var check=true;
	for(var i=0; i<form.elements.length-1;i++) //check for empty 
	{
    	if(form.elements[i].value == "")
		{
			form.elements[i].style.borderColor = "red";
			form.elements[i].placeholder = "Fill this field";
			check = false;
		}

    	else
		{
			form.elements[i].style.borderColor = "";
			form.elements[i].placeholder = "";
		}
	}
	
	
	if((isNaN(Number(age.value))) || (Number(age.value)>100)) //check wheather age is valid or not
	{
		age.style.borderColor = "red";
		age.value = age.value + "[not Valid]";
		check = false;
	}
	
	if(isNaN(Number(phone.value))) //checking validy of phone number
	{
		phone.style.borderColor = "red";
		phone.value = phone.value + "[not value";
		check = false;
	}
	
	if(name.value.match(/[^A-Za-z\s]/))
	{
	    name.style.borderColor = "red";
	    name.value = name.value + "[not valid]"
	}
	
	for(var i=0; i<5;i++) //removing red color of form elements
	{
		if(check)
		{
			form.elements[i].style.borderColor = "";
			form.elements[i].placeholder = "";
		}
	}
	return check;
    
}
