import React from 'react'
import { RiHome4Fill } from "react-icons/ri";

const Sidebar = () => {
    return(
        <>
            <div style={styles.seccion}>
                <h1>LOGO</h1>
                <ul style={styles.ul}>
                    <li style={styles.barIconsLi}>
                        <a href="#" style={styles.icons}>
                            <RiHome4Fill style={styles.imagesIcons}/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

const styles = {
    seccion: {
        fontFamily: "-apple-system",
        fontSize: "1rem",
        fontWeight: 1.5,
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: "#1F1D2B",
        position: "fixed",
        left: "0",
        top: "0",
        width: "60",
        height: "100%"
      },
      ul:{
        //backgroundColor: "#1F1D2B",
        listStyle: "none",
        paddingLeft: 16
      },
      barIconsLi: {
        //padding: 4,
        //backgroundColor: "black",
      },
      icons: {
        backgroundColor: "yellow", 
        display: "block", 
        textAlign: "center",
        paddingTop: 6,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
      },
      imagesIcons: {
        height: 40,
        width: 40,
        background: 'red',
        display: 'inline-block',
        borderRadius: 6,
        padding: 6
      }
}
export default Sidebar
