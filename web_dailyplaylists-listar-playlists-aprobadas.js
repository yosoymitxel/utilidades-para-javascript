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

/*
All Style Songs #2 - MORISDOWN - https://open.spotify.com/playlist/3gFyfvFYHRjieQulH7MoZX
Support Musicians #6 - MORISDOWN - https://open.spotify.com/playlist/1R2IyiZtaHPoRPjcMPtNM9
Approved All Style - MORISDOWN - https://open.spotify.com/playlist/3wUM9WjfTE5lZGFI1K3r0G
SAFE DREAM - PlaylistCuratorSotify 1 - https://open.spotify.com/playlist/2WCUirVkpNUrFpwakSI7uI
CONFORT - PlaylistCuratorSotify 1 - https://open.spotify.com/playlist/59grxtTXZj3xOMf1aeX9O3
SWEET DREAMS - PlaylistCuratorSotify 1 - https://open.spotify.com/playlist/1LBjOhT9joswlOr7IyLNDg
Sunset n Chill - MultiVibe Music - https://open.spotify.com/playlist/477ta1pt5IQzkNqxuksSnD
Independent Artists Unite! - ADAD Audio - https://open.spotify.com/playlist/1QRG7PM4QmRnOgHy2doy7V
The Space Race - Anything's Possible Music - https://open.spotify.com/playlist/01R1NFSVTUWInUvMd8oT2S
GOAT Visions & Illusions - BoBoDred - https://open.spotify.com/playlist/2ra1dDLi09UZMiMS4UrwXt
Lofi - fusionostalgia - https://open.spotify.com/playlist/4OsAMyuLw6geQdHegKQcv9
LOFI - deathordesire - https://open.spotify.com/playlist/57Hwp02uVOvlbCW353lCLe
2022 | Independent Artists Assemble - Steve Marks - https://open.spotify.com/playlist/3EU2Ct76DoEqf7zLKnJKA0
Dragon: Urban & EDM - Julius Beat - https://open.spotify.com/playlist/6pVW4LBqWfzROLVyL78KGA
Modern Pop Music Artists / Popular Modern Rock Artists / The Best Electronic Dance Music - henderson - https://open.spotify.com/playlist/333awHnNYIxcJMFeQOGYax
Electronica - Loft Music - https://open.spotify.com/playlist/05kX1IpGRnYYroLg7Dl2oQ
R&B - deathordesire - https://open.spotify.com/playlist/0XlNL2wMJF7iw0lrVkpTfb

*/
