import { v4 as uuidv4 } from 'uuid';
function musicList(){
   return [
       {
          name:'Tidings',
          cover:"https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
          artist:'anbuu',
          audio:'https://mp3.chillhop.com/serve.php/?mp3=28971',
          color:['#FDEDD9','#0A0D16'],
          id:uuidv4,
          active:false  
       },
       {
        name:'Bad Liar',
        cover:"https://a10.gaanacdn.com/gn_img/albums/XzVWRLKdqR/zVWR511A3d/size_l.webp",
        artist:'Imagine Dragons',
        audio:'https://gaana.com/song/bad-liar-13',
        color:['#8C7C58','#B28559'],
        id:uuidv4,
        active:false  
     },
     {
        name:'Hymn for the Weekend',
        cover:"https://a10.gaanacdn.com/gn_img/albums/a7LWBkzbzX/7LWBnrvjWz/size_l.webp",
        artist:'Coldplay',
        audio:'https://gaana.com/song/hymn-for-the-weekend',
        color:['#461E27','#98D1F1'],
        id:uuidv4,
        active:false  
     },

  {
        name:'Hall of Fame',
        cover:"https://a10.gaanacdn.com/gn_img/albums/81l3Mye3rM/1l3MG2GbrM/size_l.webp",
        artist:'The Script, Will.i.am',
        audio:'https://gaana.com/song/hall-of-fame-2',
        color:['#461E27','#98D1F1'],
        id:uuidv4,
        active:false  
     }
     
   ] 
}
export default musicList;