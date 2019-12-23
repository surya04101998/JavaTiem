// This is your Editor pane. Write your JavaScript here and 
// use the command line to execute commands
const yargs=require('yargs')
const fs=require('fs')


const loadbooks=function(){
  try{
  const bookbin=fs.readFileSync('1-json.json')
  const bookstr=bookbin.toString()
  return JSON.parse(bookstr)
  }
  catch(e){
    return []
  }
  
}


const updatebooks =function(booklist){
  newlist=JSON.stringify(booklist)
  fs.writeFileSync('1-json.json',newlist)
}

const adder=function(titlee,authore){
  const booklist=loadbooks()
  console.log(booklist.title)
  booklist.push({
    "title":titlee,
    "author":authore
  })
  updateBooks(booklist)
}

yargs.command({
  command:'Add',
  builder:{
    title:{
      demandOption:true,
      type:'string'
    }
  },
  handler:function(){
    
    newlis=adder()
  }
})
yargs.command({
  command:'Remove',
  handler:function(){
    console.log("Removed ra nigga")
  }
})




console.log(yargs.argv)
