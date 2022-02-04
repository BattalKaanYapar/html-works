import {useParams} from 'react-router-dom'
import userList from '../data/userList'
const User = () =>{

    const {id}=useParams()
    return (
        <div>
            <p>User{id}</p>
            <div>
                {
                    userList.map(user=>{
                        if(user.id==id){
                            return(
                                <div key={user.id}>
                                    {
                                        `${user.name} ${user.surName}`
                                    }
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default User;