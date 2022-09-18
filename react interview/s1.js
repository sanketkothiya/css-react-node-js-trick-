

// class component

import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class s1 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    static propTypes = {}

    componentDidMount() {
        this.setState({
            name: "codemaker"

        })
    }

    render() {
        return (
            <div>
                hello {this.props.name}
            </div>

        )
    }
}

s1.defaultProps = {
    name: "sanket"
}

export default s1


// function component
// import React from 'react'

// const s1 = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default s1

//class

// Components

// import React from 'react'
// import ReactDOM from 'react-dom'
// class Hello extends React.Component {
//   render () {
//     return <div className='message-box'>
//       Hello {this.props.name}
//     </div>
//   }
// }
// const el = document.body
// ReactDOM.render(<Hello name='John' />, el)


// Import multiple exports

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Hello extends Component {

}

// Properties

<Video fullscreen={true} autoplay={false} />
render() {
    this.props.fullscreen
    const { fullscreen, autoplay } = this.props

}

// States

constructor(props) {
    super(props)
    this.state = { username: undefined }
}
this.setState({ username: 'rstacruz' })
render() {
    this.state.username
    const { username } = this.state

}

// Nesting

class Info extends Component {
    render() {
        const { avatar, username } = this.props

        return <div>
            <UserAvatar src={avatar} />
            <UserProfile username={username} />
        </div>
    }
}

// As of React v16.2.0, fragments can be used to return multiple children without adding extra wrapping nodes to the DOM.

// import React, {
//     Component,
//     Fragment
//   } from 'react'

//   class Info extends Component {
//     render () {
//       const { avatar, username } = this.props

//       return (
//         <Fragment>
//           <UserAvatar src={avatar} />
//           <UserProfile username={username} />
//         </Fragment>
//       )
//     }
//   }


// Children

<AlertBox>
    <h1>You have pending notifications</h1>
</AlertBox>

class AlertBox extends Component {
    render() {
        return <div className='alert-box'>
            {this.props.children}
        </div>
    }

// Setting default props


Hello.defaultProps = {
        color: 'blue'
    }

// Setting default state
// class Hello extends Component {
//     constructor (props) {
//       super(props)
//       this.state = { visible: true }
//     }
//   }

//   Set the default state in the constructor().

//   And without constructor using Babel with proposal-class-fields.

//   class Hello extends Component {
//     state = { visible: true }
//   }

/////////////////////////////////////////Other components
// Functional components//////////////////////////

function MyComponent({ name }) {
    return <div className='message-box'>
        Hello {name}
    </div>


    // Functional components have no state. Also, their props are passed as the first parameter to a function.

    // Hooks (New)
    // State Hook

    import React, { useState } from 'react';

    function Example() {
        // Declare a new state variable, which we'll call "count"
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
    }

    // Declaring multiple state variables
    function ExampleWithManyStates() {
        // Declare multiple state variables!
        const [age, setAge] = useState(42);
        const [fruit, setFruit] = useState('banana');
        const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
        // ...
    }

    //useeffect 

    import React, { useState, useEffect } from 'react';

    function Example() {
        const [count, setCount] = useState(0);

        // Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
            // Update the document title using the browser API
            document.title = `You clicked ${count} times`;
        }, [count]);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
    }

    // #JSX patterns

    // Style shorthand
    const style = { height: 10 }
    return <div style={style}></div>
    return <div style={{ margin: 0, padding: 0 }}></div>

    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')',
    };

    function HelloWorldComponent() {
        return <div style={divStyle}>Hello World!</div>;
    }
    // list

    class TodoList extends Component {
        render() {
            const { items } = this.props

            return <ul>
                {items.map(item =>
                    <TodoItem item={item} key={item.key} />)}
            </ul>
        }
    }

    // Conditionals
    <Fragment>
        {showMyComponent
            ? <MyComponent />
            : <OtherComponent />}
    </Fragment>

    Short - circuit evaluation
    {/* <Fragment>
  {showPopup && <Popup />}
  ...
</Fragment> */}

    /* 
    Returning multiple elements
    You can return multiple elements as arrays or fragments.
    
    Arrays
    render () {
      // Don't forget the keys!
      return [
        <li key="A">First item</li>,
        <li key="B">Second item</li>
      ]
    }
     
     
     
     
    Fragments
    render () {
      return (
        <Fragment>
          <li>First item</li>
          <li>Second item</li>
        </Fragment>
      )
    }
    
    */

    // component
    import PropTypes from 'prop-types'

    MyComponent.propTypes = {
        email: PropTypes.string,
        seats: PropTypes.number,
        callback: PropTypes.func,
        isClosed: PropTypes.bool,
        any: PropTypes.any
    }

    MyCo.propTypes = {
        name: PropTypes.string.isRequired
    }