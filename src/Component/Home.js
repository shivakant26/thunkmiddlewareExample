import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_Data } from '../Services/Container/Action/action';


const Home = () =>{
    const dispatch = useDispatch();
    const response = useSelector((state)=>state.reducer.data);
    const list = response.products;

      
    const showdata = () =>{
        dispatch(get_Data());
    }
    
    return(
        <div>
            <h1>Home Component</h1>
            <button onClick={showdata}>Show data</button>
            {
                list ?
                <div className='card_Wr'>
                    {
                        list.map((item,i)=>
                        <div className='card' key={i}>
                            <h2>{item.title}</h2>
                            <p><strong>Category : </strong>{item.category}</p>
                            <img src={item.thumbnail}/>
                            <h4>{item.description}</h4>
                            <p className='price'>$ {item.price}/-</p>
                        </div>
                        )
                    }
                </div>
                :
                <div>
                    <p className='error'>Currend No Record Here!...Please Click to Show</p>
                </div>
            }
        </div>
    )
}


export default Home;