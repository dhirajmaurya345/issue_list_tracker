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
const IssueRow=(props)=>(
            <tr>
             <td>{props.issue.id}</td>
             <td>{props.issue.status}</td>
             <td>{props.issue.owner}</td>
             <td>{props.issue.created.toDateString()}</td>
             <td>{props.issue.effort}</td>
             <td>{props.issue.completionDate?props.issue.completionDate.toDateString():'Not Available'}</td>
             <td>{props.issue.title}</td>
            </tr>
)

function IssueTable(props){
    const issueRow_data=props.issues.map(issue=><IssueRow Key={issue.id} issue={issue}/>);
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
        );
    }

class IssueAdd extends React.Component{
    constructor(){
        super();
        this.handleSubmmit=this.handleSubmmit.bind(this);
    }
  handleSubmmit(e){
        e.preventDefault();
        var form=document.forms.issueAdd;
        this.props.createIssue({
            owner:form.owner.value,
            title:form.title.value,
            statu:'New',
           created:new Date(),
    });
        form.owner.value="";form.title.value="";
       
}
    render(){
        return(
            <dive>
                <form name="issueAdd" onSubmit={this.handleSubmmit}>
                    <input type="text" name="owner" placeholder="Owner"/>
                    <input type="text" name="title" placeholder="Title"/>
                    <button >Add</button>
                </form>
            </dive>
        )
    }
}

class IssueList extends React.Component{
    constructor(){
        super();
        this.state={issues:[]}
        this.createIssue=this.createIssue.bind(this);

    }
    componentDidMount(){
        this.loadData();
    }

loadData(){
   fetch('/api/issues').then(response=>response.json()).them(data=>{}).then(data=>{
    console.log("Total record count: ",data._metadata.total_count);
    data.records.forEach(issue=>{
        issue.created=new Date(issue.created)
        if(issue.completionDate)
        issue.completionDate=new Date(issue.completionDate)
    })
    this.setState({issues:data.records})
   })
        }

    createIssue(newIssue){
    const newIssues=this.state.issues.slice();
    newIssue.id=this.state.issues.length+1;
    newIssues.push(newIssue);
    this.setState({issues:newIssues})
    }

    render(){
        return(
            <div>
            <h1>Issue List Tracker</h1>
            <hr/>
            <IssueTable issues={this.state.issues}/>
            <hr/>
            <IssueAdd createIssue={this.createIssue}/>
            <hr/>
            </div>
        );
    }
}  
ReactDOM.render(<IssueList />, contentNode); // Render the component inside 