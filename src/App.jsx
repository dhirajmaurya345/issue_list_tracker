//const names=['arun','kanisk','asad'];
//const message=names.map(c=>`hello ${c}`).join(' ');
const issues = [
    {
    id: 1, status: 'Open', owner: 'Ravan',
    created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
    title: 'Error in console when clicking Add',
    },
    {
    id: 2, status: 'Assigned', owner: 'Eddie',
    created: new Date('2016-08-16'), effort: 14,
   completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel',
    },
   ];
   
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
        const issue=this.props.issue;
        return(
            <tr>
             <td>{issue.id}</td>
             <td>{issue.status}</td>
             <td>{issue.owner}</td>
             <td>{issue.created.toDateString()}</td>
             <td>{issue.effort}</td>
             <td>{issue.completionDate?issue.completionDate.toDateString():'Not Available'}</td>
             <td>{issue.title}</td>
            </tr>
           )
    }
}

class IssueTable extends React.Component{

    render(){
        const issueRow_data=this.props.issues.map(issue=><IssueRow Key={issue.id} issue={issue}/>);
        return(
            <table className="bordered-table">
            <thead>
            <tr>
             <th>ID</th>
             <th>Status</th>
             <th>Owner</th>
             <th>Creater</th>
             <th>Effort</th>
             <th>Completion Date</th>
             <th>Title</th>
            </tr>
            </thead>
            <tbody>
           {issueRow_data}
            </tbody>
            </table>
        )
    }
}

/*
class Wrapper extends React.Component{
    render(){
        const borderedStyle={border:"1px solid silver",padding:4};
        return(
            <div style={borderedStyle}>{this.props.children}</div>
        )

    }
}
*/

class IssueList extends React.Component{
    constructor(){
        super();
        this.state={issues:issues}
        setTimeout(this.creatTestIssue.bind(this),2000);
    }
    creatIssue(newIssue){
    const newIssues=this.state.issues.slice();
    newIssue.id=this.state.issues.length+1;
    newIssues.push(newIssue);
    this.setState({issues:newIssues})
    }
    
    creatTestIssue(){
    this.creatIssue({status: 'New', owner: 'Pieta', created: new Date(),
    title: 'Completion date should be optional',});
    }
    
    render(){
        return(
            <div>
                <h1>Issue List Tracker</h1>
            <hr/>
            <tr><Filter/></tr>
            <IssueTable issues={this.state.issues}/>
            <AddEntey/>
            <hr/>
          
            </div>
        );
    }
}
ReactDOM.render(<IssueList />, contentNode); // Render the component inside