import React from 'react';
import PassengerTable from "./PassengerTable";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import classNames from 'classnames';

class Passengers extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            passengerid:"",
            name:"",
            sex:"",
            passenger_class:""
        };
    }


    getPassengers() {
        const that = this;
        fetch('http://localhost:8080/spring-crm-rest/api/passengers/')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                that.setState({ items: myJson});
            });
    }
    getPassengerById() {
        const that = this;
        let url = 'http://localhost:8080/spring-crm-rest/api/passengers/id/'+that.state.passengerid;
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                let result=[];
                result.push(myJson);
                that.setState({items: result});
            });
    }

    getPassengersByFilter() {
        const that = this;
        let url = 'http://localhost:8080/spring-crm-rest/api/filter/';
        let param = {sex: that.state.sex, name: that.state.name, passenger_class:that.state.passenger_class};
        fetch(url,{
            body: JSON.stringify(param),
            method:"POST",
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                that.setState({items: myJson});
            });
    }


    handleChange = name => event => {
        switch (name) {
            case 'passengerid':
                this.setState({passengerid:event.target.value});
                break;
            case 'name':
                this.setState({name:event.target.value});
                break;
            case 'sex':
                this.setState({sex:event.target.value});
                break;
            case 'passenger_class':
                this.setState({passenger_class:event.target.value});
                break;
            default :

        }
    };

    render() {
        const styles = theme => ({
            button: {
                margin: theme.spacing.unit,
            },
            input: {
                display: 'none',
            },
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing.unit,
                marginRight: theme.spacing.unit,
            },
            dense: {
                marginTop: 16,
            },
            menu: {
                width: 200,
            },
            rightIcon: {
                marginLeft: theme.spacing.unit,
            },
            iconSmall: {
                fontSize: 20,
            },
            margin: {
                margin: theme.spacing.unit,
            },
            cssRoot: {
                color: theme.palette.getContrastText(purple[500]),
                backgroundColor: purple[500],
                '&:hover': {
                    backgroundColor: purple[700],
                },
            },
        });
            return (

                <div>
                    <PassengerTable  key={this.state.items.passengerid} items={this.state.items} />
                    <br></br>
                   < Button variant="contained" color="primary" className={styles.button} onClick={() => { this.getPassengers() }}>
                        Get All Passengers
                    </Button>

                    <form className={styles.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-id"
                            label="Passenger ID"
                            className={styles.textField}
                            value={this.state.passengerid}
                            onChange={this.handleChange('passengerid')}
                            margin="normal"
                            variant="outlined"
                        /> &nbsp;
                        <TextField
                        id="outlined-name"
                        label="Passenger Name"
                        className={styles.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                        /> &nbsp;
                        <TextField
                            id="outlined-sex"
                            label="Sex"
                            className={styles.textField}
                            value={this.state.sex}
                            onChange={this.handleChange('sex')}
                            margin="normal"
                            variant="outlined"
                        /> &nbsp;
                        <TextField
                            id="outlined-class"
                            label="Passenger Class"
                            className={styles.textField}
                            value={this.state.passenger_class}
                            onChange={this.handleChange('passenger_class')}
                            margin="normal"
                            variant="outlined"
                        /> &nbsp;
                        <br></br>
                        < Button variant="contained" color="secondary" className={classNames(styles.margin, styles.cssRoot,styles.button)} onClick={() => { this.getPassengerById() }}>
                            Get Passenger By ID
                        </Button> &nbsp;
                        < Button variant="contained" color="secondary" className={styles.button} onClick={() => { this.getPassengersByFilter() }}>
                            Get Passengers By Filter
                        </Button>
                    </form>
                </div>

            );
    }
}

export default Passengers;