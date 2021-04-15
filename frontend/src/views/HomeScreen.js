import React, {useEffect}  from 'react';
import { Link, Redirect} from 'react-router-dom';
import "./css/home.css";
import data from '../data'

export default function HomeScreen() {
    console.log(data.products)
    return(
        <div className="home">
            <div>
            <table className="table_style table">
                <thead>
                <tr>
                  <th>Rank</th>
                  <th>Image</th>
                  <th>User name</th>
                  <th>Biography</th>
                  <th>Followers</th>
                  <th>Rate</th>
                </tr>
                </thead>
                <tbody>
                    {data.products.map((product) => (
                        <tr key={product.id}>
                            <td width= "5%">{product.rank}</td>
                            <td width= "15%" ><img id="image-product-manage" src ={product.image} alt={product.name}/></td>
                             
                            <td width="40%" className="user_name">{product.name}</td>
                        
                            <td> {product.bio}</td>
                            <td width= "15%">{product.followers}</td>
                            <td width="10%"> {product.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>

    );


}