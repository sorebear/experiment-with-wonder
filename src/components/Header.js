import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1><strong style={{fontSize: '200%'}}>Wonderment, Inc.</strong><br />
                    <span>Expirement with Wonder</span></h1>
                    <p>Transformational Coaching to Explore Life’s Possibilities</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Free Coaching Session</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
