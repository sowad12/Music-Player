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
      name:'Hung Up',
      cover:"https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg",
      artist:'Ezzy',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=24699',
      color:['#D44847','#F9DEA9'],
      id:uuidv4,
      active:false  
   },
   {
      name:'la zona',
      cover:"https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      artist:'Maydee',
      audio:'https://mp3.chillhop.com/serve.php/?mp3=27455',
      color:['#BCCCDC','#C6CDD5'],
      id:uuidv4,
      active:false  
   }
   ] 
}
export default musicList;