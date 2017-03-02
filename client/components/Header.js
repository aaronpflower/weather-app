const React = require('react')

const Header = React.createClass({
    render: function () {
        return (
            <div> 
                Hello From Main! 
                {this.props.children}
            </div>
        )
    }
})

module.exports = Header