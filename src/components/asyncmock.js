const products = [
    {
        id: '1',
        tittle: 'Qatar' ,
        description:'Vuelo a qatar' ,
        price: 300000,
        pictureUrl:[{url:'https://www.reportur.com/wp-content/uploads/2019/11/qatar-airways.jpg', id:1}, { url:'https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2021/09/29/61544b62e8c74.r_d.1061-707-2117.jpeg' ,id:2},{url:'https://www.kayak.com.ar/rimg/dimg/39/04/93991e36-city-15839-164d29b1013.jpg?width=400&height=300&xhint=917&yhint=916&crop=true',id:3}],
        category:"vuelos"  
    },
    {
        id: '2',
        tittle: 'Hotel' ,
        description:'Alojamiento en hotel' ,
        price: 20000,
        pictureUrl:[{url:'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg', id:1},{url:'https://media-cdn.tripadvisor.com/media/photo-s/21/91/1a/75/exterior.jpg', id:2},{url:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1', id:3},],
        category:"Alojamientos"  
    },
    {
        id: '3',
        tittle: 'Excursión' ,
        description:'Excursión principal del destino' ,
        price: 10000,
        pictureUrl:[{url:'https://midevocional.org/wp-content/uploads/2020/05/excursi%C3%B3n.jpg', id:1},{url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Vietnam_river_excursion.jpg/1200px-Vietnam_river_excursion.jpg', id:2},{url:'https://www.65ymas.com/uploads/s1/17/85/3/que-zapatillas-utilizo-para-una-excursion-por-el-campo-big-tock.jpeg', id:3}],
        category:"Excursiones"  
    },
    {
        id: '4',
        tittle: 'Auto' ,
        description:'Alquiler de auto en destino' ,
        price: 25000,
        pictureUrl:[{url:'https://img.remediosdigitales.com/de1542/lamborghini-huracan_evo-2019-1280-01/1366_2000.jpg', id:1},{url:'https://media.gq.com.mx/photos/604458fef0cc2a1d8969755c/16:9/w_2992,h_1683,c_limit/10%20autos%20que%20quieren%20ser%20el%20mejor%20de%202021%20-%20BMW%204-Series%202021%20(1).jpg', id:2},{url:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5K2DYWBZUVFMTE24AWF5ZAWYDM.jpg', id:3}],
        category:"Alquiler auto"  
    }

]

export const getProducts = () =>{
    return new Promise((res, rej)=>{
        setTimeout(() =>{
            res(products)
        },2000)

    })
}

export const getProduct = (id) =>{
    return new Promise((res,rej) =>
    setTimeout(()=>{
        res(products.find(p=>p.id == id))
    },2000)
    )
}