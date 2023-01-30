import React from 'react'
import bizdevStyle from "./Businessdev.module.css"
import bizdevpic1 from "../../Assets/bizdev1.svg"
import bizdevpic2 from "../../Assets/bizdev2.svg"
import bizdevicon from "../../Assets/bizdev-icon.svg"
import Headertwo from '../../Components/Headertwo/Headertwo'
import blacklogo from "../../Assets/logoblack.svg";
import Footer from '../../Components/Footer/Footer'


const Businessdev = () => {
  return (
    <div>

        <section className={bizdevStyle.hero}>
            <div>
                <Headertwo logo={blacklogo} />
            </div>
            <h1 className={bizdevStyle.heading}>Opportunities don't happen. Let's create them for your business.</h1>
        </section>

        <section className={bizdevStyle.hero2}>
            
            <h2 className={bizdevStyle.heading2}>Why Business Development is Important to Your Business Growth</h2>
          
            <div>
                <img className={bizdevStyle.hero2pic} src={bizdevpic1} alt="bizdevpic" />
                <p className={bizdevStyle.hero2content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. 
                    Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan. Quam facilisis ultrices ultricies nec nisl in nulla risus. In suspendisse non, nam suspendisse est ut.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. 
                    Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan. Quam facilisis ultrices ultricies nec nisl in nulla risus. In suspendisse non, nam suspendisse est ut.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. 
                    Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan. Quam facilisis ultrices ultricies nec nisl in nulla risus. In suspendisse non, nam suspendisse est ut.
                </p>
                <p className={bizdevStyle.hero2content2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. 
                    Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan. Quam facilisis ultrices ultricies nec nisl in nulla risus. In suspendisse non, nam suspendisse est ut.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur faucibus leo nascetur feugiat. Amet eleifend tincidunt morbi odio. 
                    Mus id eget sagittis imperdiet ac nulla arcu sagittis, accumsan. Quam facilisis ultrices ultricies nec nisl in nulla risus. In suspendisse non, nam suspendisse est ut.
                </p>
            </div>
        </section>

        <section className={bizdevStyle.hero3}>
            <h3 className={bizdevStyle.heading2}>We provide the following services for business</h3>
            <div className={bizdevStyle.hero3container}>
                <div className={bizdevStyle.hero3maindiv}>
                    <div className={bizdevStyle.hero3div}>
                        <div className={bizdevStyle.hero3flex}>
                            <img src={bizdevicon} alt="bizdevicon" />
                            <p className={bizdevStyle.hero3subheading}>Lorem ipsum dolor</p>
                        </div>
                        <p className={bizdevStyle.hero3subcontent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur.</p>
                    </div>
                    <div className={bizdevStyle.hero3div}>
                        <div className={bizdevStyle.hero3flex}>
                            <img src={bizdevicon} alt="bizdevicon" />
                            <p className={bizdevStyle.hero3subheading}>Lorem ipsum dolor</p>
                        </div>
                        <p className={bizdevStyle.hero3subcontent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur.</p>
                    </div>
                    <div className={bizdevStyle.hero3div}>
                        <div className={bizdevStyle.hero3flex}>
                            <img src={bizdevicon} alt="bizdevicon" />
                            <p className={bizdevStyle.hero3subheading}>Lorem ipsum dolor</p>
                        </div>
                        <p className={bizdevStyle.hero3subcontent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur.</p>
                    </div>
                    <div className={bizdevStyle.hero3div}>
                        <div className={bizdevStyle.hero3flex}>
                            <img src={bizdevicon} alt="bizdevicon" />
                            <p className={bizdevStyle.hero3subheading}>Lorem ipsum dolor</p>
                        </div>
                        <p className={bizdevStyle.hero3subcontent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur.</p>
                    </div>
                    <div className={bizdevStyle.hero3div}>
                        <div className={bizdevStyle.hero3flex}>
                            <img src={bizdevicon} alt="bizdevicon" />
                            <p className={bizdevStyle.hero3subheading}>Lorem ipsum dolor</p>
                        </div>
                        <p className={bizdevStyle.hero3subcontent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra in vitae nascetur.</p>
                    </div>
                </div>
                <img className={bizdevStyle.bizdevpic} src={bizdevpic2} alt="bizdevpic"  />
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Businessdev