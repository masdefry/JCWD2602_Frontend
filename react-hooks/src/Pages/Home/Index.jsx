import React from 'react';

// Lifecycle Method
// 1. Component Did Mount ---> Akan dipasang di static html
// 2. Component Did Update ---> Akan berubah terhadap kondisi sesuatu
// 3. Component Will Unmount ---> Akan diremove dari static html ketika akan berpindah halaman

// State ---> Untuk menyimpan data di dalam component React ---> Men-trigger component untuk di re-render

let number = 0

class Home extends React.Component{

    state = {
        number: 0,
        students: {}
    }

    componentDidMount(){
        console.log('Component Did Mount')
    }

    componentWillUnmount(){
        console.log('Component Will Unmount')
    }

    componentDidUpdate(){
        console.log('Component Did Update')
    }

    onChangeVar(){
        number = 100
        console.log(number)
    }

    render(){
        return(
            <div className='px-10'>
            
            <h1>
                Home Page with Class Component
            </h1>
            
            <h5>
                {this.state.number}
            </h5>
            <button className='btn bg-blue-300' onClick={() => this.setState({number: 100})}>
                Update State 
            </button>
            </div>
        )
    }
}

export default Home