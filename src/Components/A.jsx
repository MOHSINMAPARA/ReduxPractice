import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { Data } from '../Redux/actions/action'
import { Link } from 'react-router-dom'
import axios from 'axios'

function A() {
    const [users, setUsers] = useState([])
    const dispatch = useDispatch()

     useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                setUsers(res.data) 
                // console.log(setUsers)             
            })
            .catch(err => alert(err))
    }, [])

    dispatch(Data(users))

    return (
        <div>
<Link to='/B'> Goto Link B </Link>
            {
                users.map((user, index) => {
                    return (
                        <div>
                            {/* {console.log(user)} */}
                            {user.title}
                        </div>

                    )

                })
            }
        </div>
    )
}

export default A