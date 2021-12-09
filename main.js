var images= [
    "mom.jpg", "sister.jpg", "brother.png" , "Dad.png"
]

var names = [ "Riya gupta", "Aditya gupta" , "Mina gupta", "Neeraj gupta"]

var i=0;
function update() {
    i++;
     var number_of_family_members_in_array = 4;
     if (i > number_of_family_members_in_array ) {
         i=0
     }
      var updatedImages = images[i];
      var updatedNames = names[i];
      document.getElementById("family_member_image").src=  updatedImages;
      document.getElementById("family_member_name").src=  updatedNames;
}