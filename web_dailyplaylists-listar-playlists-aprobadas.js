//https://dailyplaylists.com/dashboard/

var script  = document.createElement('script');
script.src  = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var arrPlaylist      = []
var arrPlaylistName  = []
var arrPlaylistLinks = []

$('.Text-vnjkjx-0.dLFVil').each((a,e) => {
        if($(e).text() == 'approved'){
            let nombres = $(e).parent().parent().parent().find('.sc-bwzfXH.pjOvZ a ')

            arrPlaylistName.push($(nombres[0]).text())
            arrPlaylistLinks.push(nombres[0])
            arrPlaylist.push($(nombres[0]).text() +' - '+ $(nombres[1]).text() + ' - ' + nombres[0])
            //console.log(e)    
            
        }
        
    }
    
)

console.log(arrPlaylistName.join('\n'))  
console.log(arrPlaylistLinks.join('\n'))  
console.log(arrPlaylist.join('\n'))  
