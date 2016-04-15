// JavaScript File

function Quote() {
	
	
	
	var irisquotes =["When you don't dress like everyone else, you don't have to think like everyone else.", "If you make a mistake in what you put together, the fashion police are not going to haul you into jail.", "I don't see anything so wrong with a wrinkle. It's kind of a badge of courage", "Fashion you can buy, but style you possess.", "To lead the good life in New York, the two most important things for a woman are a chauffeur and a fur-lined raincoat.", "I don't expect to find inspiration. It just sort of comes.", "If your hair is done properly and you are wearing good shoes, you can get away with anything.", "There's no how-to roadmap to style. It's about self-expression and, above all, attitude.", "I don't dress to be stared at. I dress for myself.", "If you're not interested, you're not interesting.", "You have to try it. You only have one trip, you've got to remember that."];
	var randomirisquote = irisquotes[Math.round(Math.random()*(irisquotes.length-1))];
	document.getElementById('quotes').innerHTML = '<div>' + " " +  randomirisquote + " "  + '</div>';
}
