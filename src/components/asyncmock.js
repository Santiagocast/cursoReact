const products = [
    {
        id: '1',
        tittle: 'Qatar' ,
        description:'Vuelo a qatar' ,
        price: 300000,
        pictureUrl:'https://www.reportur.com/wp-content/uploads/2019/11/qatar-airways.jpg',
        category:"vuelos"  
    },
    {
        id: '2',
        tittle: 'Hotel' ,
        description:'Alojamiento en hotel' ,
        price: 20000,
        pictureUrl:'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
        category:"Alojamientos"  
    },
    {
        id: '3',
        tittle: 'Excursión' ,
        description:'Excursión principal del destino' ,
        price: 10000,
        pictureUrl:'https://midevocional.org/wp-content/uploads/2020/05/excursi%C3%B3n.jpg',
        category:"Excursiones"  
    },
    {
        id: '4',
        tittle: 'Auto' ,
        description:'Alquiler de auto en destino' ,
        price: 25000,
        pictureUrl:'https://img.remediosdigitales.com/de1542/lamborghini-huracan_evo-2019-1280-01/1366_2000.jpg',
        category:"Alquiler auto"  
    },
    {
        id: '5',
        tittle: 'Tren' ,
        description:'Pasaje de tren en destino' ,
        price: 5000,
        pictureUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8zpTMg4sssPSWnhhMg95UEScqM0EO2OefQ&usqp=CAU',
        category:"Transporte"  
    }

]

export const getProducts = () =>{
    return new Promise((res, rej)=>{
        setTimeout(() =>{
            res(products)
        },2000)

    })
}