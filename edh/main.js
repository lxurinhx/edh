function troca1()
{
document.getElementById('phone').src="img/phone.bottom.png" ;
setTimeout("troca2()", 5000);
}

function troca2()
{
document.getElementById('phone').src="img/phone2.png" ;
setTimeout("troca1()", 5000);
}



function troca3()
{

document.getElementById('note').src="img/note-bottom.png" ;
setTimeout("troca4()", 5000);

}

function troca4()
{

document.getElementById('note').src="img/note2.png" ;
setTimeout("troca3()", 5000);

}

function darkMode() 
{
var element = document.body;
element.className = "dark-mode";
}

function lightMode()
{
var element = document.body;
element.className = "light-mode";
}

function tele ()
        {

            var telef = document.getElementById("tel").value
            if ( telef[0] != "(" )
            {
                if(telef[0] != undefined)
                {
                    document.getElementById("tel").value = "(" + telef[0];
                }
            }

            if (telef[3] != ")" )
            {
                if(telef[3] != undefined)
                {
                    document.getElementById("tel").value = telef.slice(0,3) + ")" + telef[3]
                }
            }

            if (telef[9] != "-" )
            {
                if(telef[9] != undefined)
                {
                    document.getElementById("tel").value = telef.slice(0,9) + "-" + telef[9]
                }
            }
        }