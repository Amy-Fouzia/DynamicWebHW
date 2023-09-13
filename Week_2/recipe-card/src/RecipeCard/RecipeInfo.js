import React from 'react'

export default function RecipeInfo(props) {
    const{title, desc} = props
    return (
        <div>
            <div class="head">
                <center>
                    <p>
                        <b class="recipe_title"> {title} </b> <br/>
                        From Banglar Rannaghor <br/>
                        Updated: Mar 28, 2022
                    </p>
                </center>
            </div>
            <hr/>
            <p class="desc">{desc}</p>
        </div>
    )
}