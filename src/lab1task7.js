import React from 'react'

class SelectControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            output: '',
            original: [
                {
                    "teacherName": "Jan Nowak",
                    "teacherAge": 36,
                    "active": true,
                    "students": [
                        {
                            "name": "Maciej Janosz",
                            "age": 12
                        },
                        {
                            "name": "Wojciech Kowalski",
                            "age": 15
                        },
                        {
                            "name": "Wioletta PoznaĹska",
                            "age": 1000000
                        }
                    ]
                },
                {
                    "teacherName": "Mariusz Flasinski",
                    "teacherAge": 56,
                    "active": true,
                    "students": [
                        {
                            "name": "Jan Kot",
                            "age": 12
                        },
                        {
                            "name": "Jan Ziobro",
                            "age": 15
                        },
                        {
                            "name": "Adam Malysz",
                            "age": 41
                        }
                    ]
                },
                {
                    "teacherName": "Wojciech Kuzak",
                    "teacherAge": 44,
                    "active": false,
                    "students": [
                        {
                            "name": "Janina Wronska",
                            "age": 22
                        },
                        {
                            "name": "John Dover",
                            "age": 7
                        },
                        {
                            "name": "Emil Petterson",
                            "age": 46
                        }
                    ]
                }
            ]
        };
        this.handleClickAllStudentsName = this.handleClickAllStudentsName.bind(this);
        this.handleClickAllStudentsNameAlphabetically = this.handleClickAllStudentsNameAlphabetically.bind(this);
        this.handleClickOlderAndActiveTeachers = this.handleClickOlderAndActiveTeachers.bind(this);

    }

    handleClickAllStudentsName(ev) {
        this.setState({
                output:
                    <ul>
                        {Object.keys(this.state.original).map(i =>
                            Object.keys(this.state.original[i].students).map(j =>
                                <li>{this.state.original[i].students[j].name}</li>
                            )
                        )
                        }
                    </ul>
            }
        )
    }

    handleClickAllStudentsNameAlphabetically(ev) {
        var arr = [];
        Object.keys(this.state.original).map(i =>
            Object.keys(this.state.original[i].students).map(j =>
                arr.push(this.state.original[i].students[j].name)
            )
        )
        arr.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        })
        this.setState({
                output: <ul>
                    {arr.map(item => {
                        return <li>{item}</li>;
                    })}
                </ul>
            }
        )
    }

    handleClickOlderAndActiveTeachers(ev) {
        var arr = [];
        Object.keys(this.state.original).map(i =>
            this.state.original[i].active == true ?
                Object.keys(this.state.original[i].students).map(j =>
                    this.state.original[i].students[j].age > 20 ?
                        arr.push(this.state.original[i].students[j].name)
                        : ""
                )
                : ""
        )
        this.setState({
                output: <ul>
                    {arr.map(item => {
                        return <li>{item}</li>;
                    })}
                </ul>
            }
        )
    }

    render() {
        return (
            <div>
                TASK 7 --> {this.state.output}
                <br/>
                <input type="button" onClick={this.handleClickAllStudentsName} value="The list of all students names"/>
                <input type="button" onClick={this.handleClickAllStudentsNameAlphabetically}
                       value="The list of all students names sorted alphabetically"/>
                <input type="button" onClick={this.handleClickOlderAndActiveTeachers}
                       value="The list of all students older than 20 but only from active teachers"/>

            </div>
        );
    }
}

export default SelectControl