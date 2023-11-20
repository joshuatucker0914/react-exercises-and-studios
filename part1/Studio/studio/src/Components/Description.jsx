import React, {Component} from "react";
import styles from './Description.module.css';

const authorName = "Beth Pierce"
const authorPhoto = "https://secure.gravatar.com/avatar/effc1f751c8206394fb8b67f8c481c0e?s=500&d=mm&r=g"
const authorLink = "https://www.smalltownwoman.com/classic-club-sandwich/"

const RecipeAuthor = () =>{
    return(
    <div className={styles.recipeAuthorBlock}>
        <div>
        <img src={authorPhoto} alt="Image of club sandwich" className={styles.imageUpdates}></img>
        </div>
        <h3>{authorName}</h3>
        <a href= {authorLink}>Link to Blog</a>
    </div>
    )
};

class RecipeDescription extends Component {
    render(){
        return(
            <div>
                <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
                <RecipeAuthor/>
                </div>
            </div>
        );
    }
};

export default RecipeDescription;