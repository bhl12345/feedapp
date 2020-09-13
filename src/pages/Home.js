import React, { Component } from 'react'
import { Sidebar } from '../components/presentation'

class Home extends Component {
	render(){
		return (
		    <div id="wrapper">
		        <div id="main">
		            <div className="inner">
                        <section id="banner">
                            <div className="content">
                            <header>
                                <h1>Welcome to Skillet News</h1>
                                <hr />
                                <p> where the news sizzles </p>
                            </header>
                            <p> </p>
                            <ul className="actions">
                                <li><a href="#" className="button big">Learn More</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
      		</div>
			<Sidebar />
		</div>
		)
	}
}

export default Home