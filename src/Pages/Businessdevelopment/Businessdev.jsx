import React from 'react'
import bizdevStyle from "./Businessdev.module.css"
import bizdevpic from "../../Assets/bizdev1.svg"


const Businessdev = () => {
  return (
    <div>

        <section className={bizdevStyle.hero}>
            <h1 className={bizdevStyle.heading}>Opportunities don't happen. Let's create them for your business.</h1>
        </section>

        <section className={bizdevStyle.hero2}>
            
            <h2 className={bizdevStyle.heading2}>Why Business Development is Important to Your Business Growth</h2>
          
            <div>
                <img className={bizdevStyle.hero2pic} src={bizdevpic} alt="bizdevpic" />
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
    </div>
  )
}

export default Businessdev