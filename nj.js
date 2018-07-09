var abc = [];

var divs = ["signin", "signup", "contact"];
var visibleDivId = null;
function toggleVisibility(divId) 
{
  if(visibleDivId === divId) { }
   else 
   {
    visibleDivId = divId;
    }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

function validateUser() 
{
            document.getElementById("msg1").innerHTML='';
            document.getElementById("msg2").innerHTML='';
          	var userid= document.getElementById('userid');
          	var password = document.getElementById('password');
            var x=ValidateEmail(userid,"msg1");
            var y=ValidatePassword(password,"msg2");
            if(x && y)
            {
              abc = JSON.parse(localStorage["abc"]);
              valid=0;
              for(var i=0;i<abc.length;i++)
             {
              var checkmail =JSON.parse(localStorage["abc"])[i].email;
              var checkpassword =JSON.parse(localStorage["abc"])[i].password;
      
              if ((checkmail==document.getElementById("userid").value) && (checkpassword==document.getElementById("password").value))
              {
                valid=1;
                break;
              }
            }

              if(valid==1)
               {
                 alert("Login Successfull");
               }
                  
             else
             {
              alert("Incorrect username or password");
             }



              }

}

function register()
 {
            document.getElementById("msg3").innerHTML='';
            document.getElementById("msg4").innerHTML='';
            document.getElementById("msg5").innerHTML='';
          	var susername= document.getElementById('susername');
          	var semail= document.getElementById('semail');
          	var spassword=document.getElementById('spassword');
            var p=ValidateUsername(susername,"msg3");
            var q=ValidateEmail(semail,"msg4");
            var r=ValidatePassword(spassword,"msg5");
            if(p && q && r)
            { 
                localStorage.resultname = susername.value
                localStorage.resultPassword = spassword.value;
                localStorage.resultMail = semail.value;
                user = {
                  name: susername.value,
                  email: semail.value,
                  password: spassword.value,
                };
                if (localStorage.firstentry)
                {
                  abc = JSON.parse(localStorage["abc"]);
                }

                abc.push(user);
                localStorage.setItem("abc",JSON.stringify(abc));
                localStorage.firstentry += 1;
                   alert("Signup Successfull");
           }
    
}
function usercontact() 
{
           document.getElementById("msg6").innerHTML='';
           document.getElementById("msg7").innerHTML='';
           document.getElementById("msg8").innerHTML='';
           document.getElementById("msg9").innerHTML='';
           var cusername= document.getElementById('cusername');
      	   var cemail= document.getElementById('cemail');
      	   var cphone= document.getElementById('cphone');
           var cquestion= document.getElementById('cquestion');
           var m=ValidateUsername(cusername,"msg6");
           var n=ValidateEmail(cemail,"msg7");
           var o=ValidatePhone(cphone,"msg8");
           var k=ValidateQuestion(cquestion,"msg9");
           if(m&&n&&o&&k)
           {
            alert("Submitted Successfully");
            } 
}

function ValidateEmail(userid,msg) 
              {
                   if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userid.value)))
                    { 
                       document.getElementById(msg).innerHTML+="Enter a valid user id";
                       return 0; 
                     }
                    else return 1; 
              }  
function ValidatePassword(password,msg)
                 {
                          if(password.value.trim().length<6 || password.value.trim().length>15)
                              {
                                  document.getElementById(msg).innerHTML+="Enter password ranging 6-15 word";
                                  return 0;
                               }
                               else  return 1;
                  }                         

function ValidateQuestion(question,msg)
          {
              if(question.value.trim()=="" || question.value.length<1 || question.value.length>200)
              {
                  document.getElementById(msg).innerHTML+="Enter question in less than 200 letters"; 
                  return 0;
              }   
              else return 1;
         }
function ValidatePhone(phone,msg)
          {
                if(!(/^\d{10}$/.test(cphone.value)))
                { 
                  document.getElementById(msg).innerHTML+="Enter a valid phone number";
                  return 0; 
                }
                return 1;
           }         
function ValidateUsername(username,msg)
          {
                 if(username.value.length<1 || username.value.length>20)
                {
                    document.getElementById(msg).innerHTML+="Enter a valid username"; 
                    return 0;
                }
                else return 1;
           }          

   
