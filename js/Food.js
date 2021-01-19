class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed=null;
        this.image=loadImage('Images/Milk.png')
       
    }
    getFoodStock(){
       return this.foodStock;
    }
    setFoodStock(foodStock){
       this.foodStock=foodStock;
    }
    
    getLastFed(){
        var option;
        if(this.lastFed<12)
           return this.lastFed + " a.m.";
        else
            return (this.lastFed%12) + " p.m"

        //return this.lastFed;
    }
    setLastFed(lastFedTime){
        this.lastFed= lastFedTime;
    }
    deductFoodStock(){
        if(this.foodStock>0){
           
            this.foodStock=this.foodStock-1;
            
        }
    }
    addFoodStock(){
        this.foodStock = this.foodStock +1;
    }
    display(){
        var posy=120;
        var posx=50
        for(var i=1;i<=this.foodStock;i++){
            image (this.image,posx,posy,50,50);
           
            posx += 50;  //to arrange the milk bottles on different x position.
            if(i%10 === 0){   //to arrange ten bottles each in a row.
                posy += 50;
                posx = 50; 
            }         
        }
        
        
    }
}