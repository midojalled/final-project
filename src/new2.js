import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add( faHeart)
const New = () => {
    const counter = useSelector (state => state.counter );
    const isLogged = useSelector (state => state.isLogged);
    const dispatch = useDispatch ();
    return (
        <div>
          
      <div className="pop">      <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link" href="https://www.youtube.com/watch?v=YLE85olJjp8" data-ui="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                
                <span class="nm-collections-title-name">
               6 UNDERGROUND
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=OVBjPpUlQrE" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://upload.wikimedia.org/wikipedia/en/4/41/Mowgli_Legend_of_the_Jungle_poster.jpg" data-title-id="81028361" alt="Dark"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               Mowgli
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=S82RlFIvcPE" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://m.media-amazon.com/images/M/MV5BN2M5MzE4NTMtMDNmOC00ZDQyLTkwYjUtZWY5ZDQ1MjYwNDZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR113,0,630,1200_AL_.jpg" data-title-id="81028361" alt=" 13 Reasons why"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               Lost Bullets
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=d4JnshyKOOQ" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://occ-0-299-300.1.nflxso.net/art/8ed14/31968b98d93b4fff906a027edc1edbb6c1a8ed14.jpg" data-title-id="81028361" alt="Dark"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               The Crew
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=KBiOF3y1W0Y" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://upload.wikimedia.org/wikipedia/en/7/76/Drive_Netflix_Film.jpg" data-title-id="81028361" alt="Dark"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               Drive
                </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                <li class="nm-content-horizontal-row-item" role="menuitem">
                <a class="nm-collections-title nm-collections-link"  href="https://www.youtube.com/watch?v=8hq28cZ938E" data-uia="collections-title" target="_blank">
                <img class="nm-collections-title-img" src="https://upload.wikimedia.org/wikipedia/en/b/b4/Sand_Castle_2017_poster.jpg" data-title-id="81028361" alt="Dark"/><span class="nm-collections-title-img placeholder">
                </span>
                <span class="nm-collections-title-name">
               Sand Castle              </span>
                </a>
                <center><a onClick={()=> dispatch(increment())}><FontAwesomeIcon  />
    <FontAwesomeIcon className="love" icon="heart" /> </a></center>
                </li>
                
                
               
                </div>
        
               
        </div>
    )
}
export default New