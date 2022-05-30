//#region Initialisers
let CurrentSeason;
let CurrentChallenge;
let CurrentEpisode;

let CustomCast = [];

let done = false;

let SlayedChallenge = [];
let GreatChallenge = [];
let GoodChallenge = [];
let BadChallenge = [];
let FloppedChallenge = [];

let SlayedRunway = [];
let GreatRunway = [];
let GoodRunway = [];
let BadRunway = [];
let FloppedRunway = [];

let Tops = [];
let Bottoms = [];
let Safes = [];
let Critiqued = [];
let Steps = 0;
let CritiquesChoice = 0;
let BottomQueens = [];
let TopsQueens = [];
let randomtop;
let randombtm;

let lsc1 = [];
let lsc2 = [];

let as7cast = [];

let top4 = [];
let temp = [];

let originaltop = [];

let starscount = [];

let CustomQueens = [];

let reads = [
  ", you’re so old you’re still on MySpace.com.",
  "Sweetie, I’m sorry! If you don’t have a wrist band you can’t be in here for the meet and greet!"
];

let rusicalcastsizes = 
[
11,
13,
11,
11,
14,
7,
12,
9,      
5,
9,
7,
11,
9
];

let lipsyncssongs = [];

//#endregion
//#region Classes
class Season {
  constructor(Name, Cast, Host, Finale, LC, Lipsync, Premiere, Country)
  {
    this.seasonname = Name;
    this.fullCast = Cast;

    this.currentCast = [];
    if(this.currentCast.length==0)
      for(let i =0; i < this.fullCast.length; i++)
      {
        
        this.currentCast.push(this.fullCast[i]);
      }

    this.lastchallenge = LC;
    this.eliminatedCast = [];
    this.episodes = [];
    this.doubleShantay = false;
    this.doubleSashay = false;
    this.enableSaves = true;
    this.host = Host;
    this.finaleformat = Finale;
    this.lipsyncformat = Lipsync;
    this.premiereformat = Premiere;
    this.country = Country;

    this.events = [];

    this.snatchgamecharacter;

    this.rusicalrole;
    
    this.actingchallenges = 0;
    this.balls = 0;
    this.choreochallenges = 0;
    this.commercialchallenges = 0;
    this.designchallenges = 0;
    this.improvchallenges = 0;
    this.makeoverchallenges = 0;
    this.rusicals = 0;
    this.standupchallenges = 0;
    this.snatchgame = 0;
  }

  getFullCast()
  {
    return(this.fullCast);
  }
}

class Episode{
  constructor(Name, Type)
  {
    this.name = Name;
    this.type = Type;
  }
}
class Queen {

  constructor(Name, Acting, Improv, Comedy, Dance, Design, Runway, Lipsync, Branding, Charisma, Kindness, Shadyness, Image = "noimage", Promo = "nopromo", OriginalSeason = "noseason", IsCustom = false)
  {
      this.name = Name;
      this.acting = Acting;
      this.improv = Improv;
      this.comedy = Comedy;
      this.dance = Dance;
      this.design = Design;
      this.runway = Runway;
      this.lipsync = Lipsync;
      this.branding = Branding;
      this.charisma = Charisma;
      this.kindness = Kindness;
      this.shadyness = Shadyness;

      this.stars = 0;
      this.blocked = [false, "NONE"];
      this.starsperepisode = [];

      this.ballfirlook = 0;
      this.ballseclook = 0;
      this.ballthilook = 0;

      this.favoritism = 0;

      this.premieregroup = "NONE";

      this.miniwinner = false;
      this.miniwon = [];

      this.trackrecord = [];

      this.ppe = 0;
      this.episodeson = 0;

      this.wins = 0;
      this.highs = 0;
      this.safes = 0;
      this.lows = 0;
      this.bottoms = 0;

      this.lipsyncscore = 0;

      this.minichallengeswins = 0;

      this.ogseason = OriginalSeason;
      this.iscustom = IsCustom;
      this.placement = 0;

      this.image = "Images/Queens/"+this.ogseason+"/"+Image+".webp";
      this.promo = "Images/Promos/"+this.ogseason+"/"+Promo+".webp";

      this.perfomancescore = 0;
      this.runwayscore = 0;
      this.finalscore = 0;
      this.finalescore = 0;
      this.lipsyncscore = 0;
  }

  GetScore(min, max, stat = 0)
  {
    return((getRandomInt(min,max))-stat);
  }

  GetName()
  {
    return(this.name);
  }

  GetPlacement()
  {
    return(this.placement);
  }

  GetLipsync()
  {
    this.lipsyncscore = this.GetScore(0,this.lipsync,0);
    this.lipsyncscore = this.lipsyncscore + this.favoritism;
  }

  GetASLipsync()
  {
    this.lipsyncscore = this.GetScore(0,this.lipsync,0);
  }

  GetMakeover()
  {
    this.perfomancescore = this.GetScore(25,45,this.branding+this.runway);
  }

  GetCommercial()
  {
    this.perfomancescore = this.GetScore(45,75,this.branding+this.charisma+this.acting+this.improv);
  }

  GetImprov()
  {
    this.perfomancescore = this.GetScore(15,45,this.improv);
  }

  GetStandUp()
  {
    this.perfomancescore = this.GetScore(25,55,this.comedy+this.charisma);
  }

  GetActing()
  {
    this.perfomancescore = this.GetScore(15,45,this.acting);
  }

  GetDancing()
  {
    this.perfomancescore = this.GetScore(15,45,this.dance);
  }

  GetSnatchGame()
  {
    this.perfomancescore = this.GetScore(35,65,this.comedy+this.acting+this.improv);
  }

  GetRusical()
  {
    this.perfomancescore = this.GetScore(35,75,this.dance+this.charisma+this.acting);
  }

  GetRumix()
  {
    this.perfomancescore = this.GetScore(35,75,this.charisma+this.dance+this.branding);
  }

  GetTalentShow()
  {
    this.perfomancescore = this.GetScore(95,135,this.acting+this.improv+this.comedy+this.dance+this.lipsync+this.charisma+this.branding+this.design);
  }

  GetMusicV()
  {
    this.perfomancescore = this.GetScore(15,45,this.dance);
  }

  getFinalScore()
  {
    this.finalescore = this.GetScore(0,this.lipsync,0);
    this.finalescore = this.finalescore + this.favoritism;
  }

  getRunway() {
    this.runwayscore = this.GetScore(0, this.runway+2);
    this.runwayscore = this.runwayscore+(this.runway*0.3);
  }

  getBall() {
    this.ballfirlook = this.GetScore(0, this.runway+2);
    this.ballfirlook = this.ballfirlook+(this.runway*0.3);

    this.ballseclook = this.GetScore(0, this.runway+2);
    this.ballseclook = this.ballseclook+(this.runway*0.3);

    this.ballthilook = this.GetScore(15,35,this.design);

    this.finalescore = this.ballthilook+(17-this.ballfirlook)+(17-this.ballseclook);
  }

  GetDesignScore(bonus = 0)
  {
    if(getRandomInt(0,1)==0 && this.miniwinner == true)
    {
      this.perfomancescore = this.GetScore(15,35,this.design+bonus);
      this.finalscore = this.perfomancescore;
    }
    else
    {
      this.perfomancescore = this.GetScore(15,35,this.design);
      this.finalscore = this.perfomancescore;
    }
  }
}

class Host{
  constructor(Name, InDrag, OutOfDrag)
  {
    this.name = Name;
    this.outofdrag = "Images/Queens/HOSTS/"+OutOfDrag+".webp";
    this.indrag = "Images/Queens/HOSTS/"+InDrag+".webp";
  }

  getName()
  {
    return(this.name);
  }
}

class Screen {
  constructor() {
      this.MainScreen = document.querySelector("div.MainArea");
  }

  clean() {
      this.MainScreen.innerHTML = '';
  }

  createText(Text, Option) {
    let text = document.createElement("p");
    switch(Option)
    {
      case"Bold":
        text.setAttribute("style","font-weight: bold; font-size: 16px;");
        break;

      default:
        text.setAttribute("style","font-size: 16px;");
        break;
        
    }
    
    text.innerHTML = Text;
    this.MainScreen.append(text);
  }

  createBigText(Text) {
    let MainTitle = document.querySelector("div.MainTitle");
    MainTitle.innerHTML = '<h1>'+Text+'</h1>';
  }

  createSelect(id)
  {
    let select = document.createElement("select");
    select.setAttribute("id",id);
    this.MainScreen.append(select);
  }

  LoadCasts(){
    let select = document.getElementById("aq");
    for (let index = 0; index < DragRaceQueens.length; index++) {
      var opt = document.createElement("option");
      opt.value = index;
      opt.text = DragRaceQueens[index].GetName() + " ("+DragRaceQueens[index].ogseason+")";
      select.add(opt)
    }

    select = document.getElementById("cq");
    for (let index = 0; index < CustomQueens.length; index++) {
      var opt = document.createElement("option");
      opt.value = index;
      opt.text = CustomQueens[index].GetName() + " ("+CustomQueens[index].ogseason+")";
      select.add(opt)
    }
  }


  createRupaulAnnouncement(Text) {
    let text = document.createElement("h2");
    text.innerHTML = Text;
    this.MainScreen.append(text);
  }

  createLine() {
    let hr = document.createElement("hr");
    this.MainScreen.append(hr);
  }

  SpecialCreateLine(){
    let getclean = document.getElementById("clean");
    let hr = document.createElement("hr");
    getclean.append(hr);
  }

  createImage(Source, Color, ID="NONE")
  {
  let image = document.createElement("img");
  image.src = Source;
  if(ID!="NONE")
  {
    image.setAttribute("id",ID)
  }
  image.setAttribute("style", 'margin: 7px; width: 105px; height: 105px; border-radius: 20px; border: 3px solid; border-color: '+Color+';');
  this.MainScreen.appendChild(image); 
  }

  createCImage(Source, Color, ID="NONE")
  {
  let addto = document.getElementById("clean");
  let image = document.createElement("img");
  image.src = Source;
  if(ID!="NONE")
  {
    image.setAttribute("id",ID)
  }
  image.setAttribute("style", 'margin: 7px; width: 105px; height: 105px; border-radius: 20px; border: 3px solid; border-color: '+Color+';');
  addto.appendChild(image); 
  }

  createCustomCastImage(Source, Color, ID="NONE")
  {
  let addto = document.getElementById("first");
  let image = document.createElement("img");
  image.src = Source;
  if(ID!="NONE")
  {
    image.setAttribute("id",ID)
  }
  image.setAttribute("style", 'margin: 7px; width: 200pxpx; height: 200px; border-radius: 20px; border: 3px solid; border-color: '+Color+';');
  addto.appendChild(image); 
  }

  createImageBW(Source, Color)
  {
  let image = document.createElement("img");
  image.src = Source;
  image.setAttribute("style", 'margin: 7px; width: 105px; height: 105px; border-radius: 20px;  border: 3px solid; -webkit-filter: grayscale(100%);filter: grayscale(100%); border-color: '+Color+';');
  this.MainScreen.appendChild(image); 
  }

  createVideo(Country)
  {
    let video = document.createElement("video");
    let source = document.createElement("source")
    switch(Country)
    {
      case "CA":
        source.setAttribute("src","Videos/CDR.mp4");
        source.setAttribute("type","video/mp4");
        break;
    }
    video.autoplay = true;
    video.controls = true;
    video.append(source);
    this.MainScreen.append(video);
    let br = document.createElement("br");
    this.MainScreen.append(br);
    this.MainScreen.append(br);
    this.MainScreen.append(br);
  }

  createButton(Text,Onclick) {
    let btn = document.createElement("button");
    btn.innerHTML = Text;
    btn.setAttribute("onclick",Onclick);
    btn.setAttribute("class","button MainButton");
    this.MainScreen.append(btn);
  }

  createQueensStats(){
    let putincenter = document.createElement("center");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
  
    let tbody = document.createElement("tbody");
  
    let treps = document.createElement("tr");
    
    for (let i = 0; i < 13; i++) {
      let thq = document.createElement("th");
      switch(i){
        case 0:
          thq.innerHTML = "Queen's Name";
          break;
        case 1:
          thq.innerHTML = "Acting Stat";
          break;
        case 2:
          thq.innerHTML = "Improv Stat";
          break;
        case 3:
          thq.innerHTML = "Comedy Stat";
          break;
        case 4:
          thq.innerHTML = "Dance Stat";
          break;
        case 5:
          thq.innerHTML = "Design Stat";
          break;
        case 6:
          thq.innerHTML = "Runway Stat";
          break;
        case 7:
          thq.innerHTML = "Lipsync Stat";
          break;
        case 8:
          thq.innerHTML = "Branding Stat";
          break;
        case 9:
          thq.innerHTML = "Charisma Stat";
          break;
        case 10:
          thq.innerHTML = "Kindness Stat";
          break;
        case 11:
          thq.innerHTML = "Shadyness Stat";
          break;
        case 12:
          thq.innerHTML = "Overall Stats";
          break;
      }
      
    
      thq.setAttribute("class","tr");
      treps.append(thq);
    }
    for(let q = 0; q < DragRaceQueens.length; q++)
    {
      let treps = document.createElement("tr");
      for(let t = 0; t < 13; t++)
      {
        let thq = document.createElement("th");
      switch(t){
        case 0:
          thq.innerHTML = DragRaceQueens[q].GetName();
          break;
        case 1:
          thq.innerHTML = DragRaceQueens[q].acting;
          break;
        case 2:
          thq.innerHTML = DragRaceQueens[q].improv;
          break;
        case 3:
          thq.innerHTML = DragRaceQueens[q].comedy;
          break;
        case 4:
          thq.innerHTML = DragRaceQueens[q].dance;
          break;
        case 5:
          thq.innerHTML = DragRaceQueens[q].design;
          break;
        case 6:
          thq.innerHTML = DragRaceQueens[q].runway;
          break;
        case 7:
          break;
        case 8:
          thq.innerHTML = DragRaceQueens[q].branding;
          break;
        case 9:
          thq.innerHTML = DragRaceQueens[q].charisma;
          break;
        case 10:
          thq.innerHTML = DragRaceQueens[q].kindness;
          break;
        case 11:
          thq.innerHTML = DragRaceQueens[q].shadyness;
          break;
        case 12:
          thq.innerHTML = DragRaceQueens[q].acting+DragRaceQueens[q].improv+DragRaceQueens[q].comedy+DragRaceQueens[q].dance+DragRaceQueens[q].design+DragRaceQueens[q].runway+DragRaceQueens[q].lipsync+DragRaceQueens[q].branding+DragRaceQueens[q].charisma;
          break;
      }
      treps.append(thq);
    }
    tbody.append(treps);
    }


    thead.append(treps);
    table.append(thead);
    table.append(tbody);

    let br = document.createElement("br");
    putincenter.append(table);

    this.MainScreen.append(putincenter);
    this.MainScreen.append(br);
  }

  createTrackRecords(){
    let putincenter = document.createElement("center");
    let table = document.createElement("table");
    let thead = document.createElement("thead");

    table.setAttribute("class","tr");
  
    let tbody = document.createElement("tbody");
  
    let treps = document.createElement("tr");
  
    let thq = document.createElement("th");
    thq.innerHTML = "Queens";
    
    thq.setAttribute("class","tr");
    thq.setAttribute("style","width: 100px;")
    treps.append(thq);
  
    for(let i = 0; i < CurrentSeason.episodes.length; i++)
    {
      let thep = document.createElement("th");
      thep.innerHTML = "<p style='font-size:15px;'>"+CurrentSeason.episodes[i].name+"</p><p style='font-size:12px;'>("+CurrentSeason.episodes[i].type+")</p>";
      thep.setAttribute("class","tr");
      treps.append(thep);
    }

    for(let q = 0; q < CurrentSeason.currentCast.length; q++)
    {
      let track = document.createElement("tr");

      let qname = document.createElement("td");

      qname.innerHTML = CurrentSeason.currentCast[q].GetName();

      qname.setAttribute("class","trq");

      track.append(qname);

      for(let t = 0; t < CurrentSeason.currentCast[q].trackrecord.length; t++)
      {
        let trtr = document.createElement("td");

        trtr.innerHTML = CurrentSeason.currentCast[q].trackrecord[t];

        switch(CurrentSeason.currentCast[q].trackrecord[t])
        {
          case "L3RD":
            trtr.innerHTML = "LOST <br> 3RD ROUND";
            trtr.setAttribute("style","background: #FFD100; font-weight: bold;");
            break;
          
          case "L2RD":
            trtr.innerHTML = "LOST <br> 2ND ROUND";
            trtr.setAttribute("style","background: #FFAE00; font-weight: bold;");
            break;
          
          case "L1RD":
            trtr.innerHTML = "LOST <br> 1ST ROUND";
            trtr.setAttribute("style","background: #FF7C00; font-weight: bold;");
            break;

          case "ELIM ":
            trtr.innerHTML = "ELIMINATED";
            trtr.setAttribute("style","background: sienna; font-weight: bold;");
            break;

          case "GUEST":
            trtr.setAttribute("style","background: gainsboro; font-weight: bold;");
            break;

          case "WINNER":
            trtr.setAttribute("style","background: yellow; font-weight: bold;");
            break;
            
          case "RUNNER UP":
            trtr.setAttribute("style","background: silver; font-weight: bold;");
            break;

          case "TOP 2":
            trtr.setAttribute("style","background: lightgreen; font-weight: bold;");
            break;

          case "TOP2":
            trtr.innerHTML = "WIN";
            trtr.setAttribute("style","background: deepskyblue; font-weight: bold;");
            break;

          case "TOP 3":
            
            trtr.setAttribute("style","background: lightgreen; font-weight: bold;");
            break;

          case "WIN":
            trtr.setAttribute("style","background: royalblue; font-weight: bold; color: white;");
            break;
          
          case "HIGH":
            trtr.setAttribute("style","background: lightblue");
            break;
          
          case "HIGH+BLOCK":
            trtr.innerHTML = "HIGH <br> + <br> <b>BLOCK</b>";
            trtr.setAttribute("style","background: #D66D73");
            break;

          case "BLOCK":
            trtr.innerHTML = "<b>BLOCK</b>";
            trtr.setAttribute("style","background: red");
            break;
          
          case "SAFE":
            trtr.setAttribute("style","background: #F5EBF5;");
            break;

          case "LOW":
            trtr.setAttribute("style","background: lightpink");
            break;

          case "BOTTOM":
            trtr.setAttribute("style","background: tomato");
            break;

          case "ELIMINATED":
            trtr.setAttribute("style","background: red; font-weight: bold;");
            break;
          
          case "DOUBLEWIN":
            trtr.innerHTML = "WIN";
            trtr.setAttribute("style","background: darkblue; font-weight: bold; color: white;");
            break;

          default:
            trtr.setAttribute("style","background: #A9A9A9");
            break;
        }

        trtr.setAttribute("class","tr");

        track.append(trtr);
      }

      if(CurrentSeason.lipsyncformat=="AS7")
      {
        let star = document.createElement("td");

        star.innerHTML = CurrentSeason.currentCast[q].stars;

        star.setAttribute("class","trq");

        track.append(star);
      }

      tbody.append(track);
    }

    for(let q = 0; q < CurrentSeason.eliminatedCast.length; q++)
    {
      let track = document.createElement("tr");

      let qname = document.createElement("td");

      qname.innerHTML = CurrentSeason.eliminatedCast[q].GetName();

      qname.setAttribute("class","trq");

      track.append(qname);

      while(CurrentSeason.eliminatedCast[q].trackrecord.length<CurrentSeason.episodes.length)
      {
        CurrentSeason.eliminatedCast[q].trackrecord.push('');
      }

      for(let t = 0; t < CurrentSeason.eliminatedCast[q].trackrecord.length; t++)
      {
        let trtr = document.createElement("td");

        trtr.innerHTML = CurrentSeason.eliminatedCast[q].trackrecord[t];

        switch(CurrentSeason.eliminatedCast[q].trackrecord[t])
        {
          case "L3RD":
            trtr.innerHTML = "LOST <br> 3RD ROUND";
            trtr.setAttribute("style","background: #FFD100; font-weight: bold; ");
            break;
          
          case "L2RD":
            trtr.innerHTML = "LOST <br> 2ND ROUND";
            trtr.setAttribute("style","background: #FFAE00; font-weight: bold; ");
            break;
          
          case "L1RD":
            trtr.innerHTML = "LOST <br> 1ST ROUND";
            trtr.setAttribute("style","background: #FF7C00; font-weight: bold; ");
            break;

          case "ELIM ":
            trtr.innerHTML = "ELIMINATED";
            trtr.setAttribute("style","background: sienna; font-weight: bold; color: white;");
            break;

          case "GUEST":
            trtr.setAttribute("style","background: gainsboro; font-weight: bold;");
            break;

          case "WINNER":
            trtr.setAttribute("style","background: yellow; font-weight: bold;");
            break;
            
          case "RUNNER UP":
            trtr.setAttribute("style","background: silver; font-weight: bold;");
            break;

          case "TOP 2":
            trtr.setAttribute("style","background: lightgreen; font-weight: bold;");
            break;

          case "TOP2":
            trtr.innerHTML = "WIN";
            trtr.setAttribute("style","background: deepskyblue; font-weight: bold;");
            break;
            break;

          case "TOP 3":
            
            trtr.setAttribute("style","background: lightgreen; font-weight: bold;");
            break;

          case "WIN":
            trtr.setAttribute("style","background: royalblue; font-weight: bold; color: white;");
            break;
          
          case "HIGH":
            trtr.setAttribute("style","background: lightblue");
            break;
          
          case "HIGH+BLOCK":
            trtr.innerHTML = "HIGH <br> + <br> <b>BLOCK</b>";
            trtr.setAttribute("style","background: #D66D73");
            break;

          case "BLOCK":
            trtr.innerHTML = "<b>BLOCK</b>";
            trtr.setAttribute("style","background: red");
            break;
          
          case "SAFE":
            trtr.setAttribute("style","background: #F5EBF5;");
            break;

          case "LOW":
            trtr.setAttribute("style","background: lightpink");
            break;

          case "BOTTOM":
            trtr.setAttribute("style","background: tomato");
            break;

          case "ELIMINATED":
            trtr.setAttribute("style","background: red; font-weight: bold;");
            break;
          
          case "DOUBLEWIN":
            trtr.innerHTML = "WIN";
            trtr.setAttribute("style","background: darkblue; font-weight: bold; color: white;");
            break;

          default:
            trtr.setAttribute("style","background: #A9A9A9");
            break;
        }

        trtr.setAttribute("class","tr");

        track.append(trtr);
      }

      tbody.append(track);
    }

    if(CurrentSeason.lipsyncformat=="AS7")
    {
      let thq = document.createElement("th");
      thq.innerHTML = "Stars";
      
      thq.setAttribute("class","tr");
      thq.setAttribute("style","width: 45px;")
      treps.append(thq);
    }
    thead.append(treps);
    table.append(thead);
    table.append(tbody);

    let br = document.createElement("br");
    putincenter.append(table);

    this.MainScreen.append(putincenter);
    this.MainScreen.append(br);
  }

  createPromoTable(){
      CurrentSeason.fullCast.sort((a, b) => a.placement - b.placement);

      let putincenter = document.createElement("center");
      let table = document.createElement("table");
      table.setAttribute("style", "border-spacing: 15px 12px");
      let thead = document.createElement("thead");

      let tbody = document.createElement("tbody");

      let rows = ~~(CurrentSeason.fullCast.length/4);
      let rest = CurrentSeason.fullCast.length%4;

      if(rest!=0)
      {
        rows++;
      }
      for(let i = 0; i < rows; i++)
      {
        let tr = document.createElement("tr");
        if(i!=rows-1 || rest==0)
        {
          for(let q = 0; q<4;q++)
          {
            let td = document.createElement("td");
            if(CurrentSeason.eliminatedCast.indexOf(CurrentSeason.fullCast[q+(i*4)])!=-1)
            {
              td.setAttribute("style", "background: url("+ CurrentSeason.fullCast[q+(i*4)].promo +"); background-size: 200px 200px; background-position: center; height: 190px; width: 190px; -webkit-filter: grayscale(100%);filter: grayscale(100%);")
            }
            else
            {
            td.setAttribute("style", "background: url("+ CurrentSeason.fullCast[q+(i*4)].promo +"); background-size: 200px 200px; background-position: center; height: 190px; width: 190px;");
            }
            td.setAttribute("class","promos");
            tr.append(td);
          }
          tbody.append(tr);
          let tr2 = document.createElement("tr");
          for(let q = 0; q<4;q++)
          {
            let td = document.createElement("td");
            let name = document.createElement("p");
            name.setAttribute("style","font-weight: bold; font-size: 15px;");
            let placement = document.createElement("p");
            switch(CurrentSeason.fullCast[q+(i*4)].GetPlacement())
            {
              case 0:
                placement.innerHTML = "TBA";
                break;
              case 1:
                placement.innerHTML = "1st";
                break;
              case 2:
                placement.innerHTML = "2nd";
                break;
              case 3:
                placement.innerHTML = "3rd";
                break;
              default:
                placement.innerHTML = CurrentSeason.fullCast[q+(i*4)].GetPlacement()+"th";
                break;
            }
            name.innerHTML = CurrentSeason.fullCast[q+(i*4)].GetName();
            td.append(name);
            td.append(placement);
            td.setAttribute("class","promos");
            tr2.append(td);
          }
          tbody.append(tr2);
        }
        else
        {
          for(let q = 0; q<rest; q++)
          {
            let td = document.createElement("td");
            if(CurrentSeason.eliminatedCast.indexOf(CurrentSeason.fullCast[q+(i*4)])!=-1)
            {
              td.setAttribute("style", "background: url("+ CurrentSeason.fullCast[q+(i*4)].promo +"); background-size: 200px 200px; background-position: center; height: 190px; width: 190px; -webkit-filter: grayscale(100%);filter: grayscale(100%);")
            }
            else
            {
            td.setAttribute("style", "background: url("+ CurrentSeason.fullCast[q+(i*4)].promo +"); background-size: 200px 200px; background-position: center; height: 190px; width: 190px;");
            }
            td.setAttribute("class","promos");
            tr.append(td);
          }
          let tr2 = document.createElement("tr");
          tbody.append(tr);
          for(let q = 0; q<rest;q++)
          {
            let td = document.createElement("td");
            let name = document.createElement("p");
            name.setAttribute("style","font-weight: bold; font-size: 15px;");
            let placement = document.createElement("p");
            switch(CurrentSeason.fullCast[q+(i*4)].GetPlacement())
            {
              case 0:
                placement.innerHTML = "TBA";
                break;
              case 1:
                placement.innerHTML = "1st";
                break;
              case 2:
                placement.innerHTML = "2nd";
                break;
              case 3:
                placement.innerHTML = "3rd";
                break;
              default:
                placement.innerHTML = CurrentSeason.fullCast[q+(i*4)].GetPlacement()+"th";
                break;
            }
            name.innerHTML = CurrentSeason.fullCast[q+(i*4)].GetName();
            td.append(name);
            td.append(placement);
            td.setAttribute("class","promos");
            tr2.append(td);
          }
          tbody.append(tr2);
          
        }
        
      }
      table.append(thead);
      table.append(tbody);
      let br = document.createElement("br");
      putincenter.append(table);
      this.MainScreen.append(putincenter);
      this.MainScreen.append(br);
  }
}

class MiniChallenge{
  constructor()
  {

  }

}

class SnatchGame{
  constructor(){
    this.type = "SNATCHGAME";
    this.hasrunway = true;
    this.winner = false;
    this.snatch = [
      "Snatch Game",
      "Snatch Game At Sea",
      "Snatch Game Of Love"
    ];

    this.chosen = getRandomInt(0,this.snatch.length-1);

    this.episodename = "";
    switch(this.chosen)
    {
      case 0:
        this.episodename = "The Snatch Game";
        break;
      case 1:
        this.episodename = "S.S. Sickening!";
        break;
      case 2:
        this.episodename = "The Snatch Game Of Love";
        break;
    }
  }

  createMessage()
  {
    switch(getRandomInt(0,1))
    {
      case 0:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("We've got to be snatched 24/7.");
        Announcement.createRupaulAnnouncement("It's our job to do so!");
        Announcement.createRupaulAnnouncement("Will you be able to snatch the victory tonight ?");
        break;
      case 1:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Tonight is THE night.");
        Announcement.createRupaulAnnouncement("You will need all your strength to snatch the win from your competition!");
        Announcement.createRupaulAnnouncement("Good luck!");
        break;
    }
  }

  createBrief()
  {
    Main.createText("This week, the queens will have to participate in the "+this.snatch[this.chosen]);
  }

  TopPlacement()
  {
    
    let Top = [
    "Tonight, your choreography blew us away.",
    "Tonight, we saw how bright you shine.",
    "You have dancing running throught your veins.",
    "Tonight, you showed up and showed out.",
    "You truly showed us what you are capable of.",
    "Tonight, you proved yourself.",
    ];
    return(Top[getRandomInt(0,Top.length-1)]);
  }

  BtmPlacement()
  {

    let Btm = [
    ", your comedy could have used a few laugh.",
    ", on the runway, you ran out of gas.",
    ", tonight the judges did not say yes to the dress.",
    ", your outfit had a story. A very confusing one.",
    ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
    ", your outfit made our heads turn, and made us dizzy.",
    ", you need to focus. Or else it's going to cost you.",
    ];
    return(Btm[getRandomInt(0,Btm.length-1)]);
  }

