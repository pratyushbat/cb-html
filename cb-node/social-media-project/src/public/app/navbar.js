let navLinks = $(".navbar-nav .nav-link");
navLinks.click((ev) => {
    let componentUrl = `/components/${$(ev.target).attr('data-components')}.html`;
    $("#content").load(componentUrl, function () {
        console.log(" loading the data",componentUrl);
    });
});
