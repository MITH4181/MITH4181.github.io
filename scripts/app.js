//Author: Mithilesh Saddul
//Id: 100799216
//Date: 06/02/22
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

      
     

      //web design title
      let sh = `<h1 style="text-align:left; id="sh" class="container"> Web design </h1>
      `;
      let sh2 = document.createElement("h1");
      sh2.setAttribute("id","sh2");
      sh2.innerHTML = sh;
      DocumentBody.appendChild(sh2);

      //web design paragraph
      let p1 =`<div class="container">
      <p>Web design is one of our specialties</p>
    </div>`;
      let p2 = document.createElement("div");
      p2.setAttribute("id","im4");
      p2.innerHTML = p1;
      DocumentBody.appendChild(p2);


     //custom programming image
      let im3 =`<div class="container">
      <img src="./code.jpg" width="800" height="600" class="rounded" alt="...">
    </div>`;
      let im4 = document.createElement("div");
      im4.setAttribute("id","im4");
      im4.innerHTML = im3;
      DocumentBody.appendChild(im4);



            //custom programming title
            let cp = `<h1 style="text-align:left; id="cp" class="container"> Custom Programming </h1>
            `;
            let cp2 = document.createElement("h1");
            cp2.setAttribute("id","cp2");
            cp2.innerHTML = cp;
            DocumentBody.appendChild(cp2);
      
            //custom programming paragraph
            let p3 =`<div class="container">
            <p>we also do custom programming</p>
          </div>`;
            let p4 = document.createElement("div");
            p4.setAttribute("id","p4");
            p4.innerHTML = p3;
            DocumentBody.appendChild(p4);






 
       
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
          console.log (contact.string);
          let contact = new Contact(fullName.value, ContactNumber.value, EmailAddress.value);
          if(contact.serialize())
          {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contract.serialize());



          }
          
        


      }

    }

      );
  }
  function DisplayContactListPage()
  {
    if(localStorage.length > 0)
    {
      let contactList = document.getElementById("contactList");

      let data = "";

      let keys = Object.keys(localStorage);

      let index = 1;

      for(const key of keys)
      {

        let contactData = localStorage.getItem(key);

        let contact = new Contact();
        contact.deserialize(contactData);

        data += `<tr>
        <th scope="row" class="text-center">${index}</th>
        <td>${contact._FullName}</td>
        <td>${contact._ContactNumber}</td>
        <td>${contact._EmailAddress}</td>
        <td></td>
        <td></td>
        </tr>`;

        index++;





      }
      contactList.innerHTML = data;

    }


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
            case "Contact-List":
              DisplayContactListPage();
             break;


        }

    }
    window.addEventListener("load",start)

}
)
(

);