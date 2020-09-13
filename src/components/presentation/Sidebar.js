import React, { Component } from 'react'

class Sidebar extends Component {

    constructor(){
        super()
        this.state = {
            feed: {
                name:'',
                url:''
            }
        }
    }

    updateFeed(field, event){
     
        let feed = Object.assign({}, this.state.feed)
        feed[field] = event.target.value

        this.setState({
            feed: feed
        })
    }

    addFeed(event){
        var turboClient = turbo({site_id: '5f5e42c5ae5e6600150659fb'})
        turboClient.create('feed', this.state.feed)
        .then((data)=>{
            console.log('Feed created: ' + JSON.stringify(data))
        })
        .catch((error)=>{
            alert('Error: ' + err.message)
        })
    }

    render(){

		return (
            <div id="sidebar">
                <div className="inner">
                    <section id="search" className="alt">
                        <form method="post" action="#">
                            <input onChange={this.updateFeed.bind(this, 'name')} type="text" placeholder="Name" />
                            <input onChange={this.updateFeed.bind(this, 'url')} type="text" placeholder="Feed" />
                            <button onClick={this.addFeed.bind(this)}>Add Feed</button>
                        </form>
                    </section>
                    <nav id="menu">
                        <header className="major">
                            <h2>News Feeds</h2>
                        </header>
                        <ul>
                            <li><a href="http://rssfeeds.cincinnati.com/cincinnati-sports&x=1">Cincy Sports</a></li>
                            <li><a href="https://www.govinfo.gov">Politics</a></li>
                            <li><a href="elements.html"> </a></li>
                            <li><a href="#"> </a></li>
                            <li><a href="#"> </a></li>
                            <li><a href="#"> </a></li>
                        </ul>
                    </nav>	
                </div>
            </div>
	    )
	}
}

export default Sidebar