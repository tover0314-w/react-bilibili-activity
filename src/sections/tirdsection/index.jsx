import React from 'react'
import title1Img from '../../assets/title1.jpg'
import title2Img from '../../assets/title2.jpg'
import commentImg from '../../assets/comment.jpg'
const ThirdSection = () => {
    return (
        <div>
            第三个section
            <img className="w-full" src={title1Img} alt="title1" />
            <img className="w-full rounded-3xl p-4" src={commentImg} alt="comment" />
            <img className="w-full" src={title2Img} alt="title2" />
            <img className="w-full rounded-3xl p-4" src={commentImg} alt="comment" />
        </div>
    )
}

export default ThirdSection
