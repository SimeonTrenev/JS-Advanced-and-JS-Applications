function solve() {
  let p1CardIndex = null;
  let p2CardIndex = null;
  let p1CardValue = null;
  let p2CardValue = null;
  let cardHistory = [];

  let images = document.querySelectorAll('section.cards img');

  for(let i = 0; i < images.length;i++){
     
      images[i].addEventListener('click', function(e) {
         let currentImg = e.target;
         currentImg.src = 'images/whiteCard.jpg'
         let imgName = Number(currentImg.name);

         const parentId = e.target.parentElement.id;

         if(parentId === 'player1Div'){
            let player1Result = document.getElementsByTagName('span')[0];
            player1Result.textContent = imgName;
            p1CardValue = imgName;
            p1CardIndex = i;
         }else if(parentId === 'player2Div'){
            let player2Result = document.getElementsByTagName('span')[2]
            player2Result.textContent = imgName;
            p2CardValue = imgName;
            p2CardIndex = i;
         }

         if(p1CardIndex !== null && p2CardIndex !== null){
            if(p1CardValue < p2CardValue) {
               images[p1CardIndex].style.border = '2px solid red';
               images[p2CardIndex].style.border = '2px solid green';
            }else if(p1CardValue > p2CardValue){
               images[p1CardIndex].style.border = '2px solid green';
               images[p2CardIndex].style.border = '2px solid red';
            }

            cardHistory.push(`[${p1CardValue} vs ${p2CardValue}]`)
            p1CardIndex = null;
            p2CardIndex = null;
            p1CardValue = null;
            p2CardValue = null;
            //player1 History = Number(currentImg.name);

            let history = document.getElementById('history');
            history.textContent = cardHistory.join(' ') + ' ';
            console.log(cardHistory)

         }

      })
  }
}