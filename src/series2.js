import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add( faHeart)
    const Series2 = () => {
        const counter = useSelector (state => state.counter );
        const isLogged = useSelector (state => state.isLogged);
        const dispatch = useDispatch ();
    return (
        <div>
            <h1 class="nm-collections-row-name">New Release : </h1>
      <div className="pop">      <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link" href="https://i.ytimg.com/an_webp/lnPxHu6Sx5s/mqdefault_6s.webp?du=3000&sqp=COLa_PkF&rs=AOn4CLD3pbDJmo90JG5vnDzDIqdaCp2pTA" data-ui="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://m.media-amazon.com/images/M/MV5BZDE2ZjAxMTEtNzc5MS00ZWFhLTk1M2UtMzQ1ZDhkM2VmMzRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" data-title-id="81028361" alt="Dachra"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               Anelka : Misunderstood
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=6losYoR9Ytw" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://m.media-amazon.com/images/M/MV5BMmNmOTFmMTQtOTFjMy00NzM4LThiMTctMzJjZGUzOGE4Mzk5XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg" data-title-id="81028361" alt="Dark"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               School Life
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=bxWPPrDpqr8" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://upload.wikimedia.org/wikipedia/en/2/23/Poster_for_Fatal_Affair.png" data-title-id="81028361" alt=" 13 Reasons why"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               Fatal Affair
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://youtu.be/FxQ7Y3mgfec" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="data:image/jpeg;base64,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" data-title-id="81028361" alt="Dark"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               ADÚ 
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=VyBkXXK5wgw" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://m.media-amazon.com/images/M/MV5BZmUxMWVhMDEtNTI5ZS00NjNjLWIzY2ItYTFiYThhYWNmYWY3XkEyXkFqcGdeQXVyOTE4ODkzMzA@._V1_UY1200_CR113,0,630,1200_AL_.jpg" data-title-id="81028361" alt="Dark"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
                Double World
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=lD41XdWcmbY" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://upload.wikimedia.org/wikipedia/en/b/b6/Shaft_%282019%29_film_poster.png" data-title-id="81028361" alt="Dark"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               SHAFT               </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                
                
               
                </div>
        </div>
    )
}
export default Series2