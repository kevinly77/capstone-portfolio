import React from 'react'
import PropTypes from 'prop-types'
//<p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="#" className="icon fa-linkedin-square"><span className="label">Linkedin</span></a></li>
            <li><a href="https://github.com/kevinly77" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          <p className="copyright">&copy;Kevin Ly 2019. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
    
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
