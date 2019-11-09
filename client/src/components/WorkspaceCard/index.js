import React from "react";
import { Label } from "../Form/index";

export function CardBody({imgCol, src, bodyCol, title, description, dimensions, price}) {
    return (
        <div class="card mb-3">
       <div class="row">
            <div class={`col-md-${imgCol}`}>
           <img src={src} class="card-img" alt="..." />
         </div>
         <div class={`col-md-${bodyCol}`}>
           <div class="card-body">
             <h5 class="card-title">{title}</h5>
             <p class="card-text">
               <Label>Description: {description}</Label>
               <Label>Dimensions: {dimensions}</Label>
               <Label>Price: {price}</Label>
             </p>
           </div>
         </div>
       </div>
     </div>


    )
};
