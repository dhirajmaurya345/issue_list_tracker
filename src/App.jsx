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

class IssueList extends React.Component{
    render(){
        return(
            <div>
                <h1>Issue List Tracker</h1>
            <hr/>
            <Filter/>
            <hr/>
            <TableOfIssue/>
            <hr/>
            <AddEntey/>
            <hr/>
            </div>
        );
    }
}
ReactDOM.render(<IssueList />, contentNode); // Render the component inside