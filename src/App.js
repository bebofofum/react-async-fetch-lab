import React from 'react';

class App extends React.Component {


    componentDidMount() {
        const url = "http://api.open-notify.org/astros.json"
        fetch(url) 
            .then(response => response.json())
            .then(people => people.map(person => console.log(person)))

    }

    render() {

    }


}

export default App