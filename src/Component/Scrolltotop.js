import React,{useState,useEffect} from 'react';
import './Scrolltotop.css';
function Scrolltotop() {

const [isVisible,SetisVisible] = useState(false);
//first function to make a button hide or show //

const toggleVisibility = () => {
if (window.pageYOffset>300) {
    SetisVisible(true)
}else{
    SetisVisible(false)
}};
//scound function to scroll to top when i clicked on button //
const scrollToTop =()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth",
        transition:"2s"
    
    });
};
//third function with use effect to run even i cliked on button //
useEffect (()=>{
    window.addEventListener('scroll',toggleVisibility)
},[]);


    return (
        <div>
            {isVisible && (<div className="scroll-to-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
                </div>)}
        </div>
    )
}

export default Scrolltotop;
