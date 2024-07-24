// Please use pascal casing for variable names
import 'bootstrap/dist/css/bootstrap.min.css';
const ConditionalDisplay = () => { 
    //  const name='Gopi';
     const name='';
     if(name)
            return <h1> Welcome {name}</h1>;
     return <h1> Welcome all</h1>;
     
    const message ='Soc Gen Team';// coding variable and function declaration
    return <h1>This is my message - you are learning React {message}</h1>
};

export default ConditionalDisplay;