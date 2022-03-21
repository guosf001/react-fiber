import React, { render, Component } from './react'

const root = document.getElementById('root')

const jsx = <div>
    <p>hello React</p>
    <p>Hi fiber</p>
</div>

// render(jsx, root)

// setTimeout(() => {
//     const jsx = <div>
//         {/* <div>奥里给</div> */}
//         <p>Hi fiber</p>
//     </div>
//     render(jsx,root)
// }, 2000);

class Greating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '张三'
        }
    }
    render() {
        return <div>{this.props.title}
            hahahha
            {this.state.name}
            <button onClick={() => this.setState({ name: '李四' })}>button</button>
        </div>
    }
}

render(<Greating title="hello" />, root)


function FnComponent(props) {
    return <div>{props.title}FnComponent</div>
}

// render(<FnComponent title="hello" />,root)