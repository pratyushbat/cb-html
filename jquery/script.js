
$(() => {
    let item =$("#item");
    let list= $("#list");
  $("#prepend").click(() => {
    let text = item.val();
    // list.prepend($(`<li>${text}</li>`));
    // list.prepend($(`<li>`).text(text)    ); //2nd way
    list.prepend($(`<li>`).html(`<b>${text}</b>`))
  });

  $("#append").click(() => {
    let text = item.val();
    // list.prepend($(`<li>${text}</li>`));
    // list.prepend($(`<li>`).text(text)    ); //2nd way
    list.append($(`<li>`).html(`<b>${text}</b>`))
  });

  $('#fetch').click(()=>{
    let list = $('#people')
    $.get('https://dummyjson.com/users?page=2',(data)=>{
        console.log(data.users)
        for(let person of data.users){
            list.append($(`
                <li>
                
                <img src="${person.image}" width="100">
                ${person.firstName +'  ' + person.lastName}
                </li>`));
        }
    })
  })
});

// window.onload=function(){
//     console.log($('#list'))
// }

// console.log($('#item').val('sdasdsadsakjkj')) //write
