
const handlerBarsContext = {
    "/index.html": {
        
        "testimonials": [
            {
                imgUrl:"/imagenes/Excel.jpg",
                name:"Excel y Mas",
                content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."


            },
            {
                imgUrl:"/imagenes/paginaweb.jpg",
                name:"Paginas Web",
                content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

            },
            {
                imgUrl:"/imagenes/Inventario.jpg",
                name:"Sistema De inventario",
                content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

            },
            {
                imgUrl:"/imagenes/Inventario.jpg",
                name:"Diseño Grafico",
                content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

            }
            

        ]
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;