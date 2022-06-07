import ItemImg from "./itemImg";

const ImgList = ({imagenes}) =>{
    return(
        <div>
            {console.log(imagenes)}
            {imagenes.map((pic)=> <ItemImg key={pic.id} picture = {pic.url}></ItemImg>)}
        </div>

    )
}

export default ImgList;