import React from 'react'

import ' ./header.css'

function Header() {
        return (
                <div>className='header'

                        <img
                                className='Header__logo'
                                src=''
                        />

                        <div className="Header__search">
                                <input
                                        className="Header__searchInput"
                                        type="text" />

                        </div>

                        <div
                                className="Header__nav">
                                <div className='Header__option'>
                                        <span
                                                className='Header__optionLineOne'>Hello Guest </span>
                                        <span
                                                className='Header__optionLineTwo'>Sign In
                                        </span>
                                </div>

                                <div className='Header__option'>
                                        <span
                                                className='Header__optionLineOne'>Returns</span>
                                        <span
                                                className='Header__optionLineTwo'>& Orders</span>
                                </div>

                                <div className='Header__option'>
                                        <span
                                                className='Header__optionLineOne'>Your</span>
                                        <span
                                                className='Header__optionLineTwo'>Prime
                                        </span>


                                </div>

                                <div className='Header__option'>

                                </div>


                        </div>
                </div>

        )
}

export default header