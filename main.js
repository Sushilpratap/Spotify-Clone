console.log('welcome to spotify');
//Initialisation of Variables
let audioElement= new Audio('songs/1.mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let song=[
    {  songName:"salam-e-ishq" , filePath:"songs/1.mp3" ,  coverPath:"covers/1.jpg"  },
    {  songName:"Bhula-dena-Mujhe" , filePath:"songs/2.mp3" ,  coverPath:"covers/2.jpg"  },
    {  songName:"Dekha-tujhe-to jana sanam" , filePath:"songs/3.mp3" ,  coverPath:"covers/3.jpg"  },
    {  songName:"Tum hamare ho " , filePath:"songs/4.mp3" ,  coverPath:"covers/4.jpg"  },
    {  songName:"Raho me unse mulakat" , filePath:"songs/5.mp3" ,  coverPath:"covers/5.jpg"  },
    {  songName:"Raghupati Raghav raja Ram" , filePath:"songs/6.mp3" ,  coverPath:"covers/6.jpg"  },
    {  songName:"Let me Love you" , filePath:"songs/7.mp3" ,  coverPath:"covers/7.jpg"  },
    {  songName:"Rab ne bna di jodi" , filePath:"songs/8.mp3" ,  coverPath:"covers/8.jpg"  },
    {  songName:"Sikawa nhi kisi se" , filePath:"songs/9.mp3" ,  coverPath:"covers/9.jpg"  },
    {  songName:"Kya mausam aaya hai" , filePath:"songs/10.mp3" ,  coverPath:"covers/10.jpg"  },
]

// audioElement.play();
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=song[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML=song[i].songName;

    })

//Handle Play and Pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration) *100);
    // console.log(progress);
    myProgressBar.value=progress;
})
 myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
 })
 const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove( 'fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
 }
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) =>{
        console.log(e.target);//will give the target on where clicked is performed.
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove( 'fa-play-circle');
        e.target.classList.add( 'fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;//6.mp3';
        masterSongName.innerText=song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
 })
 document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 })
 document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
 })