  rankPerfomances()
  {
      for(let i = 0; i < CurrentSeason.currentCast.length;i++)
      {
        CurrentSeason.currentCast[i].GetCommercial();
      }

      CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].perfomancescore<=8)
        {
          SlayedChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
        {
          GreatChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
        {
          GoodChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
        {
          BadChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>32)
        {
          FloppedChallenge.push(CurrentSeason.currentCast[i]);
        }
      }

  }

    createPerformances()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedChallenge.length!=0)
      {
        for(let i = 0; i < SlayedChallenge.length; i++)
        {
          Main.createImage(SlayedChallenge[i].image,"#6eadff");
          if(i!=SlayedChallenge.length-1)
          {
            slayedtext += SlayedChallenge[i].GetName()+", ";
          }
          else
          {
            if(SlayedChallenge.length!=1)
            {
              slayedtext += " and "+SlayedChallenge[i].GetName();
            }
            else
            {
              slayedtext += SlayedChallenge[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the challenge.", "Bold");
      }
  
      if(GreatChallenge.length!=0)
      {
        for(let i = 0; i < GreatChallenge.length; i++)
        {
          Main.createImage(GreatChallenge[i].image,"#6effe4");
          if(i!=GreatChallenge.length-1)
          {
            greattext += GreatChallenge[i].GetName()+", ";
          }
          else
          {
            if(GreatChallenge.length!=1)
            {
              greattext += " and "+GreatChallenge[i].GetName();
            }
            else
            {
              greattext += GreatChallenge[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great performance.", "Bold");
      }
  
      if(GoodChallenge.length!=0)
      {
        for(let i = 0; i < GoodChallenge.length; i++)
        {
          Main.createImage(GoodChallenge[i].image,"#6eff72");
          if(i!=GoodChallenge.length-1)
          {
            goodtext += GoodChallenge[i].GetName()+", ";
          }
          else
          {
            if(GoodChallenge.length!=1)
            {
              goodtext += " and "+GoodChallenge[i].GetName();
            }
            else
            {
              goodtext += GoodChallenge[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good performance.", "Bold");
      }
  
      if(BadChallenge.length!=0)
      {
        for(let i = 0; i < BadChallenge.length; i++)
        {
          Main.createImage(BadChallenge[i].image,"#ffe96e");
          if(i!=BadChallenge.length-1)
          {
            badtext += BadChallenge[i].GetName()+", ";
          }
          else
          {
            if(BadChallenge.length!=1)
            {
              badtext += " and "+BadChallenge[i].GetName();
            }
            else
            {
              badtext += BadChallenge[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad performance.", "Bold");
      }
  
      if(FloppedChallenge.length!=0)
      {
        for(let i = 0; i < FloppedChallenge.length; i++)
        {
          Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
          if(i!=FloppedChallenge.length-1)
          {
            floptext += FloppedChallenge[i].GetName()+", ";
          }
          else
          {
            if(FloppedChallenge.length!=1)
            {
              floptext += " and "+FloppedChallenge[i].GetName();
            }
            else
            {
              floptext += FloppedChallenge[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the challenge.", "Bold");
      }
    }

    rankRunways()
    {
      for(let i = 0; i < CurrentSeason.currentCast.length;i++)
      {
        CurrentSeason.currentCast[i].getRunway();
        CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
      }

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].runwayscore<=2)
        {
          FloppedRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
        {
          BadRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
        {
          GoodRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
        {
          GreatRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>13)
        {
          SlayedRunway.push(CurrentSeason.currentCast[i]);
        }
      }
    }

    createRunways()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedRunway.length!=0)
      {
        for(let i = 0; i < SlayedRunway.length; i++)
        {
          Main.createImage(SlayedRunway[i].image,"#6eadff");
          if(i!=SlayedRunway.length-1)
          {
            slayedtext += SlayedRunway[i].GetName()+", ";
          }
          else
          {
            if(SlayedRunway.length!=1)
            {
              slayedtext += " and "+SlayedRunway[i].GetName();
            }
            else
            {
              slayedtext += SlayedRunway[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the runway.", "Bold");
      }
  
      if(GreatRunway.length!=0)
      {
        for(let i = 0; i < GreatRunway.length; i++)
        {
          Main.createImage(GreatRunway[i].image,"#6effe4");
          if(i!=GreatRunway.length-1)
          {
            greattext += GreatRunway[i].GetName()+", ";
          }
          else
          {
            if(GreatRunway.length!=1)
            {
              greattext += " and "+GreatRunway[i].GetName();
            }
            else
            {
              greattext += GreatRunway[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great runway.", "Bold");
      }
  
      if(GoodRunway.length!=0)
      {
        for(let i = 0; i < GoodRunway.length; i++)
        {
          Main.createImage(GoodRunway[i].image,"#6eff72");
          if(i!=GoodRunway.length-1)
          {
            goodtext += GoodRunway[i].GetName()+", ";
          }
          else
          {
            if(GoodRunway.length!=1)
            {
              goodtext += " and "+GoodRunway[i].GetName();
            }
            else
            {
              goodtext += GoodRunway[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good runway.", "Bold");
      }
  
      if(BadRunway.length!=0)
      {
        for(let i = 0; i < BadRunway.length; i++)
        {
          Main.createImage(BadRunway[i].image,"#ffe96e");
          if(i!=BadRunway.length-1)
          {
            badtext += BadRunway[i].GetName()+", ";
          }
          else
          {
            if(BadRunway.length!=1)
            {
              badtext += " and "+BadRunway[i].GetName();
            }
            else
            {
              badtext += BadRunway[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad runway.", "Bold");
      }
  
      if(FloppedRunway.length!=0)
      {
        for(let i = 0; i < FloppedRunway.length; i++)
        {
          Main.createImage(FloppedRunway[i].image,"#ff6e6e");
          if(i!=FloppedRunway.length-1)
          {
            floptext += FloppedRunway[i].GetName()+", ";
          }
          else
          {
            if(FloppedRunway.length!=1)
            {
              floptext += " and "+FloppedRunway[i].GetName();
            }
            else
            {
              floptext += FloppedRunway[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the runway.", "Bold");
      }
    }
}

class Ball{
  constructor(){
    this.type = "BALL";
    this.hasrunway = true;
    this.winner = false;
    this.balls = [
      ["The Absolut Drag Ball", "Executive Realness", "Swimsuit", "Evening Gown Extravaganza"],
      ["The Diva Awards", "Teen Diva Awards","Diva D.C. Press Awards","Diva Hollywood Extravaganza Awards"],
      ["RuPaul's Hair Extravaganza", "Historical Hair", "Red Carpet Glamour", "Fantasy Hair Extravaganza"],
      ["The Fabulous Bitch Ball", "Daytime Dog Park", "Pooch in a Purse", "Canine Couture"],
      ["The Sugar Ball", "Super Duper Sweet 16", "Sugar Mama Executive Realness", "Candy Couture"],
      ["The Glitter Ball", "Banjee Girl Bling", "CEO Platinum Card Executive Realness", "Dripping In Jewels Eleganza"],
      ["The RuPaul Book Ball", "Baby Drag Realness", "That's My Mama Realness", "Book Couture"],
      ["The Gayest Ball Ever","Rainbow-She-Betta-Do", "Sexy Unicorn", "Village People Eleganza Extravaganza"],
      ["The Last Ball on Earth", "Alaskan Winter Realness", "Miami Summer Realness", "Martian Eleganza Extravaganza"],
      ["The Monster Ball", "Trampy Trick or Treater", "Witch, Please!", "MILF Eleganza: Monster I'd Like to Freak"],
      ["The Ball Ball", "Lady Baller", "Basketball Wife Realness", "Balls to the Wall Eleganza"],
      ["The Bag Ball", "Mixed Bag", "Money Bags", "Bag Ball Eleganza"],
      ["The Hide and Seek Ball", "Zebra Print Resort", "Leopard Evening Wear", "Animal Print Bridal Couture"],
      ["The Red, White and Blue Ball", "Red Hot Resort","Evening Wear: All In White", "Red, White & Blue Bridal Couture"],
      ["The Blue Ball", "Blue Betta Work", "Blue Jean Baby", "Blue Ball Bonanza"],
      ["The Realness of Fortune Ball", "Vanna White Realness", "Before and After", "Realness of Fortune Eleganza"]
    ];

    this.chosen = getRandomInt(0,this.balls.length-1);
  }

  createMessage()
  {
    switch(getRandomInt(0,1))
    {
      case 0:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Are you ready to design ?");
        Announcement.createRupaulAnnouncement("Or are you ready to resign ?");
        Announcement.createRupaulAnnouncement("Be careful at where you draw the line.");
        break;
      case 1:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("It is time for the brawl.");
        Announcement.createRupaulAnnouncement("Down the runway, you need to crawl.");
        Announcement.createRupaulAnnouncement("Are you queens, ready for the ball ?");
        break;
    }
  }

  createBrief()
  {
    Main.createText("This week, the queens will have to participate in : "+this.balls[this.chosen][0]+".");
  }

  TopPlacement()
  {
    
    let Top = [
    "Tonight, you knew how to work it OUT!",
    "Tonight, you shined all over this runway.",
    "You ruled over this runway.",
    "You made gold out of randomness.",
    "Your haute couture, made you rise to the top.",
    "You have creativity beyond limits.",
    "Tonight, you have made yourself stunning.",
    "Your couture made us gag.",
    "The cream always rises to the top.",
    "You have a great perception of design.",
    "Your outfit kept us begging for more."
    ];
    return(Top[getRandomInt(0,Top.length-1)]);
  }

  BtmPlacement()
  {
    
    let Btm = [
    ", you came here to slay, but tonight your outfit slayed you.",
    ", on the runway, you ran out of gas.",
    ", tonight the judges did not say yes to the dress.",
    ", your outfit had a story. A very confusing one.",
    ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
    ", your outfit made our heads turn, and made us dizzy.",
    ", you need to focus. Or else it's going to cost you.",
    ];
    return(Btm[getRandomInt(0,Btm.length-1)]);
  }

  RankBall()
  {
    for(let i = 0; i < CurrentSeason.currentCast.length;i++)
      {
        CurrentSeason.currentCast[i].getBall();
      }
  }
  rankPerfomances()
  {
      

      CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].ballthilook<=8)
        {
          SlayedChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballthilook>6 && CurrentSeason.currentCast[i].ballthilook<=16)
        {
          GreatChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballthilook>16 && CurrentSeason.currentCast[i].ballthilook<=26)
        {
          GoodChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballthilook>26 && CurrentSeason.currentCast[i].ballthilook<=32)
        {
          BadChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballthilook>32)
        {
          FloppedChallenge.push(CurrentSeason.currentCast[i]);
        }
      }

  }

    createPerformances()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedChallenge.length!=0)
      {
        for(let i = 0; i < SlayedChallenge.length; i++)
        {
          Main.createImage(SlayedChallenge[i].image,"#6eadff");
          if(i!=SlayedChallenge.length-1)
          {
            slayedtext += SlayedChallenge[i].GetName()+", ";
          }
          else
          {
            if(SlayedChallenge.length!=1)
            {
              slayedtext += " and "+SlayedChallenge[i].GetName();
            }
            else
            {
              slayedtext += SlayedChallenge[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the challenge.", "Bold");
      }
  
      if(GreatChallenge.length!=0)
      {
        for(let i = 0; i < GreatChallenge.length; i++)
        {
          Main.createImage(GreatChallenge[i].image,"#6effe4");
          if(i!=GreatChallenge.length-1)
          {
            greattext += GreatChallenge[i].GetName()+", ";
          }
          else
          {
            if(GreatChallenge.length!=1)
            {
              greattext += " and "+GreatChallenge[i].GetName();
            }
            else
            {
              greattext += GreatChallenge[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great performance.", "Bold");
      }
  
      if(GoodChallenge.length!=0)
      {
        for(let i = 0; i < GoodChallenge.length; i++)
        {
          Main.createImage(GoodChallenge[i].image,"#6eff72");
          if(i!=GoodChallenge.length-1)
          {
            goodtext += GoodChallenge[i].GetName()+", ";
          }
          else
          {
            if(GoodChallenge.length!=1)
            {
              goodtext += " and "+GoodChallenge[i].GetName();
            }
            else
            {
              goodtext += GoodChallenge[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good performance.", "Bold");
      }
  
      if(BadChallenge.length!=0)
      {
        for(let i = 0; i < BadChallenge.length; i++)
        {
          Main.createImage(BadChallenge[i].image,"#ffe96e");
          if(i!=BadChallenge.length-1)
          {
            badtext += BadChallenge[i].GetName()+", ";
          }
          else
          {
            if(BadChallenge.length!=1)
            {
              badtext += " and "+BadChallenge[i].GetName();
            }
            else
            {
              badtext += BadChallenge[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad performance.", "Bold");
      }
  
      if(FloppedChallenge.length!=0)
      {
        for(let i = 0; i < FloppedChallenge.length; i++)
        {
          Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
          if(i!=FloppedChallenge.length-1)
          {
            floptext += FloppedChallenge[i].GetName()+", ";
          }
          else
          {
            if(FloppedChallenge.length!=1)
            {
              floptext += " and "+FloppedChallenge[i].GetName();
            }
            else
            {
              floptext += FloppedChallenge[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the challenge.", "Bold");
      }
    }

    RankFirstLook()
    {

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].ballfirlook<=2)
        {
          FloppedRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballfirlook>2 && CurrentSeason.currentCast[i].ballfirlook<=4)
        {
          BadRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballfirlook>4 && CurrentSeason.currentCast[i].ballfirlook<=10)
        {
          GoodRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballfirlook>10 && CurrentSeason.currentCast[i].ballfirlook<=13)
        {
          GreatRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballfirlook>13)
        {
          SlayedRunway.push(CurrentSeason.currentCast[i]);
        }
      }
    }

    RankSecondRunway()
    {
      FloppedRunway = [];
      BadRunway = [];
      GoodRunway = [];
      GreatRunway = [];
      SlayedRunway = [];
      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].ballseclook<=2)
        {
          FloppedRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballseclook>2 && CurrentSeason.currentCast[i].ballseclook<=4)
        {
          BadRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballseclook>4 && CurrentSeason.currentCast[i].ballseclook<=10)
        {
          GoodRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballseclook>10 && CurrentSeason.currentCast[i].ballseclook<=13)
        {
          GreatRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].ballseclook>13)
        {
          SlayedRunway.push(CurrentSeason.currentCast[i]);
        }
      }
    }

    createRunways()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedRunway.length!=0)
      {
        for(let i = 0; i < SlayedRunway.length; i++)
        {
          Main.createImage(SlayedRunway[i].image,"#6eadff");
          if(i!=SlayedRunway.length-1)
          {
            slayedtext += SlayedRunway[i].GetName()+", ";
          }
          else
          {
            if(SlayedRunway.length!=1)
            {
              slayedtext += " and "+SlayedRunway[i].GetName();
            }
            else
            {
              slayedtext += SlayedRunway[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the runway.", "Bold");
      }
  
      if(GreatRunway.length!=0)
      {
        for(let i = 0; i < GreatRunway.length; i++)
        {
          Main.createImage(GreatRunway[i].image,"#6effe4");
          if(i!=GreatRunway.length-1)
          {
            greattext += GreatRunway[i].GetName()+", ";
          }
          else
          {
            if(GreatRunway.length!=1)
            {
              greattext += " and "+GreatRunway[i].GetName();
            }
            else
            {
              greattext += GreatRunway[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great runway.", "Bold");
      }
  
      if(GoodRunway.length!=0)
      {
        for(let i = 0; i < GoodRunway.length; i++)
        {
          Main.createImage(GoodRunway[i].image,"#6eff72");
          if(i!=GoodRunway.length-1)
          {
            goodtext += GoodRunway[i].GetName()+", ";
          }
          else
          {
            if(GoodRunway.length!=1)
            {
              goodtext += " and "+GoodRunway[i].GetName();
            }
            else
            {
              goodtext += GoodRunway[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good runway.", "Bold");
      }
  
      if(BadRunway.length!=0)
      {
        for(let i = 0; i < BadRunway.length; i++)
        {
          Main.createImage(BadRunway[i].image,"#ffe96e");
          if(i!=BadRunway.length-1)
          {
            badtext += BadRunway[i].GetName()+", ";
          }
          else
          {
            if(BadRunway.length!=1)
            {
              badtext += " and "+BadRunway[i].GetName();
            }
            else
            {
              badtext += BadRunway[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad runway.", "Bold");
      }
  
      if(FloppedRunway.length!=0)
      {
        for(let i = 0; i < FloppedRunway.length; i++)
        {
          Main.createImage(FloppedRunway[i].image,"#ff6e6e");
          if(i!=FloppedRunway.length-1)
          {
            floptext += FloppedRunway[i].GetName()+", ";
          }
          else
          {
            if(FloppedRunway.length!=1)
            {
              floptext += " and "+FloppedRunway[i].GetName();
            }
            else
            {
              floptext += FloppedRunway[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the runway.", "Bold");
      }
    }
  }

  class Rusical{
    constructor(){
      this.type = "RUSICAL";
      this.hasrunway = true;
      this.winner = false;
      this.regrusical = [
        "Shade: The Rusical",
        "Glamazonian Airways",
        "Bitch Perfect",
        "Kardashian: The Musical",
        "PharmaRusical",
        "Cher: The Unauthorized Rusical",
        "Trump: The Rusical",
        "Madonna: The Unauthorized Rusical",
        "Viva Drag Vegas",
        "Social Media: The Unverified Rusical",
        "Moulin Ru: The Rusical",
        "Rats: The Rusical",
        "Under the Big Top",
        "Dance Drags : The Dancing Rusical",
        "Rainbow's Simulator : The Angry Rusical"
      ];
  
      this.castsizes = [
        11,
        13,
        11,
        11,
        14,
        7,
        12,
        9,      
        5,
        9,
        7,
        11,
        11,
        10,
        14
      ];
  
      this.roles =
      [
        ["Good Penny","Bad Penny","Shady Lady","Pageant Queen 1", "Pageant Queen 2", "Comedy Queen 1", "Comedy Queen 2" , "Amanda", "Showgirl", "Les Mizabella", "Bertha"],
        [],
        [],
        ["Blac Chyna", "Britney Spears", "Kris Jenner", "Lindsay Lohan", "Paris Hilton", "Kourtney Kardashian", "Kendall Jenner", "Khloe Kardashian", "Kylie Jenner", "Kim Kardashian", "North West"],
        [],
        ["60's Cher", "70s Variety Show Cher", "Rockstar Cher", "Comeback Cher", "Disco Cher", "Movie Star Cher", "70s Variety Show Cher"],
        ["Oprah Winfrey", "Ivana Trump", "Kelly Anne Conway", "Stormy Daniels", "Shandy", "Sarah Huckabee Sanders", "Melania Trump", "Betsy DeVos", "Hillary Clinton", "Rosie O'Donell", "Omarosa", "Ivanka Trump"],
        ["Unapologetic Madonna", "Enlightened Madonna", "Early Madonna", "Sexy Madonna", "Movie Star Madonna", "Femmepire Madonna", "Boy Toy Madonna", "Madonna Forever", "Cone Bra Madonna"],
        [],
        ["Foxy", "Nikita", "Natasha", "Miss TokTik", "Makie Tuckenberg", "Lady Tweets", "EmShee", "Reverend Dr. Lady Linked In", "Miss InstaGlam"],
        ["Mama Z", "the Green Fairy", "Uniqueness", "Charisma", "Nerve", "Talent", "Saltine"],
        ["Evita Von Fleas", "Scabies", "Specimen One", "Jane", "Miss Disentry", "Depravity", "Dame Doody Stench", "Rap Pack #1", "Rat Pack #2", "Rat Pack #3", "Scat Rat"],
        ["Henny Wise", "Himbo", "Ring Mistress", "Bang", "Bianca", "Leather", "Corsette", "Reveliana", "Bing", "Lace", "Bong"],
        ["Abby Lee Drager", "Kelly Hyland", "Holly \"God\" Fraisier", "My Little Jill", "Brooke Hyland", "My Little Kendall", "The Old Cathy", "Nia Sioux", "Paige Hyland", "Maddie Ziegler"],
        ["Edssb", "Rainbow", "Oliver", "Valestal", "Brianna", "Tati", "Jordyn", "Izzy", "Tommy", "Rusha", "Ericcfraga", "Dyslereina", "Flop Squad #1", "Flop Squand #2"]
      ];
  
      this.chosen = getRandomInt(0,this.regrusical.length-1);
    }
  
    Reset()
    {
      this.chosen = getRandomInt(0,this.regrusical.length-1);
    }
  
    createMessage()
    {
      switch(getRandomInt(0,1))
      {
        case 0:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("I see Paris, I see Fans.");
          Announcement.createRupaulAnnouncement("I see queens, who sings and dance.");
          Announcement.createRupaulAnnouncement("Do you see it too ?");
          break;
        case 1:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("I see Paris, I see Fans.");
          Announcement.createRupaulAnnouncement("I see queens, who sings and dance.");
          Announcement.createRupaulAnnouncement("Do you see it too ?");
          break;
      }
    }
  
    createBrief()
    {
      Main.createText("This week, the queens will have to act in : "+this.regrusical[this.chosen]+".");
    }
  
    TopPlacement()
    {
      
      let Top = [
      "Tonight, you knew how to work it OUT!",
      "Tonight, you shined all over this runway.",
      "You ruled over this runway.",
      "You made gold out of randomness.",
      "Your haute couture, made you rise to the top.",
      "You have creativity beyond limits.",
      "Tonight, you have made yourself stunning.",
      "Your couture made us gag.",
      "The cream always rises to the top.",
      "You have a great perception of design.",
      "Your outfit kept us begging for more."
      ];
      return(Top[getRandomInt(0,Top.length-1)]);
    }
  
    BtmPlacement()
    {
      
      let Btm = [
        ", you came here to slay, but tonight your outfit slayed you.",
        ", on the runway, you ran out of gas.",
        ", tonight the judges did not say yes to the dress.",
        ", your outfit had a story. A very confusing one.",
        ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
        ", your outfit made our heads turn, and made us dizzy.",
        ", you need to focus. Or else it's going to cost you.",
        ];
        return(Btm[getRandomInt(0,Btm.length-1)]);
      }
    
      rankPerfomances()
      {
          for(let i = 0; i < CurrentSeason.currentCast.length;i++)
          {
            CurrentSeason.currentCast[i].GetRusical();
          }
    
          CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);
    
          for(let i = 0; i<CurrentSeason.currentCast.length; i++)
          {
            if(CurrentSeason.currentCast[i].perfomancescore<=8)
            {
              SlayedChallenge.push(CurrentSeason.currentCast[i]);
            }
            else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
            {
              GreatChallenge.push(CurrentSeason.currentCast[i]);
            }
            else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
            {
              GoodChallenge.push(CurrentSeason.currentCast[i]);
            }
            else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
            {
              BadChallenge.push(CurrentSeason.currentCast[i]);
            }
            else if(CurrentSeason.currentCast[i].perfomancescore>32)
            {
              FloppedChallenge.push(CurrentSeason.currentCast[i]);
            }
          }
    
      }
    
        createPerformances()
        {
          let slayedtext = "";
          let greattext = "";
          let goodtext = "";
          let badtext = "";
          let floptext = "";
          
      
          if(SlayedChallenge.length!=0)
          {
            for(let i = 0; i < SlayedChallenge.length; i++)
            {
              Main.createImage(SlayedChallenge[i].image,"#6eadff");
              if(i!=SlayedChallenge.length-1)
              {
                slayedtext += SlayedChallenge[i].GetName()+", ";
              }
              else
              {
                if(SlayedChallenge.length!=1)
                {
                  slayedtext += " and "+SlayedChallenge[i].GetName();
                }
                else
                {
                  slayedtext += SlayedChallenge[i].GetName();
                }
              }
            }
            Main.createText(slayedtext+" slayed the challenge.", "Bold");
          }
      
          if(GreatChallenge.length!=0)
          {
            for(let i = 0; i < GreatChallenge.length; i++)
            {
              Main.createImage(GreatChallenge[i].image,"#6effe4");
              if(i!=GreatChallenge.length-1)
              {
                greattext += GreatChallenge[i].GetName()+", ";
              }
              else
              {
                if(GreatChallenge.length!=1)
                {
                  greattext += " and "+GreatChallenge[i].GetName();
                }
                else
                {
                  greattext += GreatChallenge[i].GetName();
                }
              }
            }
            Main.createText(greattext+" had a great performance.", "Bold");
          }
      
          if(GoodChallenge.length!=0)
          {
            for(let i = 0; i < GoodChallenge.length; i++)
            {
              Main.createImage(GoodChallenge[i].image,"#6eff72");
              if(i!=GoodChallenge.length-1)
              {
                goodtext += GoodChallenge[i].GetName()+", ";
              }
              else
              {
                if(GoodChallenge.length!=1)
                {
                  goodtext += " and "+GoodChallenge[i].GetName();
                }
                else
                {
                  goodtext += GoodChallenge[i].GetName();
                }
              }
            }
            Main.createText(goodtext+" had a good performance.", "Bold");
          }
      
          if(BadChallenge.length!=0)
          {
            for(let i = 0; i < BadChallenge.length; i++)
            {
              Main.createImage(BadChallenge[i].image,"#ffe96e");
              if(i!=BadChallenge.length-1)
              {
                badtext += BadChallenge[i].GetName()+", ";
              }
              else
              {
                if(BadChallenge.length!=1)
                {
                  badtext += " and "+BadChallenge[i].GetName();
                }
                else
                {
                  badtext += BadChallenge[i].GetName();
                }
              }
            }
            Main.createText(badtext+" had a bad performance.", "Bold");
          }
      
          if(FloppedChallenge.length!=0)
          {
            for(let i = 0; i < FloppedChallenge.length; i++)
            {
              Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
              if(i!=FloppedChallenge.length-1)
              {
                floptext += FloppedChallenge[i].GetName()+", ";
              }
              else
              {
                if(FloppedChallenge.length!=1)
                {
                  floptext += " and "+FloppedChallenge[i].GetName();
                }
                else
                {
                  floptext += FloppedChallenge[i].GetName();
                }
              }
            }
            Main.createText(floptext+" flopped the challenge.", "Bold");
          }
        }
    
        rankRunways()
        {
          for(let i = 0; i < CurrentSeason.currentCast.length;i++)
          {
            CurrentSeason.currentCast[i].getRunway();
            CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
          }
    
          for(let i = 0; i<CurrentSeason.currentCast.length; i++)
          {
            if(CurrentSeason.currentCast[i].runwayscore<=2)
            {
              FloppedRunway.push(CurrentSeason.currentCast[i]);
            }
            else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
            {
              BadRunway.push(CurrentSeason.currentCast[i]);
            }
            else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
            {
              GoodRunway.push(CurrentSeason.currentCast[i]);
            }
            else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
            {
              GreatRunway.push(CurrentSeason.currentCast[i]);
            }
            else if(CurrentSeason.currentCast[i].runwayscore>13)
            {
              SlayedRunway.push(CurrentSeason.currentCast[i]);
            }
          }
        }
    
        createRunways()
        {
          let slayedtext = "";
          let greattext = "";
          let goodtext = "";
          let badtext = "";
          let floptext = "";
          
      
          if(SlayedRunway.length!=0)
          {
            for(let i = 0; i < SlayedRunway.length; i++)
            {
              Main.createImage(SlayedRunway[i].image,"#6eadff");
              if(i!=SlayedRunway.length-1)
              {
                slayedtext += SlayedRunway[i].GetName()+", ";
              }
              else
              {
                if(SlayedRunway.length!=1)
                {
                  slayedtext += " and "+SlayedRunway[i].GetName();
                }
                else
                {
                  slayedtext += SlayedRunway[i].GetName();
                }
              }
            }
            Main.createText(slayedtext+" slayed the runway.", "Bold");
          }
      
          if(GreatRunway.length!=0)
          {
            for(let i = 0; i < GreatRunway.length; i++)
            {
              Main.createImage(GreatRunway[i].image,"#6effe4");
              if(i!=GreatRunway.length-1)
              {
                greattext += GreatRunway[i].GetName()+", ";
              }
              else
              {
                if(GreatRunway.length!=1)
                {
                  greattext += " and "+GreatRunway[i].GetName();
                }
                else
                {
                  greattext += GreatRunway[i].GetName();
                }
              }
            }
            Main.createText(greattext+" had a great runway.", "Bold");
          }
      
          if(GoodRunway.length!=0)
          {
            for(let i = 0; i < GoodRunway.length; i++)
            {
              Main.createImage(GoodRunway[i].image,"#6eff72");
              if(i!=GoodRunway.length-1)
              {
                goodtext += GoodRunway[i].GetName()+", ";
              }
              else
              {
                if(GoodRunway.length!=1)
                {
                  goodtext += " and "+GoodRunway[i].GetName();
                }
                else
                {
                  goodtext += GoodRunway[i].GetName();
                }
              }
            }
            Main.createText(goodtext+" had a good runway.", "Bold");
          }
      
          if(BadRunway.length!=0)
          {
            for(let i = 0; i < BadRunway.length; i++)
            {
              Main.createImage(BadRunway[i].image,"#ffe96e");
              if(i!=BadRunway.length-1)
              {
                badtext += BadRunway[i].GetName()+", ";
              }
              else
              {
                if(BadRunway.length!=1)
                {
                  badtext += " and "+BadRunway[i].GetName();
                }
                else
                {
                  badtext += BadRunway[i].GetName();
                }
              }
            }
            Main.createText(badtext+" had a bad runway.", "Bold");
          }
      
          if(FloppedRunway.length!=0)
          {
            for(let i = 0; i < FloppedRunway.length; i++)
            {
              Main.createImage(FloppedRunway[i].image,"#ff6e6e");
              if(i!=FloppedRunway.length-1)
              {
                floptext += FloppedRunway[i].GetName()+", ";
              }
              else
              {
                if(FloppedRunway.length!=1)
                {
                  floptext += " and "+FloppedRunway[i].GetName();
                }
                else
                {
                  floptext += FloppedRunway[i].GetName();
                }
              }
            }
            Main.createText(floptext+" flopped the runway.", "Bold");
          }
        }
      }
  
  class ActingChallenge{
  
    constructor(){
      this.type = "ACTING";
      this.hasrunway = true;
      this.winner = false;
      this.plays = [
        "Country Queens",
        "Queens In Spaces",
        "Queens Behind Bars",
        "Lip Sync Eleganza Extravaganza",
        "Drama Queens",
        "Scream Queens",
        "ShakesQueer",
        "Ru Hollywood Stories",
        "RuCo's Empire",
        "9021-HO",
        "Breastworld",
        "Good Girl, Get Out",
        "Gay's Anatomy",
        "RuPaulmark Channel",
        "Henny, I Shrunk The Drag Queens!",
        "She's A Super Tease",
        "The Daytona Winds",
        "Drag Movie Shequels",
        "My Best Squirrelfriend's Dragsmaids Wedding Trip",
        "Sex and the Kitty, Girl 3",
        "RuMerican Horror Story: Coven Girls",
        "Downton Draggy",
        "BeastEnders",
        "Bra Wars",
        "Her-Itage Moments",
        "Screech"
      ];
  
      this.chosen = getRandomInt(0,this.plays.length-1);
    }
  
    createMessage()
    {
      switch(getRandomInt(0,1))
      {
        case 0:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("I'm sorry to say but you have all been eliminated...");
          Announcement.createRupaulAnnouncement("HA! Got you all!");
          Announcement.createRupaulAnnouncement("Will you be able to do it like me ? Or you will fail ?");
          Announcement.createRupaulAnnouncement("Play the game to find out...");
          break;
        case 1:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Tonight, you will have to use your actings chops.");
          Announcement.createRupaulAnnouncement("Do you have what it takes ?");
          break;
      }
    }
  
    createBrief()
    {
      Main.createText("This week, the queens will have to act in : "+this.plays[this.chosen]+".");
    }
  
    TopPlacement()
    {
      
      let Top = [
      "Tonight, you knew how to work it OUT!",
      "Tonight, you shined all over this runway.",
      "You ruled over this runway.",
      "You made gold out of randomness.",
      "Your haute couture, made you rise to the top.",
      "You have creativity beyond limits.",
      "Tonight, you have made yourself stunning.",
      "Your couture made us gag.",
      "The cream always rises to the top.",
      "You have a great perception of design.",
      "Your outfit kept us begging for more."
      ];
      return(Top[getRandomInt(0,Top.length-1)]);
    }
  
    BtmPlacement()
    {
      
      let Btm = [
      ", you came here to slay, but tonight your outfit slayed you.",
      ", on the runway, you ran out of gas.",
      ", tonight the judges did not say yes to the dress.",
      ", your outfit had a story. A very confusing one.",
      ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
      ", your outfit made our heads turn, and made us dizzy.",
      ", you need to focus. Or else it's going to cost you.",
      ];
      return(Btm[getRandomInt(0,Btm.length-1)]);
    }
  
    rankPerfomances()
    {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].GetActing();
        }
  
        CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].perfomancescore<=8)
          {
            SlayedChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
          {
            GreatChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
          {
            GoodChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
          {
            BadChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>32)
          {
            FloppedChallenge.push(CurrentSeason.currentCast[i]);
          }
        }
  
    }
  
      createPerformances()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedChallenge.length!=0)
        {
          for(let i = 0; i < SlayedChallenge.length; i++)
          {
            Main.createImage(SlayedChallenge[i].image,"#6eadff");
            if(i!=SlayedChallenge.length-1)
            {
              slayedtext += SlayedChallenge[i].GetName()+", ";
            }
            else
            {
              if(SlayedChallenge.length!=1)
              {
                slayedtext += " and "+SlayedChallenge[i].GetName();
              }
              else
              {
                slayedtext += SlayedChallenge[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the challenge.", "Bold");
        }
    
        if(GreatChallenge.length!=0)
        {
          for(let i = 0; i < GreatChallenge.length; i++)
          {
            Main.createImage(GreatChallenge[i].image,"#6effe4");
            if(i!=GreatChallenge.length-1)
            {
              greattext += GreatChallenge[i].GetName()+", ";
            }
            else
            {
              if(GreatChallenge.length!=1)
              {
                greattext += " and "+GreatChallenge[i].GetName();
              }
              else
              {
                greattext += GreatChallenge[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great performance.", "Bold");
        }
    
        if(GoodChallenge.length!=0)
        {
          for(let i = 0; i < GoodChallenge.length; i++)
          {
            Main.createImage(GoodChallenge[i].image,"#6eff72");
            if(i!=GoodChallenge.length-1)
            {
              goodtext += GoodChallenge[i].GetName()+", ";
            }
            else
            {
              if(GoodChallenge.length!=1)
              {
                goodtext += " and "+GoodChallenge[i].GetName();
              }
              else
              {
                goodtext += GoodChallenge[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good performance.", "Bold");
        }
    
        if(BadChallenge.length!=0)
        {
          for(let i = 0; i < BadChallenge.length; i++)
          {
            Main.createImage(BadChallenge[i].image,"#ffe96e");
            if(i!=BadChallenge.length-1)
            {
              badtext += BadChallenge[i].GetName()+", ";
            }
            else
            {
              if(BadChallenge.length!=1)
              {
                badtext += " and "+BadChallenge[i].GetName();
              }
              else
              {
                badtext += BadChallenge[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad performance.", "Bold");
        }
    
        if(FloppedChallenge.length!=0)
        {
          for(let i = 0; i < FloppedChallenge.length; i++)
          {
            Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
            if(i!=FloppedChallenge.length-1)
            {
              floptext += FloppedChallenge[i].GetName()+", ";
            }
            else
            {
              if(FloppedChallenge.length!=1)
              {
                floptext += " and "+FloppedChallenge[i].GetName();
              }
              else
              {
                floptext += FloppedChallenge[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the challenge.", "Bold");
        }
      }
  
      rankRunways()
      {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].getRunway();
          CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
        }
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].runwayscore<=2)
          {
            FloppedRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
          {
            BadRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
          {
            GoodRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
          {
            GreatRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>13)
          {
            SlayedRunway.push(CurrentSeason.currentCast[i]);
          }
        }
      }
  
      createRunways()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedRunway.length!=0)
        {
          for(let i = 0; i < SlayedRunway.length; i++)
          {
            Main.createImage(SlayedRunway[i].image,"#6eadff");
            if(i!=SlayedRunway.length-1)
            {
              slayedtext += SlayedRunway[i].GetName()+", ";
            }
            else
            {
              if(SlayedRunway.length!=1)
              {
                slayedtext += " and "+SlayedRunway[i].GetName();
              }
              else
              {
                slayedtext += SlayedRunway[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the runway.", "Bold");
        }
    
        if(GreatRunway.length!=0)
        {
          for(let i = 0; i < GreatRunway.length; i++)
          {
            Main.createImage(GreatRunway[i].image,"#6effe4");
            if(i!=GreatRunway.length-1)
            {
              greattext += GreatRunway[i].GetName()+", ";
            }
            else
            {
              if(GreatRunway.length!=1)
              {
                greattext += " and "+GreatRunway[i].GetName();
              }
              else
              {
                greattext += GreatRunway[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great runway.", "Bold");
        }
    
        if(GoodRunway.length!=0)
        {
          for(let i = 0; i < GoodRunway.length; i++)
          {
            Main.createImage(GoodRunway[i].image,"#6eff72");
            if(i!=GoodRunway.length-1)
            {
              goodtext += GoodRunway[i].GetName()+", ";
            }
            else
            {
              if(GoodRunway.length!=1)
              {
                goodtext += " and "+GoodRunway[i].GetName();
              }
              else
              {
                goodtext += GoodRunway[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good runway.", "Bold");
        }
    
        if(BadRunway.length!=0)
        {
          for(let i = 0; i < BadRunway.length; i++)
          {
            Main.createImage(BadRunway[i].image,"#ffe96e");
            if(i!=BadRunway.length-1)
            {
              badtext += BadRunway[i].GetName()+", ";
            }
            else
            {
              if(BadRunway.length!=1)
              {
                badtext += " and "+BadRunway[i].GetName();
              }
              else
              {
                badtext += BadRunway[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad runway.", "Bold");
        }
    
        if(FloppedRunway.length!=0)
        {
          for(let i = 0; i < FloppedRunway.length; i++)
          {
            Main.createImage(FloppedRunway[i].image,"#ff6e6e");
            if(i!=FloppedRunway.length-1)
            {
              floptext += FloppedRunway[i].GetName()+", ";
            }
            else
            {
              if(FloppedRunway.length!=1)
              {
                floptext += " and "+FloppedRunway[i].GetName();
              }
              else
              {
                floptext += FloppedRunway[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the runway.", "Bold");
        }
      }
    }
  
  class ImprovChallenge{
  
    constructor(){
      this.type = "IMPROV";
      this.hasrunway = true;
      this.winner = false;
      this.improv = [
        " in an interview with a celebrity.",
        " in a news program named : \"QNN News\".",
        " in a news program named : \"Morning Glory\".",
        " in a news program named : \"Good Morning Bitches\".",
        " in a political debate.",
        " in a talk show named : \"Pink Table Talk\".",
        " in a talk show talking about celebrities.",
        " in drag cons panels!",
        " in a brand new kids TV show.",
        " in a brand new program : \"World's Worst\".",
        " in a brand new program : \"The Bossy Rossy Show\".",
        " in a brand new program : \"The Bitchelor\".",
        " in a brand new program : \"Los Angeles Drag Patrol\".",
        " in a brand new report : \"SheMZ\".",
        " in a brand new program : \"Jersey Justice\".",
      ];
  
      this.as7=[
        " in a brand new program : \"Fairytale Justice \".",
        " in a public speaking involved challenge."
      ]
  
      this.interviews = [
        "Queens Of All Medias",
        "Drag Queen Of Talk"
      ];
  
      this.debate = [
        "Choices 2020",
        "Frock The Votel"
      ];
  
      this.chosen = getRandomInt(0,this.improv.length-1);
      this.episodename = "";
      switch(this.chosen)
      {
        case 0:
          this.episodename = this.interviews[getRandomInt(0,this.interviews.length-1)];
          break;
        case 1:
          this.episodename = "QQN News";
          break;
        case 2:
          this.episodename = "Morning Glory";
          break;
        case 3:
          this.episodename = "Good Morning Bitches";
          break;
        case 4:
          this.episodename = this.debate[getRandomInt(0,this.debate.length-1)];
          break;
        case 5:
          this.episodename = "Pink Table Talk";
          break;
        case 6:
          this.episodename = "Diva Worships";
          break;
        case 7:
          this.episodename = "Menzeses";
          break;
        case 8:
          this.episodename = "Draggle Rock";
          break;
        case 9:
          this.episodename = "World's Worst";
          break;
        case 10:
          this.episodename = "The Bossy Rossy Show";
          break;
        case 11:
          this.episodename = "The Bitchelor";
          break;
        case 12:
          this.episodename = "L.A.D.P.";
          break;
        case 13:
          this.episodename = "SheMZ";
          break;
        case 14:
          this.episodename = "Jersey Justice";
          break;
      }
  
      if(CurrentSeason.lipsyncformat=="AS7" && CurrentSeason.episodes.length==3)
      {
        this.chosen = this.as7[0];
        this.episodename = "Fairy Tale Justice";
      }
  
      if(CurrentSeason.lipsyncformat=="AS7" && CurrentSeason.episodes.length==7)
      {
        this.chosen = this.as7[1];
        this.episodename = "Public Speaking";
      }
  
    }
    
  
    createMessage()
    {
      switch(getRandomInt(0,1))
      {
        case 0:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Do you know how to lie on the spot ?");
          Announcement.createRupaulAnnouncement("Well if you do you're gonna need it!");
          break;
        case 1:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Tonight, I have a favor to ask of you all.");
          Announcement.createRupaulAnnouncement("Prepare yourself for what's gonna come, because you're going to need a lot of preparings to do well!");
          break;
      }
    }
  
    createBrief()
    {
      if(CurrentSeason.lipsyncformat == "AS7")
      {
        Main.createText("This week, the queens will have to improvise "+this.chosen);
      }
      else
      {
        Main.createText("This week, the queens will have to improvise "+this.improv[this.chosen]);
      }
    }
  
    TopPlacement()
    {
      
      let Top = [
      "Tonight, you knew how to work it OUT!",
      "Tonight, you shined all over this runway.",
      "You ruled over this runway.",
      "You made gold out of randomness.",
      "Your haute couture, made you rise to the top.",
      "You have creativity beyond limits.",
      "Tonight, you have made yourself stunning.",
      "Your couture made us gag.",
      "The cream always rises to the top.",
      "You have a great perception of design.",
      "Your outfit kept us begging for more."
      ];
      return(Top[getRandomInt(0,Top.length-1)]);
    }
  
    BtmPlacement()
    {
      
      let Btm = [
      ", you came here to slay, but tonight your outfit slayed you.",
      ", on the runway, you ran out of gas.",
      ", tonight the judges did not say yes to the dress.",
      ", your outfit had a story. A very confusing one.",
      ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
      ", your outfit made our heads turn, and made us dizzy.",
      ", you need to focus. Or else it's going to cost you.",
      ];
      return(Btm[getRandomInt(0,Btm.length-1)]);
    }
  
    rankPerfomances()
    {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].GetImprov();
        }
  
        CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].perfomancescore<=8)
          {
            SlayedChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
          {
            GreatChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
          {
            GoodChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
          {
            BadChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>32)
          {
            FloppedChallenge.push(CurrentSeason.currentCast[i]);
          }
        }
  
    }
  
      createPerformances()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedChallenge.length!=0)
        {
          for(let i = 0; i < SlayedChallenge.length; i++)
          {
            Main.createImage(SlayedChallenge[i].image,"#6eadff");
            if(i!=SlayedChallenge.length-1)
            {
              slayedtext += SlayedChallenge[i].GetName()+", ";
            }
            else
            {
              if(SlayedChallenge.length!=1)
              {
                slayedtext += " and "+SlayedChallenge[i].GetName();
              }
              else
              {
                slayedtext += SlayedChallenge[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the challenge.", "Bold");
        }
    
        if(GreatChallenge.length!=0)
        {
          for(let i = 0; i < GreatChallenge.length; i++)
          {
            Main.createImage(GreatChallenge[i].image,"#6effe4");
            if(i!=GreatChallenge.length-1)
            {
              greattext += GreatChallenge[i].GetName()+", ";
            }
            else
            {
              if(GreatChallenge.length!=1)
              {
                greattext += " and "+GreatChallenge[i].GetName();
              }
              else
              {
                greattext += GreatChallenge[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great performance.", "Bold");
        }
    
        if(GoodChallenge.length!=0)
        {
          for(let i = 0; i < GoodChallenge.length; i++)
          {
            Main.createImage(GoodChallenge[i].image,"#6eff72");
            if(i!=GoodChallenge.length-1)
            {
              goodtext += GoodChallenge[i].GetName()+", ";
            }
            else
            {
              if(GoodChallenge.length!=1)
              {
                goodtext += " and "+GoodChallenge[i].GetName();
              }
              else
              {
                goodtext += GoodChallenge[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good performance.", "Bold");
        }
    
        if(BadChallenge.length!=0)
        {
          for(let i = 0; i < BadChallenge.length; i++)
          {
            Main.createImage(BadChallenge[i].image,"#ffe96e");
            if(i!=BadChallenge.length-1)
            {
              badtext += BadChallenge[i].GetName()+", ";
            }
            else
            {
              if(BadChallenge.length!=1)
              {
                badtext += " and "+BadChallenge[i].GetName();
              }
              else
              {
                badtext += BadChallenge[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad performance.", "Bold");
        }
    
        if(FloppedChallenge.length!=0)
        {
          for(let i = 0; i < FloppedChallenge.length; i++)
          {
            Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
            if(i!=FloppedChallenge.length-1)
            {
              floptext += FloppedChallenge[i].GetName()+", ";
            }
            else
            {
              if(FloppedChallenge.length!=1)
              {
                floptext += " and "+FloppedChallenge[i].GetName();
              }
              else
              {
                floptext += FloppedChallenge[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the challenge.", "Bold");
        }
      }
  
      rankRunways()
      {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].getRunway();
          CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
        }
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].runwayscore<=2)
          {
            FloppedRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
          {
            BadRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
          {
            GoodRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
          {
            GreatRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>13)
          {
            SlayedRunway.push(CurrentSeason.currentCast[i]);
          }
        }
      }
  
      createRunways()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedRunway.length!=0)
        {
          for(let i = 0; i < SlayedRunway.length; i++)
          {
            Main.createImage(SlayedRunway[i].image,"#6eadff");
            if(i!=SlayedRunway.length-1)
            {
              slayedtext += SlayedRunway[i].GetName()+", ";
            }
            else
            {
              if(SlayedRunway.length!=1)
              {
                slayedtext += " and "+SlayedRunway[i].GetName();
              }
              else
              {
                slayedtext += SlayedRunway[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the runway.", "Bold");
        }
    
        if(GreatRunway.length!=0)
        {
          for(let i = 0; i < GreatRunway.length; i++)
          {
            Main.createImage(GreatRunway[i].image,"#6effe4");
            if(i!=GreatRunway.length-1)
            {
              greattext += GreatRunway[i].GetName()+", ";
            }
            else
            {
              if(GreatRunway.length!=1)
              {
                greattext += " and "+GreatRunway[i].GetName();
              }
              else
              {
                greattext += GreatRunway[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great runway.", "Bold");
        }
    
        if(GoodRunway.length!=0)
        {
          for(let i = 0; i < GoodRunway.length; i++)
          {
            Main.createImage(GoodRunway[i].image,"#6eff72");
            if(i!=GoodRunway.length-1)
            {
              goodtext += GoodRunway[i].GetName()+", ";
            }
            else
            {
              if(GoodRunway.length!=1)
              {
                goodtext += " and "+GoodRunway[i].GetName();
              }
              else
              {
                goodtext += GoodRunway[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good runway.", "Bold");
        }
    
        if(BadRunway.length!=0)
        {
          for(let i = 0; i < BadRunway.length; i++)
          {
            Main.createImage(BadRunway[i].image,"#ffe96e");
            if(i!=BadRunway.length-1)
            {
              badtext += BadRunway[i].GetName()+", ";
            }
            else
            {
              if(BadRunway.length!=1)
              {
                badtext += " and "+BadRunway[i].GetName();
              }
              else
              {
                badtext += BadRunway[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad runway.", "Bold");
        }
    
        if(FloppedRunway.length!=0)
        {
          for(let i = 0; i < FloppedRunway.length; i++)
          {
            Main.createImage(FloppedRunway[i].image,"#ff6e6e");
            if(i!=FloppedRunway.length-1)
            {
              floptext += FloppedRunway[i].GetName()+", ";
            }
            else
            {
              if(FloppedRunway.length!=1)
              {
                floptext += " and "+FloppedRunway[i].GetName();
              }
              else
              {
                floptext += FloppedRunway[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the runway.", "Bold");
        }
      }
    }
  
    class ChoreographyChallenge{
  
    constructor(){
      this.type = "CHOREO";
      this.hasrunway = true;
      this.winner = false;
      this.choreo = [
        "WTF!: Wrestling's Trashiest Fighters",
        "Black Swan: Why It Gotta Be Black?",
        "Prancing Queens",
        "She Done Already Done Brought It On",
        "The Draglympics",
        "Disco-Mentary",
        "Dragoton"
      ];
  
      this.chosen = getRandomInt(0,this.choreo.length-1);
  
      this.episodename = "";
      switch(this.chosen)
      {
        case 0:
          this.episodename = "WTF!";
          break;
        case 1:
          this.episodename = "Black Swan";
          break;
        case 2:
          this.episodename = "Prancing Queens";
          break;
        case 3:
          this.episodename = "She Done Already Done Brought It On";
          break;
        case 4:
          this.episodename = "The Draglympics";
          break;
        case 5:
          this.episodename = "Disco-Mentary";
          break;
        case 6:
          this.episodename = "Dragoton";
          break;
      }
    }
  
    createMessage()
    {
      switch(getRandomInt(0,1))
      {
        case 0:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Does dancing ring a bell ?");
          Announcement.createRupaulAnnouncement("Because, tonight, you'll have to choreograph your way to the top!");
          break;
        case 1:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Are you prepared ?");
          Announcement.createRupaulAnnouncement("Tonight it's dancing time!");
          break;
      }
    }
  
    createBrief()
    {
      Main.createText("This week, the queens will have to choreograph themselves in : \""+this.choreo[this.chosen]+"\".");
    }
  
    TopPlacement()
    {
      
      let Top = [
      "Tonight, your choreography blew us away.",
      "Tonight, we saw how bright you shine.",
      "You have dancing running throught your veins.",
      "Tonight, you showed up and showed out.",
      "You truly showed us what you are capable of.",
      "Tonight, you proved yourself.",
      ];
      return(Top[getRandomInt(0,Top.length-1)]);
    }
  
    BtmPlacement()
    {
      
      let Btm = [
      ", your comedy could have used a few laugh.",
      ", on the runway, you ran out of gas.",
      ", tonight the judges did not say yes to the dress.",
      ", your outfit had a story. A very confusing one.",
      ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
      ", your outfit made our heads turn, and made us dizzy.",
      ", you need to focus. Or else it's going to cost you.",
      ];
      return(Btm[getRandomInt(0,Btm.length-1)]);
    }
  
    rankPerfomances()
    {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].GetDancing();
        }
  
        CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].perfomancescore<=8)
          {
            SlayedChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
          {
            GreatChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
          {
            GoodChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
          {
            BadChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>32)
          {
            FloppedChallenge.push(CurrentSeason.currentCast[i]);
          }
        }
  
    }
  
      createPerformances()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedChallenge.length!=0)
        {
          for(let i = 0; i < SlayedChallenge.length; i++)
          {
            Main.createImage(SlayedChallenge[i].image,"#6eadff");
            if(i!=SlayedChallenge.length-1)
            {
              slayedtext += SlayedChallenge[i].GetName()+", ";
            }
            else
            {
              if(SlayedChallenge.length!=1)
              {
                slayedtext += " and "+SlayedChallenge[i].GetName();
              }
              else
              {
                slayedtext += SlayedChallenge[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the challenge.", "Bold");
        }
    
        if(GreatChallenge.length!=0)
        {
          for(let i = 0; i < GreatChallenge.length; i++)
          {
            Main.createImage(GreatChallenge[i].image,"#6effe4");
            if(i!=GreatChallenge.length-1)
            {
              greattext += GreatChallenge[i].GetName()+", ";
            }
            else
            {
              if(GreatChallenge.length!=1)
              {
                greattext += " and "+GreatChallenge[i].GetName();
              }
              else
              {
                greattext += GreatChallenge[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great performance.", "Bold");
        }
    
        if(GoodChallenge.length!=0)
        {
          for(let i = 0; i < GoodChallenge.length; i++)
          {
            Main.createImage(GoodChallenge[i].image,"#6eff72");
            if(i!=GoodChallenge.length-1)
            {
              goodtext += GoodChallenge[i].GetName()+", ";
            }
            else
            {
              if(GoodChallenge.length!=1)
              {
                goodtext += " and "+GoodChallenge[i].GetName();
              }
              else
              {
                goodtext += GoodChallenge[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good performance.", "Bold");
        }
    
        if(BadChallenge.length!=0)
        {
          for(let i = 0; i < BadChallenge.length; i++)
          {
            Main.createImage(BadChallenge[i].image,"#ffe96e");
            if(i!=BadChallenge.length-1)
            {
              badtext += BadChallenge[i].GetName()+", ";
            }
            else
            {
              if(BadChallenge.length!=1)
              {
                badtext += " and "+BadChallenge[i].GetName();
              }
              else
              {
                badtext += BadChallenge[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad performance.", "Bold");
        }
    
        if(FloppedChallenge.length!=0)
        {
          for(let i = 0; i < FloppedChallenge.length; i++)
          {
            Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
            if(i!=FloppedChallenge.length-1)
            {
              floptext += FloppedChallenge[i].GetName()+", ";
            }
            else
            {
              if(FloppedChallenge.length!=1)
              {
                floptext += " and "+FloppedChallenge[i].GetName();
              }
              else
              {
                floptext += FloppedChallenge[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the challenge.", "Bold");
        }
      }
  
      rankRunways()
      {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].getRunway();
          CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
        }
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].runwayscore<=2)
          {
            FloppedRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
          {
            BadRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
          {
            GoodRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
          {
            GreatRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>13)
          {
            SlayedRunway.push(CurrentSeason.currentCast[i]);
          }
        }
      }

    createRunways()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedRunway.length!=0)
      {
        for(let i = 0; i < SlayedRunway.length; i++)
        {
          Main.createImage(SlayedRunway[i].image,"#6eadff");
          if(i!=SlayedRunway.length-1)
          {
            slayedtext += SlayedRunway[i].GetName()+", ";
          }
          else
          {
            if(SlayedRunway.length!=1)
            {
              slayedtext += " and "+SlayedRunway[i].GetName();
            }
            else
            {
              slayedtext += SlayedRunway[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the runway.", "Bold");
      }
  
      if(GreatRunway.length!=0)
      {
        for(let i = 0; i < GreatRunway.length; i++)
        {
          Main.createImage(GreatRunway[i].image,"#6effe4");
          if(i!=GreatRunway.length-1)
          {
            greattext += GreatRunway[i].GetName()+", ";
          }
          else
          {
            if(GreatRunway.length!=1)
            {
              greattext += " and "+GreatRunway[i].GetName();
            }
            else
            {
              greattext += GreatRunway[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great runway.", "Bold");
      }
  
      if(GoodRunway.length!=0)
      {
        for(let i = 0; i < GoodRunway.length; i++)
        {
          Main.createImage(GoodRunway[i].image,"#6eff72");
          if(i!=GoodRunway.length-1)
          {
            goodtext += GoodRunway[i].GetName()+", ";
          }
          else
          {
            if(GoodRunway.length!=1)
            {
              goodtext += " and "+GoodRunway[i].GetName();
            }
            else
            {
              goodtext += GoodRunway[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good runway.", "Bold");
      }
  
      if(BadRunway.length!=0)
      {
        for(let i = 0; i < BadRunway.length; i++)
        {
          Main.createImage(BadRunway[i].image,"#ffe96e");
          if(i!=BadRunway.length-1)
          {
            badtext += BadRunway[i].GetName()+", ";
          }
          else
          {
            if(BadRunway.length!=1)
            {
              badtext += " and "+BadRunway[i].GetName();
            }
            else
            {
              badtext += BadRunway[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad runway.", "Bold");
      }
  
      if(FloppedRunway.length!=0)
      {
        for(let i = 0; i < FloppedRunway.length; i++)
        {
          Main.createImage(FloppedRunway[i].image,"#ff6e6e");
          if(i!=FloppedRunway.length-1)
          {
            floptext += FloppedRunway[i].GetName()+", ";
          }
          else
          {
            if(FloppedRunway.length!=1)
            {
              floptext += " and "+FloppedRunway[i].GetName();
            }
            else
            {
              floptext += FloppedRunway[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the runway.", "Bold");
      }
    }
  }

  
  class CommercialChallenge{

    constructor(){
      this.type = "COMMERCIAL";
      this.hasrunway = true;
      this.winner = false;
      this.commercial = [
        "need to create a commercial that ressembles a sport routine.",
        "need to create a commercial about MAC Viva Glam.",
        "need to create patriotic video messages to the troops.",
        "need to create commercials for RuPaul's albums Glamazon & Champion.",
        "need to create commercials for RuPaul's new makeup line.",
        "need to create commercials for a new dating app.",
        "need to create commercial about forgotten firsts outs queens."
      ];
  
      this.chosen = getRandomInt(0,this.commercial.length-1);
  
      this.episodename = "";
      switch(this.chosen)
      {
        case 0:
          this.episodename = "Totally Leotarded";
          break;
        case 1:
          this.episodename = "MAC Viva Glam";
          break;
        case 2:
          this.episodename = "Life, Liberty & the Pursuit of Style";
          break;
        case 3:
          this.episodename = "Glamazons vs Champions";
          break;
        case 4:
          this.episodename = "Glamazon by Colorevolution";
          break;
        case 5:
          this.episodename = "Tap That App";
          break;
        case 6:
          this.episodename = "Save A Queen";
          break;
      }
    }
  
    createMessage()
    {
      switch(getRandomInt(0,1))
      {
        case 0:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Do you have a storyboard ?");
          Announcement.createRupaulAnnouncement("Or will your story ends ?");
          Announcement.createRupaulAnnouncement("Time to find out!");
          break;
        case 1:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Are you ready for tonight!");
          Announcement.createRupaulAnnouncement("You'll have to give it your all.");
          Announcement.createRupaulAnnouncement("Good luck!");
          break;
      }
    }
  
    createBrief()
    {
      Main.createText("This week, the queens will "+this.commercial[this.chosen]);
    }
  
    TopPlacement()
    {
      
      let Top = [
      "Tonight, your choreography blew us away.",
      "Tonight, we saw how bright you shine.",
      "You have dancing running throught your veins.",
      "Tonight, you showed up and showed out.",
      "You truly showed us what you are capable of.",
      "Tonight, you proved yourself.",
      ];
      return(Top[getRandomInt(0,Top.length-1)]);
    }
  
    BtmPlacement()
    {
      
      let Btm = [
      ", your comedy could have used a few laugh.",
      ", on the runway, you ran out of gas.",
      ", tonight the judges did not say yes to the dress.",
      ", your outfit had a story. A very confusing one.",
      ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
      ", your outfit made our heads turn, and made us dizzy.",
      ", you need to focus. Or else it's going to cost you.",
      ];
      return(Btm[getRandomInt(0,Btm.length-1)]);
    }
  
    rankPerfomances()
    {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].GetCommercial();
        }
  
        CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].perfomancescore<=8)
          {
            SlayedChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
          {
            GreatChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
          {
            GoodChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
          {
            BadChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>32)
          {
            FloppedChallenge.push(CurrentSeason.currentCast[i]);
          }
        }
  
    }
  
      createPerformances()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedChallenge.length!=0)
        {
          for(let i = 0; i < SlayedChallenge.length; i++)
          {
            Main.createImage(SlayedChallenge[i].image,"#6eadff");
            if(i!=SlayedChallenge.length-1)
            {
              slayedtext += SlayedChallenge[i].GetName()+", ";
            }
            else
            {
              if(SlayedChallenge.length!=1)
              {
                slayedtext += " and "+SlayedChallenge[i].GetName();
              }
              else
              {
                slayedtext += SlayedChallenge[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the challenge.", "Bold");
        }
    
        if(GreatChallenge.length!=0)
        {
          for(let i = 0; i < GreatChallenge.length; i++)
          {
            Main.createImage(GreatChallenge[i].image,"#6effe4");
            if(i!=GreatChallenge.length-1)
            {
              greattext += GreatChallenge[i].GetName()+", ";
            }
            else
            {
              if(GreatChallenge.length!=1)
              {
                greattext += " and "+GreatChallenge[i].GetName();
              }
              else
              {
                greattext += GreatChallenge[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great performance.", "Bold");
        }
    
        if(GoodChallenge.length!=0)
        {
          for(let i = 0; i < GoodChallenge.length; i++)
          {
            Main.createImage(GoodChallenge[i].image,"#6eff72");
            if(i!=GoodChallenge.length-1)
            {
              goodtext += GoodChallenge[i].GetName()+", ";
            }
            else
            {
              if(GoodChallenge.length!=1)
              {
                goodtext += " and "+GoodChallenge[i].GetName();
              }
              else
              {
                goodtext += GoodChallenge[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good performance.", "Bold");
        }
    
        if(BadChallenge.length!=0)
        {
          for(let i = 0; i < BadChallenge.length; i++)
          {
            Main.createImage(BadChallenge[i].image,"#ffe96e");
            if(i!=BadChallenge.length-1)
            {
              badtext += BadChallenge[i].GetName()+", ";
            }
            else
            {
              if(BadChallenge.length!=1)
              {
                badtext += " and "+BadChallenge[i].GetName();
              }
              else
              {
                badtext += BadChallenge[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad performance.", "Bold");
        }
    
        if(FloppedChallenge.length!=0)
        {
          for(let i = 0; i < FloppedChallenge.length; i++)
          {
            Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
            if(i!=FloppedChallenge.length-1)
            {
              floptext += FloppedChallenge[i].GetName()+", ";
            }
            else
            {
              if(FloppedChallenge.length!=1)
              {
                floptext += " and "+FloppedChallenge[i].GetName();
              }
              else
              {
                floptext += FloppedChallenge[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the challenge.", "Bold");
        }
      }
  
      rankRunways()
      {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].getRunway();
          CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
        }
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].runwayscore<=2)
          {
            FloppedRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
          {
            BadRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
          {
            GoodRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
          {
            GreatRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>13)
          {
            SlayedRunway.push(CurrentSeason.currentCast[i]);
          }
        }
      }
  
      createRunways()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedRunway.length!=0)
        {
          for(let i = 0; i < SlayedRunway.length; i++)
          {
            Main.createImage(SlayedRunway[i].image,"#6eadff");
            if(i!=SlayedRunway.length-1)
            {
              slayedtext += SlayedRunway[i].GetName()+", ";
            }
            else
            {
              if(SlayedRunway.length!=1)
              {
                slayedtext += " and "+SlayedRunway[i].GetName();
              }
              else
              {
                slayedtext += SlayedRunway[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the runway.", "Bold");
        }
    
        if(GreatRunway.length!=0)
        {
          for(let i = 0; i < GreatRunway.length; i++)
          {
            Main.createImage(GreatRunway[i].image,"#6effe4");
            if(i!=GreatRunway.length-1)
            {
              greattext += GreatRunway[i].GetName()+", ";
            }
            else
            {
              if(GreatRunway.length!=1)
              {
                greattext += " and "+GreatRunway[i].GetName();
              }
              else
              {
                greattext += GreatRunway[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great runway.", "Bold");
        }
    
        if(GoodRunway.length!=0)
        {
          for(let i = 0; i < GoodRunway.length; i++)
          {
            Main.createImage(GoodRunway[i].image,"#6eff72");
            if(i!=GoodRunway.length-1)
            {
              goodtext += GoodRunway[i].GetName()+", ";
            }
            else
            {
              if(GoodRunway.length!=1)
              {
                goodtext += " and "+GoodRunway[i].GetName();
              }
              else
              {
                goodtext += GoodRunway[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good runway.", "Bold");
        }
    
        if(BadRunway.length!=0)
        {
          for(let i = 0; i < BadRunway.length; i++)
          {
            Main.createImage(BadRunway[i].image,"#ffe96e");
            if(i!=BadRunway.length-1)
            {
              badtext += BadRunway[i].GetName()+", ";
            }
            else
            {
              if(BadRunway.length!=1)
              {
                badtext += " and "+BadRunway[i].GetName();
              }
              else
              {
                badtext += BadRunway[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad runway.", "Bold");
        }
    
        if(FloppedRunway.length!=0)
        {
          for(let i = 0; i < FloppedRunway.length; i++)
          {
            Main.createImage(FloppedRunway[i].image,"#ff6e6e");
            if(i!=FloppedRunway.length-1)
            {
              floptext += FloppedRunway[i].GetName()+", ";
            }
            else
            {
              if(FloppedRunway.length!=1)
              {
                floptext += " and "+FloppedRunway[i].GetName();
              }
              else
              {
                floptext += FloppedRunway[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the runway.", "Bold");
        }
      }
    }

  class BrandingChallenge{

    constructor(){
      this.type = "BRANDING";
      this.hasrunway = true;
      this.winner = false;
      this.commercial = [
        "need to create a commercial about their own book.",
        "need to create a commercial about their own magazine.",
        "need to create a commercial about their own perfume.",
        "need to create a commercial about them becoming drag president.",
        "need to create a commercial about their own tv pilot.",
        "need to create a commercial about their own product.",
        "need to create a commercial about their own drink.",
        "need to create a commercial about their yeast spread.",
      ];
  
      this.chosen = getRandomInt(0,this.commercial.length-1);
  
      this.episodename = "";
      switch(this.chosen)
      {
        case 0:
          this.episodename = "Once Upon a Queen";
          break;
        case 1:
          this.episodename = "Dragazines";
          break;
        case 2:
          this.episodename = "Scent of a Drag Queen";
          break;
        case 3:
          this.episodename = "Shady Politics";
          break;
        case 4:
          this.episodename = "Your Pilot's On Fire";
          break;
        case 5:
          this.episodename = "Droop";
          break;
        case 6:
          this.episodename = "Pop! Goes the Queens";
          break;
        case 7:
          this.episodename = "Marketing Hats";
          break;
      }
    }
  
    createMessage()
    {
      switch(getRandomInt(0,1))
      {
        case 0:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Do you have a storyboard ?");
          Announcement.createRupaulAnnouncement("Or will your story ends ?");
          Announcement.createRupaulAnnouncement("Time to find out!");
          break;
        case 1:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Are you ready for tonight!");
          Announcement.createRupaulAnnouncement("You'll have to give it your all.");
          Announcement.createRupaulAnnouncement("Good luck!");
          break;
      }
    }
  
    createBrief()
    {
      Main.createText("This week, the queens will "+this.commercial[this.chosen]);
    }
  
    TopPlacement()
    {
      
      let Top = [
      "Tonight, your choreography blew us away.",
      "Tonight, we saw how bright you shine.",
      "You have dancing running throught your veins.",
      "Tonight, you showed up and showed out.",
      "You truly showed us what you are capable of.",
      "Tonight, you proved yourself.",
      ];
      return(Top[getRandomInt(0,Top.length-1)]);
    }
  
    BtmPlacement()
    {
      
      let Btm = [
      ", your comedy could have used a few laugh.",
      ", on the runway, you ran out of gas.",
      ", tonight the judges did not say yes to the dress.",
      ", your outfit had a story. A very confusing one.",
      ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
      ", your outfit made our heads turn, and made us dizzy.",
      ", you need to focus. Or else it's going to cost you.",
      ];
      return(Btm[getRandomInt(0,Btm.length-1)]);
    }
  
    rankPerfomances()
    {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].GetCommercial();
        }
  
        CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].perfomancescore<=8)
          {
            SlayedChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
          {
            GreatChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
          {
            GoodChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
          {
            BadChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>32)
          {
            FloppedChallenge.push(CurrentSeason.currentCast[i]);
          }
        }
  
    }
  
      createPerformances()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedChallenge.length!=0)
        {
          for(let i = 0; i < SlayedChallenge.length; i++)
          {
            Main.createImage(SlayedChallenge[i].image,"#6eadff");
            if(i!=SlayedChallenge.length-1)
            {
              slayedtext += SlayedChallenge[i].GetName()+", ";
            }
            else
            {
              if(SlayedChallenge.length!=1)
              {
                slayedtext += " and "+SlayedChallenge[i].GetName();
              }
              else
              {
                slayedtext += SlayedChallenge[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the challenge.", "Bold");
        }
    
        if(GreatChallenge.length!=0)
        {
          for(let i = 0; i < GreatChallenge.length; i++)
          {
            Main.createImage(GreatChallenge[i].image,"#6effe4");
            if(i!=GreatChallenge.length-1)
            {
              greattext += GreatChallenge[i].GetName()+", ";
            }
            else
            {
              if(GreatChallenge.length!=1)
              {
                greattext += " and "+GreatChallenge[i].GetName();
              }
              else
              {
                greattext += GreatChallenge[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great performance.", "Bold");
        }
    
        if(GoodChallenge.length!=0)
        {
          for(let i = 0; i < GoodChallenge.length; i++)
          {
            Main.createImage(GoodChallenge[i].image,"#6eff72");
            if(i!=GoodChallenge.length-1)
            {
              goodtext += GoodChallenge[i].GetName()+", ";
            }
            else
            {
              if(GoodChallenge.length!=1)
              {
                goodtext += " and "+GoodChallenge[i].GetName();
              }
              else
              {
                goodtext += GoodChallenge[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good performance.", "Bold");
        }
    
        if(BadChallenge.length!=0)
        {
          for(let i = 0; i < BadChallenge.length; i++)
          {
            Main.createImage(BadChallenge[i].image,"#ffe96e");
            if(i!=BadChallenge.length-1)
            {
              badtext += BadChallenge[i].GetName()+", ";
            }
            else
            {
              if(BadChallenge.length!=1)
              {
                badtext += " and "+BadChallenge[i].GetName();
              }
              else
              {
                badtext += BadChallenge[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad performance.", "Bold");
        }
    
        if(FloppedChallenge.length!=0)
        {
          for(let i = 0; i < FloppedChallenge.length; i++)
          {
            Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
            if(i!=FloppedChallenge.length-1)
            {
              floptext += FloppedChallenge[i].GetName()+", ";
            }
            else
            {
              if(FloppedChallenge.length!=1)
              {
                floptext += " and "+FloppedChallenge[i].GetName();
              }
              else
              {
                floptext += FloppedChallenge[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the challenge.", "Bold");
        }
      }
  
      rankRunways()
      {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].getRunway();
          CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
        }
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].runwayscore<=2)
          {
            FloppedRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
          {
            BadRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
          {
            GoodRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
          {
            GreatRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>13)
          {
            SlayedRunway.push(CurrentSeason.currentCast[i]);
          }
        }
      }
  
      createRunways()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedRunway.length!=0)
        {
          for(let i = 0; i < SlayedRunway.length; i++)
          {
            Main.createImage(SlayedRunway[i].image,"#6eadff");
            if(i!=SlayedRunway.length-1)
            {
              slayedtext += SlayedRunway[i].GetName()+", ";
            }
            else
            {
              if(SlayedRunway.length!=1)
              {
                slayedtext += " and "+SlayedRunway[i].GetName();
              }
              else
              {
                slayedtext += SlayedRunway[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the runway.", "Bold");
        }
    
        if(GreatRunway.length!=0)
        {
          for(let i = 0; i < GreatRunway.length; i++)
          {
            Main.createImage(GreatRunway[i].image,"#6effe4");
            if(i!=GreatRunway.length-1)
            {
              greattext += GreatRunway[i].GetName()+", ";
            }
            else
            {
              if(GreatRunway.length!=1)
              {
                greattext += " and "+GreatRunway[i].GetName();
              }
              else
              {
                greattext += GreatRunway[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great runway.", "Bold");
        }
    
        if(GoodRunway.length!=0)
        {
          for(let i = 0; i < GoodRunway.length; i++)
          {
            Main.createImage(GoodRunway[i].image,"#6eff72");
            if(i!=GoodRunway.length-1)
            {
              goodtext += GoodRunway[i].GetName()+", ";
            }
            else
            {
              if(GoodRunway.length!=1)
              {
                goodtext += " and "+GoodRunway[i].GetName();
              }
              else
              {
                goodtext += GoodRunway[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good runway.", "Bold");
        }
    
        if(BadRunway.length!=0)
        {
          for(let i = 0; i < BadRunway.length; i++)
          {
            Main.createImage(BadRunway[i].image,"#ffe96e");
            if(i!=BadRunway.length-1)
            {
              badtext += BadRunway[i].GetName()+", ";
            }
            else
            {
              if(BadRunway.length!=1)
              {
                badtext += " and "+BadRunway[i].GetName();
              }
              else
              {
                badtext += BadRunway[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad runway.", "Bold");
        }
    
        if(FloppedRunway.length!=0)
        {
          for(let i = 0; i < FloppedRunway.length; i++)
          {
            Main.createImage(FloppedRunway[i].image,"#ff6e6e");
            if(i!=FloppedRunway.length-1)
            {
              floptext += FloppedRunway[i].GetName()+", ";
            }
            else
            {
              if(FloppedRunway.length!=1)
              {
                floptext += " and "+FloppedRunway[i].GetName();
              }
              else
              {
                floptext += FloppedRunway[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the runway.", "Bold");
        }
      }
    }

  class ComedyChallenge{

  constructor(){
    this.hasrunway = true;
    this.winner = false;
    this.type = "COMEDY";
    this.plays = [
      " will have to participate in the roast of : "+CurrentSeason.host.name,
      " will have to participate in the roast of previous miss congenialities.",
      " will have to prepare a comedy skit",
      " will have to prepare a stand-up routine, to star into the Rupaul's Shady Shack",
      " will have to participate in the DESPY Awards",
      " will have to prepare a one woman-show",
      " will have to prepare a comedy skit about an embarassing experience",
      " will have to prepare a comedic magic show",
    ];

    this.chosen = getRandomInt(0,this.plays.length-1);

    this.episodename = "";
    switch(this.chosen)
    {
      case 0:
        this.episodename = "The Roast Of "+CurrentSeason.host.name;
        break;
      case 1:
        this.episodename = "The Nice Girls Roast";
        break;
      case 2:
        this.episodename = "Drags Queens Of Comedy";
        break;
      case 3:
        this.episodename = "Stand-Up Smackdown";
        break;
      case 4:
        this.episodename = "The DESPY Awards";
        break;
      case 5:
        this.episodename = "One-Queen Show";
        break;
      case 6:
        this.episodename = "The Charisma, Uniqueness, Nerve and Talent Monologues";
        break;
      case 7:
        this.episodename = "Dragacadabra";
        break;
    }

    if(CurrentSeason.lipsyncformat == "AS7" && CurrentSeason.episodes.length == 9)
    {
      this.chosen = 0;
      this.episodename = "The Roast Of "+CurrentSeason.host.name;
    }
  }

  createMessage()
  {
    switch(getRandomInt(0,1))
    {
      case 0:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Do y'all like a good joke ?");
        Announcement.createRupaulAnnouncement("Because you are going to need what it is.");
        Announcement.createRupaulAnnouncement("Tonight, Comedy will be the main focus!");
        break;
      case 1:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Do y'all smell that ?");
        Announcement.createRupaulAnnouncement("It smells funny in the air...");
        Announcement.createRupaulAnnouncement("Close your throats! Cause you're gonna need a lot of comedy there!");
        break;
    }
  }

  createBrief()
  {
    Main.createText("This week, the queens "+this.plays[this.chosen]+".");
  }

  TopPlacement()
  {
    
    let Top = [
    "Tonight, you knew how to get the laugh out of us.",
    "Tonight, we saw how bright you shine.",
    "You have comedy running throught your veins.",
    "Tonight, you showed up and showed out.",
    "Comedy is your thing.",
    "You made us laugh really good.",
    "Tonight, you proved yourself.",
    ];
    return(Top[getRandomInt(0,Top.length-1)]);
  }

  BtmPlacement()
  {
    
    let Btm = [
    ", your comedy could have used a few laugh.",
    ", on the runway, you ran out of gas.",
    ", tonight the judges did not say yes to the dress.",
    ", your outfit had a story. A very confusing one.",
    ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
    ", your outfit made our heads turn, and made us dizzy.",
    ", you need to focus. Or else it's going to cost you.",
    ];
    return(Btm[getRandomInt(0,Btm.length-1)]);
  }

  rankPerfomances()
  {
      for(let i = 0; i < CurrentSeason.currentCast.length;i++)
      {
        CurrentSeason.currentCast[i].GetStandUp();
      }

      CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].perfomancescore<=8)
        {
          SlayedChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
        {
          GreatChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
        {
          GoodChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
        {
          BadChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>32)
        {
          FloppedChallenge.push(CurrentSeason.currentCast[i]);
        }
      }

  }

    createPerformances()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedChallenge.length!=0)
      {
        for(let i = 0; i < SlayedChallenge.length; i++)
        {
          Main.createImage(SlayedChallenge[i].image,"#6eadff");
          if(i!=SlayedChallenge.length-1)
          {
            slayedtext += SlayedChallenge[i].GetName()+", ";
          }
          else
          {
            if(SlayedChallenge.length!=1)
            {
              slayedtext += " and "+SlayedChallenge[i].GetName();
            }
            else
            {
              slayedtext += SlayedChallenge[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the challenge.", "Bold");
      }
  
      if(GreatChallenge.length!=0)
      {
        for(let i = 0; i < GreatChallenge.length; i++)
        {
          Main.createImage(GreatChallenge[i].image,"#6effe4");
          if(i!=GreatChallenge.length-1)
          {
            greattext += GreatChallenge[i].GetName()+", ";
          }
          else
          {
            if(GreatChallenge.length!=1)
            {
              greattext += " and "+GreatChallenge[i].GetName();
            }
            else
            {
              greattext += GreatChallenge[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great performance.", "Bold");
      }
  
      if(GoodChallenge.length!=0)
      {
        for(let i = 0; i < GoodChallenge.length; i++)
        {
          Main.createImage(GoodChallenge[i].image,"#6eff72");
          if(i!=GoodChallenge.length-1)
          {
            goodtext += GoodChallenge[i].GetName()+", ";
          }
          else
          {
            if(GoodChallenge.length!=1)
            {
              goodtext += " and "+GoodChallenge[i].GetName();
            }
            else
            {
              goodtext += GoodChallenge[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good performance.", "Bold");
      }
  
      if(BadChallenge.length!=0)
      {
        for(let i = 0; i < BadChallenge.length; i++)
        {
          Main.createImage(BadChallenge[i].image,"#ffe96e");
          if(i!=BadChallenge.length-1)
          {
            badtext += BadChallenge[i].GetName()+", ";
          }
          else
          {
            if(BadChallenge.length!=1)
            {
              badtext += " and "+BadChallenge[i].GetName();
            }
            else
            {
              badtext += BadChallenge[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad performance.", "Bold");
      }
  
      if(FloppedChallenge.length!=0)
      {
        for(let i = 0; i < FloppedChallenge.length; i++)
        {
          Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
          if(i!=FloppedChallenge.length-1)
          {
            floptext += FloppedChallenge[i].GetName()+", ";
          }
          else
          {
            if(FloppedChallenge.length!=1)
            {
              floptext += " and "+FloppedChallenge[i].GetName();
            }
            else
            {
              floptext += FloppedChallenge[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the challenge.", "Bold");
      }
    }

    rankRunways()
    {
      for(let i = 0; i < CurrentSeason.currentCast.length;i++)
      {
        CurrentSeason.currentCast[i].getRunway();
        CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
      }

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].runwayscore<=2)
        {
          FloppedRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
        {
          BadRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
        {
          GoodRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
        {
          GreatRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>13)
        {
          SlayedRunway.push(CurrentSeason.currentCast[i]);
        }
      }
    }

    createRunways()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedRunway.length!=0)
      {
        for(let i = 0; i < SlayedRunway.length; i++)
        {
          Main.createImage(SlayedRunway[i].image,"#6eadff");
          if(i!=SlayedRunway.length-1)
          {
            slayedtext += SlayedRunway[i].GetName()+", ";
          }
          else
          {
            if(SlayedRunway.length!=1)
            {
              slayedtext += " and "+SlayedRunway[i].GetName();
            }
            else
            {
              slayedtext += SlayedRunway[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the runway.", "Bold");
      }
  
      if(GreatRunway.length!=0)
      {
        for(let i = 0; i < GreatRunway.length; i++)
        {
          Main.createImage(GreatRunway[i].image,"#6effe4");
          if(i!=GreatRunway.length-1)
          {
            greattext += GreatRunway[i].GetName()+", ";
          }
          else
          {
            if(GreatRunway.length!=1)
            {
              greattext += " and "+GreatRunway[i].GetName();
            }
            else
            {
              greattext += GreatRunway[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great runway.", "Bold");
      }
  
      if(GoodRunway.length!=0)
      {
        for(let i = 0; i < GoodRunway.length; i++)
        {
          Main.createImage(GoodRunway[i].image,"#6eff72");
          if(i!=GoodRunway.length-1)
          {
            goodtext += GoodRunway[i].GetName()+", ";
          }
          else
          {
            if(GoodRunway.length!=1)
            {
              goodtext += " and "+GoodRunway[i].GetName();
            }
            else
            {
              goodtext += GoodRunway[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good runway.", "Bold");
      }
  
      if(BadRunway.length!=0)
      {
        for(let i = 0; i < BadRunway.length; i++)
        {
          Main.createImage(BadRunway[i].image,"#ffe96e");
          if(i!=BadRunway.length-1)
          {
            badtext += BadRunway[i].GetName()+", ";
          }
          else
          {
            if(BadRunway.length!=1)
            {
              badtext += " and "+BadRunway[i].GetName();
            }
            else
            {
              badtext += BadRunway[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad runway.", "Bold");
      }
  
      if(FloppedRunway.length!=0)
      {
        for(let i = 0; i < FloppedRunway.length; i++)
        {
          Main.createImage(FloppedRunway[i].image,"#ff6e6e");
          if(i!=FloppedRunway.length-1)
          {
            floptext += FloppedRunway[i].GetName()+", ";
          }
          else
          {
            if(FloppedRunway.length!=1)
            {
              floptext += " and "+FloppedRunway[i].GetName();
            }
            else
            {
              floptext += FloppedRunway[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the runway.", "Bold");
      }
    }
  }

  class Rumix{

    constructor(){
      this.type = "RUMIX";
      this.hasrunway = true;
      this.winner = false;
      this.rumixs = [
        "I'm That Bitch",
        "You Don't Know Me"
      ];
      this.chosen = getRandomInt(0,this.rumixs.length-1);
    }
      
    createMessage()
    {
      switch(getRandomInt(0,1))
      {
        case 0:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Get ready to sing and dance.");
          Announcement.createRupaulAnnouncement("You will need to see it with all of your EURO-vision!");
          Announcement.createRupaulAnnouncement("Good luck!");
          break;
        case 1:
          Announcement.createRupaulAnnouncement("Hello queens!");
          Announcement.createRupaulAnnouncement("Dou have charisma ?");
          Announcement.createRupaulAnnouncement("It's time remind the whole area!");
          Announcement.createRupaulAnnouncement("Are you up for some singings training ? A-a-A !");
          break;
      }
    }
  
    createBrief()
    {
        if(CurrentSeason.lipsyncformat == "AS7" && CurrentSeason.episodes.length == 1)
        {
          Main.createText("The queens will have to write their own original verse to the song : Legends.");
        }
        else if(CurrentSeason.lipsyncformat == "AS7" && CurrentSeason.episodes.length == 5)
        {
          Main.createText("The queens will have to form girl groups and perform with their group.");
        }
        else
        {
          Main.createText("The queens will have to write their own original verse to the song : "+this.chosen);
        }
    }
  
    rankPerfomances()
    {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].GetRumix();
        }
  
        CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].perfomancescore<=8)
          {
            SlayedChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
          {
            GreatChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
          {
            GoodChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
          {
            BadChallenge.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].perfomancescore>32)
          {
            FloppedChallenge.push(CurrentSeason.currentCast[i]);
          }
        }
    }
  
      createPerformances()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedChallenge.length!=0)
        {
          for(let i = 0; i < SlayedChallenge.length; i++)
          {
            Main.createImage(SlayedChallenge[i].image,"#6eadff");
            if(i!=SlayedChallenge.length-1)
            {
              slayedtext += SlayedChallenge[i].GetName()+", ";
            }
            else
            {
              if(SlayedChallenge.length!=1)
              {
                slayedtext += " and "+SlayedChallenge[i].GetName();
              }
              else
              {
                slayedtext += SlayedChallenge[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the challenge.", "Bold");
        }
    
        if(GreatChallenge.length!=0)
        {
          for(let i = 0; i < GreatChallenge.length; i++)
          {
            Main.createImage(GreatChallenge[i].image,"#6effe4");
            if(i!=GreatChallenge.length-1)
            {
              greattext += GreatChallenge[i].GetName()+", ";
            }
            else
            {
              if(GreatChallenge.length!=1)
              {
                greattext += " and "+GreatChallenge[i].GetName();
              }
              else
              {
                greattext += GreatChallenge[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great performance.", "Bold");
        }
    
        if(GoodChallenge.length!=0)
        {
          for(let i = 0; i < GoodChallenge.length; i++)
          {
            Main.createImage(GoodChallenge[i].image,"#6eff72");
            if(i!=GoodChallenge.length-1)
            {
              goodtext += GoodChallenge[i].GetName()+", ";
            }
            else
            {
              if(GoodChallenge.length!=1)
              {
                goodtext += " and "+GoodChallenge[i].GetName();
              }
              else
              {
                goodtext += GoodChallenge[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good performance.", "Bold");
        }
    
        if(BadChallenge.length!=0)
        {
          for(let i = 0; i < BadChallenge.length; i++)
          {
            Main.createImage(BadChallenge[i].image,"#ffe96e");
            if(i!=BadChallenge.length-1)
            {
              badtext += BadChallenge[i].GetName()+", ";
            }
            else
            {
              if(BadChallenge.length!=1)
              {
                badtext += " and "+BadChallenge[i].GetName();
              }
              else
              {
                badtext += BadChallenge[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad performance.", "Bold");
        }
    
        if(FloppedChallenge.length!=0)
        {
          for(let i = 0; i < FloppedChallenge.length; i++)
          {
            Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
            if(i!=FloppedChallenge.length-1)
            {
              floptext += FloppedChallenge[i].GetName()+", ";
            }
            else
            {
              if(FloppedChallenge.length!=1)
              {
                floptext += " and "+FloppedChallenge[i].GetName();
              }
              else
              {
                floptext += FloppedChallenge[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the challenge.", "Bold");
        }
      }
  
      rankRunways()
      {
        for(let i = 0; i < CurrentSeason.currentCast.length;i++)
        {
          CurrentSeason.currentCast[i].getRunway();
          CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
        }
  
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].runwayscore<=2)
          {
            FloppedRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
          {
            BadRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
          {
            GoodRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
          {
            GreatRunway.push(CurrentSeason.currentCast[i]);
          }
          else if(CurrentSeason.currentCast[i].runwayscore>13)
          {
            SlayedRunway.push(CurrentSeason.currentCast[i]);
          }
        }
      }
  
      createRunways()
      {
        let slayedtext = "";
        let greattext = "";
        let goodtext = "";
        let badtext = "";
        let floptext = "";
        
    
        if(SlayedRunway.length!=0)
        {
          for(let i = 0; i < SlayedRunway.length; i++)
          {
            Main.createImage(SlayedRunway[i].image,"#6eadff");
            if(i!=SlayedRunway.length-1)
            {
              slayedtext += SlayedRunway[i].GetName()+", ";
            }
            else
            {
              if(SlayedRunway.length!=1)
              {
                slayedtext += " and "+SlayedRunway[i].GetName();
              }
              else
              {
                slayedtext += SlayedRunway[i].GetName();
              }
            }
          }
          Main.createText(slayedtext+" slayed the runway.", "Bold");
        }
    
        if(GreatRunway.length!=0)
        {
          for(let i = 0; i < GreatRunway.length; i++)
          {
            Main.createImage(GreatRunway[i].image,"#6effe4");
            if(i!=GreatRunway.length-1)
            {
              greattext += GreatRunway[i].GetName()+", ";
            }
            else
            {
              if(GreatRunway.length!=1)
              {
                greattext += " and "+GreatRunway[i].GetName();
              }
              else
              {
                greattext += GreatRunway[i].GetName();
              }
            }
          }
          Main.createText(greattext+" had a great runway.", "Bold");
        }
    
        if(GoodRunway.length!=0)
        {
          for(let i = 0; i < GoodRunway.length; i++)
          {
            Main.createImage(GoodRunway[i].image,"#6eff72");
            if(i!=GoodRunway.length-1)
            {
              goodtext += GoodRunway[i].GetName()+", ";
            }
            else
            {
              if(GoodRunway.length!=1)
              {
                goodtext += " and "+GoodRunway[i].GetName();
              }
              else
              {
                goodtext += GoodRunway[i].GetName();
              }
            }
          }
          Main.createText(goodtext+" had a good runway.", "Bold");
        }
    
        if(BadRunway.length!=0)
        {
          for(let i = 0; i < BadRunway.length; i++)
          {
            Main.createImage(BadRunway[i].image,"#ffe96e");
            if(i!=BadRunway.length-1)
            {
              badtext += BadRunway[i].GetName()+", ";
            }
            else
            {
              if(BadRunway.length!=1)
              {
                badtext += " and "+BadRunway[i].GetName();
              }
              else
              {
                badtext += BadRunway[i].GetName();
              }
            }
          }
          Main.createText(badtext+" had a bad runway.", "Bold");
        }
    
        if(FloppedRunway.length!=0)
        {
          for(let i = 0; i < FloppedRunway.length; i++)
          {
            Main.createImage(FloppedRunway[i].image,"#ff6e6e");
            if(i!=FloppedRunway.length-1)
            {
              floptext += FloppedRunway[i].GetName()+", ";
            }
            else
            {
              if(FloppedRunway.length!=1)
              {
                floptext += " and "+FloppedRunway[i].GetName();
              }
              else
              {
                floptext += FloppedRunway[i].GetName();
              }
            }
          }
          Main.createText(floptext+" flopped the runway.", "Bold");
        }
      }
    }

class FinalChallenge{

  constructor(){
    this.type = CurrentSeason.lastchallenge;
    this.finalecount = CurrentSeason.finaleformat;
    this.hasrunway = true;
    this.T3songsRumix = [
      "To The Moon",
      "Clapback",
      "U Wear It Well",
      "Vieren",
      "Hey Sis, It's Christmas",
      "Queen Of The North",
    ];

    this.T4songsRumix = [
      "Read U Wrote U",
      "Category Is",
      "Kitty Girl",
      "American",
      "Super Queen",
      "A Little Bit Of Love",
      "Lucky",
      "I'm a Winner, Baby",
      "This Is Our Country"
    ];

    this.T5songsRumix = [
      "Catwalk",
      "Living My Life in London",
      "I Made It",
      "Mirror Song",
      "Losing is the New Winning",
      "Queens Everywhere",
      "Top 5 Medley"
    ];

    this.MusicVideo = [
      "Cover Girl",
      "Jealous Of My Boogie",
      "Champion",
      "Glamazon",
      "The Begginning",
      "Sissy That Walk",
      "Born Naked",
      "The Realness",
      "U Wear It Well"
    ];

    this.chosen;

    if( (this.finalecount=="TOP3" || this.finalecount=="TOP3NE") && this.type=="RUMIX")
    {
      this.chosen = this.T3songsRumix[getRandomInt(0,this.T3songsRumix.length-1)];
    }
    else if(this.finalecount=="TOP4" && this.type=="RUMIX")
    {
      this.chosen = this.T4songsRumix[getRandomInt(0,this.T4songsRumix.length-1)];
    }
    else if(this.finalecount=="TOP5" && this.type=="RUMIX")
    {
      this.chosen = this.T5songsRumix[getRandomInt(0,this.T5songsRumix.length-1)];
    }
    else
    {
      this.chosen = this.MusicVideo[getRandomInt(0,this.MusicVideo.length-1)];
    }
  }

  createBrief()
  {
    if(this.type=="RUMIX")
    {
      Main.createText("The queens will have to write their own original verse to the song : "+this.chosen);
    }
    else
    {
      Main.createText("The queens will participate in the music video of \""+this.chosen+"\".");
    }
  }

  rankPerfomances()
  {
    if(this.type=="RUMIX")
    {
      for(let i = 0; i < CurrentSeason.currentCast.length;i++)
      {
        CurrentSeason.currentCast[i].GetRumix();
      }

      CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].perfomancescore<=8)
        {
          SlayedChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
        {
          GreatChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
        {
          GoodChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
        {
          BadChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>32)
        {
          FloppedChallenge.push(CurrentSeason.currentCast[i]);
        }
      }
    }
    else
    {
      for(let i = 0; i < CurrentSeason.currentCast.length;i++)
      {
        CurrentSeason.currentCast[i].GetMusicV();
      }

      CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].perfomancescore<=8)
        {
          SlayedChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>6 && CurrentSeason.currentCast[i].perfomancescore<=16)
        {
          GreatChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
        {
          GoodChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
        {
          BadChallenge.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].perfomancescore>32)
        {
          FloppedChallenge.push(CurrentSeason.currentCast[i]);
        }
      }
    }
  }

    createPerformances()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedChallenge.length!=0)
      {
        for(let i = 0; i < SlayedChallenge.length; i++)
        {
          Main.createImage(SlayedChallenge[i].image,"#6eadff");
          if(i!=SlayedChallenge.length-1)
          {
            slayedtext += SlayedChallenge[i].GetName()+", ";
          }
          else
          {
            if(SlayedChallenge.length!=1)
            {
              slayedtext += " and "+SlayedChallenge[i].GetName();
            }
            else
            {
              slayedtext += SlayedChallenge[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the challenge.", "Bold");
      }
  
      if(GreatChallenge.length!=0)
      {
        for(let i = 0; i < GreatChallenge.length; i++)
        {
          Main.createImage(GreatChallenge[i].image,"#6effe4");
          if(i!=GreatChallenge.length-1)
          {
            greattext += GreatChallenge[i].GetName()+", ";
          }
          else
          {
            if(GreatChallenge.length!=1)
            {
              greattext += " and "+GreatChallenge[i].GetName();
            }
            else
            {
              greattext += GreatChallenge[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great performance.", "Bold");
      }
  
      if(GoodChallenge.length!=0)
      {
        for(let i = 0; i < GoodChallenge.length; i++)
        {
          Main.createImage(GoodChallenge[i].image,"#6eff72");
          if(i!=GoodChallenge.length-1)
          {
            goodtext += GoodChallenge[i].GetName()+", ";
          }
          else
          {
            if(GoodChallenge.length!=1)
            {
              goodtext += " and "+GoodChallenge[i].GetName();
            }
            else
            {
              goodtext += GoodChallenge[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good performance.", "Bold");
      }
  
      if(BadChallenge.length!=0)
      {
        for(let i = 0; i < BadChallenge.length; i++)
        {
          Main.createImage(BadChallenge[i].image,"#ffe96e");
          if(i!=BadChallenge.length-1)
          {
            badtext += BadChallenge[i].GetName()+", ";
          }
          else
          {
            if(BadChallenge.length!=1)
            {
              badtext += " and "+BadChallenge[i].GetName();
            }
            else
            {
              badtext += BadChallenge[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad performance.", "Bold");
      }
  
      if(FloppedChallenge.length!=0)
      {
        for(let i = 0; i < FloppedChallenge.length; i++)
        {
          Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
          if(i!=FloppedChallenge.length-1)
          {
            floptext += FloppedChallenge[i].GetName()+", ";
          }
          else
          {
            if(FloppedChallenge.length!=1)
            {
              floptext += " and "+FloppedChallenge[i].GetName();
            }
            else
            {
              floptext += FloppedChallenge[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the challenge.", "Bold");
      }
    }

    rankRunways()
    {
      for(let i = 0; i < CurrentSeason.currentCast.length;i++)
      {
        CurrentSeason.currentCast[i].getRunway();
        CurrentSeason.currentCast[i].finalscore = CurrentSeason.currentCast[i].perfomancescore - CurrentSeason.currentCast[i].runway;
      }

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(CurrentSeason.currentCast[i].runwayscore<=2)
        {
          FloppedRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>2 && CurrentSeason.currentCast[i].runwayscore<=4)
        {
          BadRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>4 && CurrentSeason.currentCast[i].runwayscore<=10)
        {
          GoodRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>10 && CurrentSeason.currentCast[i].runwayscore<=13)
        {
          GreatRunway.push(CurrentSeason.currentCast[i]);
        }
        else if(CurrentSeason.currentCast[i].runwayscore>13)
        {
          SlayedRunway.push(CurrentSeason.currentCast[i]);
        }
      }
    }

    createRunways()
    {
      let slayedtext = "";
      let greattext = "";
      let goodtext = "";
      let badtext = "";
      let floptext = "";
      
  
      if(SlayedRunway.length!=0)
      {
        for(let i = 0; i < SlayedRunway.length; i++)
        {
          Main.createImage(SlayedRunway[i].image,"#6eadff");
          if(i!=SlayedRunway.length-1)
          {
            slayedtext += SlayedRunway[i].GetName()+", ";
          }
          else
          {
            if(SlayedRunway.length!=1)
            {
              slayedtext += " and "+SlayedRunway[i].GetName();
            }
            else
            {
              slayedtext += SlayedRunway[i].GetName();
            }
          }
        }
        Main.createText(slayedtext+" slayed the runway.", "Bold");
      }
  
      if(GreatRunway.length!=0)
      {
        for(let i = 0; i < GreatRunway.length; i++)
        {
          Main.createImage(GreatRunway[i].image,"#6effe4");
          if(i!=GreatRunway.length-1)
          {
            greattext += GreatRunway[i].GetName()+", ";
          }
          else
          {
            if(GreatRunway.length!=1)
            {
              greattext += " and "+GreatRunway[i].GetName();
            }
            else
            {
              greattext += GreatRunway[i].GetName();
            }
          }
        }
        Main.createText(greattext+" had a great runway.", "Bold");
      }
  
      if(GoodRunway.length!=0)
      {
        for(let i = 0; i < GoodRunway.length; i++)
        {
          Main.createImage(GoodRunway[i].image,"#6eff72");
          if(i!=GoodRunway.length-1)
          {
            goodtext += GoodRunway[i].GetName()+", ";
          }
          else
          {
            if(GoodRunway.length!=1)
            {
              goodtext += " and "+GoodRunway[i].GetName();
            }
            else
            {
              goodtext += GoodRunway[i].GetName();
            }
          }
        }
        Main.createText(goodtext+" had a good runway.", "Bold");
      }
  
      if(BadRunway.length!=0)
      {
        for(let i = 0; i < BadRunway.length; i++)
        {
          Main.createImage(BadRunway[i].image,"#ffe96e");
          if(i!=BadRunway.length-1)
          {
            badtext += BadRunway[i].GetName()+", ";
          }
          else
          {
            if(BadRunway.length!=1)
            {
              badtext += " and "+BadRunway[i].GetName();
            }
            else
            {
              badtext += BadRunway[i].GetName();
            }
          }
        }
        Main.createText(badtext+" had a bad runway.", "Bold");
      }
  
      if(FloppedRunway.length!=0)
      {
        for(let i = 0; i < FloppedRunway.length; i++)
        {
          Main.createImage(FloppedRunway[i].image,"#ff6e6e");
          if(i!=FloppedRunway.length-1)
          {
            floptext += FloppedRunway[i].GetName()+", ";
          }
          else
          {
            if(FloppedRunway.length!=1)
            {
              floptext += " and "+FloppedRunway[i].GetName();
            }
            else
            {
              floptext += FloppedRunway[i].GetName();
            }
          }
        }
        Main.createText(floptext+" flopped the runway.", "Bold");
      }
    }
  }

class DesignChallenge{
  constructor()
  {
    this.type = "DESIGN";
    this.hasrunway = false;
    this.winner = false;

    this.brief = [
      "The queens will have to make outfits with summer items.",
      "The queens will have to make outfits with boxes from past contestants.",
      "The queens will have to make outfits with random Christmas decorations.",
      "The queens will have to make outfits with backyard items.",
      "The queens will have to make outfits with random items contained in boxes.",
      "The queens will have to make outfits with random items contained in boxes of color."
    ];

    this.episodename = [
      "Queens of summers",
      "An Impression Of Déjà-Vu",
      "Christmas Queens",
      "Chilling In The Backyards",
      "Glamazonian Prime",
      "Taste The Rainbow"
    ];

    this.chosen = getRandomInt(0,this.brief.length-1);
    this.boxes = [1, 4, 5];
  }
  createMessage()
  {
    switch(getRandomInt(0,1))
    {
      case 0:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Have you ever used a sewing a machine ?");
        Announcement.createRupaulAnnouncement("Well if you didn't, now is the time to learn!");
        Announcement.createRupaulAnnouncement("Will you learn fast enough, to not get distanced by the other queens ? Let's find out!");
        break;
      case 1:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Design is a very important part of drag!");
        Announcement.createRupaulAnnouncement("Because it's what makes us, well, us!");
        Announcement.createRupaulAnnouncement("Will you design your win, or craft your exit. Whatever may be, remember to have fun!");
        break;
    }
  }

  TopPlacement()
  {
    
    let Top = [
    "Tonight, you knew how to work it OUT!",
    "Tonight, you shined all over this runway.",
    "You ruled over this runway.",
    "You made gold out of randomness.",
    "Your haute couture, made you rise to the top.",
    "You have creativity beyond limits.",
    "Tonight, you have made yourself stunning.",
    "Your couture made us gag.",
    "The cream always rises to the top.",
    "You have a great perception of design.",
    "Your outfit kept us begging for more."
    ];
    return(Top[getRandomInt(0,Top.length-1)]);
  }

  BtmPlacement()
  {
    
    let Btm = [
    ", you came here to slay, but tonight your outfit slayed you.",
    ", on the runway, you ran out of gas.",
    ", tonight the judges did not say yes to the dress.",
    ", your outfit had a story. A very confusing one.",
    ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
    ", your outfit made our heads turn, and made us dizzy.",
    ", you need to focus. Or else it's going to cost you.",
    ];
    return(Btm[getRandomInt(0,Btm.length-1)]);
  }

  rankPerfomances()
  {
    for(let i = 0; i < CurrentSeason.currentCast.length;i++)
    {
      if(CurrentSeason.currentCast[i].miniwinner == true && this.boxes.indexOf(this.chosen) == -1)
      {
        CurrentSeason.currentCast[i].GetDesignScore(5);
      }
      else
      {
        CurrentSeason.currentCast[i].GetDesignScore();
      }
    }

    CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);

    for(let i = 0; i<CurrentSeason.currentCast.length; i++)
    {
      if(CurrentSeason.currentCast[i].perfomancescore<=8)
      {
        SlayedChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>8 && CurrentSeason.currentCast[i].perfomancescore<=16)
      {
        GreatChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
      {
        GoodChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
      {
        BadChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>32)
      {
        FloppedChallenge.push(CurrentSeason.currentCast[i]);
      }
    }
  }

  createBrief()
  {
    Main.createText(this.brief[this.chosen]);
  }

  createPerformances()
  {
    let slayedtext = "";
    let greattext = "";
    let goodtext = "";
    let badtext = "";
    let floptext = "";
    

    if(SlayedChallenge.length!=0)
    {
      for(let i = 0; i < SlayedChallenge.length; i++)
      {
        Main.createImage(SlayedChallenge[i].image,"#6eadff");
        if(i!=SlayedChallenge.length-1)
        {
          slayedtext += SlayedChallenge[i].GetName()+", ";
        }
        else
        {
          if(SlayedChallenge.length!=1)
          {
            slayedtext += " and "+SlayedChallenge[i].GetName();
          }
          else
          {
            slayedtext += SlayedChallenge[i].GetName();
          }
        }
      }
      Main.createText(slayedtext+" slayed the challenge.", "Bold");
    }

    if(GreatChallenge.length!=0)
    {
      for(let i = 0; i < GreatChallenge.length; i++)
      {
        Main.createImage(GreatChallenge[i].image,"#6effe4");
        if(i!=GreatChallenge.length-1)
        {
          greattext += GreatChallenge[i].GetName()+", ";
        }
        else
        {
          if(GreatChallenge.length!=1)
          {
            greattext += " and "+GreatChallenge[i].GetName();
          }
          else
          {
            greattext += GreatChallenge[i].GetName();
          }
        }
      }
      Main.createText(greattext+" had a great performance.", "Bold");
    }

    if(GoodChallenge.length!=0)
    {
      for(let i = 0; i < GoodChallenge.length; i++)
      {
        Main.createImage(GoodChallenge[i].image,"#6eff72");
        if(i!=GoodChallenge.length-1)
        {
          goodtext += GoodChallenge[i].GetName()+", ";
        }
        else
        {
          if(GoodChallenge.length!=1)
          {
            goodtext += " and "+GoodChallenge[i].GetName();
          }
          else
          {
            goodtext += GoodChallenge[i].GetName();
          }
        }
      }
      Main.createText(goodtext+" had a good performance.", "Bold");
    }

    if(BadChallenge.length!=0)
    {
      for(let i = 0; i < BadChallenge.length; i++)
      {
        Main.createImage(BadChallenge[i].image,"#ffe96e");
        if(i!=BadChallenge.length-1)
        {
          badtext += BadChallenge[i].GetName()+", ";
        }
        else
        {
          if(BadChallenge.length!=1)
          {
            badtext += " and "+BadChallenge[i].GetName();
          }
          else
          {
            badtext += BadChallenge[i].GetName();
          }
        }
      }
      Main.createText(badtext+" had a bad performance.", "Bold");
    }

    if(FloppedChallenge.length!=0)
    {
      for(let i = 0; i < FloppedChallenge.length; i++)
      {
        Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
        if(i!=FloppedChallenge.length-1)
        {
          floptext += FloppedChallenge[i].GetName()+", ";
        }
        else
        {
          if(FloppedChallenge.length!=1)
          {
            floptext += " and "+FloppedChallenge[i].GetName();
          }
          else
          {
            floptext += FloppedChallenge[i].GetName();
          }
        }
      }
      Main.createText(floptext+" flopped the challenge.", "Bold");
    }
  }
}

class Makeover{
  constructor()
  {
    this.type = "MAKEOVER";
    this.hasrunway = false;
    this.winner = false;

    this.brief = [
      "The queens will have to makeover professional female fighters.",
      "The queens will have to makeover older gay men.",
      "The queens will have to makeover masculine, heterosexual jocks.",
      "The queens will have to makeover dads.",
      "The queens will have to makeover gay veterans.",
      "The queens will have to makeover grooms.",
      "The queens will have to makeover stars of Little Women.",
      "The queens will have to makeover members of the pit crew.",
      "The queens will have to makeover social media kings.",
      "The queens will have to makeover Drag Race super fans.",
      "The queens will have to makeover a member of their family.",
      "The queens will have to makeover their bestfriend.",
      "The queens will have to makeover gay rugby player men.",
    ];

    this.episodename = [
      "Drag School of Charm",
      "Golden Gals",
      "Jocks in Frocks",
      "DILFs: Dads I'd Like To Frock",
      "Super Troopers",
      "Drag My Wedding",
      "Wizards of Drag",
      "Crew Better Work",
      "Social Media Kings Into Queens",
      "Superfan Makeover",
      "Family That Drags Together",
      "RuPaul's Best Judy's Race",
      "Family Resemblance"
    ];

    this.chosen = getRandomInt(0,this.brief.length-1);
  }
  createMessage()
  {
    switch(getRandomInt(0,1))
    {
      case 0:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Can you hear ?");
        Announcement.createRupaulAnnouncement("I can't hear you all at all...");
        Announcement.createRupaulAnnouncement("Is there a connection between us ?");
        break;
      case 1:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Drag family values are very important.");
        Announcement.createRupaulAnnouncement("Because we're all part of the same family!");
        Announcement.createRupaulAnnouncement("Will you be able to bring others into yours ?");
        break;
    }
  }

  TopPlacement()
  {
    
    let Top = [
    "Tonight, you knew how to work it OUT!",
    "Tonight, you shined all over this runway.",
    "You ruled over this runway.",
    "You made gold out of randomness.",
    "Your haute couture, made you rise to the top.",
    "You have creativity beyond limits.",
    "Tonight, you have made yourself stunning.",
    "Your couture made us gag.",
    "The cream always rises to the top.",
    "You have a great perception of design.",
    "Your outfit kept us begging for more."
    ];
    return(Top[getRandomInt(0,Top.length-1)]);
  }

  BtmPlacement()
  {
    
    let Btm = [
    ", you came here to slay, but tonight your outfit slayed you.",
    ", on the runway, you ran out of gas.",
    ", tonight the judges did not say yes to the dress.",
    ", your outfit had a story. A very confusing one.",
    ", simplicity is sometimes the way to go. Unfortunately, not tonight.",
    ", your outfit made our heads turn, and made us dizzy.",
    ", you need to focus. Or else it's going to cost you.",
    ];
    return(Btm[getRandomInt(0,Btm.length-1)]);
  }

  rankPerfomances()
  {
    for(let i = 0; i < CurrentSeason.currentCast.length;i++)
    {
      CurrentSeason.currentCast[i].GetMakeover();
    }

    CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);

    for(let i = 0; i<CurrentSeason.currentCast.length; i++)
    {
      if(CurrentSeason.currentCast[i].perfomancescore<=8)
      {
        SlayedChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>8 && CurrentSeason.currentCast[i].perfomancescore<=16)
      {
        GreatChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
      {
        GoodChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
      {
        BadChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>32)
      {
        FloppedChallenge.push(CurrentSeason.currentCast[i]);
      }
    }
  }

  createBrief()
  {
    Main.createText(this.brief[this.chosen]);
  }

  createPerformances()
  {
    let slayedtext = "";
    let greattext = "";
    let goodtext = "";
    let badtext = "";
    let floptext = "";
    

    if(SlayedChallenge.length!=0)
    {
      for(let i = 0; i < SlayedChallenge.length; i++)
      {
        Main.createImage(SlayedChallenge[i].image,"#6eadff");
        if(i!=SlayedChallenge.length-1)
        {
          slayedtext += SlayedChallenge[i].GetName()+", ";
        }
        else
        {
          if(SlayedChallenge.length!=1)
          {
            slayedtext += " and "+SlayedChallenge[i].GetName();
          }
          else
          {
            slayedtext += SlayedChallenge[i].GetName();
          }
        }
      }
      Main.createText(slayedtext+" slayed the challenge.", "Bold");
    }

    if(GreatChallenge.length!=0)
    {
      for(let i = 0; i < GreatChallenge.length; i++)
      {
        Main.createImage(GreatChallenge[i].image,"#6effe4");
        if(i!=GreatChallenge.length-1)
        {
          greattext += GreatChallenge[i].GetName()+", ";
        }
        else
        {
          if(GreatChallenge.length!=1)
          {
            greattext += " and "+GreatChallenge[i].GetName();
          }
          else
          {
            greattext += GreatChallenge[i].GetName();
          }
        }
      }
      Main.createText(greattext+" had a great performance.", "Bold");
    }

    if(GoodChallenge.length!=0)
    {
      for(let i = 0; i < GoodChallenge.length; i++)
      {
        Main.createImage(GoodChallenge[i].image,"#6eff72");
        if(i!=GoodChallenge.length-1)
        {
          goodtext += GoodChallenge[i].GetName()+", ";
        }
        else
        {
          if(GoodChallenge.length!=1)
          {
            goodtext += " and "+GoodChallenge[i].GetName();
          }
          else
          {
            goodtext += GoodChallenge[i].GetName();
          }
        }
      }
      Main.createText(goodtext+" had a good performance.", "Bold");
    }

    if(BadChallenge.length!=0)
    {
      for(let i = 0; i < BadChallenge.length; i++)
      {
        Main.createImage(BadChallenge[i].image,"#ffe96e");
        if(i!=BadChallenge.length-1)
        {
          badtext += BadChallenge[i].GetName()+", ";
        }
        else
        {
          if(BadChallenge.length!=1)
          {
            badtext += " and "+BadChallenge[i].GetName();
          }
          else
          {
            badtext += BadChallenge[i].GetName();
          }
        }
      }
      Main.createText(badtext+" had a bad performance.", "Bold");
    }

    if(FloppedChallenge.length!=0)
    {
      for(let i = 0; i < FloppedChallenge.length; i++)
      {
        Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
        if(i!=FloppedChallenge.length-1)
        {
          floptext += FloppedChallenge[i].GetName()+", ";
        }
        else
        {
          if(FloppedChallenge.length!=1)
          {
            floptext += " and "+FloppedChallenge[i].GetName();
          }
          else
          {
            floptext += FloppedChallenge[i].GetName();
          }
        }
      }
      Main.createText(floptext+" flopped the challenge.", "Bold");
    }
  }
}


class TalentShow{
  constructor()
  {
    this.type = "TALENTSHOW";
    this.hasrunway = false;
    this.winner = false;

    this.talents = [
      "Burlesque",
      "Spoken Word",
      "Singing",
      "Variety",
      "Gymnastics",
      "Singing",
      "Dancing",
      "Lipsyncing",
      "Violin",
      "Baton",
      "Tucking",
      "Kabuki",
      "Color Guard",
      "Upside Down Painting",
      "Stand Up",
      "Pole Dancing",
      "Impersonation",
      "Speed-Sewing",
      "Live Singing",
      "Contemporary Mouth Art",
      "Ballooning",
      "Quick Change Magic",
      "Modern Dance",
      "Magic Show",
      "Art",
      "Salsa Dancing",
      "Silk Veil Poi",
      "Rapping",
      "Piano",
      "Rhytmic Gymnastic",
      "Comedy",
      "Jump Rope",
      "African Dance",
      "Ballet Number",
      "Electric Guitar",
      "Cheerleading Comedy Routine",
      "Live Singing with Ventriloquist Puppet",
      "Canarian Lipsync Show",
      "Opera Singing"
    ];

    this.names = [
      "Talent Show Eleganza Extravanagaza",
      "The CNTs",
    ];

    this.episodename = this.names[getRandomInt(0,this.names.length-1)];
    
  }

  createBrief()
  {
    Main.createText("This week, the queens will have to participate in a talent show.");
  }

  createMessage()
  {
    switch(getRandomInt(0,1))
    {
      case 0:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("Your charisma, uniqueness, never & talent, will be up to test!");
        Announcement.createRupaulAnnouncement("You're going to need to do a lot to survive this time.");
        break;
      case 1:
        Announcement.createRupaulAnnouncement("Hello queens!");
        Announcement.createRupaulAnnouncement("");
        Announcement.createRupaulAnnouncement("Because it's what makes us, well, us!");
        Announcement.createRupaulAnnouncement("Will you design your win, or craft your exit. Whatever may be, remember to have fun!");
        break;
    }
  }

  TopPlacement()
  {
    
    let Top = [
    "This week, you spun straw into gold.",
    "Not only did you turn it out, girl, you turned it upside down.",
    "Tonight, you didn’t just kill it. You were a mass murderer.",
    "This week, you came, you saw, and you came again.",
    "You navigated this challenge beautifully, and we were swept away.",
    "You were serving, and left us gagging for more.",
    "Tonight, you played to your strengths, and you came out on top.",
    "Tonight, you ruled the world!",
    "The cream always rises to the top.",
    ];
    return(Top[getRandomInt(0,Top.length-1)]);
  }

  BtmPlacement()
  {
    
    let Btm = [
    ", you are a fierce queen, but this week, you put the ain’t in entertaintment",
    ", the judges were Mad About You — but not in a good way.",
    ", You are a smart cookie, but tonight, you crumbled.",
    ", your big opening was a little sloppy.",
    ", your charisma, uniqueness, nerver & talent got lost in the mail.",
    ", you made a meal out of this challenge, but it left a bad taste in some of the judges’ mouths.",
    ", your talent needed a boost, but you only slowled down.",
    ];
    return(Btm[getRandomInt(0,Btm.length-1)]);
  }

  getRandomTalent()
  {
    return(this.talents[getRandomInt(0,this.talents.length-1)])
  }

  rankPerfomances()
  {
    for(let i = 0; i < CurrentSeason.currentCast.length;i++)
    {
      CurrentSeason.currentCast[i].GetTalentShow();
    }

    CurrentSeason.currentCast.sort((a, b) => a.perfomancescore - b.perfomancescore);

    for(let i = 0; i<CurrentSeason.currentCast.length; i++)
    {
      if(CurrentSeason.currentCast[i].perfomancescore<=8)
      {
        SlayedChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>8 && CurrentSeason.currentCast[i].perfomancescore<=16)
      {
        GreatChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>16 && CurrentSeason.currentCast[i].perfomancescore<=26)
      {
        GoodChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>26 && CurrentSeason.currentCast[i].perfomancescore<=32)
      {
        BadChallenge.push(CurrentSeason.currentCast[i]);
      }
      else if(CurrentSeason.currentCast[i].perfomancescore>32)
      {
        FloppedChallenge.push(CurrentSeason.currentCast[i]);
      }
    }
  }

  createPerformances()
  {
    let slayedtext = "";
    let greattext = "";
    let goodtext = "";
    let badtext = "";
    let floptext = "";
    

    if(SlayedChallenge.length!=0)
    {
      for(let i = 0; i < SlayedChallenge.length; i++)
      {
        Main.createImage(SlayedChallenge[i].image,"#6eadff");
        if(i!=SlayedChallenge.length-1)
        {
          slayedtext += SlayedChallenge[i].GetName()+", ";
        }
        else
        {
          if(SlayedChallenge.length!=1)
          {
            slayedtext += " and "+SlayedChallenge[i].GetName();
          }
          else
          {
            slayedtext += SlayedChallenge[i].GetName();
          }
        }
      }
      Main.createText(slayedtext+" slayed the challenge.", "Bold");
    }

    if(GreatChallenge.length!=0)
    {
      for(let i = 0; i < GreatChallenge.length; i++)
      {
        Main.createImage(GreatChallenge[i].image,"#6effe4");
        if(i!=GreatChallenge.length-1)
        {
          greattext += GreatChallenge[i].GetName()+", ";
        }
        else
        {
          if(GreatChallenge.length!=1)
          {
            greattext += " and "+GreatChallenge[i].GetName();
          }
          else
          {
            greattext += GreatChallenge[i].GetName();
          }
        }
      }
      Main.createText(greattext+" had a great performance.", "Bold");
    }

    if(GoodChallenge.length!=0)
    {
      for(let i = 0; i < GoodChallenge.length; i++)
      {
        Main.createImage(GoodChallenge[i].image,"#6eff72");
        if(i!=GoodChallenge.length-1)
        {
          goodtext += GoodChallenge[i].GetName()+", ";
        }
        else
        {
          if(GoodChallenge.length!=1)
          {
            goodtext += " and "+GoodChallenge[i].GetName();
          }
          else
          {
            goodtext += GoodChallenge[i].GetName();
          }
        }
      }
      Main.createText(goodtext+" had a good performance.", "Bold");
    }

    if(BadChallenge.length!=0)
    {
      for(let i = 0; i < BadChallenge.length; i++)
      {
        Main.createImage(BadChallenge[i].image,"#ffe96e");
        if(i!=BadChallenge.length-1)
        {
          badtext += BadChallenge[i].GetName()+", ";
        }
        else
        {
          if(BadChallenge.length!=1)
          {
            badtext += " and "+BadChallenge[i].GetName();
          }
          else
          {
            badtext += BadChallenge[i].GetName();
          }
        }
      }
      Main.createText(badtext+" had a bad performance.", "Bold");
    }

    if(FloppedChallenge.length!=0)
    {
      for(let i = 0; i < FloppedChallenge.length; i++)
      {
        Main.createImage(FloppedChallenge[i].image,"#ff6e6e");
        if(i!=FloppedChallenge.length-1)
        {
          floptext += FloppedChallenge[i].GetName()+", ";
        }
        else
        {
          if(FloppedChallenge.length!=1)
          {
            floptext += " and "+FloppedChallenge[i].GetName();
          }
          else
          {
            floptext += FloppedChallenge[i].GetName();
          }
        }
      }
      Main.createText(floptext+" flopped the challenge.", "Bold");
    }
  }
}

class SnatchGameCharacter
{
  constructor(Name, PlayedBy, Quality, Factors, Difficulty)
  {
    this.name = Name;
    this.playedby = undefined;
    this.quality = Quality;
    this.Factors = Factors;
    this.difficulty = Difficulty;
  }
}
//#endregion

//#region Queens
let akashia = new Queen("Akashia", 6, 6, 7, 7, 5, 10, 15, 8, 10, 4, 1, "Akashia", "Akashia", "US1", false);
let bebes1 = new Queen("BeBe Zahara Benet", 7, 12, 11, 12, 7, 12, 11, 8, 8, 3, 1, "Bebe", "Bebe", "US1", false);
let jades = new Queen("Jade Sotomayor", 7, 8, 7, 10, 9, 8, 13, 8, 12, 2, 2, "Jade", "Jade", "US1", false);
let ninas1 = new Queen("Nina Flowers", 8, 10, 11, 7, 12, 14, 8, 15, 10, 4, 1, "Nina", "Nina", "US1", false);
let onginas1 = new Queen("Ongina", 12, 10, 11, 10, 12, 8, 6, 15, 13, 5, 0, "Ongina", "Ongina", "US1", false);
let rebecca = new Queen("Rebecca Glasscock", 8, 12, 9, 11, 5, 8, 8, 7, 10, 2, 3, "Rebecca", "Rebecca", "US1", false);
let shannels1 = new Queen("Shannel", 8, 9, 7, 11, 10, 12, 8, 10, 15, 2, 2, "Shannel", "Shannel", "US1", false);
let tammies1 = new Queen("Tammie Brown", 8, 9, 14, 5, 6, 8, 6, 14, 15, 4, 0, "TammieBrown", "Tammie", "US1", false);
let victoriap = new Queen("Victoria Porkchop Parker", 8, 9, 10, 7, 4, 8, 6, 10, 12, 4, 1, "Victoria", "Victoria", "US1", false);

let US1 = shuffle([akashia, bebes1, jades, ninas1, onginas1, rebecca, shannels1, tammies1, victoriap]);

let jessicaw = new Queen("Jessica Wild", 10, 11, 7, 12, 9, 10, 5, 6, 12, 5, 0, "Jessica", "Jessica", "US2", false);
let jujus2 = new Queen("Jujubee", 8, 9, 12, 8, 7, 6, 15, 10, 13, 3, 1, "Jujubee", "Jujubee", "US2", false);
let morganmcs2 = new Queen("Morgan McMicheals", 8, 7, 6, 10, 13, 10, 11, 8, 14, 2, 4, "Morgan","Morgan","US2",false);
let mystique = new Queen("Mystique Summers Madison", 6, 8, 9, 11, 7, 5, 10, 8, 14, 2, 2, "Mystique", "Mystique", "US2", false);
let npb = new Queen("Nicole Paige Brooks", 7, 6, 8, 4, 8, 10, 7, 5, 5, 4, 0, "Nicole", "Nicole", "US2", false);
let pandoras2 = new Queen("Pandora Boxx", 8, 9 ,12, 7, 5, 5, 6, 7, 10, 4, 1, "Pandora", "Pandora", "US2",false);
let sahara = new Queen("Sahara Davenport", 8, 6, 8, 14, 5, 8, 14, 10, 9, 5, 0, "Sahara", "Sahara", "US2", false);
let shangela = new Queen("Shangela", 8, 6, 8, 7, 2, 5, 5, 10, 12, 2, 2, "Shangela", "Shangela", "US2", false);
let kylies2 = new Queen("Kylie Sonique Love", 8, 7, 5, 8, 10, 10, 13, 8, 10, 4, 0, "Sonique", "Sonique", "US2", false);
let tatis2 = new Queen("Tatianna", 8, 10, 12, 8, 5, 8, 9, 5, 14, 3, 3, "Tatianna", "Tatianna", "US2", false);
let james = new Queen("James Ross", 14, 10, 12, 6, 12, 10, 14, 12, 8, 1, 4, "James", "James", "US2", false);

let US2 = shuffle([jessicaw, jujus2, morganmcs2, mystique, npb, pandoras2, sahara, shangela, kylies2, tatis2, james]);

let raja = new Queen("Raja", 11, 10, 6, 6, 15, 15, 9, 13, 10, 4, 0, "Raja", "Raja", "US3", false);
let manila = new Queen("Manila Luzon", 12, 11, 9, 8, 9, 12, 8, 12, 9, 4, 1, "Manila", "Manila", "US3", false);
let alexis = new Queen("Alexis Mateo", 10, 10, 10, 11, 10, 9, 11, 10, 13, 4, 1, "Alexis", "Alexis", "US3", false);
let yara = new Queen("Yara Sofia", 9, 9, 8, 9, 9, 8, 7, 10, 15, 4, 1, "YaraSofiaS3", "YaraSofiaS3", "US3", false);
let carmen = new Queen("Carmen Carrera", 7, 5, 4, 7, 6, 7, 8, 7, 5, 1, 3, "Carmen", "Carmen", "US3", false);
let shangelas3 = new Queen("Shangela", 10, 11, 13, 11, 6, 7, 10, 12, 10, 2, 3, "Shangela", "Shangela", "US3", false);
let delta = new Queen("Delta Work", 7, 6, 4, 1, 5, 4, 8, 7, 5, 2, 3, "Delta", "Delta", "US3", false);
let stacy = new Queen("Stacy Layne Matthews", 8, 10, 8, 4, 5, 5, 4, 12, 12, 4, 1, "Stacy", "Stacy", "US3", false);
let mariah = new Queen("Mariah Paris Balenciaga", 5, 4, 4, 6, 9, 8, 6, 6, 6, 4, 1, "Mariah", "Mariah", "US3", false);
let india = new Queen("India Ferrah", 8, 6, 6, 10, 8, 8, 8, 7, 5, 3, 2, "India", "India", "US3", false);
let mimi = new Queen("Mimi Imfurst", 9, 8, 7, 4, 5, 5, 4, 6, 1, 2, 3, "Mimi", "Mimi", "US3", false);
let phoenix = new Queen("Phoenix", 5, 3, 5, 6, 7, 4, 1, 5, 2, 2, 3, "Phoenix", "Phoenix", "US3", false);
let venus = new Queen("Venus D-Lite", 6, 5, 4, 5, 5, 4, 3, 5, 1, 2, 2, "Venus", "Venus", "US3", false);

let US3 = shuffle([raja, manila, alexis, yara, carmen, shangelas3, delta, stacy, mariah, india, mimi, phoenix, venus]);
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let alisa = new Queen("Alisa Summers", 4, 4, 5, 2, 3, 5, 4, 3, 4, 3, 1, "Alisa", "Alisa", "US4", false);
let chad = new Queen("Chad Michaels", 11, 10, 8, 9, 12, 10, 8, 11, 9, 4, 0, "Chad", "Chad", "US4", false);
let dida = new Queen("Dida Ritz", 8, 7, 8, 5, 7, 7, 12, 9, 11, 4, 1, "Dida", "Dida", "US4", false);
let jiggly = new Queen("Jiggly Caliente", 8, 6, 6, 6, 1, 6, 9, 10, 8, 3, 2, "Jiggly", "Jiggly", "US4", false);
let kenya = new Queen("Kenya Michaels", 9, 6, 6, 6, 8, 7, 8, 10, 13, 4, 1, "Kenya", "Kenya", "US4", false );
let lashauwn = new Queen("Lashauwn Beyond", 4, 4, 6, 11, 8, 7, 7, 6, 7, 3, 2, "Lashauwn", "Lashauwn", "US4", false);
let latrice = new Queen("Latrice Royale", 11, 8, 9, 8, 7, 9, 13, 12, 15, 5, 0, "Latrice", "Latrice", "US4", false);
let madame = new Queen("Madame LaQueer", 4, 7, 6, 5, 9, 7, 6, 7, 7, 3, 1, "Madame", "Madame", "US4", false);
let milan = new Queen("Milan", 4, 5, 9, 7, 5, 8, 10, 5, 8, 4, 1, "Milan", "Milan", "US4", false);
let phiphi = new Queen("Phi Phi O'Hara", 13, 9, 8, 10, 10, 10, 8, 10, 2, 0, 5, "PhiPhi", "PhiPhi", "US4", false);
let princess = new Queen("The Princess", 4, 4, 5, 7, 4, 7, 5, 6, 5, 3, 2, "Princess", "Princess", "US4", false);
let willam = new Queen("Willam", 10, 8, 7, 10, 10, 9, 8, 15, 11, 2, 4, "Willam", "Willam", "US4", false);

let US4 = shuffle([alisa, chad, dida, jiggly, kenya, lashauwn, latrice, madame, milan, phiphi, princess, willam])

let alaska = new Queen("Alaska", 15, 14, 7, 8, 14, 10, 11, 14, 13, 4, 2, "Alaska", "Alaska", "US5", false);
let alyssa = new Queen("Alyssa Edwards", 4, 6, 15, 6, 10, 9, 12, 11, 11, 3, 3, "Alyssa", "Alyssa", "US5", false);
let coco = new Queen("Coco Montrese", 10, 10, 11, 9, 7, 9, 15, 9, 9, 4, 2, "Coco", "Coco", "US5", false);
let detox = new Queen("Detox", 10, 9, 9, 9, 8, 12, 11, 7, 8, 4, 1, "Detox", "Detox", "US5", false);
let honey = new Queen("Honey Mahogany", 10, 3, 3, 6, 6, 8, 4, 3, 5, 3, 3, "Honey", "Honey", "US5", false);
let ivy = new Queen("Ivy Winters", 11, 4, 8, 12, 7, 10, 7, 11, 12, 5, 0, "Ivy", "Ivy", "US5", false);
let jadejolie = new Queen("Jade Jolie", 5, 7, 8, 7, 8, 7, 8, 6, 8, 4, 2, "JadeJ", "JadeJ", "US5", false);
let jinkx = new Queen("Jinkx Monsoon", 15, 14, 9, 8, 6, 6, 11, 10, 15, 4, 1, "Jinkx", "Jinkx", "US5", false);
let lineysha = new Queen("Lineysha Sparx", 10, 4, 7, 11, 5, 9, 8, 6, 8, 4, 0, "Lineysha", "Lineysha", "US5", false);
let monica = new Queen("Monica Beverly Hillz", 4, 4, 6, 6, 3, 8, 8, 5, 6, 4, 1, "Monica", "Monica", "US5", false);
let penny = new Queen("Penny Tration", 4, 5, 4, 5, 5, 5, 4, 5, 4, 4, 1, "Penny", "Penny", "US5", false);
let roxxxy = new Queen("Roxxxy Andrews", 7, 4, 7, 11, 8, 10, 12, 11, 8, 3, 4, "Roxxxy", "Roxxxy", "US5", false);
let serena = new Queen("Serena ChaCha", 3, 3, 7, 4, 5, 5, 8, 5, 5, 1, 5, "Serena", "Serena", "US5", false);
let vivienne = new Queen("Vivienne Pinay", 7, 3, 4, 5, 3, 6, 4, 1, 1, 3, 3, "Vivienne", "Vivienne", "US5", false);

let US5 = shuffle([alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne])

let adore = new Queen("Adore Delano", 9, 11, 9, 6, 9, 8, 11, 12, 12, 4, 1, "Adore", "Adore", "US6", false);
let april = new Queen("April Carrión", 5, 5, 6, 9, 5, 9, 8, 6, 10, 5, 0, "April", "April", "US6", false);
let bendela = new Queen("BenDeLaCreme", 12, 12, 11, 10, 15, 10, 9, 13, 13, 5, 0, "Ben", "Ben", "US6", false);
let bianca = new Queen("Bianca Del Rio", 11, 15, 7, 13, 12, 10, 5, 15, 10, 2, 4, "Bianca", "Bianca", "US6", false);
let courtney = new Queen("Courtney Act", 11, 8, 10, 10, 10, 12, 9, 11, 10, 3,3, "Courtney", "Courtney", "US6", false);
let darienne = new Queen("Darienne Lake", 11, 8, 7, 4, 9, 8, 13, 10, 11, 3,3, "Darienne", "Darienne", "US6", false);
let gia = new Queen("Gia Gunn", 7, 4, 8, 8, 4, 8, 9, 10, 4, 0, 5, "Gia", "Gia", "US6", false);
let joslyn = new Queen("Joslyn Fox", 6, 7, 8, 6, 8, 8, 11, 8, 10, 4, 1, "Joslyn", "Joslyn", "US6", false);
let kelly = new Queen("Kelly Mantle", 6, 6, 5, 5, 4, 7, 4, 8, 6, 4, 1, "Kelly", "Kelly", "US6", false);
let laganja = new Queen("Laganja Estranja", 9, 5, 4, 11, 6, 10, 15, 10, 13, 4, 3, "Laganja", "Laganja", "US6", false);
let magnolia = new Queen("Magnolia Crawford", 4, 5, 6, 4, 5, 7, 4, 3, 3, 2, 3, "Magnolia", "Magnolia", "US6", false);
let milk = new Queen("Milk", 6, 6, 7, 8, 8, 7, 7, 10, 7, 3, 4, "Milk", "Milk", "US6", false);
let trinityk = new Queen("Trinity K. Bonet", 9, 5, 7, 12, 4, 10, 15, 10, 8, 4, 2, "Trinity", "Trinity", "US6", false);
let vivacious = new Queen("Vivacious", 4, 5, 5, 4, 4, 7, 7, 9, 7, 4, 2, "Vivacious", "Vivacious", "US6", false);

let US6 = shuffle([bianca, adore, courtney, darienne, bendela, joslyn, trinityk, laganja, milk, gia, april, vivacious, magnolia, kelly,])
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let ginger = new Queen("Ginger Minj", 12, 12, 8, 6, 4, 7, 12, 11, 9, 4, 1, "Ginger", "Ginger", "US7", false);
let jaidynn = new Queen("Jaidynn Diore Fierce", 6, 6, 8, 6, 6, 7, 11, 8, 10, 4, 1, "Jaidynn", "Jaidynn", "US7", false);
let jasmine = new Queen("Jasmine Masters", 3, 4, 6, 5, 2, 7, 6, 12, 9, 3, 3, "Jasmine", "Jasmine", "US7", false);
let kandyH = new Queen("Kandy Ho", 4, 4, 4, 5, 4, 7, 10, 6, 6, 3, 2, "KandyH", "KandyH", "US7", false);
let katya = new Queen("Katya", 9, 12, 9, 7, 8, 8, 10, 13, 13, 4, 1, "Katya", "Katya", "US7", false);
let kennedy = new Queen("Kennedy Davenport", 9, 8, 10, 8, 11, 10, 14, 12, 11, 3, 3, "Kennedy", "Kennedy", "US7", false);
let max = new Queen("Max", 14, 7, 5, 8, 10, 13, 5, 10, 6, 4, 0, "Max", "Max", "US7", false);
let fame = new Queen("Miss Fame", 6, 4, 5, 11, 3, 10, 5, 7, 4, 4, 1, "MissFame", "MissFame", "US7", false);
let kasha = new Queen("Mrs. Kasha Davis", 6, 6, 3, 4, 5, 8, 7, 9, 9, 4, 1, "Kasha", "Kasha", "US7", false);
let pearl = new Queen("Pearl", 7, 10, 8, 9, 11, 9, 5, 6, 3, 4, 3, "Pearl", "Pearl", "US7", false);
let sashab = new Queen("Sasha Belle", 6, 6, 4, 4, 6, 6, 4, 4, 5, 4, 1, "SashaB", "SashaB", "US7", false);
let tempest = new Queen("Tempest DuJour", 6, 6, 5, 3, 6, 7, 4, 7, 8, 4, 2, "Tempest", "Tempest", "US7", false);
let trixie = new Queen("Trixie Mattel", 9, 6, 6, 8, 9, 10, 3, 13, 10, 3, 1, "Trixie", "Trixie", "US7", false);
let violet = new Queen("Violet Chachki", 9, 7, 8, 9, 15, 15, 8, 10, 7, 2, 4, "Violet", "Violet", "US7", false);

let US7 = shuffle([ginger, jaidynn, jasmine, kandyH, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet])
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let bob = new Queen("Bob The Drag Queen", 12, 13, 15, 11, 6, 11, 13, 15, 15, 3, 2, "Bob", "Bob", "US8", false);
let kimchi = new Queen("Kim Chi", 9, 10, 10, 3, 10, 10, 4, 10, 10, 3, 2, "Kim", "Kim", "US8", false);
let naomi = new Queen("Naomi Smalls", 10, 9, 10, 9, 13, 12, 13, 10, 8, 3, 1, "Naomi", "Naomi", "US8", false);
let chichi = new Queen("Chi Chi DeVayne", 7, 7, 7, 13, 7, 6, 13, 9, 9, 4, 1, "ChiChi", "ChiChi", "US8", false);
let derrick = new Queen("Derrick Barry", 7, 7, 8, 8, 9, 7, 8, 10, 5, 1, 4, "Derrick", "Derrick", "US8", false);
let thorgy = new Queen("Thorgy Thor", 14, 9, 6, 9, 13, 9, 8, 12, 12, 2, 3, "Thorgy", "Thorgy", "US8", false);
let robbie = new Queen("Robbie Turner", 4, 5, 6, 4, 3, 6, 6, 5, 1, 3, 3, "Robbie", "Robbie", "US8", false);
let acid = new Queen("Acid Betty", 9, 4, 7, 10, 5, 11, 7, 7, 5, 2, 2, "Acid", "Acid", "US8", false);
let naysha = new Queen("Naysha Lopez", 6, 4, 4, 4, 3, 6, 7, 6, 6, 4, 1, "Naysha", "Naysha", "US8", false);
let cynthia = new Queen("Cynthia Lee Fontaine", 4, 4, 7, 6, 4, 7, 6, 10, 12, 5, 0, "Cynthia", "Cynthia", "US8", false);
let dax = new Queen("Dax Exclamationpoint", 5, 6, 6, 5, 6, 5, 4, 6, 5, 4, 2, "Dax", "Dax", "US8", false);
let laila = new Queen("Laila McQueen", 7, 6, 4, 7, 6, 8, 7, 8, 8, 4, 1, "Laila", "Laila", "US8", false);

let US8 = shuffle([bob, kimchi, naomi, chichi, derrick, thorgy, robbie, acid, naysha, cynthia, dax, laila])
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let aja = new Queen("Aja", 4, 8, 10, 11, 9, 10, 11, 12, 7, 2, 5, "Aja", "Aja", "US9", false);
let alexism = new Queen("Alexis Michelle", 8, 11, 11, 7, 13, 6, 10, 8, 5, 3, 3, "Alexis", "Alexis", "US9", false);
let charlie = new Queen("Charlie Hides", 10, 6, 5, 7, 4, 9, 1, 8, 5, 4, 1, "Charlie", "Charlie", "US9", false);
let eureka = new Queen("Eureka!", 9, 11, 8, 10, 13, 10, 12, 13, 10, 4, 1, "Eureka", "Eureka", "US9", false);
let farrah = new Queen("Farrah Moan", 6, 4, 7, 3, 6, 8, 7, 9, 8, 4, 1, "Farrah", "Farrah", "US9", false);
let jaymes = new Queen("Jaymes Mansfield", 4, 4, 3, 6, 5, 7, 6, 13, 11, 5, 1, "Jaymes", "Jaymes", "US9", false);
let kimora = new Queen("Kimora Blac", 5, 5, 4, 6, 5, 8, 7, 8, 7, 4, 2, "Kimora", "Kimora", "US9", false);
let ninab = new Queen("Nina Bo'Nina Brown", 4, 8, 7, 9, 10, 10, 11, 12, 9, 3, 3, "Nina", "Nina", "US9", false);
let peppermint = new Queen("Peppermint", 11, 9, 10, 9, 4, 7, 13, 12, 13, 5, 1, "Peppermint", "Peppermint", "US9", false);
let sasha = new Queen("Sasha Velour", 9, 10, 8, 10, 11, 13, 11, 11, 11, 4, 1, "Sasha", "Sasha", "US9", false);
let shea = new Queen("Shea Couleé", 12, 12, 10, 13, 13, 12, 8, 13, 14, 4, 1, "Shea", "Shea", "US9", false);
let trinity = new Queen("Trinity The Tuck", 13, 10, 8, 10, 8, 9, 12, 10, 9, 4, 1, "Trinity", "Trinity", "US9", false);
let valentina = new Queen("Valentina", 11, 7, 10, 11, 10, 13, 10, 13, 13, 3, 3, "Valentina", "Valentina", "US9", false);
let cynthia2 = new Queen("Cynthia Lee Fontaine", 4, 4, 7, 6, 4, 7, 6, 10, 12, 5, 0, "Cynthia", "Cynthia", "US9", false);

let US9 = shuffle([aja, alexism, charlie, cynthia2, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina])
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let aquaria = new Queen("Aquaria", 7, 11, 11, 13, 15, 14, 11, 11, 9, 4, 2, "Aquaria", "Aquaria", "US10", false);
let asia = new Queen("Asia O'Hara", 11, 9, 6, 6, 7, 11, 9, 8, 9, 5, 1, "Asia", "Asia", "US10", false);
let blair = new Queen("Blair St. Clair", 7, 6, 6, 7, 8, 8, 7, 8, 8, 4, 0, "Blair", "Blair", "US10", false);
let dusty = new Queen("Dusty Ray Bottoms", 8, 8, 6, 4, 4, 4, 6, 9, 8, 4, 0, "Dusty", "Dusty", "US10", false);
let kalorie = new Queen("Kalorie K. Williams", 4, 4, 4, 5, 7, 7, 8, 6, 6, 4, 1, "Kalorie", "Kalorie", "US10", false);
let kameron = new Queen("Kameron Michaels", 9, 8, 14, 10, 8, 8, 15, 7, 6, 4, 2, "Kameron", "Kameron", "US10", false);
let mayhem = new Queen("Mayhem Miller", 4, 8, 9, 13, 14, 9, 10, 8, 7, 4, 1, "Mayhem", "Mayhem", "US10", false);
let miz = new Queen("Miz Cracker", 10, 9, 4, 11, 11, 7, 5, 10, 9, 4, 2, "Miz", "Miz", "US10", false);
let monet1 = new Queen("Monét X Change", 9, 11, 13, 6, 5, 5, 14, 10, 10, 5, 1, "Monet", "Monet", "US10", false);
let monique = new Queen("Mo Heart", 12, 9, 8, 4, 10, 13, 10, 9, 11, 4, 1, "Mo", "Mo", "US10", false);
let vanessa = new Queen("Vanessa 'Vanjie' Mateo", 6, 6, 8, 6, 9, 7, 11, 8, 8, 4, 1, "Vanessa", "Vanessa", "US10", false);
let vixen = new Queen("The Vixen", 5, 4, 12, 9, 3, 8, 12, 9, 5, 3, 4, "Vixen", "Vixen", "US10", false);
let yuhua = new Queen("Yuhua Hamasaki", 4, 4, 6, 9, 6, 7, 7, 6, 6, 3, 2, "Yuhua", "Yuhua", "US10", false);
let eureka2 = new Queen("Eureka!", 9, 11, 8, 10, 13, 10, 12, 13, 10, 4, 1, "Eureka", "Eureka", "US10", false)

let US10 = shuffle([aquaria, asia, blair, dusty, eureka2, kalorie, kameron, mayhem, miz, monet1, monique, vanessa, vixen, yuhua])

let akeria = new Queen("A'keria C. Davenport", 9, 11, 9, 10, 10, 10, 10, 9, 11, 3, 1, "Akeria", "Akeria", "US11", false);
let ariel = new Queen("Ariel Versace", 4, 6, 4, 5, 5, 5, 5, 3, 4, 2, 2, "Ariel", "Ariel", "US11", false);
let brooke = new Queen("Brooke Lynn Hytes", 10, 10, 13, 12, 10, 11, 13, 11, 8, 3, 1, "Brooke", "Brooke", "US11", false);
let honeyd = new Queen("Honey Davenport", 4, 6, 5, 7, 4, 4, 4, 6, 4, 1, 1, "Honey", "Honey", "US11", false);
let kahanna = new Queen("Kahanna Montrese", 4, 5, 5, 4, 5, 6, 8, 2, 4, 1, 1, "Kahanna", "Kahanna", "US11", false);
let mercedes = new Queen("Mercedes Iman Diamond", 4, 6, 4, 6, 6, 8, 8, 5, 8, 1, 1, "Mercedes", "Mercedes", "US11", false);
let ninaw = new Queen("Nina West", 9, 10, 6, 5, 6, 8, 6, 8, 9, 1, 1, "NinaWest", "NinaWest", "US11", false);
let plastique = new Queen("Plastique Tiara", 10, 7, 8, 11, 8, 10, 9, 8, 9, 1, 1, "Plastique", "Plastique", "US11", false);
let rajahs11 = new Queen("Ra'Jah O'Hara", 6, 8, 8, 11, 9, 8, 12, 8, 10, 1, 3, "Rajah", "Rajah", "US11", false);
let scarletenvys11 = new Queen("Scarlet Envy", 13, 7, 6, 13, 8, 10, 7, 8, 10, 1, 1, "ScarletEnvyp", "ScarletEnvyp", "US11", false);
let shuga = new Queen("Shuga Cain", 10, 7, 7, 6, 7, 10, 7, 6, 7, 1, 1, "Shuga", "Shuga", "US11", false);
let silkys11 = new Queen("Silky Nutmeg Ganache", 10, 11, 11, 6, 9, 8, 11, 10, 9, 3, 4, "SilkyNutmetS11", "SilkyNutmetS11", "US11", false);
let vanjies11 = new Queen("Vanessa 'Vanjie' Mateo", 6, 6, 8, 6, 9, 7, 11, 8, 8, 4, 1, "VanessaS11", "VanessaS11", "US11", false);
let soju = new Queen("Soju", 3, 1, 2, 1, 1, 3, 3, 1, 1, 1, 1, "Soju", "Soju", "US11", false);
let yvie = new Queen("Yvie Oddly", 12, 6, 12, 11, 6, 10, 15, 12, 8, 1, 1, "Yvie", "Yvie", "US11", false);

let US11 = shuffle([akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajahs11, scarletenvys11, shuga, silkys11, soju, vanjies11, yvie]);

let jaida = new Queen("Jaida Essence Hall", 10, 11, 8, 9, 14, 15, 13, 14, 13, 4, 1, "Jaida", "Jaida", "US12",false);
let crystalm = new Queen("Crystal Methyd", 8, 10, 12, 8, 10, 12, 8, 15, 10, 4, 1, "Crystal", "Crystal", "US12", false);
let gigi = new Queen("Gigi Goode", 11, 12, 13, 8, 12, 13, 5, 10, 11, 3, 1, "Gigi", "Gigi", "US12", false);
let jackie = new Queen("Jackie Cox", 12, 10, 11, 8, 7, 10, 11, 10, 7, 4, 1, "Jackie", "Jackie", "US12", false);
let heidi = new Queen("Heidi N Closet", 9, 10, 10, 9, 8, 8, 14, 12, 15, 5, 0, "Heidi", "Heidi", "US12", false);
let widow = new Queen("Widow Von'Du", 8, 6, 10, 5, 6, 9, 13, 5, 3, 4, 1, "Widow", "Widow", "US12", false);
let jan = new Queen("Jan", 9, 10, 10, 7, 11, 10, 1, 8, 7, 4, 2, "Jan", "Jan", "US12", false);
let brita = new Queen("Brita", 7, 6, 9, 7, 6, 7, 10, 5, 5, 2, 3, "Brita", "Brita", "US12", false);
let aiden = new Queen("Aiden Zhane", 8, 7, 9, 7, 6, 7, 6, 5, 9, 2, 2, "Aiden", "Aiden", "US12", false);
let nicky = new Queen("Nicky Doll", 7, 6, 6, 6, 15, 15, 6, 7, 4, 4, 1, "Nicky", "Nicky", "US12", false);
let rock = new Queen("Rock M. Sakura", 5, 6, 6, 6, 5, 4, 3, 3, 3, 3, 1, "Rock", "Rock", "US12", false);
let sherry = new Queen("Sherry Pie", 10, 10, 7, 6, 10, 8, 8, 10, 8, 1, 3, "Sherry", "Sherry", "US12", false)
let dahlia = new Queen("Dahlia Sin", 3, 2, 4, 4, 4, 15, 4, 1, 1, 1, 4, "Dahlia", "Dahlia", "US12", false);

let US12 = shuffle([jaida, crystalm, gigi, jackie, heidi, widow, jan, brita, aiden, nicky, rock, sherry, dahlia]);
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let denali = new Queen("Denali", 4, 8, 9, 13, 10, 11, 13, 6, 8, 1, 0, "Denali", "Denali", "US13", false);
let elliott = new Queen("Elliott With 2 Ts", 5, 5, 5, 9, 3, 8, 11, 3, 3, 1, 1, "Elliott", "Elliott", "US13", false);
let gottmik = new Queen("Gottmik", 8, 11, 6, 9, 12, 13, 6, 11, 10, 3, 1, "Gottmik", "Gottmik", "US13", false);
let joey = new Queen("Joey Jay", 6, 7, 6, 5, 5, 7, 7, 2, 4, 4, 2, "JoeyJay", "JoeyJay", "US13", false);
let kahmora = new Queen("Kahmora Hall", 3, 4, 3, 5, 4, 12, 4, 3, 6, 1, 1,  "Kahmora", "Kahmora", "US13", false);
let kandym = new Queen("Kandy Muse", 9, 10, 8, 6, 7, 8, 14, 11, 10, 2, 4, "KandyMuse", "KandyMuse", "US13", false);
let lala = new Queen("LaLa Ri", 5, 7, 10, 2, 6, 9, 14, 5, 10, 4, 1, "LalaRi", "LalaRi", "US13", false);
let olivia = new Queen("Olivia Lux", 8, 10, 7, 10, 8, 11, 8, 7, 10, 4, 1, "OliviaLux", "OliviaLux", "US13", false);
let rose = new Queen("Rosé", 12, 11, 13, 10, 10, 8, 6, 13, 9, 3, 1, "Rose", "Rose", "US13", false);
let symone = new Queen("Symone", 14, 10, 7, 9, 9, 9, 13, 13, 13, 4, 1, "Symone", "Symone", "US13", false);
let tamisha = new Queen("Tamisha Iman", 5, 6, 7, 5, 6, 7, 7, 5, 7, 3, 1, "Tamisha", "Tamisha", "US13", false);
let tina = new Queen("Tina Burner", 6, 6, 10, 5, 6, 8, 9, 9, 6, 1, 1, "TinaBurner", "TinaBurner", "US13", false);
let utica = new Queen("Utica Queen", 7, 4, 6, 15, 5, 12, 11, 7, 9, 1, 1, "UticaQueen", "UticaQueen", "US13", false);

let US13 = shuffle([denali, elliott, gottmik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica]);

//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let alyssah = new Queen("Alyssa Hunter", 5, 4, 6, 6, 6, 11, 8, 4, 6, 4, 2, "Alyssa", "Alyssa", "US14", false);
let angeria = new Queen("Angeria Paris VanMicheals", 13, 13, 11, 8, 12, 12, 8, 10, 12, 5, 0, "Angeria", "Angeria", "US14", false);
let bosco = new Queen("Bosco", 12, 11, 9, 10, 10, 8, 8, 12, 10, 4, 0, "Bosco", "Bosco", "US14", false);
let daya = new Queen("Daya Betty", 10, 10, 8, 8, 10, 10, 7, 10, 10, 3, 3, "Daya", "Daya", "US14", false);
let deja = new Queen("DeJa Skye", 9, 8, 12, 10, 8, 6, 13, 12, 10, 4, 1, "Deja", "Deja", "US14", false);
let jasminek = new Queen("Jasmine Kennedie", 7, 7, 8, 10, 6, 10, 15, 5, 5, 5, 2, "Jasmine", "Jasmine", "US14", false);
let jorgeous = new Queen("Jorgeous", 9, 8, 5, 11, 6, 6, 14, 6, 6, 4, 1, "Jorgeous", "Jorgeous", "US14", false);
let junej = new Queen("June Jambalaya", 4, 6, 4, 4, 6, 5, 4, 8, 4, 3, 1, "June", "June", "US14", false);
let kerri = new Queen("Kerri Colby", 6, 6, 6, 7, 5, 8, 5, 5, 15, 5, 0, "Kerri", "Kerri", "US14", false);
let kornbread = new Queen("Kornbred \"The Snack\" Jeté", 9, 9, 9, 6, 6, 8, 8, 12, 10, 5, 1, "Kornbread", "Kornbread", "US14", false);
let camden = new Queen("Lady Camden", 14, 10, 10, 11, 10, 8, 12, 8, 8, 4, 0, "Camden", "Camden", "US14", false);
let maddym = new Queen("Maddy Morphosis", 6, 6, 4, 4, 3, 6, 7, 6, 7, 3, 1, "Maddy", "Maddy", "US14", false);
let orion = new Queen("Orion Story", 3, 5, 3, 3, 2, 2, 2, 2, 14, 4, 2, "Orion", "Orion","US14", false);
let willow = new Queen("Willow Pill", 12, 10, 11, 8, 14, 10, 12, 12, 13, 5, 1, "Willow", "Willow", "US14", false);

let US14 = shuffle([alyssah, angeria, bosco, daya, deja, jasminek, jorgeous, junej, kerri, kornbread, camden, maddym, orion, willow]);

let jaidaas7 = new Queen("Jaida Essence Hall", 10, 11, 10, 12, 12, 14, 12, 13, 12, 5, 0,"Jaida", "Jaida", "AS7", false);
let jinkxas7 = new Queen("Jinkx Monsoon", 14, 12, 15, 10, 11, 11, 13, 12, 13, 4, 1, "Jinkx", "Jinkx", "AS7", false);
let monetas7 = new Queen("Monét X Change", 11, 12, 13, 14, 10, 12, 14, 11, 13, 4, 2, "Monet", "Monet", "AS7", false);
let rajaas7 = new Queen("Raja", 14, 11, 12, 11, 14, 13, 12, 11, 13, 4, 1, "Raja", "Raja", "AS7", false);
let sheaas7 = new Queen("Shea Coulée", 11, 12, 13, 12, 12, 14, 14, 13, 12, 3, 1, "Shea", "Shea", "AS7", false);
let vivas7 = new Queen("The Vivienne", 14, 12, 11, 10, 13, 12, 14, 13, 12, 3, 2, "Viv", "Viv", "AS7", false);
let trinityas7 = new Queen("Trinity The Tuck", 14, 14, 11, 13, 14, 14, 12, 12, 11, 2, 1, "Trinity", "Trinity", "AS7", false);
let yvieas7 = new Queen("Yvie Oddly", 12, 11, 10, 15, 12, 12, 14, 15, 13, 4, 2, "Yvie", "Yvie", "AS7", false);

let AS7 = shuffle([jaidaas7, jinkxas7, monetas7, rajaas7, sheaas7, vivas7, trinityas7, yvieas7]);

let rupaulhost = new Host("Rupaul","RuIn","RuOut");
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let cherylw = new Queen("Cheryl Hole", 8, 8, 10, 10, 6, 6, 11, 10, 10, 4, 1, "Cheryl", "Cheryl", "TW1", false)
let bluw = new Queen("Blu Hydrangea", 11, 12, 10, 9, 11, 11, 10, 10, 11, 4, 2, "Blu", "Blu", "TW1", false);
let mow = new Queen("Mo Heart", 12, 9, 9, 11, 15, 14, 9, 12, 11, 4, 1, "Mo", "Mo", "TW1", false);
let bagaw = new Queen("Baga Chipz", 12, 12, 12, 6, 6, 5, 5, 13, 13, 4, 2, "Baga", "Baga", "TW1", false);
let jujubeew = new Queen("Jujubee", 10, 10, 10, 7, 6, 7, 9, 9, 9, 4, 1, "Jujubee", "Jujubee", "TW1", false)
let janeyw = new Queen("Janey Jacké", 9, 7, 12, 12, 9, 11, 12, 7, 7, 4, 0, "Janey", "Janey", "TW1", false);
let panginaw = new Queen("Pangina Heals", 11, 10, 10, 13, 13, 13, 14, 12, 12, 4, 2, "Pangina", "Pangina", "TW1", false)
let jimbow = new Queen("Jimbo", 11, 12, 13, 6, 11, 13, 4, 12, 15, 3, 3, "Jimbo", "Jimbo", "TW1", false)
let lemonw = new Queen("Lemon", 10, 11, 12, 13, 7, 8, 10, 10, 10, 4, 1, "Lemon", "Lemon", "TW1", false)

let TW1 = shuffle([cherylw, bluw, mow, bagaw, jujubeew, janeyw, panginaw, jimbow, lemonw])

let baga = new Queen("Baga Chipz", 12, 12, 12, 6, 6, 5, 5, 13, 13, 4, 2, "Baga", "Baga", "UK1", false);
let blu = new Queen("Blu Hydrangea", 11, 10, 13, 9, 10, 12, 9, 10, 15, 4, 3, "Blu", "Blu", "UK1", false);
let cheryl = new Queen("Cheryl Hole", 8, 9, 9, 10, 6, 6, 11, 10, 13, 4, 1, "Cheryl", "Cheryl", "UK1", false);
let crystal = new Queen("Crystal", 7, 7, 6, 6, 10, 9, 9, 9, 8, 4, 2, "Crystal", "Crystal", "UK1", false);
let divina = new Queen("Divina De Campo", 14, 13, 10, 10, 11, 12, 9, 11, 10, 4, 1, "Divina", "Divina", "UK1", false);
let gothy = new Queen("Gothy Kendoll", 5, 3, 5, 2, 5, 6, 1, 8, 6, 4, 1, "Gothy", "Gothy", "UK1", false);
let scaredy = new Queen("Scaredy Kat", 5, 6, 6, 5, 6, 7, 4, 9, 8, 4, 1, "Scaredy", "Scaredy", "UK1", false);
let sumting = new Queen("Sum Ting Wong", 7, 6, 7, 6, 9, 10, 6, 9, 10, 4, 1, "Sumting", "Sumting", "UK1", false);
let viv = new Queen("The Vivienne", 14, 12, 11, 8, 12, 12, 9, 10, 9, 3, 2, "Viv", "Viv", "UK1", false);
let vinegar = new Queen("Vinegar Strokes", 8, 7, 8, 7, 3, 4, 5, 6, 10, 4, 1, "Vinegar", "Vinegar", "UK1", false);

let UK1 = shuffle([baga, blu, cheryl, crystal, divina, gothy, scaredy, sumting, viv, vinegar])

let awhora = new Queen("A'Whora", 8, 8, 7, 10, 10, 12, 9, 10, 10, 3, 2, "Awhora", "Awhora", "UK2", false);
let asttina = new Queen("Asttina Mandella", 7, 6, 7, 10, 9, 8, 9, 8, 7, 4, 1, "Asttina", "Asttina", "UK2", false);
let bimini = new Queen("Bimini", 10, 11, 10, 11, 12, 11, 13, 10, 14, 4, 1, "Bimini", "Bimini", "UK2", false);
let cherry = new Queen("Cherry Valentine", 7, 6, 6, 7, 9, 11, 6, 8, 8, 4, 1, "Cherry", "Cherry", "UK2", false);
let ellie = new Queen("Ellie Diamond", 9, 9, 7, 10, 11, 10, 10, 9, 9, 4, 1, "Ellie", "Ellie", "UK2", false);
let ginny = new Queen("Ginny Lemon", 6, 6, 8, 2, 2, 5, 1, 15, 11, 4, 1, "Ginny", "Ginny", "UK2", false);
let joe = new Queen("Joe Black", 10, 8, 6, 2, 9, 12, 4, 13, 11, 4, 1, "Joe", "Joe", "UK2", false);
let lawrence = new Queen("Lawrence Chaney", 12, 11, 13, 7, 13, 12, 10, 14, 14, 4, 1, "Lawrence", "Lawrence", "UK2", false);
let sister = new Queen("Sister Sister", 7, 7, 6, 8, 7, 7, 8, 9, 8, 4, 1, "Sister", "Sister", "UK2", false);
let tayce = new Queen("Tayce", 10, 9, 9, 13, 9, 10, 15, 10, 11, 4, 1, "Tayce", "Tayce", "UK2", false);
let tia = new Queen("Tia Kofi", 9, 11, 13, 9, 3, 5, 10, 11, 15, 4, 2, "Tia", "Tia", "UK2", false);
let veronica = new Queen("Veronica Green", 9, 8, 8, 9, 6, 6, 6, 7, 7, 5, 1, "Veronica", "Veronica", "UK2", false);

let UK2 = shuffle([awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica])
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let anubis = new Queen("Anubis", 5, 5, 5, 4, 5, 4, 4, 5, 7, 4, 1, "Anubis", "Anubis", "UK3", false);
let charity = new Queen("Charity Kase", 8, 7, 4, 10, 6, 13, 8, 9, 10, 4, 2, "Charity", "Charity", "UK3", false);
let choriza = new Queen("Choriza May", 9, 9, 6, 7, 7, 8, 7, 9, 11, 5, 1, "Choriza", "Choriza", "UK3", false);
let elektraf = new Queen("Elektra Fence", 5, 6, 11, 4, 5, 8, 13, 7, 8, 4, 2, "ElektraF", "ElektraF", "UK3", false);
let ella = new Queen("Ella Vaday", 9, 14, 8, 10, 9, 9, 8, 9, 8, 4, 1, "Ella", "Ella", "UK3", false);
let kitty = new Queen("Kitty Scott-Claus", 12, 11, 7, 8, 9, 9, 7, 8, 11, 4, 1, "Kitty", "Kitty", "UK3", false);
let krystal = new Queen("Krystal Versace", 8, 8, 9, 12, 12, 14, 12, 10, 8, 3, 3, "Krystal", "Krystal", "UK3", false);
let river = new Queen("River Medway", 8, 6, 5, 9, 5, 7, 6, 7, 10, 5, 1, "River", "River", "UK3", false);
let scarlett = new Queen("Scarlett Harlett", 7, 7, 8, 8, 6, 8, 7, 5, 6, 3, 3, "ScarlettH", "ScarlettH", "UK3", false);
let vanity = new Queen("Vanity Milan", 8, 7, 8, 5, 8, 8, 12, 9, 8, 3, 1, "Vanity", "Vanity", "UK3", false);
let veronicas3 = new Queen("Veronica Green", 9, 8, 8, 9, 6, 6, 6, 7, 7, 5, 1, "Veronica", "Veronica", "UK3", false);
let victoriaS = new Queen("Victoria Scone", 8, 10, 8, 7, 9, 9, 8, 9, 10, 5, 1, "VictoriaS", "VictoriaS", "UK3", false);

let UK3 = shuffle([anubis, charity, choriza, elektraf, ella, kitty, krystal, river, scarlett, vanity, veronicas3, victoriaS])

let anastarzia = new Queen("Anastarzia Anaquway", 7, 6, 8, 7, 9, 8, 6, 8, 10, 5, 0, "Anastarzia", "Anastarzia", "CA1", false);
let boa = new Queen("BOA", 7, 9, 9, 7, 6, 5, 5, 9, 12, 3, 0, "BOA", "Boa", "CA1", false);
let ilona = new Queen("Ilona Verley", 6, 7, 9, 7, 9, 8, 11, 8, 8, 2, 4, "Ilona", "Ilona","CA1",false);
let jimbo = new Queen("Jimbo", 12, 10, 14, 4, 8, 7, 3, 9, 12, 2, 4, "Jimbo", "Jimbo", "CA1", false);
let juice = new Queen("Juice Boxx", 7, 6, 7, 6, 5, 9, 6, 7, 10, 4, 1, "Juice", "Juice", "CA1", false);
let kiara = new Queen("Kiara",8, 9, 6, 7, 10, 8, 7, 5, 6, 3, 0, "Kiara", "Kiara", "CA1", false);
let kyne = new Queen("Kyne", 7, 8, 6, 8, 7, 6, 6, 10, 12, 2, 5, "Kyne", "Kyne", "CA1", false);
let lemon = new Queen("Lemon", 11, 9, 8, 10, 6, 13, 12, 8, 10, 3, 3, "Lemon","Lemon","CA1",false);
let priyanka = new Queen("Priyanka", 8, 12, 13, 10, 6, 8, 15, 13, 12, 4, 2, "Priyanka", "Priyanka", "CA1", false);
let rita = new Queen("Rita Baga", 8, 10, 12, 6, 10, 8, 12, 8, 10, 4, 1, "Rita", "Rita", "CA1", false);
let scarlettbobo = new Queen("Scarlett BoBo", 12, 10, 8, 8, 10, 11, 13, 12, 10, 4, 1, "ScarlettBoBo", "ScarlettBoBo", "CA1", false);
let tynomi = new Queen("Tynomi Banks", 6, 7, 9, 12, 8, 8, 13, 12, 10, 4, 2, "Tynomi", "Tynomi", "CA1", false);

let CA1 = shuffle([anastarzia,boa,ilona,jimbo,juice,kiara,kyne,lemon,priyanka,rita,scarlettbobo,tynomi]);


let icesis = new Queen("Icesis Couture", 8, 9, 10, 11, 15, 14, 12, 10, 8, 4, 0, "Icesis", "Icesis", "CA2", false);
let kendall = new Queen("Kendall Gender", 7, 9, 10, 8, 6, 10, 14, 10, 11, 4, 1, "Kendall", "Kendall", "CA2", false);
let eve = new Queen("Eve 6000", 7, 8, 6, 4, 6, 6, 6, 4, 7, 4, 2, "Eve", "Eve", "CA2", false);
let giam = new Queen("Gia Metric", 8, 10, 12, 14, 7, 10, 10, 6, 12, 2, 1, "Gia", "Gia", "CA2", false);
let pythia = new Queen("Pythia", 10, 11, 8, 7, 12, 10, 5, 12, 13, 5, 0, "Pythia", "Pythia", "CA2", false);
let adriana = new Queen("Adriana", 13, 9, 6, 7, 9, 12, 9, 12, 9, 3, 1, "AdrianaCA2", "Adrianna", "CA2", false);
let kimoraa = new Queen("Kimora Amour", 4, 4, 4, 8, 7, 8, 7, 5, 7, 5, 0, "Kimora", "Kimora", "CA2", false);
let synthia = new Queen("Synthia Kiss", 11, 8, 12, 10, 5, 8, 13, 10, 12, 4, 0, "Synthia", "Synthia", "CA2", false);
let suki = new Queen("Suki Doll", 10, 5, 5, 6, 13, 5, 6, 7, 7, 4, 0, "Suki", "Suki", "CA2", false);
let oceane = new Queen("Océane Aqua-Black", 3, 4, 5, 6, 5, 8, 6, 5, 4, 5, 0, "Oceane", "Oceane", "CA2");
let beth = new Queen("Beth", 8, 9, 10, 6, 5, 10, 8, 10, 10, 4, 0, "Beth", "Beth", "CA2", false);
let stephanie = new Queen("Stephanie Prince", 8, 9, 7, 6, 10, 12, 8, 8, 10, 4 , 0, "Stephanie", "Stephanie", "CA2", false);

let CA2 = shuffle([icesis, kendall, eve, giam, pythia, adriana, kimoraa, synthia, suki, oceane, beth, stephanie]);


let brookehost = new Host("Brooke Lynn Hytes", "BrookeIn", "BrookeOut");

let carmenf = new Queen("Carmen Farala",10, 11, 10, 8, 13, 15, 14, 12, 13, 2, 2, "Carmen", "Carmen", "ES1", false);
let killer = new Queen("Killer Queen", 8, 11, 13, 8, 9, 13, 12, 10, 9, 3, 2, "Killer", "Killer", "ES1", false);
let sagi = new Queen("Sagittaria", 10, 11, 8, 12, 13, 15, 12, 13, 12, 3, 3,  "Sagittaria", "Sagitarria", "ES1", false);
let pupi = new Queen("Pupi Poisson", 14, 11, 8, 10, 6, 7, 8, 11, 12, 5, 1, "Pupi", "Pupi", "ES1", false);
let dovima = new Queen("Dovima Nurmi", 7, 8, 7, 9, 7, 10, 12, 8, 12, 2, 2, "Dovima", "Dovima", "ES1", false);
let hug = new Queen("Hugáceo Crujiente", 7, 8, 7, 9, 13, 14, 9, 8, 10, 2, 2, "Hug", "Hug", "ES1",false);
let arantxa = new Queen("Arantxa Castilla La Mancha", 11, 8, 6, 12, 6, 8, 10, 8, 13, 4, 1, "Arantxa", "Arantxa", "ES1", false);
let inti = new Queen("Inti", 8, 9, 7, 8, 10, 11, 10, 12, 15, 1, 3, "Inti", "Inti", "ES1", false);
let dragv = new Queen("Drag Vulcano", 8, 9, 6, 7, 10, 11, 6, 14, 11, 4, 2, "DragV", "DragV", "ES1", false);
let macarena = new Queen("The Macarena", 6, 6, 7, 7, 5, 7, 6, 9, 10, 5, 1, "Maracarena", "Maracarena", "ES1", false);

let ES1 = shuffle([carmenf, killer, sagi, pupi, dovima, hug, arantxa, inti, dragv, macarena]);

let marina = new Queen("Marina", 9, 8, 11, 10, 6, 8, 15, 8, 10, 3, 1, "Marina", "Marina", "ES2", false);
let estrella = new Queen("Estrella Extravanganza", 11, 10, 12, 9, 5, 6, 8, 8, 10, 3, 2, "Estrella", "Estrella", "ES2", false);
let venedita = new Queen("Venedita Von Däsh", 9, 13, 10, 8, 8, 12, 10, 8, 8, 2, 0, "Venedita", "Venedita", "ES2", false);
let juriji = new Queen("Juriji Der Klee", 12, 7, 7, 9, 10, 10, 9, 12, 15, 2, 2, "Juriji", "Juriji", "ES2", false);
let sethlas = new Queen("Drag Sethlas", 8, 9, 7, 8, 12, 10, 8, 12, 10, 3, 2, "Sethlas", "Sethlas", "ES2", false);
let diamante = new Queen("Diamante Merybrown", 7, 6, 6, 10, 6, 8, 9, 8, 9, 2, 0, "Diamante", "Diamante", "ES2",false);
let onyx = new Queen("Onyx", 8, 8, 7, 6, 12, 14, 8, 12, 10, 2, 0, "Onyx", "Onyx", "ES2", false);
let jota = new Queen("Jota Carajota", 7, 6, 8, 6, 9, 6, 8, 8, 14, 2, 4, "Jota", "Jota", "ES2", false);
let samantha = new Queen("Samantha Ballentines", 6, 7, 6, 7, 7, 5, 12, 10, 8, 3, 0, "Samantha", "Samantha", "ES2", false);
let arielr = new Queen("Ariel Rec", 7, 9, 7, 6, 8, 10, 7, 10, 8, 2, 0, "ArielR", "ArielR", "ES2", false);
let marisa = new Queen("Marisa Prisa", 7, 8, 6, 7, 7, 5, 7, 6, 5, 3, 1, "Marisa", "Marisa", "ES2", false);

let supremmehost = new Host("Supremme De Luxe","SupremmeIn","SupremmeOut");

let ES2 = shuffle([marina, estrella, venedita, juriji, sethlas, diamante, onyx, jota, samantha, arielr, marisa]);

let amadiva = new Queen("Amadiva", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Amadiva", "Amadiva", "TH1",false);
let année = new Queen("Année Maywong", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Année", "Année", "TH1",false);
let bella = new Queen("B Ella", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "BElla", "BElla", "TH1",false);
let bbf = new Queen("Bunny Be Fly", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "BBF", "BBF", "TH1",false);
let dearis = new Queen("Dearis Doll", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Dearis", "Dearis", "TH1",false);
let jaja = new Queen("JAJA", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "JAJA", "JAJA", "TH1",false);
let meannie = new Queen("Meannie Minaj", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Meannie", "Meannie", "TH1",false);
let morrigan = new Queen("Morrigan", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Morrigan", "Morrigan", "TH1",false);
let natalia = new Queen("Natalia Pliacam", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Natalia", "Natalia", "TH1",false);
let petchra = new Queen("Petchra", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Petchra", "Petchtra", "TH1",false);

let TH1 = shuffle([amadiva, année, bella, bbf, dearis, jaja, meannie, morrigan, natalia, petchra]);

let angele = new Queen("Angele Anang", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Angele", "Angele", "TH2",false);
let bandit = new Queen("Bandit", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Bandit", "Bandit", "TH2",false);
let genie = new Queen("Genie", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Genie", "Genie", "TH2",false);
let gimhuay = new Queen("Miss Gimhuay", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Gimhuay", "Gimhuay", "TH2",false);
let kana = new Queen("Kana Warrior", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Kana", "Kana", "TH2",false);
let kandyz = new Queen("Kandy Zyanide", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Kandy", "Kandy", "TH2",false);
let katy = new Queen("Katy Killer", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Katy", "Katy", "TH2",false);
let mstranger = new Queen("M Stranger Fox", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "M", "M", "TH2",false);
let maya = new Queen("Maya B'Haro", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Maya", "Maya", "TH2",false);
let mocha = new Queen("Mocha Diva", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Mocha", "Mocha", "TH2",false);
let silvers = new Queen("Silver Sonic", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "SilverSonic", "SilverSonic", "TH2",false);
let srimala = new Queen("Srimala", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Srimala", "Srimala", "TH2",false);
let tormai = new Queen("Tormai", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Tormai", "Tormai", "TH2",false);
let vanda = new Queen("Vanda Miss Joaquim", 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, "Vanda", "Vanda", "TH2",false);

let TH2 = shuffle([angele, bandit, genie, gimhuay, kana, kandyz, katy, mstranger, maya, mocha, silvers, srimala, tormai, vanda]);
//acting, improv, comedy, dance, design, runway, lipsync, branding, charisma, kindness, shadyness
let chelsea = new Queen("Chelsea Boy", 9, 10, 7, 7, 10, 12, 6, 7, 7, 3, 0, "Chelsea", "Chelsea", "HO1", false);
let envy = new Queen("Envy Peru", 11, 11, 11, 8, 11, 13, 11, 7, 7, 3, 0, "Envy", "Envy", "HO1", false);
let janey = new Queen("Janey Jacké", 7, 6, 13, 11, 6, 11, 12, 7, 7, 3, 0, "Janey", "Janey", "HO1", false);
let madamem = new Queen("Madame Madness", 8, 6, 5, 6, 5, 8, 7, 7, 7, 3, 0, "Madame", "Madame", "HO1", false);
let mama = new Queen("Ma'Ma Queen", 9, 6, 5, 6, 6, 10, 7, 7, 7, 3, 0, "Mama", "Mama", "HO1", false);
let megan = new Queen("Megan Schoonbrood", 7, 6, 6, 5, 6, 9, 8, 7, 7, 3, 0, "Megan", "Megan", "HO1", false);
let abby = new Queen("Miss Abby OMG", 5, 6, 11, 6, 5, 8, 10, 7, 7, 3, 0, "Abby", "Abby", "HO1", false);
let patty = new Queen("Patty Pam-Pam", 5, 6, 6, 6, 5, 9, 7, 7, 7, 3, 0, "Patty", "Patty", "HO1", false);
let roem = new Queen("Roem", 6, 6, 5, 5, 5, 6, 5, 7, 7, 3, 0, "Roem", "Roem", "HO1", false);
let sederginne = new Queen("Sederginne", 7, 6, 6, 7, 5, 13, 5, 7, 7, 3, 0, "Sederginne", "Sederginne", "HO1", false);

let HO1 = shuffle([chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne])

let anita = new Queen("Anita Wigl'It", 9, 11, 15, 9, 8, 10, 6, 12, 13, 4, 1, "Anita", "Anita", "DU1",false);
let arts = new Queen("Art Simone", 10, 8, 7, 10, 14, 15, 6, 10, 8, 4, 1, "Art", "Art", "DU1",false);
let cocoj = new Queen("Coco Jumbo", 8, 10, 9, 8, 7, 6, 12, 6, 10, 4, 1, "Coco", "Coco", "DU1",false);
let elektra = new Queen("Elektra Shock", 11, 10, 12, 15, 9, 4, 14, 10, 12, 5, 1, "Elektra", "Elektra", "DU1",false);
let etc = new Queen("Etcetera Etcetera", 8, 9, 10, 10, 12, 14, 12, 10, 9, 5, 0, "Etc", "Etc", "DU1",false);
let jojoz = new Queen("Jojo Zaho", 7, 7, 6, 7, 9, 6, 8, 10, 11, 4, 1, "Jojo", "Jojo", "DU1",false);
let karenf = new Queen("Karen From Finance", 11, 10, 9, 6, 5, 12, 9, 15, 10, 2, 2, "Karen", "Karen", "DU1",false);
let kita = new Queen("Kita Mean", 12, 12, 13, 14, 8, 12, 10, 15, 12, 4, 1, "Kita", "Kita", "DU1",false);
let maxi = new Queen("Maxi Shield", 8, 9, 7, 10, 12, 10, 15, 9, 12, 5, 0, "Maxi", "Maxi", "DU1",false);

let DU1 = shuffle([anita, arts, cocoj, elektra, etc, jojoz, karenf, kita, maxi]);

let arthost = new Host("Art Arya", "ArtIn", "ArtArya");

let DragRaceQueens = [

  akashia, bebes1, jades, ninas1, onginas1, rebecca, shannels1, tammies1, victoriap,
  jessicaw, jujus2, morganmcs2, mystique, npb, pandoras2, sahara, shangela, kylies2, tatis2, james,
  raja, manila, alexis, yara, carmen, shangelas3, delta, stacy, mariah, india, mimi, phoenix, venus,
  alisa, chad, dida, jiggly, kenya, lashauwn, latrice, madame, milan, phiphi, princess, willam,
  alaska, alyssa, coco, detox, honey, ivy, jadejolie, jinkx, lineysha, monica, penny, roxxxy, serena, vivienne, 
  bianca, adore, courtney, darienne, bendela, joslyn, trinityk, laganja, milk, gia, april, vivacious, magnolia, kelly,
  ginger, jaidynn, jasmine, kandyH, katya, kennedy, max, fame, kasha, pearl, sashab, tempest, trixie, violet,
  aja, alexism, charlie, cynthia2, eureka, farrah, jaymes, kimora, ninab, peppermint, sasha, shea, trinity, valentina,
  aquaria, asia, blair, dusty, eureka2, kalorie, kameron, mayhem, miz, monet1, monique, vanessa, vixen, yuhua,
  akeria, ariel, brooke, honeyd, kahanna, mercedes, ninaw, plastique, rajahs11, scarletenvys11, shuga, silkys11, soju, yvie, vanjies11,
  bob, kimchi, naomi, chichi, derrick, thorgy, robbie, acid, naysha, cynthia, dax, laila,
  jaida, crystalm, gigi, jackie, heidi, widow, jan, brita, aiden, nicky, rock, sherry, dahlia,
  denali, elliott, gottmik, joey, kahmora, kandym, lala, olivia, rose, symone, tamisha, tina, utica,
  alyssah, angeria, bosco, daya, deja, jasminek, jorgeous, junej, kerri, kornbread, camden, maddym, orion, willow,

  jaidaas7, jinkxas7, monetas7, rajaas7, sheaas7, vivas7, trinityas7, yvieas7,

  cherylw, bluw, mow, bagaw, jujubeew, janeyw, panginaw, jimbow, lemonw,

  baga, blu, cheryl, crystal, divina, gothy, scaredy, sumting, viv, vinegar,
  awhora, asttina, bimini, cherry, ellie, ginny, joe, lawrence, sister, tayce, tia, veronica,
  anubis, charity, choriza, elektraf, ella, kitty, krystal, river, scarlett, vanity, veronicas3, victoriaS,

  anastarzia,boa,ilona,jimbo,juice,kiara,kyne,lemon,priyanka,rita,scarlettbobo,tynomi,
  icesis, kendall, eve, giam, pythia, adriana, kimoraa, synthia, suki, oceane, beth, stephanie,

  chelsea, envy, janey, madamem, mama, megan, abby, patty, roem, sederginne,

  carmenf, killer, sagi, pupi, dovima, hug, arantxa, inti, dragv, macarena,
  marina, estrella, venedita, juriji, sethlas, diamante, onyx, jota, samantha, arielr, marisa,

  amadiva, année, bella, bbf, dearis, jaja, meannie, morrigan, natalia, petchra,
  angele, bandit, genie, gimhuay, kana, kandyz, katy, mstranger, maya, mocha, silvers, srimala, tormai, vanda

].sort((a, b) => a.GetName().localeCompare(b.GetName()));

//#endregion


//#region Commands

function WhoGetsCritiques()
{
  let Main = new Screen();

  let firstnames = "";
  let critiquedtext = "";
  if(CurrentSeason.lipsync!="AS7")
  {
    if(Safes.length!=0)
    {
      if(Steps == 0)
      {
        Main.clean();
        Main.createBigText("On the main stage...");
        Main.createText("If I call your names, please step forward.","Bold");
        CritiquesChoice = getRandomInt(0,1);
        if(CritiquesChoice == 0)
        {
          for(let i = 0; i < Safes.length; i++)
          {
            Main.createImage(Safes[i].image, "#7971c7");
            if(i!=Safes.length-1)
              {
                firstnames += Safes[i].GetName()+", ";
              }
              else
              {
                if(Safes.length!=1)
                {
                  firstnames += " and "+Safes[i].GetName();
                }
                else
                {
                  firstnames += Safes[i].GetName();
                }
              }
          }
          Main.createText(firstnames+".","Bold");
        }
        else
        {
          for(let i = 0; i < Critiqued.length; i++)
          {
            Main.createImage(Critiqued[i].image, "#7971c7");
            if(i!=Critiqued.length-1)
              {
                critiquedtext += Critiqued[i].GetName()+", ";
              }
              else
              {
                if(Critiqued.length!=1)
                {
                  critiquedtext += " and "+Critiqued[i].GetName();
                }
                else
                {
                  critiquedtext += Critiqued[i].GetName();
                }
              }
          }
          Main.createText(critiquedtext+".","Bold");

        }
        Main.createButton("Proceed", "WhoGetsCritiques()");
      }
      if(Steps == 1)
      {
        Main.clean();
        Main.createBigText("On the main stage...");
        Main.createText("If I call your names, please step forward.","Bold");
        firstnames = "";
        critiquedtext = "";
        if(CritiquesChoice == 0)
        {
          for(let i = 0; i < Safes.length; i++)
          {
            Main.createImage(Safes[i].image, "#7971c7");
            if(i!=Safes.length-1)
              {
                firstnames += Safes[i].GetName()+", ";
              }
              else
              {
                if(Safes.length!=1)
                {
                  firstnames += " and "+Safes[i].GetName();
                }
                else
                {
                  firstnames += Safes[i].GetName();
                }
              }
          }
          Main.createText(firstnames+" you are all safe. You may go untuck backstage.","Bold");

          Main.createLine();
          for(let i = 0; i < Critiqued.length; i++)
          {
            Main.createImage(Critiqued[i].image, "#83ebe5");
            if(i!=Critiqued.length-1)
              {
                critiquedtext += Critiqued[i].GetName()+", ";
              }
              else
              {
                if(Critiqued.length!=1)
                {
                  critiquedtext += " and "+Critiqued[i].GetName();
                }
                else
                {
                  critiquedtext += Critiqued[i].GetName();
                }
              }
          }
          Main.createText(critiquedtext+", you are the tops and bottoms of the week.","Bold");
        }
        else
        {
          for(let i = 0; i < Critiqued.length; i++)
          {
            Main.createImage(Critiqued[i].image, "#83ebe5");
            if(i!=Critiqued.length-1)
              {
                critiquedtext += Critiqued[i].GetName()+", ";
              }
              else
              {
                if(Critiqued.length!=1)
                {
                  critiquedtext += " and "+Critiqued[i].GetName();
                }
                else
                {
                  critiquedtext += Critiqued[i].GetName();
                }
              }
          }
          Main.createText(critiquedtext+", you are the tops and bottoms of the week.","Bold");
          Main.createLine();
          for(let i = 0; i < Safes.length; i++)
          {
            Main.createImage(Safes[i].image, "#7971c7");
            if(i!=Safes.length-1)
              {
                firstnames += Safes[i].GetName()+", ";
              }
              else
              {
                if(Safes.length!=1)
                {
                  firstnames += " and "+Safes[i].GetName();
                }
                else
                {
                  firstnames += Safes[i].GetName();
                }
              }
          }
          Main.createText(firstnames+" you are all safe. You may go untuck backstage.","Bold");
        }
        Main.createButton("Proceed", "UntuckedPart1()");
      }
      if(Steps == 0)
      {
        Steps++;
      }
      else
      {
        Steps = 0;
      }
    }
    else
    {
      Main.clean();
      for(let i = 0; i < Critiqued.length; i++)
          {
            Main.createImage(Critiqued[i].image, "#83ebe5");
            if(i!=Critiqued.length-1)
              {
                critiquedtext += Critiqued[i].GetName()+", ";
              }
              else
              {
                if(Critiqued.length!=1)
                {
                  critiquedtext += " and "+Critiqued[i].GetName();
                }
                else
                {
                  critiquedtext += Critiqued[i].GetName();
                }
              }
          }
          Main.createText(critiquedtext+", it is time for your critiques.","Bold");
          Main.createButton("Proceed", "Critiques()");
    }
  }
  else
  {

  }
}

function UntuckedPart1() {
  Main = new Screen();
  Main.clean();
  Main.createButton("Proceed", "Critiques()");
}

function Critiques() {
  Main = new Screen();
  Main.clean();
  Main.createButton("Proceed", "UntuckedPart2()");
}

function UntuckedPart2() {
  Main = new Screen();
  Main.clean();
  if(CurrentSeason.currentCast.length == 3 && (CurrentSeason.finaleformat == "TOP3" || CurrentSeason.finaleformat == "TOP3NE"))
  {
    CurrentSeason.currentCast[0].favoritism += 5;
    CurrentSeason.currentCast[2].favoritism += -5;
    Main.createButton("Proceed", "Finale()");
  }
  else
  {
    Main.createButton("Proceed", "Placements()");
  }
}

function Finale()
{
  Main = new Screen();
  Main.clean();
  if(CurrentSeason.finaleformat=="TOP3" || CurrentSeason.finaleformat=="TOP3NE")
  {
    switch(Steps){
      case 0:
        for (let q = 0; q < CurrentSeason.eliminatedCast.length; q++) {
          CurrentSeason.eliminatedCast[q].trackrecord.push('');
        }
        Main.createBigText("Welcome to the finale!");
          for (let i = 0; i < CurrentSeason.currentCast.length; i++) {
            Main.createImage(CurrentSeason.currentCast[i].image,"#f0bb86");
          }
          Main.createText(CurrentSeason.currentCast[0].GetName() + ", "+CurrentSeason.currentCast[1].GetName()+ " and "+CurrentSeason.currentCast[0].GetName()+".", "Bold");
          Main.createText("You are all have made it here, by proving your charisma, uniqueness, nerve and talent.");
          Main.createText("Unfornately, for one of you the roads ends here.");
          CurrentSeason.currentCast.sort((a, b) => a.favoritism - b.favoritism);
          Steps++;
          break;

      case 1:
          Main.createImage(CurrentSeason.currentCast[0].image,"#f0bb86");
          Main.createText(CurrentSeason.currentCast[0].GetName()+", I am sorry my dear, but you will...");
          Steps++;
          break;

        case 2:
          

          if(CurrentSeason.currentCast[0].favoritism>=10)
          {
            Main.createBigText("I'm NOT sorry!");
            Main.createImage(CurrentSeason.currentCast[0].image,"##e0e0e0");
            Main.createText(CurrentSeason.currentCast[0].GetName()+", I am sorry my dear, but you will be able to lipsync for the crown as well!");
            CurrentSeason.currentCast[0].trackrecord.push("TOP 3");
            CurrentSeason.currentCast[1].trackrecord.push("TOP 3");
            CurrentSeason.currentCast[2].trackrecord.push("TOP 3");
          }
          else
          {
            Main.createBigText("I'm sorry...");
            Main.createImage(CurrentSeason.currentCast[0].image,"#fa2525");
            Main.createText(CurrentSeason.currentCast[0].GetName()+", I am sorry my dear, but you will not be able to lipsync for the crown.");
            Main.createText(CurrentSeason.currentCast[0].GetName()+", now sashay away.");
            CurrentSeason.currentCast[0].trackrecord.push("ELIM ");
            CurrentSeason.currentCast[0].placement = 3;
            CurrentSeason.eliminatedCast.unshift(CurrentSeason.currentCast[0]);
            CurrentSeason.currentCast.splice(0,1);

            CurrentSeason.currentCast[0].trackrecord.push("TOP 2");
            CurrentSeason.currentCast[1].trackrecord.push("TOP 2");
          }
          Steps++;
          break;
          
        case 3:
          for (let q = 0; q < CurrentSeason.eliminatedCast.length; q++) {
            CurrentSeason.eliminatedCast[q].trackrecord.push('GUEST');
          }
          Main.createBigText("Good luck ladies!");
          for (let i = 0; i < CurrentSeason.currentCast.length; i++) {
            Main.createImage(CurrentSeason.currentCast[i].image,"#f0bb86");
          }
          if(CurrentSeason.currentCast.length==3)
          {
            Main.createText(CurrentSeason.currentCast[0].GetName() + ", "+CurrentSeason.currentCast[1].GetName()+ " and "+CurrentSeason.currentCast[0].GetName()+".", "Bold");
            Main.createText("The time has come for you to lipsync FOR THE CROWN!", "Bold");
            Main.createText("You will have to show me, that you are worthy of the crown, by lipsyncing to the song : Random Song lmao <3.", "Bold");
            Main.createText("Good luck and do not FUCK IT UP!", "Bold");
          }
          else
          {
            Main.createText(CurrentSeason.currentCast[0].GetName() + " and "+CurrentSeason.currentCast[1].GetName()+".", "Bold");
            Main.createText("The time has come for you to lipsync FOR THE CROWN!", "Bold");
            Main.createText("You will have to show me, that you are worthy of the crown, by lipsyncing to the song : Random Song lmao <3.", "Bold");
            Main.createText("Good luck and do not FUCK IT UP!", "Bold");
          }
          Steps++;
          break;
        case 4:
          Main.createBigText("Good luck ladies!");
          for (let i = 0; i < CurrentSeason.currentCast.length; i++) {
            CurrentSeason.currentCast[i].getFinalScore();
            Main.createImage(CurrentSeason.currentCast[i].image,"#f0bb86");
          }
          if(CurrentSeason.currentCast.length==3)
          {
            Main.createText(CurrentSeason.currentCast[0].GetName() + ", "+CurrentSeason.currentCast[1].GetName()+ " and "+CurrentSeason.currentCast[0].GetName()+".", "Bold");
            Main.createText("Thanks for your performances.", "Bold");
            Main.createText("The winner of "+CurrentSeason.seasonname+", will receive 100 000$. Now with that said.", "Bold");
            Main.createText("The winner of "+CurrentSeason.seasonname+" is ...", "Bold");
          }
          else
          {
            Main.createText(CurrentSeason.currentCast[0].GetName() + " and "+CurrentSeason.currentCast[1].GetName()+".", "Bold");
            Main.createText("Thanks for your performances.", "Bold");
            Main.createText("The winner of "+CurrentSeason.seasonname+", will receive 100 000$. Now with that said.", "Bold");
            Main.createText("The winner of "+CurrentSeason.seasonname+" is ...", "Bold");
          }
          Steps++;
          break;
        case 5:
          CurrentEpisode = new Episode("The Grand Finale", "Finale");
          CurrentSeason.episodes.push(CurrentEpisode);
          done = true;
          CurrentSeason.currentCast.sort((a, b) => b.finalescore - a.finalescore);
          if(CurrentSeason.currentCast[0].finalescore > 30 && CurrentSeason.currentCast[1].finalescore > 30)
          {
            Main.createImage(CurrentSeason.currentCast[0].image,"#ffb300");
            Main.createImage(CurrentSeason.currentCast[1].image,"#ffb300");
            Main.createText(CurrentSeason.currentCast[0].GetName() + " and "+CurrentSeason.currentCast[1].GetName()+", CONDRAGULATIONS!", "Bold");
            Main.createText("You are both winners!","Bold");
            CurrentSeason.currentCast[0].trackrecord.push("WINNER");
            CurrentSeason.currentCast[0].placement = 1;
            CurrentSeason.currentCast[1].trackrecord.push("WINNER");
            CurrentSeason.currentCast[1].placement = 1;
            if(CurrentSeason.currentCast.length==3)
            {
              CurrentSeason.currentCast[2].placement = 3;
              CurrentSeason.currentCast[2].trackrecord.push('RUNNER UP');
              CurrentSeason.currentCast.splice(2,1);
            }
          }
          else
          {
            Main.createImage(CurrentSeason.currentCast[0].image,"#ffb300");
            Main.createText(CurrentSeason.currentCast[0].GetName()+", CONDRAGULATIONS!","Bold");
            Main.createText("You are the winner of "+CurrentSeason.seasonname+"!","Bold");
            CurrentSeason.currentCast[0].trackrecord.push("WINNER");
            CurrentSeason.currentCast[0].placement = 1;
            CurrentSeason.currentCast[1].placement = 2;
            CurrentSeason.currentCast[1].trackrecord.push('RUNNER UP');
            CurrentSeason.eliminatedCast.unshift(CurrentSeason.currentCast[1]);
            CurrentSeason.currentCast.splice(1,1);
            if(CurrentSeason.currentCast.length==3)
            {
              CurrentSeason.eliminatedCast.unshift(CurrentSeason.currentCast[2]);
              CurrentSeason.currentCast[2].placement = 2;
              CurrentSeason.currentCast[2].trackrecord.push('RUNNER UP');
              CurrentSeason.currentCast.splice(1,1);
            }
          }
          Steps++;
          break;
      }
  
    if(Steps==6)
    {
      Main.createButton("Proceed", "GetPromoTable()");
      Steps = 0;
    }
    else
    {
      Main.createButton("Proceed", "Finale()");
    }
  }
  if(CurrentSeason.finaleformat=="AS7")
  {
    switch(Steps){
      case 0:
          Main.createBigText("The Grand Finale !","Bold");
          CurrentSeason.currentCast.sort((a, b) => b.stars - a.stars);
          let tie=false;
          let removestar = 0;
          let softlock = 0;
          while(top4.length<4 && tie==false && softlock<CurrentSeason.currentCast.length)
          {
            temp = [];
            for (let index = 0; index < CurrentSeason.currentCast.length; index++) {
              if(((CurrentSeason.currentCast[0].stars)-removestar)==CurrentSeason.currentCast[index].stars)
              {
                temp.push(CurrentSeason.currentCast[index])
              }
            }

            if(temp.length>4 && top4.length==0)
            {
              for (let index = 0; index < temp.length; index++) {
                top4.push(temp[index])
              }
              if(softlock==0)
              {
                originaltop.push(temp[index]);
              }
              Steps++;
            }
            else
            {
              if(temp.length==4 && top4.length==0)
              {
                for (let index = 0; index < temp.length; index++) {
                  top4.push(temp[index])
                }
                Steps = 3;
              }
              else
              {
                if(4 - top4.length >= temp.length)
                {
                  for (let index = 0; index < temp.length; index++) {
                    top4.push(temp[index])
                    if(softlock==0)
                    {
                      originaltop.push(temp[index]);
                    }
                  }

                  removestar++;
                }
                else
                {
                  tie = true;
                  Steps++;
                }
              }
            }
            softlock++;
          }
          if(top4.length<4)
          {
            let queentext = "";
            for (let index = 0; index < originaltop.length; index++) {
              Main.createImage(originaltop[index].image,"springgreen");
              if(index != originaltop.length-1)
              {
                queentext += originaltop[index].GetName()+", ";
              }
              else
              {
                queentext += " and "+originaltop[index].GetName();
              }
            }
            if(originaltop.length==1)
            {
              Main.createText(originaltop[0].GetName()+", you have the choice to pick the rest of the top 4, between the tied queens.","Bold");
              for (let index = 0; index < temp.length; index++) {
                Main.createImage(temp[index].image,"silver");
              }
              Main.createText(originaltop[0].GetName()+", you have to choose "+(4-top4.length)+" queens to make it to the finale.","Bold");
            }
            else
            {
              Main.createText(queentext+", you have the choice to pick the rest of the top 4, between the tied queens.","Bold");
              for (let index = 0; index < temp.length; index++) {
                Main.createImage(temp[index].image,"silver");
              }
              Main.createText(queentext+", you have to choose "+(4-top4.length)+" queens to make it to the finale.","Bold");
            }
          }
          else if(top4.length>4)
          {
            let queentext = "";
            for (let index = 0; index < top4.length; index++) {
              Main.createImage(top4[index].image,"springgreen");
              if(index != top4.length-1)
              {
                queentext += top4[index].GetName()+", ";
              }
              else
              {
                queentext += " and "+top4[index].GetName();
              }
            }
              Main.createText(queentext+", you are all at the top but unfortunately you can not all make it.","Bold");
              Main.create(CurrentSeason.host.indrag,"yellow")
              Main.createText("By the powers invested in me, I will decide the top 4.","Bold");
          }
          else
          {
            let queentext = "";
            let losersqueen = ""
            for (let index = 0; index < top4.length; index++) {
              Main.createImage(top4[index].image,"springgreen");
              if(index != top4.length-1)
              {
                queentext += top4[index].GetName()+", ";
              }
              else
              {
                queentext += " and "+top4[index].GetName();
              }
            }
              Main.createText(queentext+", you are all in the top 4! ","Bold");
              Main.createText("Unfortunately that means...","Bold");
            for (let index = 0; index < CurrentSeason.currentCast.length; index++) {
              if(top4.indexOf(CurrentSeason.currentCast[index])== -1)
              {
                Main.createImage(CurrentSeason.currentCast[index].image,"sienna");
                if(index != CurrentSeason.currentCast.length-1)
                {
                  losersqueen += CurrentSeason.currentCast[index].GetName()+", ";
                }
                else
                {
                  losersqueen += " and "+CurrentSeason.currentCast[index].GetName();
                }
              }
            }
            Main.createText(losersqueen+", you will not be participating in tonight's lipsync smackdown.","Bold");
            Steps=3;
          }

          break;
      case 1:
          if(top4.length<4)
          {
            let queentext = "";
            for (let index = 0; index < originaltop.length; index++) {
              Main.createImage(originaltop[index].image,"springgreen");
              if(index != originaltop.length-1)
              {
                queentext += originaltop[index].GetName()+", ";
              }
              else
              {
                queentext += " and "+originaltop[index].GetName();
              }
            }
            if(originaltop.length==1)
            {
              Main.createText("I have chosen to make it to the finale...","Bold");
            }
            else
            {
              Main.createText("We have chosen to make to it to the finale...","Bold");
            }
          for (let index = 0; index < 4-top4.length; index++) {
            Main.createImage("Images/Queens/Hidden.webp","springgreen");
          }
          Main.createText("");
        }
        else
        {
          Main.create(CurrentSeason.host.indrag,"yellow")
          Main.createText("I have decided that the top 4 will be...","Bold");
          for (let index = 0; index < 4; index++) {
            Main.createImage("Images/Queens/Hidden.webp","springgreen");
          }
        }
        Steps++;
        break;
      case 2:
        if(top4.length<4)
          {
            let queentext = "";
            for (let index = 0; index < originaltop.length; index++) {
              Main.createImage(originaltop[index].image,"springgreen"); 
            }
            if(originaltop.length==1)
            {
              Main.createText("I have chosen to make it to the finale...","Bold");
            }
            else
            {
              Main.createText("We have chosen to make to it to the finale...","Bold");
            }
          let getnum = 4-top4.length;
          for (let index = 0; index < getnum; index++) {
            let rdm = getRandomInt(0,temp.length-1);
            Main.createImage(temp[rdm].image,"springgreen");
            top4.push(temp[rdm]);
            if(index != getnum-1)
            {
              queentext += temp[rdm].GetName()+", ";
            }
            else
            {
              queentext += " and "+temp[rdm].GetName();
            }
            temp.splice(rdm,1);
          }
          Main.createText(queentext+", congratulations! Your fellow competitors has given you another chance!.","Bold");
        }
        else
        {
          let queentext = "";
          Main.create(CurrentSeason.host.indrag,"yellow")
          Main.createText("I have decided that the top 4 will be...","Bold");
          top4 = [];
          for (let index = 0; index < 4; index++) {
            top4.push(temp[getRandomInt(0,temp.length-1)]);
            temp.splice(temp.indexOf(top4[index]),1);
            Main.createImage(top4[index],"springgreen");
            if(index != 3)
            {
              queentext += top4[index].GetName()+", ";
            }
            else
            {
              queentext += " and "+top4[index].GetName();
            }
          }
          Main.createText(queentext+", congratulations! You have all made it to the top 4.","Bold");
          for (let index = 0; index < temp.length; index++) {
            Main.createImage(top4[index],"sienna");
            if(index != 3)
            {
              queentext += top4[index].GetName()+", ";
            }
            else
            {
              queentext += " and "+top4[index].GetName();
            }
          }
          Main.createText(queentext+", I am sorry but you will not make it to tonight's lipsync smackdown.","Bold");
        }


        Steps++;
        break;
      case 3:
        for (let index = 0; index < CurrentSeason.currentCast.length; index++) {
          if(top4.indexOf(CurrentSeason.currentCast[index])==-1)
          {
            CurrentSeason.currentCast[index].trackrecord.push("ELIM ");
            CurrentSeason.currentCast[index].placement = 5;
          }
        }
        for (let index = 0; index < top4.length; index++) {
          Main.createImage(top4[index].image,"springgreen"); 
        }
        Main.createBigText("Lipsync for the crown!","Bold");
        Main.createText("Tonight you four will have to lipsync for the crown!","Bold");
        Main.createText("We'll begin by our first pair...","Bold");
        shuffle(top4);
        lsc1 = [top4[0], top4[2]];
        lsc2 = [top4[1], top4[3]];
        for (let index = 0; index < lsc1.length; index++) {
          Main.createImage(lsc1[index].image,"springgreen"); 

        }
        Main.createText(lsc1[0].GetName()+" and "+lsc1[1].GetName()+"!","Bold");
        Steps++;
        break;

      case 4:
        for (let index = 0; index < lsc1.length; index++) {
          Main.createImage(lsc1[index].image,"springgreen"); 

        }
        Main.createText(lsc1[0].GetName()+" and "+lsc1[1].GetName()+", the time has for you two to lipsync for the CROWN!","Bold");
        Steps++;
        break;
      case 5:
        Main.createText("The lipsync song is : "+GetSong()+".","Bold");
        for (let index = 0; index < lsc1.length; index++) {
          Main.createImage(lsc1[index].image,"springgreen"); 

        }
        Main.createText(lsc1[0].GetName()+" and "+lsc1[1].GetName()+", good luck and do NOT fuck it up.","Bold");
        Steps++;
        break;
      case 6:
        for (let index = 0; index < lsc1.length; index++) {
          Main.createImage(lsc1[index].image,"springgreen"); 
        }
        Main.createText("Thank you for both of your perfomances.","Bold");
        Main.createText("I have made my decisions.","Bold");
        Steps++;
        break;
      case 7:
        for (let index = 0; index < lsc1.length; index++) {
          lsc1[index].GetASLipsync();
        }
        lsc1.sort((a, b) => b.lipsyncscore - a.lipsyncscore);
        Main.createImage(lsc1[0].image,'yellow');
        Main.createText(lsc1[0].GetName()+", shantay you stay! You have made it to the final round.","Bold");
        Tops = [];
        Tops.push(lsc1[0]);
        Steps++;
        break;
      case 8:
        lsc1.sort((a, b) => b.lipsyncscore - a.lipsyncscore);
        Main.createImage(lsc1[1].image,'sienna');
        Main.createText(lsc1[1].GetName()+", my dear winner. You have made it this far but I must ask you to sashay away....","Bold");
        lsc1[1].trackrecord.push("L1RD");
        lsc1[1].placement = 4;
        Steps++;
        break;
      case 9:
        for (let index = 0; index < lsc2.length; index++) {
          Main.createImage(lsc2[index].image,"springgreen"); 
        }
        Main.createText(lsc2[0].GetName()+" and "+lsc2[1].GetName()+", the time has for you two to lipsync for the CROWN!","Bold");
        Steps++;
        break;
      case 10:
        Main.createText("The lipsync song is : "+GetSong()+".","Bold");
        for (let index = 0; index < lsc2.length; index++) {
          Main.createImage(lsc2[index].image,"springgreen"); 

        }
        Main.createText(lsc2[0].GetName()+" and "+lsc2[1].GetName()+", good luck and do NOT fuck it up.","Bold");
        Steps++;
        break;
      case 11:
        for (let index = 0; index < lsc2.length; index++) {
          Main.createImage(lsc2[index].image,"springgreen"); 
        }
        Main.createText("Thank you for both of your perfomances.","Bold");
        Main.createText("I have made my decisions.","Bold");
        Steps++;
        break;
      case 12:
        for (let index = 0; index < lsc2.length; index++) {
          lsc2[index].GetASLipsync();
        }
        lsc2.sort((a, b) => b.lipsyncscore - a.lipsyncscore);
        Main.createImage(lsc2[0].image,'yellow');
        Main.createText(lsc2[0].GetName()+", shantay you stay! You have made it to the final round.","Bold");
        Tops.push(lsc2[0]);
        Steps++;
        break;
      case 13:
        lsc2.sort((a, b) => b.lipsyncscore - a.lipsyncscore);
        Main.createImage(lsc2[1].image,'sienna');
        Main.createText(lsc2[1].GetName()+", my dear winner. You have made it this far but I must ask you to sashay away....","Bold");
        lsc2[1].trackrecord.push("L2RD");
        lsc2[1].placement = 3;
        Steps++;
        break;
      case 14:
        for (let index = 0; index < Tops.length; index++) {
          Main.createImage(Tops[index].image,"springgreen"); 
        }
        Main.createText(Tops[0].GetName()+" and "+Tops[1].GetName()+", you have both made it to the final round.","Bold");
        Main.createText(Tops[0].GetName()+" and "+Tops[1].GetName()+", the time has for you two to lipsync for the CROWN!","Bold");
        Steps++;
        break;
      case 15:
        Main.createText("The lipsync song is : "+GetSong()+".","Bold");
        for (let index = 0; index < Tops.length; index++) {
          Main.createImage(Tops[index].image,"springgreen"); 

        }
        Main.createText(Tops[0].GetName()+" and "+Tops[1].GetName()+", good luck and do NOT fuck it up.","Bold");
        Steps++;
        break;
      case 16:
        for (let index = 0; index < Tops.length; index++) {
          Main.createImage(Tops[index].image,"springgreen"); 
        }
        Main.createText("Thank you for both of your perfomances.","Bold");
        Main.createText("I have made my decisions.","Bold");
        Steps++;
        break;
      case 17:
        for (let index = 0; index < Tops.length; index++) {
          Tops[index].GetASLipsync();
        }
        Tops.sort((a, b) => b.lipsyncscore - a.lipsyncscore);
        Main.createImage(Tops[0].image,'yellow');
        Main.createText(Tops[0].GetName()+", YOU ARE THE WINNER OF "+CurrentSeason.seasonname+".","Bold");
        Tops[0].trackrecord.push('WINNER');
        Tops[0].placement = 1;
        Tops[1].trackrecord.push('L3RD');
        Tops[1].placement = 2;
        CurrentSeason.currentCast.sort((a, b) => a.placement - b.placement);
        Steps++;
        break;
      }
      if(Steps==18)
      {
        Main.createButton("Proceed", "GetPromoTable()");
        Steps = 0;
      }
      else
      {
        Main.createButton("Proceed", "Finale()");
      }  
    }
  }
  

function Placements() {
  if(CurrentSeason.lipsyncformat == "LIFE")
  {
    for (let i = 0; i < Tops.length; i++) {
      if(Tops[i].trackrecord[Tops[i].trackrecord.length-1] == "WIN" || Tops[i].trackrecord[Tops[i].trackrecord.length-1] == "DOUBLEWIN")
      {
        Tops[i].finalscore += 3;
      }
      else if(Tops[i].trackrecord[Tops[i].trackrecord.length-1] == "BOTTOM")
      {
        Tops[i].finalscore += -70;
      }
    }
    Tops.sort((a, b) => a.finalscore - b.finalscore);
    Bottoms.sort((a, b) => b.finalscore - a.finalscore);

    Main = new Screen();
    Main.clean();
    let hightext = "";

    let doublewin = false;
    let firstwinner = false;
    let threewayls = false;
    if( (Bottoms[0] != undefined && Bottoms[1] != undefined && Bottoms[2] != undefined ) && Bottoms[0].perfomancescore > 40 && Bottoms[1].perfomancescore > 40  && Bottoms[2].perfomancescore > 40 && CurrentSeason.currentCast.length >=6)
    {
      threewayls = true;
    }

    if(TopsQueens.length==0)
    {
      TopsQueens.push(Tops[0]);
      TopsQueens.push(Tops[1]);
    }

    if(BottomQueens.length==0)
    {
      if(threewayls==false)
      {
        BottomQueens.push(Bottoms[0]);
        BottomQueens.push(Bottoms[1]);
      }
      else
      {
        BottomQueens.push(Bottoms[0]);
        BottomQueens.push(Bottoms[1]);
        BottomQueens.push(Bottoms[2]);
      }
    }

    if(Tops.length!=0 || Bottoms.length!=0)
    {
      if(Tops.length!=0)
      {
        if(TopsQueens[0].perfomancescore < 7 && TopsQueens[1].perfomancescore < 7)
        {
          doublewin = true;
        }
        if(Steps == 0)
        {
          randomtop = getRandomInt(0,Tops.length-1);
          Main.createImage(Tops[randomtop].image,"#17d4ff");
          Main.createText(Tops[randomtop].GetName()+". "+CurrentChallenge.TopPlacement());
        }
        else
        {
            if(TopsQueens.indexOf(Tops[randomtop]) != -1)
            {
                if(Tops[randomtop].GetName() == TopsQueens[0].GetName() && CurrentChallenge.winner == false)
                {
                  Main.createImage(Tops[randomtop].image,"#1741ff");
                  Main.createText(Tops[randomtop].GetName()+", CONDRAGULATIONS! You're the winner of this week main challenge.","Bold");
                  if(doublewin==false)
                  {
                    Tops[randomtop].trackrecord.push("WIN");
                    Tops[randomtop].favoritism += 5;
                  }
                  else
                  {
                    Tops[randomtop].trackrecord.push("DOUBLEWIN");
                    Tops[randomtop].favoritism += 5;
                  }
                  CurrentChallenge.winner = true;
                }
                else
                {
                  if(CurrentChallenge.winner == true && doublewin == false)
                  {
                    Main.createImage(Tops[randomtop].image,"#17d4ff");
                    Main.createText(Tops[randomtop].GetName()+", great job this week. You are safe.","");
                    Tops[randomtop].trackrecord.push("HIGH");
                    Tops[randomtop].favoritism += 1;
                  }
                  else if(CurrentChallenge.winner == true && doublewin == true)
                  {
                    Main.createImage(Tops[randomtop].image,"#1741ff");
                    Main.createText(Tops[randomtop].GetName()+", CONDRAGULATIONS! You're the other winner of this week main challenge.","Bold");
                    Tops[randomtop].trackrecord.push("DOUBLEWIN");
                    Tops[randomtop].favoritism += 5;
                  }
                  else
                  {
                    Main.createImage(Tops[randomtop].image,"#17d4ff");
                    Main.createText(Tops[randomtop].GetName()+", great job this week. You are safe.","");
                    Tops[randomtop].trackrecord.push("HIGH");
                    Tops[randomtop].favoritism += 1;
                  }
                }
                Tops.splice(randomtop,1);
            }
            else
            {
              Main.createImage(Tops[randomtop].image,"#17d4ff");
              Main.createText(Tops[randomtop].GetName()+", great job this week. You are safe.","");
              Tops[randomtop].trackrecord.push("HIGH");
              Tops[randomtop].favoritism += 1;
              Tops.splice(randomtop,1);
            }
          }
        }
        else
        {
          if(Steps == 0)
          {
            randombtm = getRandomInt(0,Bottoms.length-1);
            Main.createImage(Bottoms[randombtm].image,"#ff8a8a");
            Main.createText(Bottoms[randombtm].GetName()+CurrentChallenge.BtmPlacement());
          }
          else
          {
            if(BottomQueens.indexOf(Bottoms[randombtm]) != -1)
            {
              Main.createImage(Bottoms[randombtm].image,"#fa2525");
              Main.createText(Bottoms[randombtm].GetName()+", I'm sorry my dear but you are up for elimination.","Bold");
              Bottoms.splice(randombtm,1);
            }
            else
            {
              Main.createImage(Bottoms[randombtm].image,"#ff8a8a");
              Main.createText(Bottoms[randombtm].GetName()+", you are safe.");
              Bottoms[randombtm].trackrecord.push("LOW");
              Bottoms[randombtm].favoritism += -1;
              Bottoms.splice(randombtm,1);
            }
          }
        }

        if(Steps == 0)
        {
          Steps++;
        }
        else
        {
          Steps = 0;
        }
      }
      
    if(Tops.length == 0 && Bottoms.length == 0)
    {
      Main.createButton("Proceed", "Lipsync()");
    }
    else
    {
      Main.createButton("Proceed", "Placements()");
    }
  }
  else if(CurrentSeason.lipsyncformat == "AS7")
  {
    for (let i = 0; i < Tops.length; i++) {
      if(Tops[i].trackrecord[Tops[i].trackrecord.length-1] == "WIN" || Tops[i].trackrecord[Tops[i].trackrecord.length-1] == "TOP2")
      {
        Tops[i].finalscore += 7;
      }
    }

    Tops.sort((a, b) => a.finalscore - b.finalscore);
    Main = new Screen();
    Main.clean();
    let hightext = "";

    if(TopsQueens.length==0)
    {
      TopsQueens.push(Tops[0]);
      TopsQueens.push(Tops[1]);
    }

    switch(Steps){
      case 0:
        Main.createText("The top two legends of the week are...", "Bold");
        Main.createImage("Images/Queens/Hidden.webp","depepskyblue");
        Main.createImage("Images/Queens/Hidden.webp","depepskyblue");
        Main.createText("");
        Steps++;
        break;
      case 1:
        Main.createText("The top two legends of the week are...", "Bold");
        Main.createImage(TopsQueens[0].image,"deepskyblue");
        Main.createImage("Images/Queens/Hidden.webp","deepskyblue");
        Main.createText(TopsQueens[0].GetName()+" and ...", "Bold");
        Steps++;
        break;
       case 2:
        Main.createText("The top two legends of the week are...", "Bold");
        Main.createImage(TopsQueens[0].image,"deepskyblue");
        Main.createImage(TopsQueens[1].image,"deepskyblue");
        Main.createText(TopsQueens[0].GetName()+" and "+TopsQueens[1].GetName()+" ! ", "Bold");
        Steps++;
        break;
      case 3:
        Main.createText("The top two legends of the week are...", "Bold");
        Main.createImage(TopsQueens[0].image,"deepskyblue");
        Main.createImage(TopsQueens[1].image,"deepskyblue");
        Main.createText(TopsQueens[0].GetName()+" and "+TopsQueens[1].GetName()+" ! ", "Bold");
        Main.createText("You are both the proud recipients of a legendary legend star!", "Bold");
        Main.createLine();
        if(TopsQueens[0].blocked[0] == true && TopsQueens[1].blocked[0] == true)
        {
          Main.createText("However due to...", "Bold");
          Main.createImage(TopsQueens[0].image,"red");
          Main.createImage(TopsQueens[0].blocked[1].image,);
          Main.createText(TopsQueens[0].GetName()+" being blocked by "+TopsQueens[0].blocked[1].GetName()+".", "Bold");

          Main.createImage(TopsQueens[0].image,"red");
          Main.createImage(TopsQueens[0].blocked[1].image);
          Main.createText(TopsQueens[0].GetName()+" being blocked by "+TopsQueens[0].blocked[1].GetName()+".", "Bold");

          Main.createText("The two of you will not receive any stars.", "Bold");
        }
        else if(TopsQueens[0].blocked[0] == true || TopsQueens[1].blocked[0] == true)
        {
          if(TopsQueens[0].blocked[0] == true)
          {
            Main.createText("However due to...", "Bold");
            Main.createImage(TopsQueens[0].image,"red");
            Main.createImage(TopsQueens[0].blocked[1].image,"");
            Main.createText(TopsQueens[0].GetName()+" being blocked by "+TopsQueens[0].blocked[1].GetName()+".", "Bold");
            Main.createText(TopsQueens[0].GetName()+" will not be able to receive any star.", "Bold");
            
          }
          else
          {
            if(CurrentSeason.episodes.length == 11)
            {
              Main.createImage(TopsQueens[0].image,"deepskyblue");
            Main.createText(TopsQueens[0].GetName()+", you have received three stars!", "Bold");
              TopsQueens[0].stars += 3;
            }
            else
            {
              Main.createImage(TopsQueens[0].image,"deepskyblue");
              Main.createText(TopsQueens[0].GetName()+", you have received a star!", "Bold");
              TopsQueens[0].stars += 1;
            }
          }
          if(TopsQueens[1].blocked[0] == true)
          {
            Main.createText("However due to...", "Bold");
            Main.createImage(TopsQueens[1].image,"red");
            Main.createImage(TopsQueens[1].blocked[1].image,"");
            Main.createText(TopsQueens[1].GetName()+" being blocked by "+TopsQueens[1].blocked[1].GetName()+".", "Bold");
            Main.createText(TopsQueens[1].GetName()+" will not be able to receive any star.", "Bold");
          }
          else
          {
            if(CurrentSeason.episodes.length == 11)
            {
              Main.createImage(TopsQueens[1].image,"deepskyblue");
            Main.createText(TopsQueens[1].GetName()+", you have received three stars!", "Bold");
              TopsQueens[1].stars += 3;
            }
            else
            {
              Main.createImage(TopsQueens[1].image,"deepskyblue");
              Main.createText(TopsQueens[1].GetName()+", you have received a star!", "Bold");
              TopsQueens[1].stars += 1;
            }
          }
        }
        else
        {
          if(CurrentSeason.episodes.length == 11)
          {
            Main.createImage(TopsQueens[0].image,"deepskyblue");
            Main.createImage(TopsQueens[1].image,"deepskyblue");
            Main.createText("You will both receive three stars!", "Bold");
            TopsQueens[0].stars += 3;
            TopsQueens[1].stars += 3;
          }
          else
          {
            Main.createImage(TopsQueens[0].image,"deepskyblue");
            Main.createImage(TopsQueens[1].image,"deepskyblue");
            Main.createText("You will both receive a star!", "Bold");
            TopsQueens[0].stars += 1;
            TopsQueens[1].stars += 1;
          }
        }
        Steps++;
        break;
    }

    
    if(Steps==4)
    {
      Main.createButton("Proceed", "Lipsync()");
      Steps = 0;
    }
    else
    {
      Main.createButton("Proceed", "Placements()");
    }
  }
}
  

function Lipsync() {
  Main = new Screen();
  Main.clean();
    
  if(CurrentSeason.lipsyncformat == "LIFE")
  {
    switch(Steps){
      case 0:
        Main.createBigText("The time has come...");
        for(let i = 0; i < BottomQueens.length; i++)
        {
          Main.createImage(BottomQueens[i].image,"#fa2525");
        }
        if(BottomQueens.length==2)
        {
          Main.createText("Two queens stand before me.", 'Bold');
          Main.createText(BottomQueens[0].GetName()+" and "+BottomQueens[1].GetName()+", this is your last to impress me, and save yourself from elimination." , 'Bold');
        }
        else
        {
          Main.createText("Three queens stand before me." , 'Bold');
          Main.createText(BottomQueens[0].GetName()+", "+BottomQueens[1].GetName()+" and "+BottomQueens[2].GetName()+", this is your last to impress me, and save yourself from elimination." , 'Bold');
        }
        break;
      case 1:
        Main.createBigText("The time has come...");
        for(let i = 0; i < BottomQueens.length; i++)
        {
          Main.createImage(BottomQueens[i].image,"#fa2525");
        }
        Main.createText("The time has come...", 'Bold');
        break;
      case 2:
        Main.createBigText("The time has come...");
        for(let i = 0; i < BottomQueens.length; i++)
        {
          Main.createImage(BottomQueens[i].image,"#fa2525");
        }
        Main.createText("The time has come for you to lipsync...", 'Bold');
        break;
      case 3:
        Main.createBigText("The time has come...");
        for(let i = 0; i < BottomQueens.length; i++)
        {
          Main.createImage(BottomQueens[i].image,"#fa2525");
        }
        Main.createText("The time has come for you to lipsync for your LIFE!", 'Bold');
        break;
      case 4:
        Main.createBigText("The time has come...");
        Main.createText("The lipsync song is "+GetSong()+".", 'Bold');
        for(let i = 0; i < BottomQueens.length; i++)
        {
          Main.createImage(BottomQueens[i].image,"#fa2525");
        }
        Main.createText("Good luck and don't FUCK IT UP!", 'Bold');
        break;
      case 5:
        Main.createBigText("The time has come...");
        for(let i = 0; i < BottomQueens.length; i++)
        {
          Main.createImage(BottomQueens[i].image,"#fa2525");
        }
        Main.createText("Thank you for perfomances.", 'Bold');
        Main.createText("I have made my decisions.", 'Bold');
        break;
      case 6:
        Main.createBigText("Shantay you stay...");
        for(let i = 0; i < BottomQueens.length; i++)
        {
          BottomQueens[i].GetLipsync();
          BottomQueens[i].favoritism += -5;
        }
        if(BottomQueens.length == 2)
        {
        BottomQueens.sort((a, b) => b.lipsyncscore - a.lipsyncscore);
        Main.createImage(BottomQueens[0].image, "#ff8a8a");
        Main.createText(BottomQueens[0].GetName()+", shantay you stay.", 'Bold');
        BottomQueens[0].trackrecord.push("BOTTOM");
        }
        else
        {
          BottomQueens.sort((a, b) => b.lipsyncscore - a.lipsyncscore);
          Main.createImage(BottomQueens[0].image, "#ff8a8a");
          Main.createImage(BottomQueens[1].image, "#ff8a8a");
          Main.createText(BottomQueens[0].GetName()+" and "+BottomQueens[1].GetName()+", shantay you stay.", 'Bold');
          BottomQueens[0].trackrecord.push("BOTTOM");
          BottomQueens[1].trackrecord.push("BOTTOM");
        }
        break;
      case 7:
        if(BottomQueens.length==2)
        {
          Main.createBigText("Sashay away...");
          Main.createImageBW(BottomQueens[1].image, "#fa2525");
          Main.createText(BottomQueens[1].GetName()+", my dear queen.", 'Bold');
          Main.createText("I cannot wait for the world to fall in love with you, now. Sashay away...", 'Bold');
          BottomQueens[1].trackrecord.push("ELIMINATED");
          if(CurrentSeason.eliminatedCast.length==0)
          {
            BottomQueens[1].placement= CurrentSeason.fullCast.length-CurrentSeason.eliminatedCast.length;
          }
          else
          {
            BottomQueens[1].placement= CurrentSeason.fullCast.length-CurrentSeason.eliminatedCast.length;
          }
          CurrentSeason.currentCast.splice(CurrentSeason.currentCast.indexOf(BottomQueens[1]),1);
          CurrentSeason.eliminatedCast.unshift(BottomQueens[1]);
        }
        else
        {
          Main.createBigText("Sashay away...");
          Main.createImageBW(BottomQueens[2].image, "#fa2525");
          Main.createText(BottomQueens[2].GetName()+", my dear queen.", 'Bold');
          Main.createText("I cannot wait for the world to fall in love with you, now. Sashay away...", 'Bold');
          BottomQueens[2].trackrecord.push("ELIMINATED");
          if(CurrentSeason.eliminatedCast.length==0)
          {
            BottomQueens[2].placement= CurrentSeason.fullCast.length-CurrentSeason.eliminatedCast.length;
          }
          else
          {
            BottomQueens[2].placement= CurrentSeason.fullCast.length-CurrentSeason.eliminatedCast.length;
          }
          CurrentSeason.currentCast.splice(CurrentSeason.currentCast.indexOf(BottomQueens[2]),1);
          CurrentSeason.eliminatedCast.unshift(BottomQueens[2]);
        }
        break;
    }
    Steps++;
    if(Steps<8)
      Main.createButton("Proceed", "Lipsync()");
    else
    {
      Main.createButton("Proceed", "GetPromoTable()");
      Steps = 0;
    }
  }
  else if(CurrentSeason.lipsyncformat == "AS7")
  {
    switch(Steps){
      case 0:
        Main.createBigText("The time has come...");
        for(let i = 0; i < TopsQueens.length; i++)
        {
          Main.createImage(TopsQueens[i].image,"deepskyblue");
        }
          Main.createText("Two top legends stand before me.", 'Bold');
          Main.createText(TopsQueens[0].GetName()+" and "+TopsQueens[1].GetName()+", this is your chance to win the right, to block one of your fellow competitors." , 'Bold');
        break;
      case 1:
        Main.createBigText("The time has come...");
        for(let i = 0; i < TopsQueens.length; i++)
        {
          Main.createImage(TopsQueens[i].image,"deepskyblue");
        }
        Main.createText("The time has come...", 'Bold');
        break;
      case 2:
        Main.createBigText("The time has come...");
        for(let i = 0; i < TopsQueens.length; i++)
        {
          Main.createImage(TopsQueens[i].image,"deepskyblue");
        }
        Main.createText("The time has come for you to lipsync...", 'Bold');
        break;
      case 3:
        Main.createBigText("The time has come...");
        for(let i = 0; i < TopsQueens.length; i++)
        {
          Main.createImage(TopsQueens[i].image,"deepskyblue");
        }
        Main.createText("The time has come for you to lipsync for your LEGACY!", 'Bold');
        break;
      case 4:
        Main.createBigText("The time has come...");
        Main.createText("The lipsync song is "+GetSong()+".", 'Bold');
        for(let i = 0; i < TopsQueens.length; i++)
        {
          Main.createImage(TopsQueens[i].image,"deepskyblue");
        }
        Main.createText("Good luck and don't FUCK IT UP!", 'Bold');
        break;
      case 5:
        Main.createBigText("The time has come...");
        for(let i = 0; i < TopsQueens.length; i++)
        {
          Main.createImage(TopsQueens[i].image,"deepskyblue");
        }
        Main.createText("Thank you for perfomances.", 'Bold');
        Main.createText("I have made my decisions.", 'Bold');
        break;
      case 6:
        Main.createBigText("You're a winner baby!");
        for(let i = 0; i < TopsQueens.length; i++)
        {
          TopsQueens[i].GetASLipsync();
        }
        Main.createImage(TopsQueens[0].image, "royalblue");
        Main.createText(TopsQueens[0].GetName()+", you're a winner baby!", 'Bold');
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          CurrentSeason.currentCast[i].blocked = [false, "NONE"];
        }
        
        break;
      case 7:
          Main.createBigText("You are safe!");
          Main.createImage(TopsQueens[1].image, "deepskyblue");
          Main.createText(TopsQueens[1].GetName()+", my dear queen, you are safe and you may step to the back of the stage!", 'Bold');
        break;
      case 8:
        Main.createBigText("You're blocked.");
        Main.createImage(TopsQueens[0].image, "#ffff66");
        Main.createText(TopsQueens[0].GetName()+", you have the platinium plunger in hand, you can choose to block one of your fellow competitors.", 'Bold');
        Main.createText(TopsQueens[0].GetName()+", which one of theses queens have you chosen to block ?", 'Bold');
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(TopsQueens.indexOf(CurrentSeason.currentCast[i])==-1)
          {
            Main.createImage(CurrentSeason.currentCast[i].image, "#F5EBF5");
          }
        }
        Main.createText("", 'Bold');
        break;
      case 9:
        Main.createBigText("You're blocked.");
        Main.createImage(TopsQueens[0].image, "#ffff66");
        let qblocked = getRandomInt(0,CurrentSeason.currentCast.length-1);
        while(TopsQueens.indexOf(CurrentSeason.currentCast[qblocked])!=-1)
        {
          qblocked = getRandomInt(0,CurrentSeason.currentCast.length-1);
        }
        Main.createText("I have chosen to block "+CurrentSeason.currentCast[qblocked].GetName()+".", 'Bold');
        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          if(TopsQueens.indexOf(CurrentSeason.currentCast[i])==-1)
          {
            if(CurrentSeason.currentCast[qblocked] == CurrentSeason.currentCast[i])
            {
              Main.createImage(CurrentSeason.currentCast[i].image, "red");
              CurrentSeason.currentCast[qblocked].blocked = [true, TopsQueens[0]];
            }
            else
            {
              Main.createImage(CurrentSeason.currentCast[i].image, "#F5EBF5");
            }
          }
        }
        Main.createText(CurrentSeason.currentCast[qblocked].GetName()+", you have been blocked. Next week, even if you win the challenge, you will not be able to receive a legendary legend star.", "Bold");

        for(let i = 0; i<CurrentSeason.currentCast.length; i++)
        {
          
          if(TopsQueens[0]==CurrentSeason.currentCast[i])
          {
            CurrentSeason.currentCast[i].trackrecord.push("WIN");
            CurrentSeason.currentCast[i].ppe += 5;
          }
          else if(TopsQueens[1]==CurrentSeason.currentCast[i])
          {
            CurrentSeason.currentCast[i].trackrecord.push("TOP2");
            CurrentSeason.currentCast[i].ppe += 5;
          }
          else if(Tops.indexOf(CurrentSeason.currentCast[i])!=-1)
          {
            if(CurrentSeason.currentCast[qblocked] == CurrentSeason.currentCast[i])
            {
              CurrentSeason.currentCast[i].trackrecord.push("HIGH+BLOCK");
              CurrentSeason.currentCast[i].ppe += 4;
            }
            else
            {
              CurrentSeason.currentCast[i].trackrecord.push("HIGH");
              CurrentSeason.currentCast[i].ppe += 4;
            }
            
          }
          else
          {
            if(CurrentSeason.currentCast[qblocked] == CurrentSeason.currentCast[i])
            {
              CurrentSeason.currentCast[i].trackrecord.push("BLOCK");
              CurrentSeason.currentCast[i].ppe += 4;
            }
            else
            {
              CurrentSeason.currentCast[i].trackrecord.push("SAFE");
              CurrentSeason.currentCast[i].ppe += 4;
            }
            
          }
        }
        break;
      }
    Steps++;
    if(Steps<10)
      Main.createButton("Proceed", "Lipsync()");
    else
    {
      Main.createButton("Proceed", "GetPromoTable()");
      Steps = 0;
    }
  

  }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function GenerateChallenge()
{
  document.body.style.backgroundImage = 'url("Images/Backgrounds/MS.png")';
  Main = new Screen();
  Main.clean();
    if( (CurrentChallenge.type=="BALL" && Steps==0) || (CurrentChallenge.type!="BALL"))
    {
      CurrentChallenge.createBrief();
    }
    if(CurrentChallenge.type=="BALL")
    {
      switch(Steps){
        case 0:
          CurrentChallenge.RankBall();
          Main.createText("First category is : "+CurrentChallenge.balls[CurrentChallenge.chosen][1],"Bold");
          Main.createLine();
          CurrentChallenge.RankFirstLook();
          CurrentChallenge.createRunways();
          break;
        case 1:
          Main.createText("Second category is : "+CurrentChallenge.balls[CurrentChallenge.chosen][2],"Bold");
          Main.createLine();
          CurrentChallenge.RankSecondRunway();
          CurrentChallenge.createRunways();
          break;
        case 2:
          Main.createText("Third and last category is : "+CurrentChallenge.balls[CurrentChallenge.chosen][3],"Bold");
          Main.createLine();
          CurrentChallenge.rankPerfomances();
          CurrentChallenge.createPerformances();
          break;
      }
      Steps++;
    }
    else
    {
      if(CurrentChallenge.type=="DESIGN")
      {
        for(let i = 0; i < CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].miniwinner == true && CurrentChallenge.boxes.indexOf(CurrentChallenge.chosen) == -1)
          {
            
            Main.createImage(CurrentSeason.currentCast[i].image,'blue');
            Main.createText(CurrentSeason.currentCast[i].GetName()+" as the winner of this week mini-challenge! You get 15 seconds of advance on the other queens.");
            Main.createLine();
          }
          else if(CurrentSeason.currentCast[i].miniwinner == true)
          {
            Main.createImage(CurrentSeason.currentCast[i].image,'blue');
            Main.createText(CurrentSeason.currentCast[i].GetName()+" as the winner of this week mini-challenge! You get to assign boxes to the other queens.");
            Main.createLine();
          }
        }
      }
      else
      {
        Main.createLine();
      }
      if(CurrentChallenge.type=="TALENTSHOW")
      {
        for(let i = 0; i < CurrentSeason.currentCast.length; i++)
        {
            Main.createImage(CurrentSeason.currentCast[i].image,'black');
            Main.createText(CurrentSeason.currentCast[i].GetName()+" has chosen as a talent : \""+CurrentChallenge.getRandomTalent()+"\".");
        }
        Main.createLine();
      }
      if(CurrentChallenge.type=="RUSICAL")
      {
        for(let i = 0; i < CurrentSeason.currentCast.length; i++)
        {
          if(CurrentSeason.currentCast[i].miniwinner == true && CurrentChallenge.roles[CurrentChallenge.chosen].length!=0)
          {
            
            Main.createImage(CurrentSeason.currentCast[i].image,'blue');
            Main.createText(CurrentSeason.currentCast[i].GetName()+" as the winner of this week mini-challenge! You get to assign the roles of the rusical to the other queens.")
            Main.createLine();
          }
        }
        shuffle(CurrentSeason.currentCast);
        for(let i = 0; i < CurrentSeason.currentCast.length; i++)
        {
          if(CurrentChallenge.roles[CurrentChallenge.chosen].length!=0)
          {
            let randomrole = getRandomInt(0,CurrentChallenge.roles[CurrentChallenge.chosen].length-1);
            Main.createImage(CurrentSeason.currentCast[i].image,'black');
            Main.createText(CurrentSeason.currentCast[i].GetName()+" as been assigned to the role of : \""+CurrentChallenge.roles[CurrentChallenge.chosen][randomrole]+"\".");
            CurrentSeason.currentCast.rusicalrole = CurrentChallenge.roles[CurrentChallenge.chosen][randomrole];
            CurrentChallenge.roles[CurrentChallenge.chosen].splice(randomrole,1);
            
          }
        }
        if(CurrentChallenge.roles[CurrentChallenge.chosen].length!=0)
        {
          Main.createLine();
        }
      }
      CurrentChallenge.rankPerfomances();
      CurrentChallenge.createPerformances();

      if(CurrentChallenge.hasrunway==true)
      {
        Main.createLine();
        CurrentChallenge.rankRunways();
        if((CurrentChallenge.finaleformat=="TOP3" || CurrentChallenge.finaleformat=="TOP3NE") && CurrentSeason.currentCast.length==3)
        {
          Main.createText("The runway theme, this week is : Best Drag.");
        }
        else if(CurrentSeason.finaleformat == "TOP3" && CurrentSeason.currentCast.length==3)
        {
          Main.createText("The runway theme, this week is : Best Drag.");
        }
        else if(CurrentSeason.finaleformat == "TOP3" && CurrentSeason.currentCast.length==3)
        {
          Main.createText("The runway theme, this week is : Best Drag.");
        }
        else
        {
          Main.createText("The runway theme, this week is : "+GetRandowRunway()+".");
        }
        CurrentChallenge.createRunways();
      }
    }
    if((CurrentChallenge.type=="BALL" && Steps==3) ||CurrentChallenge.type!="BALL")
    {
      RankQueens();
      Main.createButton("Proceed", "WhoGetsCritiques()");
      Steps = 0;
    }
    else
    {
      Main.createButton("Proceed", "GenerateChallenge()");
    }
}


function GetPromoTable()
  {
    
    SlayedChallenge = [];
    GreatChallenge = [];
    GoodChallenge = [];
    BadChallenge = [];
    FloppedChallenge = [];

    SlayedRunway = [];
    GreatRunway = [];
    GoodRunway = [];
    BadRunway = [];
    FloppedRunway = [];

    TopsQueens = [];
    BottomQueens = [];

    for(let i = 0; i<CurrentSeason.currentCast.length; i++)
    {
      CurrentSeason.currentCast[i].miniwinner = false;
      CurrentSeason.currentCast[i].episodeson++;
    }

    document.body.style.backgroundImage = 'url("Images/Backgrounds/bg.png")';
    Main = new Screen();
    Main.createBigText("Placements");
    Main.clean();
    Main.createPromoTable();
    
    if(CurrentSeason.episodes.length == 0)
    {
      Main.createButton("Proceed","Intro()");
    }
    else
    {
      Main.createButton("Proceed","TrackRecords()");
    }
  }

function LaunchMiniChallenge()
{ 
  Main = new Screen();
  Main.createBigText("In the workroom...");
  document.body.style.backgroundImage = 'url("Images/Backgrounds/Workroom.png")';
  if(CurrentSeason.episodes.length == 1 && (CurrentSeason.lipsyncformat == "AS7"))
  {
    Main.clean();
    Main.createImage(CurrentSeason.host.outofdrag,'blue');
    Main.createText("Welcome back queens!");
    for(let i = 0; i < CurrentSeason.currentCast.length; i++)
    {
      Main.createImage(CurrentSeason.currentCast[i].image);
    }
    Main.createText("To start your return back into this werkroom.");
    Main.createText("We will need a little of cool, a little bit of SHADE!");
    Main.createText("That's right! The library is open.");
    Main.createLine();
    for(let i = 0; i < CurrentSeason.currentCast.length; i++)
    {
      Main.createImage(CurrentSeason.currentCast[i].image, "sienna");
      let rdm = getRandomInt(0,CurrentSeason.currentCast.length-1);
      while(rdm == i) 
      {
        rdm = getRandomInt(0,CurrentSeason.currentCast.length-1);
      }
      Main.createImage(CurrentSeason.currentCast[rdm].image, "black");
      Main.createText("In Progress","Bold");
    }
    Main.createButton("Proceed","MiniResult()");
  }
  else if(CurrentSeason.episodes.length == 1 && CurrentSeason.lipsyncformat == "LIFE")
  {
    Main.clean();
    Main.createImage(CurrentSeason.host.outofdrag,'blue');
    Main.createText("Welcome queens!");
    for(let i = 0; i < CurrentSeason.currentCast.length; i++)
    {
      Main.createImage(CurrentSeason.currentCast[i].image);
    }
    Main.createText("You all have made it here.");
    Main.createText("Because you all are the very best of the drag world.");
    Main.createText("To get to know you all a little better, for your first mini-challenge...");
    Main.createText("You will have to do a photoshoot!","Bold");
    Main.createButton("Proceed","MiniResult()");
  }
  else
  {
    Main.clean();
    Main.createButton("Proceed","MiniResult()");
  }
}

function MiniResult()
{ if(CurrentSeason.episodes.length == 1 && (CurrentSeason.lipsyncformat == "AS7"))
  {
    Main = new Screen();
    Main.createBigText("In the workroom...");
    Main.clean();
    Main.createImage(CurrentSeason.host.outofdrag,'blue');
    Main.createText("Wow, you all are so shady!");
    Main.createText("But one of you take the cake in shadyness.");
    let challengewinner = getRandomInt(0,CurrentSeason.currentCast.length-1);
    Main.createImage(CurrentSeason.currentCast[challengewinner].image,'blue');
    Main.createText(CurrentSeason.currentCast[challengewinner].GetName()+", you are the winner of this week mini-challenge!",'Bold');
    CurrentSeason.currentCast[challengewinner].miniwinner = true;
    CurrentSeason.currentCast[challengewinner].minichallengeswins += 1;
    Main.createButton("Proceed","GenerateChallenge()");
  }
  else if(CurrentSeason.episodes.length == 1 && CurrentSeason.lipsyncformat == "LIFE")
  {
    Main = new Screen();
    Main.createBigText("In the workroom...");
    Main.clean();
    Main.createImage(CurrentSeason.host.outofdrag,'blue');
    Main.createText("Well congratulations to you all! Thoses photos are looking great.");
    Main.createText("But one of you snatched our attention.");
    let challengewinner = getRandomInt(0,CurrentSeason.currentCast.length-1);
    Main.createImage(CurrentSeason.currentCast[challengewinner].image,'blue');
    Main.createText(CurrentSeason.currentCast[challengewinner].GetName()+", you are the winner of this week mini-challenge!",'Bold');
    CurrentSeason.currentCast[challengewinner].miniwinner = true;
    CurrentSeason.currentCast[challengewinner].minichallengeswins += 1;
    Main.createButton("Proceed","GenerateChallenge()");
  } 
  else 
  {
    Main = new Screen();
    Main.createBigText("In the workroom...");
    Main.clean();
    let challengewinner = getRandomInt(0,CurrentSeason.currentCast.length-1);
    Main.createImage(CurrentSeason.currentCast[challengewinner].image,'blue');
    Main.createText(CurrentSeason.currentCast[challengewinner].GetName()+", you are the winner of this week mini-challenge!",'Bold');
    CurrentSeason.currentCast[challengewinner].miniwinner = true;
    CurrentSeason.currentCast[challengewinner].minichallengeswins += 1;
    Main.createButton("Proceed","GenerateChallenge()");
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function Intro()
{
  Video = new Screen();
  Video.clean();
  Video.createVideo(CurrentSeason.country);
  Video.createBigText("Welcome to "+CurrentSeason.seasonname+'!');
  Video.createButton("Proceed","ChallengeAnnouncement()");
}

function ChallengeAnnouncement(){
  Main.createBigText("She had already done had herses!");
  document.body.style.backgroundImage = "url('Images/Backgrounds/RChallenge.png')";
  Announcement = new Screen();
  Announcement.clean();
  if(CurrentSeason.lipsyncformat=="AS7")
  {
    switch(CurrentSeason.episodes.length)
    {
      case 0:
        CurrentChallenge = new Rumix();
        CurrentEpisode = new Episode("Legends!", "Rumix");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        Announcement.createRupaulAnnouncement("Welcome back queens!");
        Announcement.createRupaulAnnouncement("Looks like your crown got you all here!");
        Announcement.createRupaulAnnouncement("I wish you all the best in this competition.");
        Announcement.createRupaulAnnouncement("Good luck, my crowned queens!");
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;

      case 1:
        CurrentChallenge = new SnatchGame();
        CurrentEpisode = new Episode(CurrentChallenge.episodename, "Snatch Game");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 2:
        CurrentChallenge = new Ball();
        CurrentEpisode = new Episode(CurrentChallenge.balls[CurrentChallenge.chosen][0], "Ball");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;

      case 3:
        CurrentChallenge = new ImprovChallenge();
        CurrentEpisode = new Episode(CurrentChallenge.episodename, "Improvisation");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 4:
        CurrentChallenge = new Rumix();
        CurrentEpisode = new Episode("Girls Groups", "Rumix");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 5:
        CurrentChallenge = new ActingChallenge();
        CurrentEpisode = new Episode(CurrentChallenge.plays[CurrentChallenge.chosen], "Acting");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 6:
        CurrentChallenge = new DesignChallenge();
        CurrentEpisode = new Episode(CurrentChallenge.episodename[CurrentChallenge.chosen], "Design");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 7:
        CurrentChallenge = new ImprovChallenge();
        CurrentEpisode = new Episode(CurrentChallenge.episodename, "Improvisation");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 8:
        CurrentChallenge = new BrandingChallenge();
        CurrentEpisode = new Episode(CurrentChallenge.episodename, "Branding");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 9:
        CurrentChallenge = new ComedyChallenge();
        CurrentEpisode = new Episode(CurrentChallenge.episodename, "Comedy");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 10:
        CurrentChallenge = new TalentShow();
        CurrentEpisode = new Episode(CurrentChallenge.episodename, "Talent Show");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        CurrentChallenge.createMessage();
        Announcement.createButton("Proceed","LaunchMiniChallenge()");
        break;
      case 11:
        CurrentEpisode = new Episode("The Grand Lipsync Smackdown", "Talent Show");
        CurrentSeason.episodes.push(CurrentEpisode);
        Announcement.clean();
        Announcement.createRupaulAnnouncement("Welcome queens!");
        Announcement.createRupaulAnnouncement("Today is the finale!");
        Announcement.createRupaulAnnouncement("Are you ready to take the crown home ?");
        Announcement.createButton("Proceed","Finale()");
        break;
    }

  }
  else if(CurrentSeason.episodes.length==0 && CurrentSeason.premiereformat == "NORMAL" && CurrentSeason.lipsyncformat=="LIFE")
  {

    CurrentChallenge = new DesignChallenge();
    CurrentEpisode = new Episode(CurrentChallenge.episodename[CurrentChallenge.chosen], "Design");
    CurrentSeason.episodes.push(CurrentEpisode);
    CurrentSeason.designchallenges++;

    Announcement = new Screen();
    Announcement.clean();
    
    Announcement.createRupaulAnnouncement("Welcome queens!");
    Announcement.createRupaulAnnouncement("First of all let me give you all a warm welcome.");
    Announcement.createRupaulAnnouncement("You all made it here. You are all the very best.");
    Announcement.createRupaulAnnouncement("Now, let the olympics begin !");
    Announcement.createButton("Proceed","LaunchMiniChallenge()");
  }
  else
  {
    if( (CurrentSeason.finaleformat == "TOP3" || CurrentSeason.finaleformat == "TOP3NE")  && CurrentSeason.currentCast.length==3)
    {
      CurrentChallenge = new FinalChallenge();
      if(CurrentSeason.lastchallenge == "RUMIX")
      {
        CurrentEpisode = new Episode(CurrentChallenge.chosen, "Rumix");
        CurrentSeason.episodes.push(CurrentEpisode);
      }
      else
      {
        CurrentEpisode = new Episode(CurrentChallenge.chosen, "Music Video");
        CurrentSeason.episodes.push(CurrentEpisode);
      }
      Announcement.createButton("Proceed","LaunchMiniChallenge()");
    }
    else if(CurrentSeason.finaleformat == "TOP4" && CurrentSeason.currentCast.length==4)
    {
      CurrentChallenge = new FinalChallenge();
      if(CurrentSeason.lastchallenge == "RUMIX")
      {
        CurrentEpisode = new Episode(CurrentChallenge.chosen, "Rumix");
        CurrentSeason.episodes.push(CurrentEpisode);
      }
      else
      {
        CurrentEpisode = new Episode(CurrentChallenge.chosen, "Music Video");
        CurrentSeason.episodes.push(CurrentEpisode);
      }
      Announcement.createButton("Proceed","LaunchMiniChallenge()");
    }
    else if(CurrentSeason.finaleformat == "TOP5" && CurrentSeason.currentCast.length==5)
    {
      CurrentChallenge = new FinalChallenge();
      if(CurrentSeason.lastchallenge == "RUMIX")
      {
        CurrentEpisode = new Episode(CurrentChallenge.chosen, "Rumix");
        CurrentSeason.episodes.push(CurrentEpisode);
      }
      else
      {
        CurrentEpisode = new Episode(CurrentChallenge.chosen, "Music Video");
        CurrentSeason.episodes.push(CurrentEpisode);
      }
      Announcement.createButton("Proceed","LaunchMiniChallenge()");
    }
    else
    {
      if( (rusicalcastsizes.indexOf(CurrentSeason.currentCast.length)!=-1 && getRandomInt(0,100)>60 )&& CurrentSeason.rusicals == 0)
      {
        CurrentChallenge = new Rusical();
        while(CurrentChallenge.castsizes[CurrentChallenge.chosen] != CurrentSeason.currentCast.length)
        {
          CurrentChallenge.Reset();
        }
        CurrentEpisode = new Episode(CurrentChallenge.regrusical[CurrentChallenge.chosen], "Rusical");
        CurrentSeason.episodes.push(CurrentEpisode);
        CurrentSeason.rusicals++;
      }
      else if(getRandomInt(0,100)>=85 && CurrentSeason.balls <2)
      {
        CurrentChallenge = new Ball();
        CurrentEpisode = new Episode(CurrentChallenge.balls[CurrentChallenge.chosen][0], "Ball");
        CurrentSeason.episodes.push(CurrentEpisode);
        CurrentSeason.balls++;
      }
      else if( (getRandomInt(0,100)>=70 && CurrentSeason.currentCast.length == 9) || (getRandomInt(0,100)>=40 && CurrentSeason.currentCast.length == 9) ||(CurrentSeason.currentCast.length == 7)  && CurrentSeason.snatchgame == 0)
      {
        CurrentChallenge = new SnatchGame();
        CurrentEpisode = new Episode(CurrentChallenge.episodename, "Snatch Game");
        CurrentSeason.episodes.push(CurrentEpisode);
        CurrentSeason.snatchgame++;
      }
      else if( (getRandomInt(0,100)>=90 && CurrentSeason.currentCast.length == 8) || (getRandomInt(0,100)>=60 && CurrentSeason.currentCast.length == 6) || (getRandomInt(0,100)>=20 && CurrentSeason.currentCast.length == 5) || (CurrentSeason.currentCast.length == 4) && CurrentSeason.makeoverchallenges == 0)
      {
        CurrentChallenge = new Makeover();
        CurrentEpisode = new Episode(CurrentChallenge.episodename[CurrentChallenge.chosen], "Makeover");
        CurrentSeason.episodes.push(CurrentEpisode);
        CurrentSeason.makeoverchallenges++;
      }
      else
      {
        switch(getRandomInt(0,6))
        {
          case 0:
            CurrentChallenge = new DesignChallenge();
            CurrentEpisode = new Episode(CurrentChallenge.episodename[CurrentChallenge.chosen], "Design");
            CurrentSeason.episodes.push(CurrentEpisode);
            CurrentSeason.designchallenges++;
            break;

          case 1:
            CurrentChallenge = new ActingChallenge();
            CurrentEpisode = new Episode(CurrentChallenge.plays[CurrentChallenge.chosen], "Acting");
            CurrentSeason.episodes.push(CurrentEpisode);
            CurrentSeason.actingchallenges++;
            break;
          case 2:
            CurrentChallenge = new ImprovChallenge();
            CurrentEpisode = new Episode(CurrentChallenge.episodename, "Improvisation");
            CurrentSeason.episodes.push(CurrentEpisode);
            CurrentSeason.improvchallenges++;
            break;
          case 3:
            CurrentChallenge = new ComedyChallenge();
            CurrentEpisode = new Episode(CurrentChallenge.episodename, "Comedy");
            CurrentSeason.episodes.push(CurrentEpisode);
            CurrentSeason.standupchallenges++;
            break;
          case 4:
            CurrentChallenge = new ChoreographyChallenge();
            CurrentEpisode = new Episode(CurrentChallenge.episodename, "Choreography");
            CurrentSeason.episodes.push(CurrentEpisode);
            CurrentSeason.choreochallenges++;
            break;
          case 5:
            CurrentChallenge = new CommercialChallenge();
            CurrentEpisode = new Episode(CurrentChallenge.episodename, "Commercial");
            CurrentSeason.episodes.push(CurrentEpisode);
            CurrentSeason.commercialchallenges++;
            break;
          case 6:
            CurrentChallenge = new BrandingChallenge();
            CurrentEpisode = new Episode(CurrentChallenge.episodename, "Branding");
            CurrentSeason.episodes.push(CurrentEpisode);
            CurrentSeason.commercialchallenges++;
            break;
        }
      }
      CurrentChallenge.createMessage();
      Announcement.createButton("Proceed","LaunchMiniChallenge()");
    }
  }
}

function RankQueens(){
  console.log("done");
    Tops = [];
    Bottoms = [];
    Critiqued = [];
    Safes = [];
    switch(CurrentSeason.lipsyncformat)
    {
      case "LIFE":
      if(CurrentSeason.currentCast.length>=12)
      {
        for(let i = 0; i<3; i++)
        {
          Tops.push(CurrentSeason.currentCast[i]);
          Bottoms.push(CurrentSeason.currentCast[CurrentSeason.currentCast.length-1-i]);

          Critiqued.push(CurrentSeason.currentCast[i]);
          Critiqued.push(CurrentSeason.currentCast[CurrentSeason.currentCast.length-1-i]);
        }
      }
      else
      {
        if(CurrentSeason.currentCast.length==5)
        {
            Tops.push(CurrentSeason.currentCast[0]);
            Tops.push(CurrentSeason.currentCast[1]);
            Tops.push(CurrentSeason.currentCast[2]);
            Bottoms.push(CurrentSeason.currentCast[3]);
            Bottoms.push(CurrentSeason.currentCast[4]);
          for(let i = 0; i<5; i++)
          {
            Critiqued.push(CurrentSeason.currentCast[i]);
          }

        }
        else if(CurrentSeason.currentCast.length==4)
        {
          Tops.push(CurrentSeason.currentCast[0]);
          Tops.push(CurrentSeason.currentCast[1]);
          Bottoms.push(CurrentSeason.currentCast[2]);
          Bottoms.push(CurrentSeason.currentCast[3]);
        for(let i = 0; i<3; i++)
        {
          Critiqued.push(CurrentSeason.currentCast[i]);
        }
        }
        else if(CurrentSeason.currentCast.length==3)
        {
          Tops.push(CurrentSeason.currentCast[0]);
          Tops.push(CurrentSeason.currentCast[1]);
          Tops.push(CurrentSeason.currentCast[2]);
        for(let i = 0; i<3; i++)
        {
          Critiqued.push(CurrentSeason.currentCast[i]);
        }
        }
        else
        {
          for(let i = 0; i<3; i++)
          {
            Tops.push(CurrentSeason.currentCast[i]);
            Bottoms.push(CurrentSeason.currentCast[CurrentSeason.currentCast.length-1-i]);

            Critiqued.push(CurrentSeason.currentCast[i]);
            Critiqued.push(CurrentSeason.currentCast[CurrentSeason.currentCast.length-1-i]);
          }
        }
      }

      for(let i = 0; i<CurrentSeason.currentCast.length; i++)
      {
        if(Tops.indexOf(CurrentSeason.currentCast[i],0) == -1 && Bottoms.indexOf(CurrentSeason.currentCast[i],0) == -1)
        {
          CurrentSeason.currentCast[i].trackrecord.push("SAFE");
          CurrentSeason.currentCast[i].ppe += 3;
          Safes.push(CurrentSeason.currentCast[i]);
        }
      }

      shuffle(SlayedChallenge);
      shuffle(GreatChallenge);
      shuffle(GoodChallenge);
      shuffle(BadChallenge);
      shuffle(FloppedChallenge);
      break;

      case "AS7":
        if(CurrentSeason.currentCast.length>=10)
        {
          for(let i = 0; i<5; i++)
          {
            Tops.push(CurrentSeason.currentCast[i]);
          }
        }
        else
        {
        for(let i = 0; i<3; i++)
          {
            Tops.push(CurrentSeason.currentCast[i]);
          }
        }

        for (let index = 0; index < CurrentSeason.currentCast.length; index++) {
          Critiqued.push(CurrentSeason.currentCast[index]);
        }
        shuffle(SlayedChallenge);
        shuffle(GreatChallenge);
        shuffle(GoodChallenge);
        shuffle(BadChallenge);
        shuffle(FloppedChallenge);
        break;

    }
}

function TrackRecords()
{
  Main.createBigText("Track Records");
  MainScreen = new Screen();
  MainScreen.clean();

  MainScreen.createTrackRecords();

  if(done==false)
  {
    MainScreen.createButton("Proceed","ChallengeAnnouncement()");
  }
}

function CreateEntrances()
{

}

function LoadPhoto()
{
  let CT = new Screen();
  let getnumber = document.getElementById("aq").value;
  let getimg = document.getElementById("DRQ")
  if(getnumber!=undefined)
  {
    if(getimg==undefined)
    {
      CT.createText("");
      CT.createCustomCastImage(DragRaceQueens[getnumber].promo,"black","DRQ");
    }
    else
    {
      getimg.src = DragRaceQueens[getnumber].promo;
    }
  }
}

function AddToCast(){
  let getnumber = document.getElementById("aq").value;
  if(getnumber!=undefined)
  {
    if(CustomCast.indexOf(DragRaceQueens[getnumber])==-1)
      CustomCast.push(DragRaceQueens[getnumber]);
    else
      window.alert("This queen is already in the cast!");
  }
  UpdateCustomCast();
}

function UpdateCustomCast(){
  let CT = new Screen();
  let select = document.getElementById("clean");
  
  CT.SpecialCreateLine();
  clean.innerHTML = "<hr><h1> Current Custom Cast : <h1>";
  for (let index = 0; index < CustomCast.length; index++) {
    CT.createCImage(CustomCast[index].promo);
  }

  let ct = document.getElementById("ct");
  ct.innerHTML = "";
  for (let index = 0; index < CustomCast.length; index++) {
      var opt = document.createElement("option");
      opt.value = index;
      opt.text = CustomCast[index].GetName() + " ("+CustomCast[index].ogseason+")";
      ct.add(opt)
    }
}

function RemoveFromCast(){
  let getnumber = document.getElementById("ct").value;
  if(getnumber!=undefined)
  {
    CustomCast.splice(getnumber,1);
  }
  
  UpdateCustomCast();
}

function GetQueensStats()
{
  Stats = new Screen();
  Stats.createQueensStats();
}
function LoadCasts()
{
  let CT = new Screen();
  CT.LoadCasts();
  CT.SpecialCreateLine();
}
function CreateSeason(Name, Cast, Host, Finale, LC, LS, Premiere, Country)
{
  CurrentSeason = new Season(Name, Cast, Host, Finale, LC, LS, Premiere, Country);
  GetPromoTable();
}

function CheckAS7(){
  let select = document.getElementById("lipsync").value;
  if(select=="AS7")
  {
    window.alert("Choosing this format will ignore theses others choices : Premiere Format, Finale Format & Last Challenge")
  }
}

function LaunchCustomCast(){
  let isgood = true;

  let Finale = document.getElementById("format").value;
  let LC = document.getElementById("lc").value;
  let Premiere = document.getElementById("premiere").value;
  let Name = document.getElementById("sname").value;
  let LS = document.getElementById("lipsync").value;
  let Country = document.getElementById("country").value;
  if(Name=="")
  {
    isgood = false;
  }

  let host;
  switch(document.getElementById("host").value){
    case "BH":
      host = brookehost;
      break;
    case "RP":
      host = rupaulhost;
      break;
    case "SP":
      host = supremmehost;
      break;
  }

  if(LC == 0 || Premiere == 0 || Country == 0 || LS == 0 || Finale == 0)
  {
    isgood = false;
  }
  if(LS=="AS7")
  {
    LC = "AS7";
    Premiere = "NORMAL";
    Finale = "AS7";
  }

  if(CustomCast.length<4)
  {
    isgood = false;
  }
  
  CurrentSeason = new Season(Name, CustomCast, host, Finale, LC, LS, Premiere, Country);

  if(isgood==true)
  {
    GetPromoTable();
  }
  else
  {
    window.alert("Please fill out everything and have at least 4 queens in your cast!");
  }
}

function SearchQueen(){
let select = document.getElementById("aq");
select.innerHTML = "";
let thingstomatch = document.getElementById("search").value;
let test = new RegExp(thingstomatch,"i");
for (let index = 0; index < DragRaceQueens.length; index++) {
    if(DragRaceQueens[index].GetName().match(test))
    {
    var opt = document.createElement("option");
    opt.value = index;
    opt.text = DragRaceQueens[index].GetName() + " ("+DragRaceQueens[index].ogseason+")";
    select.add(opt)
    }
  }
}

function GetRandowRunway() {
  let RunwaysTheme = [
    "Color Blocking",
    "Recreation Runway",
    "What’s Your Zodiac Sign?",
    "Fringe",
    "Orange Alert",
    "All That Glitters",
    "Sequins On The Runway",
    "Facekini Realness",
    "Caftan Realness",
    "Rebellion",
    "Sparkle",
    "Tulle",
    "Spring",
    "Fall",
    "Planet Of The Capes",
    "Frozen Eleganza",
    "Black Wedding",
    "Stars & Stripes Forever",
    "Drag Family Resemblance",
    "The Color Purple",
    "Icy Iridescence",
    "Eleguence After Dark",
    "Boots The Haus Down",
    "Curves & Swerves: Padded For The Gods",
    "Angellic White",
    "Plastique Fantastique",
    "Kitty Kat Kouture",
    "Neon",
    "Drag On A Dime",
    "Feathers",
    "Denim & Diamonds",
    "Hats Incredible",
    "Mermaid Fantasy",
    "Glitterific",
    "Silver Foxy",
    "Queen Of All Queens",
    "Latex Extravaganza",
    "The Future Of Drag",
    "Two Looks In One",
    "Pants On The Runway",
    "All Star Glam-O-Rama",
    "Goddess",
    "Trash Couture",
    "Think Pink",
    "Divalicious",
    "Favourite Body Part",
    "Company Spokeswoman",
    "Latina Eleganza",
    "Pasteloquence",
    "Lame You Stay",
    "We’re Sheer",
    "Daytime Drama Rama",
    "Night Time",
    "Lady!",
    "Vampy Realness",
    "Trains For Days",
    "Little Black Dress",
    "Bead It!",
    "Yellow Gorgeous",
    "Fascinating Fascinators",
    "Drag Dopplegangers",
    "BEAST Couture",
    "Haute Pockets",
    "Love The Skin You’re In",
    "Three Looks in One",
    "Camo Couture",
    "Prom Queen Fantasy",
    "Freak Out",
    "Monochrome",
    "White Party Realness",
    "Princess Fantasy",
    "Naughty Nighty",
    "Faux Fur Realness",
    "Big Hair Everywhere",
    "Club Kid Couture",
    "Flower Power",
    "Red For Filth",
    "Not My First Time",
    "Que-Becky With the Good Hair",
    "Denim on Denim on Denim",
    "Pageant Perfection",
    "Give Face, Face, Face",
    "Miss USA",
    "Shine Bright Like A Diamond",
    "Half Man Half Queen",
    "Beachwear",
    "Cocktail Dress",
    "Evening Gown",
    "Retro",
    "Movie Premiere Eleganza",
    "Rollergirls",
    "Neon Realness",
    "Nude Illusion",
    "Jetset Eleganza",
    "Bearded & Beautiful",
    "Green",
    "Award Show",
    "Death Becomes Her",
    "Leather & Lace",
    "Ugliest Dress Ever",
    "TV Shows",
    "Party Box",
    "Tony Awards",
    "Crazy Sexy Cool",
    "Black & White",
    "Animal Kingdom Couture",
    "Bad Girl Chic",
    "Futurism",
    "Apocalyptic Couture",
    "Girly Girl Couture",
    "Red Carpet",
    "Dress to Impress",
    "Pride Parade Eleganza",
    "Frenemies",
    "Futurama Glamourama",
    "Favorite Body Part",
    "Extravagant Drag",
    "Cake Couture",
    "Patriotic Drag",
    "High Class Drag",
    "Country Realness",
    "Personal Style",
    "Wedding Eleganza",
    "Rocker Chick",
    "Diva Hollywood Extravaganza",
    "Mac Viva Glam",
    "Supermodel Of The World",
    "Candy Land",
    "Gamer Couture",
    "Signature Showstopping Drag",
    "Night of 1000 J.Lo's",
    "Spring has Sprung",
    "Chaps On The Runway!",
    "Heart On",
    "Shoulder Pads",
    "Holy Couture",
    "Mirror, Mirror!",
    "Tutu Much",
    "You're A Winner, Baby!",
    "Viva Drag VEGAS!",
    "Teritary Colors",
    "Queen of your Hometown",
    "My Favorite Thing",
    "Red Carpet Showstoppers",
    "Night of 1000 Spice Girls",
    "Expenny, Henny!",
    "Feeling Fruity",
    "Scene Stealers",
    "Oh My Goddess",
    "80's",
    "90's",
    "70's",
    "60's",
    "Period Piece",
    "Add Some Sugar!",
    "Premiere Party Realness",
    "Circus Bezerkus",
    "Good Girl Gone Bad",
    "Monochromatica: Futuristic Pop Princess",
    "Dungeons and Drag Queens",
    "Cool Mom"
    ];
    let chosen = getRandomInt(0,RunwaysTheme.length-1);
    let ret = RunwaysTheme[chosen];
    RunwaysTheme.splice(chosen,1);
    return(ret);
  }

function GetSong(){
  switch(CurrentSeason.country)
  {
    case "US":
      let songsus = [
        '"Supermodel" by RuPaul',
        '"We Break The Dawn" by Michelle Williams',
        '"Would I Lie to You?" by Eurythmics',
        '"Stronger" by Britney Spears',
        '"Shackles (Praise You)" by Mary Mary',
        '"Cover Girl (Put The Bass In Your Walk)" by RuPaul',
        '"My Lovin\' (You\'re Never Gonna Get It)" by En Vogue',
        '"I Hear You Knocking" by Wynonna Judd',
        '"Two of Hearts" by Stacey Q',
        '"Carry On" by Martha Wash',
        '"Black Velvet" by Alannah Myles',
        '"He\'s the Greatest Dancer" by Sister Sledge',
        '"Shake Your Love" by Debbie Gibson',
        '"Something He Can Feel" by Aretha Franklin',
        '"Jealous of My Boogie" by RuPaul',
        '"The Right Stuff" by Vanessa Williams',
        '"Bad Romance" by Lady Gaga',
        '"Don\'t Leave Me This Way" by Thelma Houston',
        '"Meeting in the Ladies Room" by Klymaxx',
        '"Lookin For A New Love" by Jody Watley',
        '"Knock On Wood" by Amii Stewart',
        '"MacArthur Park" by Donna Summer',
        '"Hey Mickey (Spanish Version)" by Toni Basil',
        '"Believe" By Cher',
        '"Even Angels" by Fantasia',
        '"Straight Up" by Paula Abdul',
        '"I Think About You" by Patti LaBelle',
        '"Champion" by RuPaul',
        '"Toxic" by Britney Spears',
        '"Bad Girls" by Donna Summer',
        '"This Will Be (An Everlasting Love)" by Natalie Cole',
        '"Trouble" by Pink',
        '"Vogue" by Madonna',
        '"Born This Way" by Lady Gaga',
        '"Mi Vida Loca" by Pam Tillis',
        '"It\'s Raining Men (The Sequel)" by Martha Wash and RuPaul',
        '"I\'ve Got To Use My Imagination" by Gladys Knight',
        '"(You Make Me Feel Like) A Natural Woman" by Aretha Franklin',
        '"No One Else On Earth" by Wynonna Judd',
        '"Glamazon" by RuPaul',
        '"Party in the U.S.A" by Miley Cyrus',
        '"Only Girl (In The World)" by Rihanna',
        '"Oops!...I Did It Again" by Britney Spears',
        '"Take Me Home" by Cher',
        '"I\'m So Excited" by The Pointer Sisters',
        '"Whip My Hair" by Willow Smith',
        '"Ain\'t Nothin\' Going on but the Rent" by Gwen Guthrie',
        '"Cold Hearted" by Paula Abdul',
        '"(It Takes) Two To Make It Right" by Seduction',
        '"Malambo No. 1" by Yma Sumac',
        '"The Beginning" by RuPaul',
        '"Express Yourself" by Madonna',
        '"Turn The Beat Around" by Vicky Sue Robinson',
        '"Shake it Up" by Selena Gomez',
        '"I\'m Every Woman" by Chaka Khan',
        '"Head to Toe" by Lisa Lisa & Cult Jam',
        '"Whatta Man" by Salt-n-Pepa feat. En Vogue',
        '"Point of No Return" by Exposé',
        '"Stupid Girls" by P!nk',
        '"Vibeology" by Paula Abdul',
        '"Think" by Aretha Franklin',
        '"Stronger (What Doesn\'t Kill You)" by Kelly Clarkson',
        '"Sissy That Walk" by RuPaul',
        '"Geronimo" by RuPaul feat. Lucian Piane',
        '"Twist of Fate" by Olivia Newton-John',
        '"I Was Gonna Cancel" by Kylie Minogue',
        '"Dreaming" by Blondie',
        '"Lovergirl" by Teena Marie',
        '"Break Free" by Ariana Grande',
        '"No More Lies" by Michel\'le',
        '"I Think We\'re Alone Now" By Tiffany',
        '"Really Don\'t Care" by Demi Lovato feat. Cher Lloyd',
        '"Show Me Love" by Robin S.',
        '"Roar" by Katy Perry',
        '"Born Naked" by RuPaul feat. Clairy Brown',
        '"Applause" by Lady Gaga',
        '"I Will Survive" by Gloria Gaynor',
        '"Mesmerized" by Faith Evans',
        '"Call Me" by Blondie',
        '"Causing A Commotion" by Madonna',
        '"I Love It" by Icona Pop',
        '"And I Am Telling You I\'m Not Going" by Jennifer Holliday',
        '"You Make Me Feel (Mighty Real)" by Sylvester',
        '"The Realness" by RuPaul',
        '"Love Shack" by The B-52\'s',
        '"Holding Out For A Hero" by Bonnie Tyler',
        '"I Wanna Go" by Britney Spears',
        '"Woman Up" by Meghan Trainor',
        '"Music" by Madonna',
        '"Finally" by Cece Peniston',
        '"Baby I\'m Burnin\'" by Dolly Parton',
        '"Greedy" by Ariana Grande',
        '"Macho Man" by The Village People',
        '"U Wear It Well" by RuPaul',
        '"Stronger" by Britney Spears',
        '"So Emotional" by Whitney Houston',
        '"It\'s Not Right but It\'s Okay (Thunderpuss Mix)" by Whitney Houston',
        '"Ain\'t No Other Man" by Christina Aguilera',
        '"Best Of My Love" by The Emotions',
        '"Celebrity Skin" by Hole',
        '"Pound The Alarm" by Nicki Minaj',
        '"Man! I Feel Like A Woman" by Shania Twain',
        '"Cut To The Feeling" by Carly Rae Jepsen',
        '"I\'m Coming Out" by Diana Ross',
        '"Groove Is In The Heart" by Deee-Lite',
        '"New Attitude" by Patti LaBelle',
        '"Good As Hell" by Lizzo',
        '"Nasty Girl" by Vanity 6',
        '"Call Me Mother" by RuPaul',
        '"Nasty" by Janet Jackson',
        '"If" by Janet Jackson', 
        '"Bang Bang" by Jessie J, Ariana Grande and Nicki Minaj',
        '"Best of Both Worlds" by Miley Cyrus',
        '"Work Bitch" by Britney Spears',
        '"Waiting For Tonight (Hex Hector Remix)" by Jennifer Lopez',
        '"Living in America" by James Brown',
        '"I\'m Your Baby Tonight" by Whitney Houston',
        '"Last Dance" by Donna Summer',
        '"Strut" by Sheena Easton',
        '"Sorry Not Sorry" by Demi Lovato',
        '"Hood Boy" by Fantasia',
        '"No More Drama" by Mary J. Blige',
        '"No Scrubs" by TLC',
        '"Pride: A Deeper Love" by Aretha Franklin',
        '"Bootylicious" by Destiny\'s Child',
        '"SOS" by Rihanna',
        '"The Edge of Glory" by Lady Gaga',
        '"Starships" by Nicki Minaj',
        '"Call Your Girlfriend" by Robyn',
        '"Problem" by Ariana Grande feat. Iggy Azalea',
        '"S&M" by Rihanna',
        '"Heart to Break" by Kim Petras',
        '"Let It Go" by Caissie Levy',
        '"Burning Up" by Madonna',
        '"This Is My Night" by Chaka Khan',
        '"Firework" by Katy Perry',
        '"Kill The Lights" by Alex Newell',
        '"1999" by Prince',
        '"On The Floor" by Jennifer Lopez feat. Pitbull',
        '"Bring Back My Girls" by RuPaul',
        '"I\'m Like a Bird" by Nelly Furtado',
        '"Take On Me" by a-ha',
        '"Get Up" by Ciara',
        '"Survivor" by Destiny\'s Child',
        '"Call Me Maybe" by Carly Rae Jepsen',
        '"When I Grow Up" by The Pussycat Dolls',
        '"The Pleasure Principle" by Janet Jackson',
        '"Rumors" by Lindsay Lohan',
        '"Ex\'s & Oh\'s" by Elle King',
        '"Lady Marmalade" by Christina Aguilera, Lil\' Kim, Mýa & Pink',
        '"Break My Heart" by Dua Lipa',
        '"If U Seek Amy" by Britney Spears',
        '"100% Pure Love" by Crystal Waters',
        '"Fancy" by Iggy Azalea feat. Charli XCX',
        '"Hit \'Em Up Style (Oops!)" by Blu Cantrell',
        '"Whole Lotta Woman" by Kelly Clarkson',
        '"BO$$" by Fifth Harmony',
        '"Fascinated" by Company B',
        '"My Humps" by Black Eyed Peas',
        '"No Tears Left To Cry" by Ariana Grande',
        '"Strong Enough" by Cher',
        '"Be My Lover" by La Bouche',
        '"I Learned from the Best (HQ2 Radio Mix)" by Whitney Houston',
        '"Gimme More" by Britney Spears',
        '"Till the World Ends" by Britney Spears',
        '"One Way or Another" by Blondie',
        '"Water Me" by Lizzo',
        '"Fallin\'" by Alicia Keys',
        '"I Love It" by Kylie Minogue',
        '"Play" by Jennifer Lopez',
        '"My Head & My Heart" by Ava Max',
        '"Suga Mama" by Beyoncé',
        '"Un-Break My Heart (Hex Hector Remix)" by Toni Braxton',
        '"Something\'s Got A Hold On Me" by Etta James',
        '"Heartbreak Hotel (Hex Hector Remix)" by Whitney Houston',
        '"good 4 u" by Olivia Rodrigo',
        '"Telephone" by Lady Gaga ft. Beyoncé',
        '"Respect" by Aretha Franklin',
        '"Never Too Much" by Luther Vandross',
        '"Radio" by Beyoncé',
        '"Don\'t Let Go (Love)" by En Vogue',
        '"Love Don\'t Cost a Thing" by Jennifer Lopez',
        '"Swept Away" by Diana Ross',
        '"Gimme! Gimme! Gimme! (A Man After Midnight)" by Cher',
        '"Opposites Attract" by Paula Abdul',
        '"There\'s No Business Like Show Business" by Ethel Merman',
        '"Don\'t Cha" by The Pussycat Dolls',
        '"Dancing On My Own" by Robyn',
        '"Shake It Off" by Taylor Swift',
        '"Le Freak (Freak Out)" by Chic',
        '"Tell It To My Heart" by Taylor Dayne',
        '"Got To Be Real" by Cheryl Lynn',
        '"Shut Up & Drive" by Rihanna',
        '"Cherry Bomb" by Joan Jett and the Blackhearts',
        '"Step It Up" by RuPaul feat. Dave Audé',
        '"If I Were Your Woman" by Gladys Knight & The Pips',
        '"Anaconda" by Nicki Minaj',
        '"Jump (For My Love)" by The Pointer Sisters',
        '"Green Light" by Lorde',
        '"I Kissed a Girl" by Katy Perry',
        '"The Boss" by Diana Ross',
        '"Nobody\'s Supposed to be Here (Hex Hector Dance Mix)" by Deborah Cox',
        '"Freaky Money" by RuPaul feat. Big Freedia',
        '"Wrecking Ball" by Miley Cyrus',
        '"Emotions" by Mariah Carey',
        '"Into You" by Ariana Grande',
        '"How Will I Know" by Whitney Houston',
        '"The B!tch is Back" by Tina Turner',
        '"Jump To It" by Aretha Franklin',
        '"You Spin Me Round (Like a Record)" by Dead or Alive',
        '"Come Rain or Come Shine" by Judy Garland',
        '"When I Think of You" by Janet Jackson',
        '"Peanut Butter" by RuPaul feat. Big Freedia',
        '"Kitty Girl" by RuPaul',
        '"Adrenaline" by RuPaul',
        '"Sissy That Walk"by RuPaul',
        '"Fighter" by Christina Aguilera',
        '"Livin\' La Vida Loca" by Ricky Martin',
        '"Neutron Dance" by The Pointer Sisters',
        '"Juice" by Lizzo',
        '"Where Have You Been" by Rihanna',
        '"Open Your Heart" by Madonna',
        '"One Last Time" by Ariana Grande',
        '"Fancy" by Reba McEntire',
        '"Make Me Feel" by Janelle Monáe',
        '"Uptown Funk" by Mark Ronson feat. Bruno Mars',
        '"Miss You Much" by Janet Jackson',
        '"Physical" by Dua Lipa',
        '"Womanizer" by Britney Spears',
        '"Phone" by Lizzo',
        '"Dirrty" by Christina Aguilera',
        '"Dance Again" by Jennifer Lopez feat. Pitbull',
        '"Sugar Walls" by Sheena Easton',
        '"Boom Clap" by Charli XCX',
        '"Good Golly Miss Molly" by Little Richard',
        '"Free Your Mind" by En Vogue',
        '"Girls Just Wanna Have Fun" by Cyndi Lauper',
        '"Song for the Lonely" by Cher',
        '"Barbie Girl" by Aqua',
        '"Heartbreaker" by Pat Benatar',
        '"Focus" by Ariana Grande',
        '"Since U Been Gone" by Kelly Clarkson',
        '"Stupid Love" by Lady Gaga',
        '"Old MacDonald" by Ella Fitzgerald',
        '"Rumor Has It" by Adele',
        '"Greenlight" by Beyoncé'
      ];
      let chosen = songsus[getRandomInt(0,songsus.length-1)];
      songsus.splice(songsus.indexOf(chosen),1);
      return(chosen);
      break;

    case "CANADA":
      let songscan = [
        '"I Really Like You" by Carly Rae Jepsen',
        '"If You Could Read My Mind" by Ultra Naté, Amber, and Jocelyn Enriquez',
        '"Absolutely Not (Chanel Club Mix)" by Deborah Cox',
        '"Girlfriend" by Avril Lavigne',
        '"I Drove All Night" by Céline Dion',
        '"Scars To Your Beautiful" by Alessia Cara',
        '"Hello" by Allie X',
        '"You Oughta Know" by Alanis Morissette',
        '"Closer" by Tegan and Sara',
        '"You\'re A Superstar" by Love Inc.',
        '"Maneater" by Nelly Furtado',
        '"Stupid Shit" by Girlicious',
        '"Ghost" by Fefe Dobson',
        '"Happiness" by Alexis Jordan',
        '"I Love Myself Today" by Bif Naked',
        '"Heaven" by DJ Sammy',
        '"Get Down" by B4-4',
        '"Everbody Say Love" by Mitsou',
        '"Main Event" by RuPaul',
        '"Born Naked" by RuPaul',
        '"Call Me Mother" by RuPaul',
        '"It\'s All Coming Back to Me Now" by Celine Dion'
      ];
      let chosencan = songscan[getRandomInt(0,songscan.length-1)];
      songscan.splice(songscan.indexOf(chosencan),1);
      return(chosencan);
      break;
  }
}
//#endregion
