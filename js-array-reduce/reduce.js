function extractValue(arr, key) {
	return (arr.reduce( (vals, nextVal)=> {
		vals.push(nextVal[key])
		return vals;
	}, []) );
	 
}

function vowelCount(str) {
	let vowels = "aeiou"
	return str.split("").reduce((acc,next)=>{
		next.toLowerCase();
		if(vowels.indexOf(next) !== -1){
			if(acc[next])
			{
				 acc[next]++;
			}
			else   acc[next]= 1;
		}
		
		return acc;
	}, {})
}


function addKeyAndValue(arr, key, value) {
	return arr.reduce((acc, next)=>{
		next[key]= value;
		acc.push(next)
		return acc;
	}, [])
	
}


function partition(arr, callback) {

	return arr.reduce((acc,next)=>{
		if(callback(next)){
			acc[0].push(next)
			return acc 
		}
		else {
			acc[1].push(next)
			return acc 
		}
	},[[],[]])
}
