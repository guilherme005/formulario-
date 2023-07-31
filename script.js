const bnt = document.getElementById('button')
bnt.addEventListener("click",function(e){
    e.preventDefault();
    const form = document.getElementById('forms').style.display='none'
    const form02 = document.querySelector('.forms02').style.display='block'
   
    const name = document.getElementById('name')
    const namevalue = name.value;
    console.log(`${namevalue}`)

    const sname = document.getElementById('sub-name')
    const snamevalue = sname.value;
    console.log(`${snamevalue}`)

    const idade = document.getElementById('idade')
    const idvalue = idade.value;
    console.log(`${idvalue}`)

    const estado = document.getElementById('estado')
    const estdvalue= estado.value;
    console.log(`${estdvalue}`)

    const cidade = document.getElementById('Cidade')
    const cidadevalue = cidade.value;
    console.log(`${cidadevalue}`)

    const infor = document.getElementById('info')
    const inforvalue= infor.value;
    console.log(`${inforvalue}`)
    //parte da criaçao de uma nova caixa, que ira mostrar as informaçoes
    
    const nameform = document.getElementById('nameF')
    const snamef = document.getElementById('snameF')
    const idform = document.getElementById('idform')
    const cidform = document.getElementById('cidform')
    const estdform= document.getElementById('estdform')
    const inforform = document.getElementById('inforform')
   
    nameform.innerHTML=`${namevalue}`
    snamef.innerHTML=`${snamevalue}`
    idform.innerHTML=`${idvalue}`
    estdform.innerHTML=`${estdvalue}`
    cidform.innerHTML=`${cidadevalue}`
    inforform.innerHTML=`${inforvalue}`
   

    
})
