import React  from 'react'
import DiscussionItem from './DiscussionItem'
import {useDataLayerValue} from "./DataLayer"
function Discussion() {
    const [{discussions},dispatch] = useDataLayerValue();
   

    
    return (
        <div>
            {
                     discussions && discussions.map(({text,createdBy,createdTime,replies,id})=>
                        <DiscussionItem key ={id} id ={id} text ={text}  createdBy ={createdBy} createdTime = {createdTime} replies ={replies} />
                     )
               
                 }
            
            
        </div>
    )
}

export default Discussion
