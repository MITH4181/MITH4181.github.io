(function()
{
  let DocumentBody = document.body;


   





    function DisplayHomePage()
    {
        // welcome statement
        console.log("app started");
        let hp = `<h1 style="text-align:center; id="hp" class="mt-5"> Welcome To My Website </h1>`;
        let hp2 = document.createElement("h1");
        hp2.setAttribute("id","hp2");
        hp2.innerHTML = hp;
         
        DocumentBody.appendChild(hp2);
        

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
      //web design image
      let im =`<div class="container">
      <img src="./webdesign.jpg" width="800" height="600" class="rounded" alt="...">
    </div>`;
      let im2 = document.createElement("div");
      im2.setAttribute("id","im2");
      im2.innerHTML = im;
      DocumentBody.appendChild(im2);
      
     

      //web design text
      let im3 =`<div class="container">
      <p>Web design is one of our specialties</p>
    </div>`;
      let im4 = document.createElement("div");
      im4.setAttribute("id","im4");
      im4.innerHTML = im3;
      DocumentBody.appendChild(im4);



 
       
    }
    function DisplayAboutUsPage()
    {

    }
    function DisplayContactPage()
    {
      console.log("contact page")
      let sendButton = document.getElementById("sendButton");
      let subscribeCheckbox = document.getElementById("subscribeCheckbox");

      sendButton.addEventListener("click", function()
      {
          
      
      if(subscribeCheckbox.checked)
      {
          console.log("Checkbox checked");
          let contact = new Contact(fullName.value, ContactNumber.value, EmailAddress.value);
          console.log(contact.tostring());


      }

    }

      );
  }

    function start()




    {




        console.log("app started");

            //background image
    
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
   <a class="nav-link" href="aboutus.html"><i class="fas fa-users"></i> Human Resources</a>
 </li>`;
   let hr2 = document.createElement("li");
   hr2.setAttribute("id","hr2");
   hr2.innerHTML = hr;
   DocumentBody.getElementsByTagName("li")[3].insertAdjacentElement("afterend",hr2);
   
  

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