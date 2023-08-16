import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component
{
   constructor()
   {
    super();
    this.state = 
    {
      monsterZ : [],
      searchField : ''
    };
   }

   componentDidMount()
   {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json())
    .then( (users) => this.setState(
       () => { return { monsterZ : users }},
       () => { console.log(this.state)}

    ))
   }
  
   onSearchChange = (event) => 
    {console.log(event.target.value) 

     const searchField = event.target.value.toLocaleLowerCase();
       
      this.setState( () => {
             return { searchField}
      });
   
   }
   

  render()
  {
      const {monsterZ , searchField} = this.state; //variable # this.state
      const {onSearchChange} = this; //function

        // to convert to lowercase
        const filteredMonsters = monsterZ.filter(
        (monsterfil) => {return monsterfil.name.toLocaleLowerCase().includes(searchField);
        })

    return(  
        <div className='App'>
           <h1 className='app-title'> Beast Book</h1>

           {/* input box starting*/}
            {/* <input 
            className = 'searchbox'  
            type = 'search' 
            placeholder='search monsters' 
            onChange={onSearchChange}
            /> */}
          {/* input box ending*/}

            {/* {filteredMonsters.map( (monstermap) => 
               { 
                  return(
                  <div key={monstermap.id}>
                      <h1> {monstermap.name}</h1>
                    </div>
                  )
               }
            )} */}
          <SearchBox className='monster-search-box' onChangeHandler = {onSearchChange} placeholder ='Search Your Beasts'/>
            <CardList monsterZ = {filteredMonsters}/>
        </div>
    )
  }


}

export default App;
// return(  
//   <div className='App'>
//      {/* input box starting*/}
//       <input 
//       className = 'searchbox'  
//       type = 'search' 
//       placeholder='search monster' 
//       onChange={(event) => 
//          {console.log(event.target.value) 

//           // to convert to lowercase
//           const searchstring = event.target.value.toLocaleLowerCase();
//            const filteredMonsters = this.state.monsterZ.filter(
//              (monsterfil) => {return monsterfil.name.toLocaleLowerCase().includes(searchstring); }
//            )
            
//            this.setState( () => {
//                   return { monsterZ: filteredMonsters}
//            })
        
//         }}
//       />
//     {/* input box ending*/}

//       {this.state.monsterZ.map( (monstermap) => 
//          { 
//             return(
//             <div key={monstermap.id}>
//                 <h1> {monstermap.name}</h1>
//               </div>
//             )
//          }
//       )}
//   </div>