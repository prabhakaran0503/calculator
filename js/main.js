 var a=parseInt(prompt("Enter First Valu"));
 var operator=prompt("Enter The Operator");
 var b=parseInt(prompt("Enter THe Second Valu"));
 var c;
 switch(operator)
 {
	case"+":
		c=a+b;
		document.write(c);
		break;
	case"-":
		c=a-b;
		document.write(c);
		break;	
	case"*":
		c=a*b;
		document.write(c);
		break;	
	case"%":
		c=a%b;
		document.write(c);
		break;
		case"/":
		c=a/b;
		document.write(c);
		break;
	default:
		break;
}