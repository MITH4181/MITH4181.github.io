(function()
{
    function DisplayHomePage()
    {
        console.log("app started");

        let aboutusbutton = document.getElementById("aboutusbutton");
        aboutusbutton.addEventListener("click",function()
        {
            location.href = aboutus.html

        });


    }
    function DisplayProductsPage()
    {

        console.log("products page")
    }
    function DisplayServicesPage()
    {
        console.log("services page")
       
    }
    function DisplayAboutUsPage()
    {
        console.log("aboutus page")
    }
    function DisplayContactPage()
    {
        console.log("contact page")
    }

    function start()
    {
        console.log("app started");

        switch(document.title)
        {
            case "home":
             DisplayHomePage();
             break;
             case "Our Products":
             DisplayProductsPage();
            break;
            case "services":
             DisplayServicesPage();
            break;
            case "About US":
             DisplayAboutUsPage();
            break;
            case "Contact Us":
             DisplayContactPage();
            break;


        }

    }
    window.addEventListener("load",start)

}
)
(

);