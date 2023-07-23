const question=[{
    q:"Which among the following is the heaviest animal in the world?",
    op1:"Giraffe",
    op2:"Elephant",
    op3:"Zebra",
    op4:"Camel",
    ans:"op1"
},
{
    q:"The book, The Leopard and the Fox: A Pakistani Tragedy, was written by …",
    op1:"Tariq Ali",
    op2:"Amitabh Bagchi",
    op3:"Sukhadeo Thorat",
    op4:"Mani Shankar Aiyar",
    ans:"op1"
},
{
    q:"Ganymede, the largest satellite of solar system, is the moon of …",
    op1:"Jupiter",
    op2:"Saturn",
    op3:"Neptune",
    op4:"Mars",
    ans:"op1"
},
{
    q:"The hazards of radiation belts include",
    op1:"deterioration of electronic circuits",
    op2:"damage of solar cells of spacecraft",
    op3:"adverse effect on living organisms",
    op4:"All of the above",
    ans:"op4"
},
{
    q:"The great Victoria Desert is located in",
    op1:"Canada",
    op2:"West Africa",
    op3:"Australia",
    op4:"North America",
    ans:"op3"   
},
{
q:"The habitats valuable for commercially harvested species are called",
op1:"coral reefs",
op2:"sea grass bed",
op3:"hot spots",
op4:"None of the above",
ans:"op2"

},
{
q:"With the disintegration of USSR in end 1991, comprised of ____ Union Republics.",
op1:"15",
op2:"10",
op3:"5",
op4:"25",
ans:"op1"
},
{
q:"The iron and steel industries of which of the following countries are almost fully dependent on imported raw materials?",
op1:"Britain",
op2:"Japan",
op3:"Poland",
op4:"Germany",
ans:"op2"
},
{
q:"The highest degree of concentration of mineral deposits are found in",
op1:"northeastern zone",
op2:"northwestern zone",
op3:"southern zone",
op4:"All of the above",
ans:"op1"
},
{
    q:"The largest gold producing country in the world(in 2006) is",
op1:"China",
op2:"Canada",
op3:"South Africa",
op4:"USA",
ans:"op3"
}
]

const el_ques=document.querySelector(".ques");
const ans1=document.getElementById("op1");
const ans2=document.getElementById("op2");
const ans3=document.getElementById("op3");
const ans4=document.getElementById("op4");
const el_btn=document.querySelectorAll(".opt");
const ques_cnt=document.querySelector(".ques_no")
const nxt=document.querySelector(".next");
const all_elbtn=document.querySelector(".all_opt")

let i=0,w=0,cor=0;
let cor_ans="";
function load(i)
{       
el_ques.innerHTML="Q"+(i+1)+"."+question[i].q;
ans1.innerHTML="A. "+question[i].op1;
ans2.innerHTML="B. "+question[i].op2;
ans3.innerHTML="C. "+question[i].op3;
ans4.innerHTML="D. "+question[i].op4;
cor_ans=question[i].ans
ques_cnt.innerHTML="Question "+(i+1)+" of "+question.length; 
}
load(i);

function check(that_btn)
{
    nxt.classList.remove("next")
    let idans=that_btn.id
 if(idans==cor_ans)
 {
    that_btn.classList.add("correct")
    cor++;
}
 else
 {
    that_btn.classList.add("wrong")
    w++;
 }
 document.getElementById(cor_ans).classList.add("correct")
 all_elbtn.classList.add("disable")
}
function nextQues()
{
    i++;
    if(i<question.length)
    {
        load(i);
    }
    if(i==question.length-1)
    {
        nxt.innerHTML="Finish"
        nxt.addEventListener("click",finish);
    }
     for(let i=0;i<el_btn.length;i++)
     {
        el_btn[i].classList.remove("wrong");
        el_btn[i].classList.remove("correct")
     }

    nxt.classList.add("next");
    all_elbtn.classList.remove("disable");
}
nxt.addEventListener("click",nextQues)
let final_score=document.querySelector(".finish")
function finish()
{
    let p=(cor/question.length)*100;
    document.querySelector(".right_ans").innerHTML=`Total Question Correct :${cor}`;
    document.querySelector(".wrong_ans").innerHTML=`Total Question Wrong :${w}`;
    document.querySelector(".percent").innerHTML=`Your score : ${p}%`
    final_score.style.display="block"
}
let again=document.querySelector(".pa")
again.addEventListener("click",()=>
{
    i=0;
    w=0;
    cor=0;
    final_score.style.display="none"
    nxt.innerHTML="NEXT"
    for(let i=0;i<4;i++)
    {
    document.querySelectorAll(".opt")[i].classList.remove("correct")
    document.querySelectorAll(".opt")[i].classList.remove("wrong")
    }
    all_elbtn.classList.remove("disable")
    load(i);
     nxt.removeEventListener("click",finish);
})
