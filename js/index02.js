fetch('https://jsonplaceholder.typicode.com/todos').
then(response=> response.text()).
then( result => {
  // console.log(result);
  const level = JSON.parse(result);
  // console.log(level)
  const basic = level.filter((item)=>item.userId === 4)
  // console.log(basic)
  for(let i in basic){
    document.write(
      `
      ${basic[i].id} : ${basic[i].title}<br>
      `
      )
  }
})