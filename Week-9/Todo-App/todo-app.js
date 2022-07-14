class Todo extends React.Component{
    constructor(props){
        super(props)
        this.handelRemove = this.handelRemove.bind(this)
        this.handelPick = this.handelPick.bind(this)
        this.addOption = this.addOption.bind(this)
        this.removeOption = this.removeOption.bind(this)
        this.state = {
            options : props.options
        }
    }
        componentDidMount(){
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        if(options)
        this.setState(()=>({options}))
    }

    componentDidUpdate(prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }

    handelRemove(){
        this.setState(()=> ({options:[]}))
    }
    removeOption(optionToRemove){
        this.setState((prevState)=>({
            options : prevState.options.filter((option)=>{
                return optionToRemove !== option
            })
        }))
    }
    handelPick(){
            const randomNumber = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomNumber]
            alert(option)            
}
    addOption(option){
        if(!option){
            return 'add option'
        }
        else if (this.state.options.indexOf(option)>-1){
            return `this option already exists`
        }

        this.setState((prevState)=> ({options : prevState.options.concat(option)}))

    }

    render(){
        const subtitle = 'Put your life into computers hands'
        const title = 'Todo-app'

        return <div>
        <Header 
        subtitle={subtitle}
        title ={title}    
        />
        <Action 
        hasOption={this.state.options.length>0}
        handelPick={this.handelPick}
        />
        <Options 
        options={this.state.options}
        handelRemove = {this.handelRemove}
        removeOption={this.removeOption}    
        />
        <AddOptions addOption={this.addOption}/>
        </div>
    }
}

const Header = (props) =>{
    return(
        <div>
        <h1>{props.title}</h1>
        {props.subtitle&&<h2>{props.subtitle}</h2>}                         
        </div>
    )
}
Todo.defaultProps = {
    options: []
  };
  
const Action =(props)=>{
    return (
        <div>
        <button 
        onClick={props.handelPick}
        disabled={!props.hasOption} 
        >
        'what should i  do?'</button>
        </div> 
    )

}

const Options=(props)=>{
    return(
        <div>  
        <button 
        onClick={props.handelRemove}>Remove All</button>
          {
            props.options.map(option=> <Option 
            key={option}
            optionText={option}
            removeOption={props.removeOption}    
            />)
            }
          
        </div>
    )
}

const Option=(props)=>{
    return (
        <ul>
            <li>{props.optionText}<button 
            onClick={(e)=>{
                props.removeOption(props.optionText)
            }}>Remove</button>  </li>
            </ul>
        
    )
}

class AddOptions extends React.Component{
    constructor(props){
        super(props)
        this.addOption = this.addOption.bind(this)
        this.state = {
                error : undefined
            }
    }
    addOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        e.target.elements.option.value=''
        const error = this.props.addOption(option)
        this.setState(()=>({error}))
    }
    render(){
        return <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input placeholder='add your todos here' name="option"/>
            <input type="submit" value="Add Todos"/>
            </form>
          
        </div>
    }
}
const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<Todo/>)
