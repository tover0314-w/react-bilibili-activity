import React from 'react'
import cartoonImg from '../../assets/cartoon.jpg'
import foodImg from '../../assets/food.jpg'
import movieImg from '../../assets/movie.png'
import lifeImg from '../../assets/life.jpg'

const SecondSection = () => {
    return (
        <div>
            <ul className='flex items-center justify-around h-[56px] text-white text-base '>
                <li className=''>动画</li>
                <li className=''>美食</li>
                <li className=''>电影</li>
                <li>生活</li>
            </ul>
            <div className='p-4'>
                <h2 className='text-xl font-bold text-white'>动画</h2>
                <img className="w-full rounded-3xl" src={cartoonImg} alt="cartoon" />
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-bold text-white'>美食</h2>
                <img className="w-full rounded-3xl" src={foodImg} alt="food" />
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-bold text-white'>电影</h2>
                <img className="w-full rounded-3xl" src={movieImg} alt="movie" />
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-bold text-white'>生活</h2>
                <img className="w-full rounded-3xl" src={lifeImg} alt="life" />
            </div>
        </div>
    )
}

export default SecondSection
