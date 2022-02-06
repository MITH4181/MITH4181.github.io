(function()
{
    //background image
    let DocumentBody = document.body;
    DocumentBody.style.backgroundImage = "url(background.jpg)";

    //copyright navbar
    let bottomnav = `<nav id="navbar" class="navbar fixed-bottom navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">© 2022 Copyright</a>
    </div>
  </nav>`;
   let bottomnav2 = document.createElement("nav");
   bottomnav2.setAttribute("id",bottomnav2);
   bottomnav2.innerHTML = bottomnav;
   DocumentBody.appendChild(bottomnav2);

   //human resources link

   let hr = `<li class="nav-item">
   <a class="nav-link"  href="index.html"><i class="fas fa-home"></i>Human Resources</a>
 </li>`;
   let hr2 = document.createElement("a");
   hr2.setAttribute("id","hr2");
   hr2.innerHTML = hr;




    function DisplayHomePage()
    {
        // welcome statement
        let hp = `<h1 style="text-align:center; id="hp" class="mt-5"> Welcome To My Website </h1>`;
        let hp2 = document.createElement("h1");
        hp2.setAttribute("id","hp2");
        hp2.innerHTML = hp;
         
        DocumentBody.appendChild(hp2);
        console.log("app started");

        let aboutusbutton = document.getElementById("aboutusbutton");
        aboutusbutton.addEventListener("click",function()
        {
            location.href = aboutus.html

       });




    }
    function DisplayProjectsPage()
    {


  
    }
    function DisplayServicesPage()
    {
        let hp = `<div id="hp" class = "mt-3"> Welcome To My Website </div>`;
        let hp2 = document.createElement("div");
        hp2.setAttribute("id","hp2");
        hp2.innerHTML = hp;
         
        DocumentBody.appendChild(hp2);
 
       
    }
    function DisplayAboutUsPage()
    {

    }
    function DisplayContactPage()
    {

    }

    function start()
    {
        console.log("app started");

        switch(document.title)
        {
            case "Home":
             DisplayHomePage();
             break;
             case "Our Projects":
             DisplayProjectsPage();
            break;
            case "Services":
             DisplayServicesPage();
            break;
            case "About Us":
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