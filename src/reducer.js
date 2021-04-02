export const initialState ={
    user:null,
    password :null,
    index :0,
    triggerDiscussion : false,
    discussions :[
        {
            id :1,
            text : "This is discussion 1",
            createdBy : "shaik",
            createdTime : new Date().toLocaleString(),
            replies :2,
            repliesInfo :[
                {id :1,
                text : "This is reply 1",
                createdBy : "shaik",
                createdTime : new Date().toLocaleString()
            },
            {id :2,
                text : "This is reply 2",
                createdBy : "abhinay",
                createdTime : new Date().toLocaleString()
            }
        ]
        },
        {
            id :2,
            text : "This is discussion 2",
            createdBy : "abhinay",
            createdTime : new Date().toLocaleString(),
            replies :0,
            repliesInfo : []
        }
    ]
    /*token:"BQBYpCJLFZfq3Ah-RXBoEAbMAW8VoqluVH6eqW_yT9VlEaHDuplHDyUARkbJzkuvEMHl2h7iT1sVhML0bQPT-ZJkxgV-a8nb7CdwDv81kR3GMP_kN8WzrR3eFz005oyL5WhaYdA5_MBfBW8GsO3eGUzU56-Slj3GQrc2A-4JCHBFwqqF" */
}

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user : action.user
            }
        case 'SET_DISCUSSION':
            return{
                ...state,
                discussions: action.discussions
            }
        case 'TRIGGER_DISCUSSION':
                return{
                    ...state,
                    triggerDiscussion: action.triggerDiscussion,
                    index : action.index
                }
        case 'SET_REPLY':
                    return{
                        ...state,
                        discussions:action.discussions
                    }
        
        default:
            return state;
    }

}
export default reducer;