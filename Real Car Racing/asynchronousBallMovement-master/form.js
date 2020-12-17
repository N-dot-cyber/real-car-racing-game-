class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greeting=createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title= createElement('h2');
        title.html("Car Racing Game");
        title.position(485,0);
        this.input.position(450,200)
        this.button.position(470,300)
       

       this.button.mousePressed(()=>{
           this.input.hide();
            this.button.hide();
           player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update(name);
            player.updateCount(playerCount);
            this.greeting.html("hello "+player.name);
            this.greeting.position(480,200);
        })
    }
}