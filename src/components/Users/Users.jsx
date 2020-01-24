import React from "react";
import styles from "./users.module.css";


const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                img: 'https://marieclaire.ua/wp-content/uploads/2018/06/34477413_246729962574368_8521348443933769728_n-768x960.jpg',
                followed: true,
                name: 'Alex',
                status: 'I`m a programmer',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                img: 'https://marieclaire.ua/wp-content/uploads/2018/06/34477413_246729962574368_8521348443933769728_n-768x960.jpg',
                followed: false,
                name: 'Sasha',
                status: 'I`m a programmer ',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                img: 'https://marieclaire.ua/wp-content/uploads/2018/06/34477413_246729962574368_8521348443933769728_n-768x960.jpg',
                followed: true,
                name: 'Alexander',
                status: 'I`m a programmer too',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])
    };
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.img} className={styles.avatar}/>
                        </div>
                        <div>

                            {
                                u.followed
                                ? <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                                : <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                            }

                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div><div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.country}</div><div>{u.location.city}</div>
                        </div>
                    </div>


                </div>)
            }


        </div>
    )
}
export default Users;