//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTvShows{
  constructor(title, genre, rating, numOfEp){
    this.title = title
    this.genre = genre
    this.rating = rating
    this.numOfEp = numOfEp
  }

    play(){
      console.log("Playing..")
    }

    stop(){
      console.log("Stopping")
    }
    saveToList(){
      console.log("Saved to List")
    }
}

let colonialShow = new MakeNetflixTvShows("Colonial", "stupid", "Nostalaga", "againStupid", 20)
