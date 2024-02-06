class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(){
    return "The rating is " +this.rating;    
}
}
    var moviename = new movie("Casino Royale","Eon Productions","PG13");

    console.log(moviename);
    console.log(moviename.getPG());
