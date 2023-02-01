const names=['arun','kanisk','asad'];
const message=names.map(c=>`hello ${c}`).join(' ');
var contentNode = document.getElementById("contents");

class Filter extends React.Component{
    render(){
        return(
            <div>This is a place holder issue Filter</div>
        );
    }
}

class TableOfIssue extends React.Component{
    render(){
        return(
            <div>This is a place holder issue Issue Table</div>
        );
    }
}

class AddEntey extends React.Component{
    render(){
        return(
            <div>This is a place holder issue Add Issue</div>
        );
    }
}

class IssueRow extends React.Component{
    render(){
        const borderStyle={border:"1px solid silver",padding:4}
        return(
            <tr>
            <td style={borderStyle}>{this.props.issue_id}</td>
            <td style={borderStyle}>{this.props.issue_title}</td>
            </tr>
           )
    }
}

class IssueTable extends React.Component{
    render(){
        const borderStyle={border:"1px solid silver",padding:4}
        return(
            <table style={{borderCollapse:"collapse"}}>
            <thead>
            <tr>
            <td style={borderStyle}>Id</td>
            <td style={borderStyle}>Title</td>
            </tr>
            </thead>
            <tbody>
<IssueRow issue_id={1} issue_title="Error in console when clicking Add"/>
<IssueRow issue_id={2} issue_title="missing button border on panel"/>
            </tbody>
            </table>
        )
    }
}

class IssueList extends React.Component{
    render(){
        return(
            <div>
                <h1>Issue List Tracker</h1>
            <hr/>
            <tr><Filter/></tr>
            <hr/>
            <IssueTable/>
            <hr/>
            <AddEntey/>
            <hr/>
          
            </div>
        );
    }
}
ReactDOM.render(<IssueList />, contentNode); // Render the component inside