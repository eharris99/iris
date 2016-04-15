// JavaScript File

function Quote() {
	
	
	
	var irisquotes =["When you don't dress like everyone else, you don't have to think like everyone else.", "If you make a mistake in what you put together, the fashion police are not going to haul you into jail.", "I don't see anything so wrong with a wrinkle. It's kind of a badge of courage", "Fashion you can buy, but style you possess."];
	var randomirisquote = irisquotes[Math.round(Math.random()*(irisquotes.length-1))];
	document.getElementById('quotes').innerHTML = '<div>' + " " +  randomirisquote + " "  + '</div>';
}
