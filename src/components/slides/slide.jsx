import { useState, useRef, useEffect } from 'react'


import './slide.css';

const SideAbout = ({Slides}) => {

    const images = [ ...Slides ];

    const delay = 2500;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
    
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );
    
        return () => {
            resetTimeout();
        };
    }, [index]);


    // changing string to link and converting to image.....
    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    const renderText = txt => 
        txt
        .split(" ")
        .map(part =>
        URL_REGEX.test(part) ? <img src={part} className="slide-img"/>  : part + " "
    );


    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((slide, index) => (
                    <div className="slide" key={index}  >{ renderText(slide) }</div>
                ))}
            </div>

            {/* <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} 
                    onClick={() => {setIndex(idx);}}></div>
                ))}
            </div> */}
        </div>
    )
}

export default SideAbout;