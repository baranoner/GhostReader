const settingstab = () => {

    return(
        <div className="container-ayarlar">
            <div className="ayarlar-genel">
                <div className="baslik">
                    <h2>Settings</h2>
                    <hr />
                </div>

                <div className="ayarlar">
                    <span className="ayarlar-kalin">Dark Mod:</span>
                    <span>Kapali</span>
                    <button>Edit</button>
                    
                </div>
                <hr />
                
                <div className="ayarlar">
                    <span className="ayarlar-kalin">Renk Körü Modu:</span>
                    <span>Kapali</span>
                    <button>Edit</button>
                    
                </div>
                <hr />
                <div className="ayarlar">
                    <span className="ayarlar-kalin">Dil:</span>
                    <span>Türkçe</span>
                    <button>Edit</button>
                    
                </div>
                <hr />
                <div className="ayarlar">
                    <span className="ayarlar-kalin">Ses:</span>
                    <input type="range" min="0" max="100" value="70" className="volume-slider" />
                    <span>%70</span>
                    
                </div>
                <hr />
            </div>
            
        </div>
    )

}
export default settingstab