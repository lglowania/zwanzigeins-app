import NumberGame from './number-game.js'

export default class ListenAndWriteGame extends NumberGame{
	
	constructor(sound, pages){
		super(sound, pages, 'listenAndWrite', 'listenAndWriteGame');
		
		this.options = {
		    from : 1,
		    to : 100,
		    numTasks : 10,
		    fullscreen : false
		};
	}
	
	putNewTask() {
		
		let random = this.getRandomNumber(this.options.from, this.options.to);
		
		this.sound.playInteger(random);
        this.rightResult = random;
        this.taskElem.innerHTML = random;
		
	    this.styleGoodAnswer();
	    this.tasksPut++;
		
	}
	
	startGame(){
				
		window.location.hash = 'listenAndWriteGame';
		
		this.wrongAnswerOccured = false;
	    this.gameStartTimeStamp = new Date();
	    this.tasksPut = 0;

	    this.answerElem.innerHTML = "";
	    this.putNewTask();		
	}
	
}
