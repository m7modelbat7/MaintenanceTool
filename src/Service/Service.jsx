import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <section>
        
        <div className="container ">
            <div className="row ">
                <div className="col-md-4 bg-primary text-white">
                    <ul>
                        <li><Link to="/web-development">Web Development</Link></li>
                        <li><Link to="/mobile-development">Mobile Development</Link></li>
                        <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
                    </ul>
                </div>
                <div className="col-md-8 bg-secondary text-white">
                    <outlet />
                </div>
            </div>
            

        </div>
        

    </section>
  )
}
