const CustomModal=({id,header,body,footer})=>{
    return(
        <div id={id || "modal"}>
        <div className="header">
            {header? header:<h3>This is Header</h3>}
        </div>
        <div className="body">
           {body? body:<h3>This is Body</h3>}
        </div>
        <div className="footer">
            {footer? footer:<h3>This is Footer</h3>}
        </div>
        </div>
    )
}

export default CustomModal