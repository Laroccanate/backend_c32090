function sumar (a,b){
    return a+b }

    console.log(sumar("hola",9))
const restar =(a,b)=>a-b 
console.log(restar(7,3))

//



let palabra = "¡hola!"
const describir = (ele,cb) =>{
    console.log(ele);
    setTimeout(cb,250)
}
const describir1 = (ele,cb) =>{
    console.log(ele);
    setTimeout(cb,500)
}

describir1(palabra[0],()=>{
    describir1(palabra[1],()=>{
        describir1(palabra[2], ()=>{
            describir1(palabra[3],()=>{
                describir1(palabra[4],()=>{
                    describir1(palabra[5],()=>{console.log("fin")})
                })
            })
        })
    })
})

describir(palabra[0],()=>{
    describir(palabra[1],()=>{
        describir(palabra[2], ()=>{
            describir(palabra[3],()=>{
                describir(palabra[4],()=>{
                    describir(palabra[5],()=>{console.log("fin")})
                })
            })
        })
    })
})
//



const fin = () => console.log('termine')

function mostrarLetras(palabra,cb,timer) {
    console.log(palabra)
    setTimeout(cb,timer)
}

console.log('iniciando letras')
mostrarLetras('hola',()=>{
    mostrarLetras('hola',()=>{
        mostrarLetras('hola',()=>{
            console.log(fin)
        },500)
    },250)
},0)
