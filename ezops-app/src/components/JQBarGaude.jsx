import React from 'react';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';
import JqxDragDrop from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdragdrop';
import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxFileUpload from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload';
import JqxForm from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxform';
import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';



class JQBarGaude extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tooltip: {
                formatFunction(value?: number | string): string {
                    return 'Year: 2016 Price Index:' + value;
                },
                visible: true
            },
            values: [10, 20, 30, 40, 50],
            width: '100%'
        };
    }

    render() {
        return (
            <div>
                <JqxBarGauge
                    width={600} height={600} max={60} colorScheme={'scheme02'}
                    values={this.state.values} tooltip={this.state.tooltip}
                />
                <JqxPasswordInput
                    width={this.state.width} height={"100%"}
                />
                <JqxDragDrop
                    width={this.state.width} height={"100%"}
                />
                <JqxNumberInput
                    width={this.state.width} height={"100%"}
                />
                <JqxFileUpload
                    width={this.state.width} height={"100%"}
                />
                <JqxForm
                    width={this.state.width} height={"100%"}
                />
                <JqxProgressBar
                    width={this.state.width} height={"100%"}
                />
                <JqxMenu
                    width={this.state.width} height={"100%"}
                />
            </div>
        );
    }

}

export default JQBarGaude;