/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';

const BackToTop = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [button, setButton] = useState("hideBtn")

    useEffect(() => {

        const handleButton = () => {
            if (window.pageYOffset < 500) {
                setButton("hideBtn")
            } else if (window.pageYOffset > 500) {
                setButton("showBtn")
            }
        };
        window.addEventListener('scroll', handleButton)
        window.addEventListener('load', handleButton)
    }, [])

    
    return (
        <div className={``}>

            <div className={`buttonTop ${button} `} id="backToTopButton" onClick={handleScrollToTop}> 
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="120px" version="1.1" height="120px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                    <path fill="#FFFFFF" d="M3.352,48.296l28.56-28.328l28.58,28.347c0.397,0.394,0.917,0.59,1.436,0.59c0.52,0,1.04-0.196,1.436-0.59 c0.793-0.787,0.793-2.062,0-2.849l-29.98-29.735c-0.2-0.2-0.494-0.375-0.757-0.475c-0.75-0.282-1.597-0.107-2.166,0.456 L0.479,45.447c-0.793,0.787-0.793,2.062,0,2.849C1.273,49.082,2.558,49.082,3.352,48.296z" data-original="#1D1D1B" className="active-path" data-old_color="#FDFDFB"></path>
                </svg>
            </div>
        </div>
    );
}

export default BackToTop;
