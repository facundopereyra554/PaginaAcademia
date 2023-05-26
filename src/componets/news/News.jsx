import { useEffect, useState } from 'react'
import './News.css'

function News() {
    const [OpenBox, setOpenBox] = useState(true);
    

    const hanbledisplayBox = () => {
        setOpenBox(!OpenBox);
    }

    return (
        <>
        <div className='circleIcon'>
            <img src="../src/componets/news/assets/newsIcon.png" alt="" />
        </div>
        <div className='newBox'>

        </div>
        </>
    )
}

export default News