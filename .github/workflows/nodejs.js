const yargs=require('yargs')
const fs=require('fs')
const books={
  'title': 'Does this matter?',
  'author':'lel'
}

json=JSON.stringify(books)
fs.writeFileSync("1-json.json",json)

jsonBuffer=fs.readFileSync("1-json.json")
yargs.command({
  command:'Add',
  handler:function(){
    console.log("Bruh Added")
  }
})
yargs.command({
  command:'Remove',
  handler:function(){
    console.log("Removed ra nigga")
  }
})
