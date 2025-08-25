$(()=>{

    let kmBox=$('#km');
    let minBox=$('#min');
    let calcBtn=$('#calcfare');
    let farediv=$('#fare');
    let rateBtn=$('#rateBtn');
    let ratediv=$('#ratediv');

    calcBtn.click(()=>{
        $.post('/calcfare',{
            km:kmBox.val(),
            min:minBox.val()
        },(data)=>{
        //   farediv.innerText=data.fare;//not  in jquery
          farediv.text(data.fare);
        })
    })
    rateBtn.click(()=>{
        $.get('/rate',(data)=>{   
            console.log(data)     
          ratediv.html(`
            Fixed fair = Rs ${data.fixed} for ${data.minkm} KM
            </br>
            Fixed (Distance) = Rs ${data.perKm} / KM
            </br>
            Fixed (Waiting) = Rs ${data.perMin} / min (after first ${data.freeMin} min`);
        })
    })





});