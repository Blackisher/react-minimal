import React from 'react'

class SelectControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 0,
            b: 1,
            c: 2,
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
        this.handleOnChangeA = this.handleOnChangeA.bind(this);
        this.handleOnChangeB = this.handleOnChangeB.bind(this);

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

    handleOnChangeA(ev) {
        const re = /^[0-9\b]+$/;
        if (re.test(ev.target.value)) {
            this.setState({
                a: ev.target.value
            })
            console.log("Value changed a: " + ev.target.value)
        }

    }
    /* possible solution:
    handleOnChangeB(ev) {
        const re = /^[0-9\b]+$/;
        if (re.test(ev.target.value)) {
            this.setState({
                b: ev.target.value
            })
            console.log("Value changed b: " + ev.target.value)
        }
    }
    extended below:
    */
    handleOnChangeB(ev) {
        const re = /^[0-9\b]+$/;
        if (re.test(ev.target.value)) {
            if (ev.target.name == "b") {
                this.setState({
                    b: ev.target.value
                })
            } else if (ev.target.name == "c") {
                this.setState({
                    c: ev.target.value
                })
            }
            console.log("Value changed " + ev.target.name + ": " + ev.target.value)
        }
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

                <h1>LAB 2</h1>
                <h4>Lab2Ex1 Create 2 input component allowing to input only numbers. Let’s call the numbers a and b. You will need to
                    keep the value of the inputs in the state of your app. Changing the value in the input should work and
                    display in the console “Value changed a: 12” (“a” can be “a” or “b” and “12” is the new value of “a” in the
                    example).</h4>
                a = {this.state.output}. Component for a ==> <input type="number" onChange={this.handleOnChangeA} value={this.state.a}/>
                <br/>
                b = {this.state.output}. Component for b ==> <input type="number" onChange={this.handleOnChangeB} value={this.state.b} name={"b"}/>
                <br/>
                In case there should be only one handler... connecting b and c to the same handler - discover by name
                <br/>
                c = {this.state.output}. Component for c ==> <input type="number" onChange={this.handleOnChangeB} value={this.state.c} name={"c"}/>
                <br/>
                In addition those fields (a,b,c) don't accept "e" and dot.
                <br/>

            </div>
        );
    }
}

export default SelectControl