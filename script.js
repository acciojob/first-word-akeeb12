function firstWord(s) {
  // your code here
	if (s == null || s.length() == 0)
	{
		return "";
	}

	string word = "";

	for (let i = 0; i < s.length; i++) {
		if(s.charAt() != "")
		{
			word = word + s.charAt(i);
		}else
		{
			break;
		}
	}

	return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));


