/* To connect using MetaMask */
let walletAddress = "empty";

async function connect() {
   if(walletAddress != "empty"){
      Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'Wallet connected already !',
         showConfirmButton: false,
         timer: 1500
      })
   }
   else{
   
    if (window.ethereum) {
       await window.ethereum.request({ method: "eth_requestAccounts" });
       window.web3 = new Web3(window.ethereum);
       const account = web3.eth.accounts;
       //Get the current MetaMask selected/active wallet
      walletAddress = account.givenProvider.selectedAddress;
       Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'Your wallet has been connected !',
         showConfirmButton: false,
         timer: 1500
       })
       
       let btn = document.getElementById("wallet-btn");
       let displayLength = 10;
       if (walletAddress.length > displayLength) {
         var displayContent = walletAddress.substring(0, displayLength) + "...";
         btn.innerHTML = displayContent;
       } else {
         btn.innerHTML=walletAddress;
       }
       
       console.log(`Wallet: ${walletAddress}`);
    
    } else {
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No wallet!'
    })
    } 
  }
  
}
