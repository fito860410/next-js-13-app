'use client'

import { useState } from "react"

export function LikeButton({id}){

    const [liked, setLike] = useState(false)

    return (
        <button  onClick={ () => setLike(!liked) }>
            {liked ? '♥' : '(♥)'}
        </button>
    )
}