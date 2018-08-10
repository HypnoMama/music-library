class Library {
    constructor(name, creator) {
    this.name = name,
    this.creator = creator
    this.playlists = []
    }

    addPlaylist(Playlist) {
        this.playlists.push(Playlist)
    }

    displayPlaylistNames(){
        let names = ''
        this.playlists.forEach((playlist) => {
            names += playlist['name'] + ' '
        })
        return names
    }

  

}    

class Playlist  {
    constructor(name) {
        this.name = name
        this.tracks = [];
    }

    addTrack(track) {
        this.tracks.push(track);
        return this.tracks
    }

    overallRating() {
        const ratings = [];
        function getSum(num){
            let total = 0;
            total += num
        }
        this.tracks.forEach((track) => {
        ratings.push(track['rating']);        
        })
        
        return (ratings.reduce((a, b) => a + b))/this.tracks.length;       
    }


    totalDuration(){
        const lengthTracks = [];
        this.tracks.forEach((track) => {
            lengthTracks.push(track['length']);
        })
        
        const minutes = (lengthTracks.reduce((a, b) => a + b))/60;
        
        const mins = Math.floor(minutes);
        if (mins < 60 ) {
            const secs = Math.floor((minutes - mins) * 60);
            return `${mins}:${secs}`;
        } else {
            const hoursMins = minutes/60;
            const hours = Math.floor(hoursMins);
            const minutes2 = hoursMins - hours;
            const minSecs = minutes2 * 60;
            const minsInTrack = Math.floor(minSecs);
            const secs = Math.floor((minSecs - minsInTrack)*60);
                if (minsInTrack < 10){
                    return `${hours}:0${minsInTrack}:${secs}`;
                } else {
                    return `${hours}:${minsInTrack}:${secs}`;
                }
            
        }
 
    }

    displayTrackNames() {
        let results = ''
       this.tracks.forEach((track) => {
           results += track['title'] + ', '
       })
        return results
    }

}





class Track {
    constructor(title, rating, length) {
        //string, int 1-5, seconds
        this.title = title,
        this.rating = rating,
        this.length = length
        this.info = {artist: '', album: '', comments: ''}
    }

    addInfo(artist, album, comments) {
        this.info.comments = comments = comments || null;
        this.info.artist = artist;
        this.info.album = album
    }

    getInfo(){        
        return this.info
    }

}


//so we want to add instances of tracks to the tracks
//each track is a song

//Creating tracks to add to Playlist
const believer = new Track('Believer', 5, 203)
const goToWar = new Track('Go To War', 4, 245)
const thunderRollsNew = new Track('The Thunder Rolls', 5, 302)
const rx = new Track('Rx', 5, 233)
const jekyllHyde = new Track('Jekyll and Hyde', 5, 300)
const straightOutOfLine = new Track('Straight Out of Line', 5, 259)
const imNotJesus = new Track("I\m not Jesus", 5, 216)
const wakingLions = new Track('Waking Lions', 5, 233);
const hereticAnthem = new Track('The Heretic Anthem', 4, 259)
const goneAway5 = new Track('Gone Away', 5, 268)
const aloneInARoom = new Track('Alone in a Room', 4, 241)
const bulletProof = new Track('BulletProof', 5, 177)
const bloodWater = new Track('Blood // Water', 5, 217)
const wrongSideOfHeaven = new Track('Wrong Side of Heaven', 4, 271 )
const blackHoney = new Track("Black Honey", 4, 229);
const redColdRiver = new Track("Red Cold River", 4, 203);
const zombieW = new Track("Zombie", 5, 255)
const showMeHowToLive = new Track("Show Me How To Live", 5, 277)


//adding further info to tracks
believer.addInfo('Imagine Dragons', 'Evolve', 'Fab song, kids love it too');
thunderRollsNew.addInfo('All That Remains', 'Madness')
rx.addInfo('Theory of a Deadman', 'Wake Up Call', 'love this song!!')
jekyllHyde.addInfo('Five Finger Death Punch', 'Got Your Six', "BEST SONG EVER!!!")
straightOutOfLine.addInfo('Godsmack', 'Faceless', 'Awesome')
imNotJesus.addInfo('Apocalyptica', 'Worlds Collide', "love it")
wakingLions.addInfo('Pop Evil', 'Waking Lions', "great confidence song")
hereticAnthem.addInfo('SlipKnot', 'Iowa', "love the anti-Christian theme!!!")


//Create Playlist
const rockList = new Playlist('rockList')


//add tracks to playlist 'rockList'
rockList.addTrack(believer)
rockList.addTrack(thunderRollsNew)
rockList.addTrack(goToWar)
rockList.addTrack(rx)
rockList.addTrack(jekyllHyde)
rockList.addTrack(straightOutOfLine)
rockList.addTrack(imNotJesus)
rockList.addTrack(hereticAnthem)
rockList.addTrack(goneAway5)
rockList.addTrack(aloneInARoom)
rockList.addTrack(bulletProof);
rockList.addTrack(wrongSideOfHeaven)
rockList.addTrack(blackHoney)
rockList.addTrack(redColdRiver)
rockList.addTrack(zombieW)
rockList.addTrack(showMeHowToLive)

//create Library

const myLibrary = new Library("My Rock Library", 'Sarah')

//add 'rockList' to Library
myLibrary.addPlaylist(rockList);



console.log(myLibrary)

console.log(rockList.totalDuration())
console.log(myLibrary.displayPlaylistNames())
console.log(rockList)
// console.log(rockList.displayTrack('Show Me How To Live'))

console.log(rockList.displayTrackNames())

console.log(believer.getInfo())