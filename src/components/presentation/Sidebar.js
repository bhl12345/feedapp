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
                            <h2>My Feeds</h2>
                        </header>
                        <ul>
                            <li><a href="index.html">Hacker News</a></li>
                            <li><a href="generic.html">NY Daily News Sports</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="#">Maximus Erat</a></li>
                            <li><a href="#">Sapien Mauris</a></li>
                            <li><a href="#">Amet Lacinia</a></li>
                        </ul>
                    </nav>	
                </div>
            </div>
	    )
	}
}

export default Sidebar