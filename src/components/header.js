import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AnimatedItem from "./animatedItem/animated.item";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#00BCD4`,
      marginBottom: `1.42rem`,

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <h1 style={{ margin: 0, fontFamily: "Dancing Script" }} className="animated bounce delay-2s">
        <Link
          to="/"
          id="site-title"
          style={{
            color: `white`,
            textDecoration: `none`,
            position: 'relative'
          }}
        >
          {siteTitle}

        </Link>
      </h1>

      <div className="animated-socials">
        <a role="button" href="https://twitter.com/saphidev"><AnimatedItem originalName="twitter.png"/></a>
        <a href="https://twitter.com/saphidev"><AnimatedItem originalName="github.png"/></a>
      </div>

      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
