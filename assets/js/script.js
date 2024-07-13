function openLink(linkId) {
    var url;
    
    switch (linkId) {
      case 'link1':
        url = 'assets/img/resume2.pdf';
        break;
      case 'link2':
        url = 'https://github.com/Jonasmacasieb/votingmanagementsystem';
        break;
      case 'link3':
        url = 'https://github.com/Jonasmacasieb/Tic-Tac-Toe';
        break;
      case 'link4':
        url = 'https://www.freecodecamp.org/certification/markjonas2341/responsive-web-design';
        break;
      case 'link5':
         url = 'https://www.facebook.com/ChMarkjonas.macasieb23';
        break;
      case 'link6':
        url = 'https://x.com/Jonasmacasieb';
        break;
     case 'link7':
        url = 'https://www.linkedin.com/in/mark-jonas-macasieb-4b4589313/';
        break;
     case 'link8':
        url = 'https://github.com/Jonasmacasieb';
        break;
        
     
    
      default:
        url = '#hero';

       
    }
  
    window.open(url, '_blank');
  }